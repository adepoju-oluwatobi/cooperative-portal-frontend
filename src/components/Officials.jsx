import React from 'react'
import DummyImg1 from '../assets/dummy-off1.png'
import DummyImg2 from '../assets/dummy-off2.png'
import DummyImg3 from '../assets/dummy-off3.png'

function Officials() {
  return (
    <div>
        <p className='md:text-3xl text-2xl mt-4 font-bold text-center'>Our Officials</p>

        <div className='flex flex-wrap justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
                <div>
                    <img className='w-[200px]' src={DummyImg1} alt="" />
                </div>
                <div className='-mt-4'>
                    <p>FirstName <span className='font-bold'>LastName</span></p>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <div>
                    <img className='w-[200px]' src={DummyImg2} alt="" />
                </div>
                <div className='-mt-4'>
                    <p>FirstName <span className='font-bold'>LastName</span></p>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <div>
                    <img className='w-[200px]' src={DummyImg3} alt="" />
                </div>
                <div className='-mt-4'>
                    <p>FirstName <span className='font-bold'>LastName</span></p>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Officials