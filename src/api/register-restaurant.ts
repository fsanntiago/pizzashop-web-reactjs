import { api } from '@/lib/axios'

export interface RegisterRestaurantBody {
  restaurantName: string
  managerName: string
  phone: string
  email: string
}

export async function registerRestaurant({
  email,
  restaurantName,
  phone,
  managerName,
}: RegisterRestaurantBody) {
  await api.post('/restaurants', { email, restaurantName, phone, managerName })
}
