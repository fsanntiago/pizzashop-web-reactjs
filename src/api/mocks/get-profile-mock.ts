import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      user: {
        id: 'custom-user-id',
        name: 'John',
        email: 'john@example.com',
        phone: '999999999',
        role: 'manager',
        createdAt: new Date(),
        updatedAt: null,
      },
    })
  },
)
