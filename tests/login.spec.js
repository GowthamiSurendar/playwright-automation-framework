import { test, expect } from '@playwright/test';
import Login from '../pages/LoginPage';

test.only('logintest', async ({ page }) => {
	await page.goto('https://www.saucedemo.com');
	await page.pause();
	const login = new Login(page);
	await login.login('standard_user', 'secret_sauce');
	await expect(page).toHaveURL(/inventory/);
	await page.locator('.inventory_item button').nth(2).click();
	await page.click('.inventory_item button');
	await page.click('.shopping_cart_link');
	await expect(page.locator('.cart_item')).toHaveCount(2);
});
