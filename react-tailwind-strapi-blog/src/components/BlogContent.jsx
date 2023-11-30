import React from 'react'
import { useParams } from 'react-router-dom'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

const BlogContent = ({blogs}) => {
    const {id}=useParams()
    let blog = {}
    if (blog) {
      let arr = blogs.data.filter(blog => blog.id == id)
      blog = arr[0]
    }else {
      blog={}
    }
    console.log("Blog object")
    console.log(blogs)

  //   const blogs=[
  //     {
  //         "id":1,
  //         'title':'Blog 1',
  //         'desc':'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
  //         'coverImg':'https://static.vecteezy.com/system/resources/previews/020/040/457/original/1970s-retro-pattern-groovy-trippy-wavy-abstract-groovy-background-seventies-style-hippie-aesthetic-60s-70s-80s-style-wavy-swirl-pattern-illustration-flat-design-vector.jpg',
  //         'content':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At in tellus integer feugiat. Tempor orci eu lobortis elementum nibh tellus molestie. Sodales neque sodales ut etiam sit. Vestibulum lectus mauris ultrices eros. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vitae et leo duis ut diam quam. Dictum non consectetur a erat nam. Bibendum est ultricies integer quis auctor elit sed. Condimentum lacinia quis vel eros donec ac odio tempor orci. Ultrices eros in cursus turpis massa. Purus sit amet luctus venenatis. Eget mi proin sed libero. Pellentesque nec nam aliquam sem. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Nunc mi ipsum faucibus vitae aliquet. Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Vitae sapien pellentesque habitant morbi tristique senectus et. Cum sociis natoque penatibus et magnis dis. Pharetra vel turpis nunc eget lorem dolor sed.  Vulputate mi sit amet mauris commodo quis imperdiet. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Sed vulputate odio ut enim. Felis bibendum ut tristique et. Cursus mattis molestie a iaculis. Molestie nunc non blandit massa enim nec dui. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Habitant morbi tristique senectus et netus et malesuada fames. Pharetra pharetra massa massa ultricies mi.',
  //         'authorName':'Sam Crocker',
  //         'authorImg':'https://img.freepik.com/premium-vector/blogger-girl-concept-flat-vector-cartoon-illustration-live-streaming-broadcast-social-networks-trendy-young-female-character-with-smartphone-funny-cheerful-lady-isolated-white-background_534430-132.jpg?w=2000',
  //         'authorDesc':'Location Blogger'
          

  //     },
  //     {
  //         "id":2,
  //         'title':'Blog 2',
  //         'desc':'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
  //         'coverImg':'https://static.vecteezy.com/system/resources/previews/020/040/457/original/1970s-retro-pattern-groovy-trippy-wavy-abstract-groovy-background-seventies-style-hippie-aesthetic-60s-70s-80s-style-wavy-swirl-pattern-illustration-flat-design-vector.jpg',
  //         'content':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At in tellus integer feugiat. Tempor orci eu lobortis elementum nibh tellus molestie. Sodales neque sodales ut etiam sit. Vestibulum lectus mauris ultrices eros. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vitae et leo duis ut diam quam. Dictum non consectetur a erat nam. Bibendum est ultricies integer quis auctor elit sed. Condimentum lacinia quis vel eros donec ac odio tempor orci. Ultrices eros in cursus turpis massa. Purus sit amet luctus venenatis. Eget mi proin sed libero. Pellentesque nec nam aliquam sem. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Nunc mi ipsum faucibus vitae aliquet. Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Vitae sapien pellentesque habitant morbi tristique senectus et. Cum sociis natoque penatibus et magnis dis. Pharetra vel turpis nunc eget lorem dolor sed.  Vulputate mi sit amet mauris commodo quis imperdiet. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Sed vulputate odio ut enim. Felis bibendum ut tristique et. Cursus mattis molestie a iaculis. Molestie nunc non blandit massa enim nec dui. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Habitant morbi tristique senectus et netus et malesuada fames. Pharetra pharetra massa massa ultricies mi.',
  //         'authorName':'Sam Crocker','authorImg':'https://img.freepik.com/premium-vector/blogger-girl-concept-flat-vector-cartoon-illustration-live-streaming-broadcast-social-networks-trendy-young-female-character-with-smartphone-funny-cheerful-lady-isolated-white-background_534430-132.jpg?w=2000',
  //         'authorDesc':'Location Blogger'
          


  //     },
  //     {
  //         "id":3,
  //         'title':'Blog 3',
  //         'desc':'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
  //         'coverImg':'https://static.vecteezy.com/system/resources/previews/020/040/457/original/1970s-retro-pattern-groovy-trippy-wavy-abstract-groovy-background-seventies-style-hippie-aesthetic-60s-70s-80s-style-wavy-swirl-pattern-illustration-flat-design-vector.jpg',
  //         'content':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At in tellus integer feugiat. Tempor orci eu lobortis elementum nibh tellus molestie. Sodales neque sodales ut etiam sit. Vestibulum lectus mauris ultrices eros. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vitae et leo duis ut diam quam. Dictum non consectetur a erat nam. Bibendum est ultricies integer quis auctor elit sed. Condimentum lacinia quis vel eros donec ac odio tempor orci. Ultrices eros in cursus turpis massa. Purus sit amet luctus venenatis. Eget mi proin sed libero. Pellentesque nec nam aliquam sem. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Nunc mi ipsum faucibus vitae aliquet. Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Vitae sapien pellentesque habitant morbi tristique senectus et. Cum sociis natoque penatibus et magnis dis. Pharetra vel turpis nunc eget lorem dolor sed.  Vulputate mi sit amet mauris commodo quis imperdiet. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Sed vulputate odio ut enim. Felis bibendum ut tristique et. Cursus mattis molestie a iaculis. Molestie nunc non blandit massa enim nec dui. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Habitant morbi tristique senectus et netus et malesuada fames. Pharetra pharetra massa massa ultricies mi.',
  //         'authorName':'Sam Crocker','authorImg':'https://img.freepik.com/premium-vector/blogger-girl-concept-flat-vector-cartoon-illustration-live-streaming-broadcast-social-networks-trendy-young-female-character-with-smartphone-funny-cheerful-lady-isolated-white-background_534430-132.jpg?w=2000',
  //         'authorDesc':'Location Blogger'
          

  //     },
      
  // ]

  
 




  return (
    <div className='w-full pb-10 bg-[#f9f9f9]'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='grid lg:grid-cols-3 sm:grid-cols-3 ss:grid-cols-1 sm:gap-8 ss:gap-y-8 sm:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>

          <div className='col-span-2 gap-x-8 gap-y-8'>
            <img className='h-56 w-full object-cover' src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`}/>
            <h1 className='font-bold text-2xl my-1 pt-5'>{blog.attributes.blogTitle}</h1>
            <div className='pt-5'><ReactMarkdown className='line-break'>{blog.attributes.blogContent}</ReactMarkdown></div>
          </div>

          <div className='items-center w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5 max-h-[250px]'>
            <div>
              <img className='p-2 w-32 h-32 rounded-full mx-auto object-cover' src={`http://localhost:1337${blog.attributes.authorImg.data.attributes.url}`}/>
              <h1 className='font-bold text-2xl text-center text-gray-900 pt-3'>{blog.attributes.authorName}</h1>
              <p className='text-center text-gray-900 font-medium'>{blog.attributes.authorDesc}</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default BlogContent