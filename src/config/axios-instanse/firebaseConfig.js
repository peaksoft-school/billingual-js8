import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
   apiKey: 'AIzaSyCaV6ihz4mZq7cBfhNaNvI6Rp3AQqSZOe4',
   authDomain: 'bilingual-b3163.firebaseapp.com',
   projectId: 'bilingual-b3163',
   storageBucket: 'bilingual-b3163.appspot.com',
   messagingSenderId: '937905994024',
   appId: '1:937905994024:web:51ed1813b278a0283ef81d',
   measurementId: 'G-RMXL9VR6B3',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export { auth, provider }
