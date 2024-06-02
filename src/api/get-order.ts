import { api } from '@/lib/axios'

export interface Order {
  createdAt: string
  status: 'pending' | 'processing' | 'delivering' | 'delivered' | 'canceled'
  orderId: string
  total: number
  customName: string
}

interface Meta {
  pageIndex: number
  perPage: number
  totalCount: number
}

export interface GetOrdersResponse {
  orders: Order[]
  meta: Meta
}

export async function getOrders() {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: { pageIndex: 0 },
  })

  return response.data
}
