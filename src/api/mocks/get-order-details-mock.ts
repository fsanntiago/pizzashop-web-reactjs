import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    order: {
      id: params.orderId,
      customer: {
        name: 'John',
        email: 'john@example.com',
        phone: '999999999',
      },
      status: 'pending',
      createdAt: new Date().toISOString(),
      totalInCents: 5200,
      items: [
        {
          id: 'order-item-1',
          priceInCents: 1200,
          product: {
            name: 'Pizza de Frango',
          },
          quantity: 1,
        },
        {
          id: 'order-item-2',
          priceInCents: 2000,
          product: {
            name: 'Pizza de Calabresa',
          },
          quantity: 2,
        },
      ],
    },
  })
})
