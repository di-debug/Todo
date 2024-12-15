import { useState } from 'react'
import Login from './components/Auth/login'
// import { getLocalStorage, setLocalStorage } from './utils/localStorage'
// import AdminDashboard from "./components/Dashboard/AdminDashboard"
// import { setLocalStorage } from "./utils/localStorage"
// import EmployeeDashboard from './components/Dashboard/EmplyeeDashboard'
const App = () => {

  // useEffect(() => {
  //   setLocalStorage()
  //   getLocalStorage()
  // },)

  const [user, setUser] = useState(null);

  const handleLogin = (email, password) =>{
    if(email == 'admin@email.com' && password == 123){
      
    }else if(){

    }else{

    }
  }
   
  return (
    <>
     {!user ? <Login handleLogin={handleLogin}/> : ''} 
     {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/>    */}
    </>
  )
}

export default App
