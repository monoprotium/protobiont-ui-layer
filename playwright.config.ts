import { defineConfig, devices } from '@playwright/test';
import path from 'path';


export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: 'html',
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        trace: 'on-first-retry',
        // @ts-ignore
        chromium: {
            executablePath: path.join(process.env.PLAYWRIGHT_BROWSERS_PATH || '', 'chromium-1140/chrome-linux/chrome')
        }
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
});