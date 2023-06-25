import React from 'react'
import Benefits from '../components/Benefits'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Testimonies from '../components/Testimonies'

function About() {
  return (
    <div>
        <Header />
        <div className='mt-4 p-4'>
            <p className='font-bold text-2xl text-center'>About Us</p>
            <div className='shadow-xl p-4'>
                <p className='text-xs'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et temporibus, consequatur ex aliquid laborum, eligendi aliquam corporis reprehenderit necessitatibus, consequuntur atque veniam debitis! Assumenda perspiciatis animi corrupti ab, voluptatibus quisquam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quidem expedita, esse sed, neque nisi voluptatum quisquam tenetur, animi omnis modi nihil repellendus voluptate commodi amet culpa odit error accusamus.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda illum cupiditate ipsa ut, possimus vitae eius, incidunt quidem omnis rem modi nisi, reprehenderit commodi eligendi nemo laudantium quaerat sapiente harum.
                </p>
            </div>
        </div>
        <Benefits />
        <Testimonies />
        <Footer />
    </div>
  )
}

export default About