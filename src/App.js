import Snackbar from './components/UI/snackbar/Snackbar'
import SelectEnglishWords from './containers/user/type/SelectEnglishWords'
import MainRoutes from './routes/MainRoutes'

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
