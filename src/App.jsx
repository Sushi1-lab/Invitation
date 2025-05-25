import { useState } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

function App() {
  const ref1 = useRef(null);
  const isInView = useInView(ref1, { once: false });

  return (
    <>  
      <div className="pt-20 px-4 md:px-6 flex flex-col bg-amber-200">
        <section className="min-h-screen flex flex-col items-center justify-center bg-[url('https://i.imgur.com/PaftnfX.jpeg')] bg-cover bg-center rounded-lg shadow-lg p-6 md:p-10 text-center">
          <h1 className="text-orange-400 text-3xl md:text-5xl font-extrabold mb-4">Join Us for a Celebration!</h1>
          <p className="text-orange-400 text-base md:text-xl max-w-xl">We are excited to invite you to our special event filled with fun, food, and friends.</p>
        </section>

        <section className="min-h-screen flex flex-col items-center justify-center rounded-lg mt-10 p-6 md:p-10 space-y-10">
            <section className="min-h-screen flex flex-col items-center justify-center rounded-lg mt-10 p-6 md:p-10 space-y-10">
            {/* Top full-size image for desktop */}
            <img
              src="https://i.imgur.com/QWaKciJ.png"
              alt="Main Phone Desktop"
              className="hidden md:block h-160 object-cover rounded-lg"
            />

            {/* Top full-size image for mobile */}
            <img
              src="https://i.imgur.com/HqzWBxK.jpeg"
              alt="Main Phone Mobile"
              className="block md:hidden h-160 object-cover rounded-lg"
            />

            {/* Animated images */}
            <motion.div
              ref={ref1}
              initial={{ opacity: 0, y: 150 }}
              animate={isInView ? { opacity: 1, y: 40 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-wrap justify-center gap-4"
            >
              <img
                src="https://i.imgur.com/OgTvDJ9.jpeg"
                alt="Phone 1"
                className="w-36 h-60 md:w-36 md:h-72 object-cover rounded-md"
              />
              <img
                src="https://i.imgur.com/wvYzh6X.jpeg"
                alt="Phone 2"
                className="w-36 h-60 md:w-40 md:h-72 object-cover rounded-md"
              />
              <img
                src="https://i.imgur.com/vv2fqni.jpeg"
                alt="Phone 3"
                className="w-36 h-60 md:w-40 md:h-72 object-cover rounded-md"
              />
              <img
                src="https://i.imgur.com/xdbs6RN_d.jpeg?maxwidth=520&shape=thumb&fidelity=high.jpg"
                alt="Phone 4"
                className="w-36 h-60 md:w-40 md:h-72 object-cover rounded-md"
              />
            </motion.div>
          </section>
        </section>

        <section id="details" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-300 to-yellow-300 rounded-lg shadow-lg p-6 md:p-10 text-center mt-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Event Details</h2>
          <p className="text-base md:text-lg max-w-lg mb-2">📅 Date: Saturday, June 15, 2025</p>
          <p className="text-base md:text-lg max-w-lg mb-2">📍 Location: Sunset Gardens, 123 Celebration Ave</p>
          <p className="text-base md:text-lg max-w-lg">⏰ Time: 6:00 PM – 10:00 PM</p>
        </section>

        <section id="rsvp" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg shadow-lg p-6 md:p-10 text-center mt-10 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">RSVP</h2>
          <p className="text-base md:text-lg mb-6">Please let us know if you can make it by June 1st.</p>
          <button 
            onClick={() => alert('Thank you for your RSVP!')}
            className="bg-white text-amber-600 font-semibold px-6 py-3 rounded-md shadow hover:bg-amber-100 transition"
          >
            Confirm Attendance
          </button>
        </section>
      </div>
    </>
  )
}

export default App;
