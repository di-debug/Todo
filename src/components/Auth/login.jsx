import { useState } from 'react'
import {Icon} from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'

const Login = ({handleLogin}) => {
  console.log(props)

  // TWO WAY BINIDNG
  const handleSubmit = (e)=>{
    e.preventDefault();
    handleLogin(email,password)
    console.log(`Email is: ${email}\n Password is: ${password}`);    
    setEmail("");
    setPassword("");    
}
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

// Passowrd show and off
const [type, setType] = useState('password')
const [icon, setIcon] = useState(eyeOff)
const handleToggle = ()=>{
  if (type ==='password') {
    setIcon(eye);
    setType('text');
  }else{
    setIcon(eyeOff);
    setType('password')
  }
}


  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-red-600 p-16 rounded-xl shadow-md shadow-[rgba(0,0,0,0.5)]'>
            <form 
            onSubmit={handleSubmit}
            action="" className='flex flex-col items-center justify-center gap-[20px]'>
                <input 
                required
                className=" w-[100%] border-2 outline-none rounded-full bg-transparent border-emerald-600 py-4 px-5 text-gray-400 placeholder:text-gray-500" 
                type="email" 
                placeholder='Email' 
                onChange={(e)=>{setEmail(e.target.value)}}
                value={email}/>
                <div className='flex justify-center items-center border-2 rounded-full bg-transparent border-emerald-600 pr-[10px] text-gray-400 placeholder:text-gray-500'>
                  <input 
                  required
                  className="py-4 px-5 bg-transparent outline-none" type={type} placeholder="Password" name="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  autoComplete='current-password'/>

                  <span className='' onClick={handleToggle}><Icon className='' icon={icon} size={15}/></span>
                </div>
                
                <button className='px-4 py-2 bg-white text-red-600 rounded-lg shadow-xl shadow-[rgba(0,0,0,0.5)] hover:text-[#000] '>Log In</button>
            </form>
        </div>
    </div>
  )
}

export default Login