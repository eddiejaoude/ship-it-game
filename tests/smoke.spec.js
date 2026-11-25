// @ts-check
const base = require('@playwright/test');
const { expect } = base;

// Every test fails if the page throws or logs a console error, and the errors
// are reported even when another assertion fails first.
const test = base.test.extend({
  pageErrors: [
    async ({ page }, use) => {
      /** @type {string[]} */
      const errors = [];
      page.on('pageerror', (err) => errors.push(`pageerror: ${err.message}`));
      page.on('console', (msg) => {
        if (msg.type() === 'error') errors.push(`console.error: ${msg.text()}`);
      });
      await use(errors);
      expect(errors, 'page errors').toEqual([]);
    },
    { auto: true },
  ],
});

const gameState = (page) =>
  page.evaluate(() => {
    const { G } = /** @type {any} */ (window).SHIPIT;
    return { state: G.state, t: G.t, dist: G.dist };
  });

test('title screen loads', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Ship It!/);
  await expect(page.locator('#ov h1')).toHaveText('SHIP IT!');
  await expect(page.locator('[data-a="start"]')).toBeVisible();
  await expect(page.locator('canvas')).toBeVisible();

  // The render loop is running: background animation time advances on the title screen.
  const before = await gameState(page);
  expect(before.state).toBe('title');
  await expect.poll(async () => (await gameState(page)).t).toBeGreaterThan(before.t);
});

test('starting a run plays', async ({ page }) => {
  await page.goto('/');

  await page.locator('[data-a="start"]').click();
  await expect(page.locator('#ov')).toBeHidden();
  expect((await gameState(page)).state).toBe('play');

  // Steer a bit so movement, shooting, spawning and collisions all run.
  await page.keyboard.down('ArrowLeft');
  await page.waitForTimeout(1000);
  await page.keyboard.up('ArrowLeft');
  await page.keyboard.down('ArrowRight');
  await page.waitForTimeout(1000);
  await page.keyboard.up('ArrowRight');

  // The run actually progresses down the lane.
  await expect.poll(async () => (await gameState(page)).dist, { timeout: 5000 }).toBeGreaterThan(5);
});
