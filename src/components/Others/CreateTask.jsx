
const CreateTask = () => {
  return (
    <div className=' flex justify-between flex-wrap'>
            <div className='w-full flex flex-col items-start justify-start flex-wrap'>
                <form className=' flex flex-wrap justify-around items-center w-full gap-2 px-10 py-5 shadow-md bg-[#fff] border-[rgba(255,255,255,0.4)] bg-[] border-2 rounded-xl ' action="">
                    <div className='grid grid-cols-2 gap-5 '>
                        <div>
                            <h3 className='text-[#000]'>Task Title</h3>
                            <input className='text-color[#000]' type="text"  placeholder='make a ui design'/>
                        </div>
                        <div>
                        <h3 className='text-[#000]'>Date</h3>
                        <input className='text-color[#000]' type="date" />
                        </div>
                        <div>
                        <h3 className='text-[#000]'>Assign To</h3>
                        <input className='text-color[#000]' type="text"  placeholder='Enter Employee Name' />
                        </div>
                        <div>
                        <h3 className='text-[#000]'>Category</h3>
                        <input className='text-color[#000]' type="text" placeholder='design, dev, etc'/>
                        </div>
                        
                    </div>
                    <div className='flex flex-col flex-wrap'>
                        <h3 className='text-[#000]'>Description</h3>
                        <textarea className='text-[#000]' name=""  id="" cols={30} rows={5} placeholder='Detailed description of task (Max 500 Words)'></textarea>
                        <button className='bg-[#000] text-left inline w-fit mt-5 px-4 py-1 rounded-full ' type="submit">Create Task</button>
                    </div>
                </form>
            </div>
            <div className='w-[35%]'></div>
        </div>
  )
}

export default CreateTask
