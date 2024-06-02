import { cn } from '@/lib/utils'

type OrderStatus =
  | 'pending'
  | 'processing'
  | 'delivering'
  | 'delivered'
  | 'canceled'

interface OrderStatusProps {
  status: OrderStatus
}

const orderStatusMap: Record<OrderStatus, string> = {
  pending: 'Pendente',
  canceled: 'Cancelado',
  delivered: 'Entregue',
  delivering: 'Em entrega',
  processing: 'Em preparo',
}

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={cn(
          status === 'pending' && 'bg-slate-400',
          status === 'canceled' && 'bg-rose-500',
          status === 'delivered' && 'bg-emerald-500',
          ['delivering', 'processing'].includes(status) && 'bg-amber-500',
          'h-2 w-2 rounded-full',
        )}
      ></span>
      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}
