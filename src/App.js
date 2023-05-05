import AdminRoute from './routes/admin/AdminRoute'
import MainRoutes from './routes/MainRoutes'

const App = () => {
   return (
      <div>
         <MainRoutes />
         <AdminRoute />
      </div>
   )
}

export default App
