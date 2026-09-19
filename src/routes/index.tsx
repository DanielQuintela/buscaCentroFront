import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginPage } from '../pages/loginPage'
import { DashboardPage } from '../pages/dashBoardPage'
import { ProtectedRoute } from './protectedRoutes'
// import { AdminRoute } from './AdminRoutes'
import { ProfilePage } from '../pages/profilePage'



export function AppRoutes() {
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
         {/* <Route
          path="/user/new"
          element={
            <AdminRoute>
              <CreateUserPage />
            </AdminRoute>
          }
        /> */}
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