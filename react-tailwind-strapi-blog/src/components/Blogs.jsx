import React from 'react'
import { NavLink } from 'react-router-dom'

const Blogs = ({blogs}) => {
    
    // const blogs1=[
    //     {
    //         "id":1,
    //         'title':'Blog 1',
    //         'desc':'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    //         'coverImg':'https://static.vecteezy.com/system/resources/previews/020/040/457/original/1970s-retro-pattern-groovy-trippy-wavy-abstract-groovy-background-seventies-style-hippie-aesthetic-60s-70s-80s-style-wavy-swirl-pattern-illustration-flat-design-vector.jpg',
    //         'content':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At in tellus integer feugiat. Tempor orci eu lobortis elementum nibh tellus molestie. Sodales neque sodales ut etiam sit. Vestibulum lectus mauris ultrices eros. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vitae et leo duis ut diam quam. Dictum non consectetur a erat nam. Bibendum est ultricies integer quis auctor elit sed. Condimentum lacinia quis vel eros donec ac odio tempor orci. Ultrices eros in cursus turpis massa. Purus sit amet luctus venenatis. Eget mi proin sed libero. Pellentesque nec nam aliquam sem. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Nunc mi ipsum faucibus vitae aliquet. Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Vitae sapien pellentesque habitant morbi tristique senectus et. Cum sociis natoque penatibus et magnis dis. Pharetra vel turpis nunc eget lorem dolor sed.  Vulputate mi sit amet mauris commodo quis imperdiet. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Sed vulputate odio ut enim. Felis bibendum ut tristique et. Cursus mattis molestie a iaculis. Molestie nunc non blandit massa enim nec dui. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Habitant morbi tristique senectus et netus et malesuada fames. Pharetra pharetra massa massa ultricies mi.',
    //         'authorName':'Sam Crocker','authorImg':'https://api.deepai.org/job-view-file/8741a9ea-8407-45f9-ac09-246f607d1122/outputs/output.jpg',
    //         'authorDesc':'Location Blogger'
            

    //     },
    //     {
    //         "id":2,
    //         'title':'Blog 2',
    //         'desc':'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    //         'coverImg':'https://static.vecteezy.com/system/resources/previews/020/040/457/original/1970s-retro-pattern-groovy-trippy-wavy-abstract-groovy-background-seventies-style-hippie-aesthetic-60s-70s-80s-style-wavy-swirl-pattern-illustration-flat-design-vector.jpg',
    //         'content':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At in tellus integer feugiat. Tempor orci eu lobortis elementum nibh tellus molestie. Sodales neque sodales ut etiam sit. Vestibulum lectus mauris ultrices eros. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vitae et leo duis ut diam quam. Dictum non consectetur a erat nam. Bibendum est ultricies integer quis auctor elit sed. Condimentum lacinia quis vel eros donec ac odio tempor orci. Ultrices eros in cursus turpis massa. Purus sit amet luctus venenatis. Eget mi proin sed libero. Pellentesque nec nam aliquam sem. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Nunc mi ipsum faucibus vitae aliquet. Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Vitae sapien pellentesque habitant morbi tristique senectus et. Cum sociis natoque penatibus et magnis dis. Pharetra vel turpis nunc eget lorem dolor sed.  Vulputate mi sit amet mauris commodo quis imperdiet. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Sed vulputate odio ut enim. Felis bibendum ut tristique et. Cursus mattis molestie a iaculis. Molestie nunc non blandit massa enim nec dui. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Habitant morbi tristique senectus et netus et malesuada fames. Pharetra pharetra massa massa ultricies mi.',
    //         'authorName':'Sam Crocker','authorImg':'https://api.deepai.org/job-view-file/8741a9ea-8407-45f9-ac09-246f607d1122/outputs/output.jpg',
    //         'authorDesc':'Location Blogger'
            


    //     },
    //     {
    //         "id":3,
    //         'title':'Blog 3',
    //         'desc':'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    //         'coverImg':'https://static.vecteezy.com/system/resources/previews/020/040/457/original/1970s-retro-pattern-groovy-trippy-wavy-abstract-groovy-background-seventies-style-hippie-aesthetic-60s-70s-80s-style-wavy-swirl-pattern-illustration-flat-design-vector.jpg',
    //         'content':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At in tellus integer feugiat. Tempor orci eu lobortis elementum nibh tellus molestie. Sodales neque sodales ut etiam sit. Vestibulum lectus mauris ultrices eros. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vitae et leo duis ut diam quam. Dictum non consectetur a erat nam. Bibendum est ultricies integer quis auctor elit sed. Condimentum lacinia quis vel eros donec ac odio tempor orci. Ultrices eros in cursus turpis massa. Purus sit amet luctus venenatis. Eget mi proin sed libero. Pellentesque nec nam aliquam sem. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Nunc mi ipsum faucibus vitae aliquet. Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Vitae sapien pellentesque habitant morbi tristique senectus et. Cum sociis natoque penatibus et magnis dis. Pharetra vel turpis nunc eget lorem dolor sed.  Vulputate mi sit amet mauris commodo quis imperdiet. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Sed vulputate odio ut enim. Felis bibendum ut tristique et. Cursus mattis molestie a iaculis. Molestie nunc non blandit massa enim nec dui. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Habitant morbi tristique senectus et netus et malesuada fames. Pharetra pharetra massa massa ultricies mi.',
    //         'authorName':'Sam Crocker','authorImg':'https://api.deepai.org/job-view-file/8741a9ea-8407-45f9-ac09-246f607d1122/outputs/output.jpg',
    //         'authorDesc':'Location Blogger'
            

    //     },
        
    // ]


  return (
    <div className='w-full bg-[#white] py-[50px]'>
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


                {blogs.data.map((blog)=>
                
                <NavLink key={blog.id} to={`/blog/${blog.id}`}>
                    <div className='bg-[#FFFBFE] rounded-lg overflow-hidden drop-shadow-md hover:-translate-y-2'>
                        <img className='h-56 w-full object-cover' src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`}/>
                        <div className='p-8'>
                            <h3 className='font-bold text-2xl my-1'>{blog.attributes.blogTitle}</h3>
                            <p className='text-gray-600 text-xl'>{blog.attributes.blogDesc}</p>
                        </div>
                    </div>                
                </NavLink>
                
                )}

            </div>
        </div>
    </div>
  )
}

export default Blogs