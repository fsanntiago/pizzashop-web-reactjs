import { api } from '@/lib/axios'

export interface PopularProduct {
  product: string
  amount: number
}

export interface PopularProductsResponse {
  popularProducts: PopularProduct[]
}

export async function getPopularProducts() {
  const response = await api.get<PopularProductsResponse>(
    '/metrics/popular-products',
  )

  return response.data
}
