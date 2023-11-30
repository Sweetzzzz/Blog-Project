import React from 'react'

const About = () => {
  return (
    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black pb-10 bg-[#white] sm:pl-10 lg:pl-10'>
      
    <div className="grid content-center h-[30vh] sm:place-items-center lg:place-items-center text-black ">
  <div className="flex justify-between sm:text-4xl lg:text-5xl sm:w-[47vw] lg:w-[30vw] pb-2">
    <p className="m-0 uppercase font-display">Let's</p>
  </div>
  <div className = "flex justify-between sm:text-4xl lg:text-5xl sm:w-[47vw] lg:w-[30vw] pb-2">
    <p className = "m-0 uppercase font-display">Make Your</p>
  </div>
  <div className = "flex justify-between sm:text-4xl lg:text-5xl sm:w-[47vw] lg:w-[30vw] pb-4">
    <p className = "m-0 uppercase font-display">Dreams A Reality</p>
  </div>
  <div className = "flex justify-between sm:text-md lg:text-lg sm:w-[47vw] lg:w-[30vw]">
    <p className = "m-0 font-display">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim convallis aenean et tortor.</p>

  </div>
  
  {/* <div className="flex justify-between text-4xl sm:w-[47vw] lg:w-[30vw]"><button className="mt-[2%] text-2xl p-[5px] decoration-none text-center uppercase" id = "myBtn">About me</button><button className="mt-[2%] text-2xl p-[5px] decoration-none text-center uppercase">Projects</button></div> */}
    </div>


    <div className="grid content-center h-[30vh] sm:place-items-center lg:place-items-center text-white lg:scale-100 sm:scale-75">
      <a href='/events'><button className="p-7 text-2xl">Book With Me</button></a>
    </div>
</div>



  )
}

export default About