import { api } from '@/lib/axios'

export interface GetOrdersQuery {
  pageIndex?: number | null
}

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

export async function getOrders({ pageIndex }: GetOrdersQuery) {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: { pageIndex },
  })

  return response.data
}
