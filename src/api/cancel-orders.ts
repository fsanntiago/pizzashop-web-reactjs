import { api } from '@/lib/axios'

export interface cancelOrdersParams {
  orderId: string
}

export async function cancelOrders({ orderId }: cancelOrdersParams) {
  await api.patch(`/orders/${orderId}/cancel`)
}
