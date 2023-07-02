import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProtectedRoute from './ProtectedRoute'
import LandingPage from '../components/landing-page/LandingPage'
import AdminTest from '../containers/admin/pages/test/AdminTest'
import AdminRoute from './admin/AdminRoute'
import UserRoute from './user/UserRoute'
import GetAllTests from '../containers/user/GetAllTests'
import CurrentTest from '../containers/user/CurrentTest'
import SigninPage from '../containers/public/SigninPage'
import SignupPage from '../containers/public/SignupPage'
import CreateTest from '../containers/admin/pages/test/CreateTest'
import AddQuestions from '../containers/admin/pages/test/Questions'
import TestQuestions from '../containers/admin/pages/adminCreateTestRealEnglishWords/TestQuestions'
import MyResults from '../containers/user/MyResults'
import PracticeTest from '../containers/user/practicePage/PracticeTest'
import EveluatingResults from '../containers/admin/pages/EvaluatingResults'
import SubmittedResults from '../containers/admin/pages/SubmittedResults'
import SubmiteQuestions from '../containers/admin/pages/submitePage/SubmitQuestions'
import CompleteTest from '../containers/user/CompleteTest'

const MainRoutes = () => {
   const { role, isAuthorized } = useSelector((state) => state.auth)

   return (
      <div>
         <Routes>
            {/* Guest */}
            <Route
               path="/"
               element={
                  role !== 'ADMIN' ? <LandingPage /> : <Navigate to="/admin" />
               }
            />
            <Route path="/sign-in" element={<SigninPage />} />
            <Route path="/sign-up" element={<SignupPage />} />

            {/* User */}
            <Route
               element={
                  <ProtectedRoute
                     roles="USER"
                     fallbackPath="/admin/test"
                     isAuthorized={isAuthorized}
                     role={role}
                  />
               }
            >
               <Route path="/user/" element={<UserRoute />}>
                  <Route path="my-result" element={<MyResults />} />
                  <Route index element={<Navigate to="tests" />} />
                  <Route path="tests" element={<GetAllTests />} />
                  <Route path="tests/:testId" element={<CurrentTest />} />
                  <Route
                     path="tests/:testId/practice"
                     element={<PracticeTest />}
                  />
                  <Route
                     path="tests/:testId/practice"
                     element={<PracticeTest />}
                  />
                  <Route path="complete" element={<CompleteTest />} />
               </Route>
            </Route>

            {/* Admin */}
            <Route
               element={
                  <ProtectedRoute
                     roles="ADMIN"
                     fallbackPath="/sign-in"
                     isAuthorized={isAuthorized}
                     role={role}
                  />
               }
            >
               <Route path="/admin/" element={<AdminRoute />}>
                  <Route index element={<Navigate to="test" />} />
                  <Route path="test" element={<AdminTest />} />
                  <Route path="test/add-new-test" element={<CreateTest />} />
                  <Route path="test/update-test" element={<CreateTest />} />
                  <Route path="test/:testId" element={<AddQuestions />} />
                  <Route
                     path="test/:testId/createtest"
                     element={<TestQuestions />}
                  />
                  <Route
                     path="test/:testId/update-question"
                     element={<TestQuestions />}
                  />
                  <Route path="submit-result" element={<SubmittedResults />} />
                  <Route
                     path="submit-result/:resultId"
                     element={<EveluatingResults />}
                  />
                  <Route
                     path="submit-result/:resultId/submitted"
                     element={<SubmiteQuestions />}
                  />
               </Route>
            </Route>
         </Routes>
      </div>
   )
}

export default MainRoutes
