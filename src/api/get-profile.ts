import { api } from '@/lib/axios'

interface UserProfile {
  name: string
  id: string
  email: string
  phone: string | null
  role: 'manager' | 'customer'
  createdAt: Date | null
  updatedAt: Date | null
}

export interface GetProfileResponse {
  user: UserProfile
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>('/me')

  return response.data
}
