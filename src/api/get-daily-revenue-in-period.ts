import { api } from '@/lib/axios'

export interface GetDailyRevenueInPeriodQuery {
  from?: Date
  to?: Date
}

export interface orderedRevenuePerDay {
  date: string
  revenue: number
}

export interface GetDailyRevenueInPeriodResponse {
  orderedRevenuePerDay: orderedRevenuePerDay[]
}

export async function getDailyRevenueInPeriod({
  to,
  from,
}: GetDailyRevenueInPeriodQuery) {
  const response = await api.get<GetDailyRevenueInPeriodResponse>(
    '/metrics/daily-revenue-in-period',
    {
      params: {
        to,
        from,
      },
    },
  )

  return response.data
}
