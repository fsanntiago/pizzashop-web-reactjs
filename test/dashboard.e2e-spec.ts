import { expect, test } from '@playwright/test'

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('102')).toBeVisible()
  await expect(page.getByText('+12% em relação a ontem')).toBeVisible()
})
test('display month orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('534')).toBeVisible()
  await expect(page.getByText('-5% relação ao mês passado')).toBeVisible()
})
test('display month canceled orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('143')).toBeVisible()
  await expect(page.getByText('+4% relação ao mês passado')).toBeVisible()
})
test('display month revenue metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('R$ 100,06')).toBeVisible()
  await expect(page.getByText('-9% relação ao mês passado')).toBeVisible()
})
