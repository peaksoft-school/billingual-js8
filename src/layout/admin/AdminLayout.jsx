import { Outlet } from 'react-router-dom'
import Header from '../../components/header/Header'

const AdminLayout = () => {
   return (
      <>
         <Header title="SUBMITTED" />
         <main>
            <Outlet />
         </main>
      </>
   )
}

export default AdminLayout
