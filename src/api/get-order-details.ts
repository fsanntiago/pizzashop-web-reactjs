import { api } from '@/lib/axios'

export interface GetOrderDetailsParams {
  orderId: string
}

interface OrderItem {
  id: string
  priceInCents: number
  quantity: number
  product: {
    name: string
  }
}

interface OrderCustomer {
  name: string
  phone: string | null
  email: string
}

export interface OrderDetail {
  status: 'pending' | 'processing' | 'delivering' | 'delivered' | 'canceled'
  id: string
  createdAt: string
  totalInCents: number
  customer: OrderCustomer
  items: OrderItem[]
}

export interface GetOrderDetailsResponse {
  order: OrderDetail
}

export async function getOrderDetails({ orderId }: GetOrderDetailsParams) {
  const response = await api.get<GetOrderDetailsResponse>(`/orders/${orderId}`)

  return response.data
}
