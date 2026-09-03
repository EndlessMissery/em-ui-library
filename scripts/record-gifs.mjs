// One-off recording script — not part of the shipped package or CI.
// Records short interaction clips straight out of the built Storybook
// (served at BASE_URL) using Playwright, then scripts/gif-from-video.sh
// converts the .webm output to .gif via ffmpeg.
import { chromium } from 'playwright';
import { mkdirSync, renameSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const BASE_URL = process.env.BASE_URL ?? 'http://localhost:4174';
const OUT_DIR = 'docs/media/raw';
mkdirSync(OUT_DIR, { recursive: true });

const clips = [
  {
    name: 'modal',
    storyId: 'molecules-modal--default',
    async run(page) {
      await page.getByRole('button', { name: 'Open modal' }).click();
      await page.waitForTimeout(700);
      await page.getByRole('dialog').waitFor({ state: 'visible' });
      await page.waitForTimeout(600);
      await page.keyboard.press('Escape');
      await page.waitForTimeout(500);
    },
  },
  {
    name: 'tabs',
    storyId: 'molecules-tabs--default',
    async run(page) {
      await page.waitForTimeout(400);
      await page.getByRole('tab', { name: 'Billing' }).click();
      await page.waitForTimeout(700);
      await page.getByRole('tab', { name: 'Notifications' }).click();
      await page.waitForTimeout(700);
      await page.getByRole('tab', { name: 'Profile' }).click();
      await page.waitForTimeout(500);
    },
  },
  {
    name: 'accordion',
    storyId: 'molecules-accordion--default',
    async run(page) {
      await page.waitForTimeout(400);
      await page.getByRole('button', { name: 'What is em-ui-library?' }).click();
      await page.waitForTimeout(700);
      await page.getByRole('button', { name: 'Is it accessible?' }).click();
      await page.waitForTimeout(900);
    },
  },
  {
    name: 'tooltip',
    storyId: 'molecules-tooltip--default',
    async run(page) {
      await page.waitForTimeout(400);
      await page.getByRole('button', { name: 'Delete' }).hover();
      await page.getByRole('tooltip').waitFor({ state: 'visible' });
      await page.waitForTimeout(1200);
      await page.mouse.move(10, 10);
      await page.waitForTimeout(400);
    },
  },
  {
    name: 'notification',
    storyId: 'molecules-notification--interactive',
    async run(page) {
      await page.waitForTimeout(400);
      const closeButtons = page.getByRole('button', { name: 'Close' });
      for (let i = 0; i < 4; i++) {
        await closeButtons.first().click();
        await page.waitForTimeout(350);
      }
      await page.waitForTimeout(400);
    },
  },
  {
    name: 'login',
    storyId: 'organisms-login--default',
    async run(page) {
      await page.waitForTimeout(300);
      await page.getByLabel('Username').pressSequentially('admin', { delay: 70 });
      await page.getByLabel('Password').pressSequentially('1234', { delay: 70 });
      await page.waitForTimeout(300);
      await page.getByRole('button', { name: 'Log in' }).click();
      await page.waitForTimeout(500);
    },
  },
];

const only = process.argv.slice(2);
const selected = only.length > 0 ? clips.filter(c => only.includes(c.name)) : clips;

const browser = await chromium.launch();

for (const clip of selected) {
  const clipDir = join(OUT_DIR, clip.name);
  mkdirSync(clipDir, { recursive: true });

  const context = await browser.newContext({
    viewport: { width: 720, height: 480 },
    recordVideo: { dir: clipDir, size: { width: 720, height: 480 } },
  });
  const page = await context.newPage();
  await page.goto(`${BASE_URL}/iframe.html?id=${clip.storyId}&viewMode=story`);
  await page.waitForLoadState('networkidle');

  await clip.run(page);

  await context.close();

  const [file] = readdirSync(clipDir).filter(f => f.endsWith('.webm'));
  renameSync(join(clipDir, file), join(OUT_DIR, `${clip.name}.webm`));
  console.log(`recorded ${clip.name}.webm`);
}

await browser.close();
