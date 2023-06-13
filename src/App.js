import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import MainRoutes from './routes/MainRoutes'
import Snackbar from './components/UI/snackbar/Snackbar'
import { STORAGE_KEYS } from './utils/constants/common'
import { authActions } from './redux/auth/auth.slice'
import HighlightTheAnswer from './containers/user/type/HighlightTheAnswer'

const question = [
   {
      title: 'Respond',
      statement: 'respond 50 word',
      passage:
         'RespondRespondRespondRespo ndRespondRespondRespondRespondRe spondRespondRespond',
   },
]

const App = () => {
   const dispatch = useDispatch()

   useEffect(() => {
      const userInfo = JSON.parse(
         localStorage.getItem(STORAGE_KEYS.BILINGUAL_USER_KEY)
      )
      if (userInfo) {
         const authorizedUserCredentials = {
            token: userInfo.token,
            email: userInfo.email,
            role: userInfo.role,
         }
         dispatch(authActions.login(authorizedUserCredentials))
      }
   }, [])

   return (
      <>
         <HighlightTheAnswer question={question} />
         <MainRoutes />
         <Snackbar />
      </>
   )
}

export default App
