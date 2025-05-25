import { useState } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

function App() {
  const ref1 = useRef(null);
  const isInView = useInView(ref1, { once: false });
   const ref2 = useRef(null);
  const is2InView = useInView(ref2, { once: false });

  return (
    <>  
      <div className="pt-20 px-4 md:px-6 flex flex-col bg-amber-200">
        <section className="min-h-screen flex flex-col items-center justify-center bg-[url('https://i.imgur.com/PaftnfX.jpeg')] bg-cover bg-center rounded-lg shadow-lg p-6 md:p-10 text-center">
          <h1 className="text-orange-400 text-3xl md:text-5xl font-extrabold mb-4">Join Us for a Celebration!</h1>
          <p className="text-orange-400 text-base md:text-xl max-w-xl">We are excited to invite you to our special event filled with fun, food, and friends.</p>
        </section>

        <section className='flex justify-center m-10'>
      <div className="w-full max-w-screen-md overflow-hidden pt-10  ">
          <motion.div
            ref={ref2}
            initial={{ opacity: 0, y: 50 }}
            animate={is2InView ? { opacity: 1, y: 10 } : {}} 
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
            style={{ willChange: "transform, opacity" }}
          >
            <img
              src="https://i.imgur.com/QWaKciJ.png"
              alt="Main Phone Desktop"
              className="hidden md:block h-160 object-cover rounded-lg"
              loading="lazy"
            />

            <img
              src="https://i.imgur.com/HqzWBxK.jpeg"
              alt="Main Phone Mobile"
              className="block md:hidden h-160 object-cover rounded-lg"
              loading="lazy"
            />
          </motion.div>
          </div>
        </section>
        
        <section className="min-h-screen flex flex-col items-center justify-center rounded-lg  p-6 md:p-10 space-y-10 shadow-2xl">
            {/* Animated slideshow */}
            <div className="w-full max-w-screen-md overflow-hidden">
              <motion.div
                ref={ref1}
                initial={{ opacity: 0, y: 150 }}
                animate={isInView ? { opacity: 1, y: 10 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full"
              >
                <motion.div
                  className="flex"
                  animate={{ x: ["0%", "-100%", "0%"] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                    duration: 12
                  }}
                >
                  {["https://i.imgur.com/OgTvDJ9.jpeg", "https://i.imgur.com/wvYzh6X.jpeg", "https://i.imgur.com/vv2fqni.jpeg", "https://i.imgur.com/xdbs6RN_d.jpeg?maxwidth=520&shape=thumb&fidelity=high.jpg"].map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`Phone ${index + 1}`}
                      className="md:w-40 md:h-72 object-cover rounded-md mx-2"
                    />
                  ))}
                </motion.div>
              </motion.div>
            </div>
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
