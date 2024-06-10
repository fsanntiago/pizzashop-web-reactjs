import { http, HttpResponse } from 'msw'

import { GetMonthRevenueResponse } from '../get-month-revenue'

export const getMonthRevenueAmountMock = http.get<
  never,
  never,
  GetMonthRevenueResponse
>('/metrics/month-revenue', () => {
  return HttpResponse.json({
    revenue: 10006,
    diffFromLastMonth: -9,
  })
})
