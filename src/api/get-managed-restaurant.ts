import { api } from '@/lib/axios'

interface ManagedRestaurant {
  name: string
  description: string | null
  id: string
  createdAt: Date
  updatedAt: Date
  managerId: string | null
}

interface GetManagedRestaurantResponse {
  managedRestaurant: ManagedRestaurant
}

export async function getManagedRestaurant() {
  const response = await api.get<GetManagedRestaurantResponse>(
    '/managed-restaurant',
  )

  return response.data
}
