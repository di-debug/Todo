// import React from "react";
const Header = (theme) => {

  const textColor = theme === 'light' ? 'text-black' : 'text-white';

  return (
    <div className='flex items-center justify-between p-10 '>
      <h1 className={`text-2xl font-bold ${textColor}`}>Hello <br/> <span className={`${textColor} text-3xl font-extrabold`}>Deepak✌️ </span></h1>
      <button className='bg-red-500  px-5 py-2 rounded-sm text-lg font-medium' role='button'>Log Out</button>
    </div>
  )
}

export default Header
