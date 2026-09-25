import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginPage } from '../pages/loginPage'
import { DashboardPage } from '../pages/dashBoardPage'
import { ProtectedRoute } from './protectedRoutes'
// import { AdminRoute } from './AdminRoutes'
import { ProfilePage } from '../pages/profilePage'
import { useThemeSystem } from '../hooks/ThemeSistem'
import { CreateUserPage } from '../pages/createUserPage'



export function AppRoutes() {
    useThemeSystem()
    
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" 
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
         <Route
          path="/register"
          element={<CreateUserPage />}
        />
        {/* <Route
          path="/users"
          element={
            <AdminRoute>
              <UsersPage />
            </AdminRoute>
          }
        />
        <Route
          path="/user/:id/edit"
          element={
            <AdminRoute>
              <EditUserPage />
            </AdminRoute>
          }
        />     */}
         <Route 
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}