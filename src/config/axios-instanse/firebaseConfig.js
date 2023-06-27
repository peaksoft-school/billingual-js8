import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
   apiKey: 'AIzaSyApn0LiSU6abvEuEo5eOeTBmXvfjRz5zQI',
   authDomain: 'bilingual-27936.firebaseapp.com',
   projectId: 'bilingual-27936',
   storageBucket: 'bilingual-27936.appspot.com',
   messagingSenderId: '820540213652',
   appId: '1:820540213652:web:1ebc6ea3a21d30ae49e781',
   measurementId: 'G-6VHDY19CMW',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export { auth, provider }
