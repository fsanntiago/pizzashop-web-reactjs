import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    managedRestaurant: {
      name: 'John',
      id: 'custom-restaurant-id',
      description: 'Custom restaurant description',
      createdAt: new Date(),
      updatedAt: null,
      managerId: 'custom-user-id',
    },
  })
})
