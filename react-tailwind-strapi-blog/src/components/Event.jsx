import React from 'react'

const Event = ({events}) => {
  return (
    <div className='w-full bg-[#FFFBFE] py-[50px]'>
    <div className='max-w-[1240px] mx-auto'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black'>
            
           {/* {blogs1.map((blog)=>
            
            <NavLink to={`/blog/${blog.id}`}>
                <div className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
                    <img className='h-56 w-full object-cover' src={blog.coverImg}/>
                    <div className='p-8'>
                        <h3 className='font-bold text-2xl my-1'>{blog.title}</h3>
                        <p className='text-gray-600 text-xl'>{blog.desc}</p>
                    </div>
                </div>                
            </NavLink>
            
            )} */}


            {events.data.map((event)=>
                <div key={event.attributes.eventTitle} className='bg-[#FFFBFE] rounded-lg overflow-hidden drop-shadow-md'>
                    <img className='h-56 w-full object-cover blur-sm' src={`http://localhost:1337${event.attributes.coverImg.data.attributes.url}`}/>
                    <h3 className='font-bold text-2xl fixed top-[50%] left-[12%] text-white'>{event.attributes.eventTitle}</h3>
                    <p className='text-white text-xl fixed top-[65%] left-[12%]'>{event.attributes.eventDesc}</p>
                    
                </div>                
            )}
            
        </div>
    </div>
</div>

  )
}

export default Event