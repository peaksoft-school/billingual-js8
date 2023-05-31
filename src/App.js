import MainRoutes from './routes/MainRoutes'
import Snackbar from './components/UI/snackbar/Snackbar'
import SelectEnglishWords from './containers/user/type/SelectEnglishWords'

const App = () => {
   return (
      <>
         <MainRoutes />
         <Snackbar />
         <SelectEnglishWords />
      </>
   )
}

export default App
