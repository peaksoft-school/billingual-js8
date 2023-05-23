import Snackbar from './components/UI/snackbar/Snackbar'
import RecordSayingStatement from './containers/admin/pages/questions/RecordSayingStatement'
import MainRoutes from './routes/MainRoutes'

const App = () => {
   return (
      <>
         <MainRoutes />
         <Snackbar />
         <RecordSayingStatement />
      </>
   )
}

export default App
