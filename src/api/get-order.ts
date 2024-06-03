import { api } from '@/lib/axios'

export interface GetOrdersQuery {
  pageIndex?: number | null
  orderId?: string | null
  customerName?: string | null
  status?: string | null
}

export interface Order {
  createdAt: string
  status: 'pending' | 'processing' | 'delivering' | 'delivered' | 'canceled'
  orderId: string
  total: number
  customerName: string
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

export async function getOrders({
  pageIndex,
  orderId,
  customerName,
  status,
}: GetOrdersQuery) {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: { pageIndex, orderId, customerName, status },
  })

  return response.data
}
