import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Contact() {
  return (
    <div>
      <Header />
      <div className="h-[100vh] bg-[url(./assets/loan-bg.jpg)]">
        <div className="p-4 text-white">
          <div className="flex flex-col justify-center items-center">
            <form action="" className="flex flex-col w-[280px] m-auto bg-black">
              <p className="font-bold text-2xl text-center">Contact Us</p>
              <p className="text-xs md:text-base mb-4">
                For enquirys and complaints, please contact us via:
              </p>
              <p>Email:</p>
              {/* <input type="name" placeholder="Name" />
              <input type="email" placeholder="Email" /> */}
              <a
                id="emailbtn"
                href="mailto:honeylandwelfaresociety@gmail.com"
                target="_blank"
                className="text-sm text-blue-500 py-2"
              >
                honeylandwelfaresociety@gmail.com
              </a>

              <div className='mt-4'>
              <p>Call/Whatsapp campus rep:</p>
              <p className='mt-2'>Ipaja:</p>
              <p>Mrs Ajibola: <span>080********</span></p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact