import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-revenue-in-period', () => {
  return HttpResponse.json({
    orderedRevenuePerDay: [
      { date: '01/06/2024', revenue: 7900 },
      { date: '02/06/2024', revenue: 5430 },
      { date: '03/06/2024', revenue: 2130 },
      { date: '04/06/2024', revenue: 5400 },
      { date: '05/06/2024', revenue: 4100 },
      { date: '06/06/2024', revenue: 3100 },
      { date: '07/06/2024', revenue: 9200 },
    ],
  })
})
