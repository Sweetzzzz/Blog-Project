import React from 'react'
import {Navbar, Footer, Event} from "../components"

const EventPage = ({events}) => {
    return (
        <div>
            <Navbar/>
            <Event events={events}/>
            <Footer/>
        </div>
      )
    }

export default EventPage