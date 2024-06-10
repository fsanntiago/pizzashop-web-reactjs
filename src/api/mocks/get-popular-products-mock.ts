import { http, HttpResponse } from 'msw'

import { PopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  PopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json({
    popularProducts: [
      { amount: 41, product: 'Pizza 01' },
      { amount: 57, product: 'Pizza 02' },
      { amount: 19, product: 'Pizza 03' },
      { amount: 51, product: 'Pizza 04' },
      { amount: 23, product: 'Pizza 05' },
    ],
  })
})
