import type { LoginData } from "./Login.types"
import type { CreateUserFormData } from "./User.types"

export interface User {
  data: {
    id: string
    name: string
    email: string
    role: 'ADMIN' | 'USER' | 'MERCHANT'
    status: 'ACTIVE' | 'INACTIVE'
    first_login: boolean
  }
}

export interface UserResponse {
  id: string
  name: string
  email: string
  role: 'ADMIN' | 'USER' | 'MERCHANT'
  status: 'ACTIVE' | 'INACTIVE'
  createdAt: string
  updatedAt: string
}
export interface AuthResponse {
  data: {
    token: string
  }
}

export interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (data: LoginData) => Promise<void>
  logout: () => void
  loadUser: () => void
  signUp: (data: CreateUserFormData) => Promise<void>
}
