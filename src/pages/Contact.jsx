import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Contact() {
  return (
    <div>
      <Header />
      <div className="h-[100vh] bg-[url(./assets/loan-bg.jpg)]">
        <div className="p-4 text-white">
          <div className="flex flex-col justify-center items-center text-center">
            <form action="" className="flex flex-col bg-black">
              <p className="font-bold text-2xl text-center">Contact Us</p>
              <p className="text-xs md:text-base text-center mb-4">
                We are always eager to welcome you to our society. Send us an
                Email today.
              </p>
              {/* <input type="name" placeholder="Name" />
              <input type="email" placeholder="Email" /> */}
              <a
                id="emailbtn"
                href="mailto:honeylandwelfaresociety@gmail.com"
                target="_blank"
                className="bg-green-500 text-white px-4 py-2 rounded-lg m-auto"
              >
                Get In Touch
              </a>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact