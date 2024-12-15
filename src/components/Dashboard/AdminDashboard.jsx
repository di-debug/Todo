import AllTask from '../Others/AllTask'
import CreateTask from '../Others/CreateTask'
import Header from '../Others/Header'
const AdminDashboard = () => {

  return (
    <div className=' h-screen p-10 bg-[#D5F2E3]'>
        <Header theme="light"/>
        <div className='flex '>
            <div className='w-[65%]'>
            <CreateTask/>
            <AllTask/>
            </div>
            <div className='w-[35%]'></div>
        </div>
        
    </div>
  )
}

export default AdminDashboard
