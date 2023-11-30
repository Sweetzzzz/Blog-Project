import React from 'react'
import {FaFacebook, FaGithub, FaInstagram, FaTwitter, FaTwitch} from 'react-icons/fa'


// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey = ('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')



const Footer = () => {
    // const onComplete = (fields) => { 
    //     const message = {
    //         to: 'ritasi1191@backva.com',
    //         from: fields.email,
    //         subject: fields.subject,
    //         html: `
    //         <p><strong>Name:</strong>${fields.name}</p>
    //         <p><strong>Message:</strong>${fields.message}</p>`

    //     }

    //     sgMail
    //     .send(message)
    //     .then(() => {
    //         console.log("Congrats!")
    //     })
    //     .catch((error) => {
    //         console.error('Error:', error)
    //     })
    // }



  return (
    <div className='w-full bg-[#332d41] text-gray-300 py-8 px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 broder-gray-600 py-8'>
            <div>
                <h6 className='font-bold uppercase py-2'>Solutions</h6>
                <ol>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                </ol>
            </div>
            <div>
                <h6 className='font-bold uppercase py-2'>Solutions</h6>
                <ol>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                </ol>
            </div>
            <div>
                <h6 className='font-bold uppercase py-2'>Solutions</h6>
                <ol>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                </ol>
            </div>
            <div>
                <h6 className='font-bold uppercase py-2'>Solutions</h6>
                <ol>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Marketing</li>
                </ol>
            </div>
            
            <div className='col-span-2 pt-2 md:pt-2'>
                <p className='font-bold uppercase'>Subscribe To Our Newletter</p>
                <p className='py-4'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-2' type="email" placeholder='Enter Email' name='email'/>
                    <button className='p-2 mb-2  bg-[#7D5260] border-none hover:text-[#492532] hover:bg-[#EFB8C8]'>Subsribe</button>
                </form>
            </div>
        </div>
        
        <div className='flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500 items-center'>
            <p>2023 SC, LLC. All Rights Reserved.</p>
            <div className='flex justify-between sm:w-[300px] pt-4 text-2xl gap-2'>
                <FaFacebook/>
                <FaGithub/>
                <FaInstagram/>
                <FaTwitter/>
                <FaTwitch/>
            </div>

        </div> 
    </div>
    
  )
}

export default Footer