const useAuth = () => {
   const user = { loggedIn: true }
   const roles = [
      {
         name: 'Admin',
         role: 'Admin',
      },
      {
         name: 'User',
         role: 'User',
      },
   ]
   return { user, roles }
}

export default useAuth
