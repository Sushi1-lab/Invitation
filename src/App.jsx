import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function App() {
  const ref1 = useRef(null);
  const isInView = useInView(ref1, { once: false });
  const ref2 = useRef(null);
  const is2InView = useInView(ref2, { once: false });
  const ref3 = useRef(null);
  const is3InView = useInView(ref3, { once: false });
    const ref4 = useRef(null);
  const is4InView = useInView(ref4, { once: false });

  return (
    <div className="pt-20 px-4 md:px-6 flex flex-col bg-amber-200">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-[url('https://i.imgur.com/PaftnfX.jpeg')] bg-cover bg-center rounded-lg shadow-lg p-6 md:p-10 text-center">
        <h1 className="text-orange-400 text-3xl md:text-5xl font-extrabold mb-4">Join Us for a Celebration!</h1>
        <p className="text-orange-400 text-base md:text-xl max-w-xl">We are excited to invite you to our special event filled with fun, food, and friends.</p>
      </section>

      {/* Image Section 1 */}
      <section className="flex justify-center m-10">
        <div className="w-full max-w-screen-md overflow-hidden pt-10">
          <motion.div
            ref={ref2}
            initial={{ opacity: 0, y: 50 }}
            animate={is2InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-full"
            style={{ willChange: 'transform, opacity' }}
          >
            <img
              src="https://i.imgur.com/QWaKciJ.png"
              alt="Main Phone Desktop"
              className="hidden md:block w-full h-auto object-cover rounded-lg"
              loading="lazy"
            />
            <img
              src="https://i.imgur.com/HqzWBxK.jpeg"
              alt="Main Phone Mobile"
              className="block md:hidden w-full h-auto object-cover rounded-lg"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Side-by-Side Image Section */}
      <section className="min-h-screen flex flex-col mb-10 justify-center items-center px-4">
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, y: 50 }}
          animate={is3InView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-full max-w-screen-lg"
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <img
              src="https://i.imgur.com/SdXtFec.png"
              alt="Main Phone Desktop"
              className="w-full md:w-1/2 object-cover rounded-lg"
              loading="lazy"
            />
            <img
              src="https://i.imgur.com/oHhNrWy.png"
              alt="Main Phone Desktop"
              className="w-full md:w-1/2 object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        </motion.div>
      </section>

      {/* Slideshow Section */}
      <section className="min-h-screen flex flex-col items-center justify-center rounded-lg p-6 md:p-10 space-y-10 shadow-2xl bg-[url('https://i.imgur.com/LQzbKRm.jpeg')] bg-cover">
        <div className="overflow-hidden w-full mt-10">
          <motion.div
            ref={ref1}
            className="flex whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }} // Moves halfway (one full set)
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
              duration: 20, // smaller = faster
            }}
          >
            {/* Duplicate images for seamless scroll */}
            {[...Array(2)].flatMap(() => [
              "https://i.imgur.com/OgTvDJ9.jpeg",
              "https://i.imgur.com/lThPxB5.jpeg",
              "https://i.imgur.com/kW1yT1a.jpeg",
              "https://i.imgur.com/gDFc1KP.jpeg",
              "https://i.imgur.com/E3tmQTS.jpeg",
              "https://i.imgur.com/wvYzh6X.jpeg",
              "https://i.imgur.com/vv2fqni.jpeg",
            ]).map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Phone ${index + 1}`}
                className="w-36 h-60 md:w-50 md:h-80 object-cover rounded-md mx-2"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Event Details Section */}
      <section id="details" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-300 to-yellow-300 rounded-lg shadow-lg p-6 md:p-10 text-center mt-10">
        <div className="w-full max-w-screen-md overflow-hidden pt-10">
          <motion.div
            ref={ref4}
            initial={{ opacity: 0, y: 50 }}
            animate={is4InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-full"
            style={{ willChange: 'transform, opacity' }}
          >
            <img
              src="https://i.imgur.com/7jGWOIB.png"
              alt="Main Phone Desktop"
              className="w-full h-auto object-cover rounded-lg"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      <section className="w-full max-w-screen-md mx-auto my-10 px-4">
        <h2 className="text-2xl font-bold mb-4 text-center">📍 Location Map</h2>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Event Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d941.9431029371838!2d121.01325188556838!3d14.325871737615802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d6f28daeeb0f%3A0x3d4d21371aaf7b96!2sClubhouse%20Phase%203%20St.%20Joseph%20Village%2010!5e0!3m2!1sen!2sph!4v1748181307831!5m2!1sen!2sph"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[450px] border-0"
          ></iframe>
        </div>

        {/* Directions Button */}
        <div className="flex justify-center mt-6">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=14.325872,121.013252"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-md shadow transition"
          >
            🧭 Get Directions
          </a>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg shadow-lg p-6 md:p-10 text-center mt-10 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">RSVP</h2>
        <p className="text-base md:text-lg mb-6">Please let us know if you can make it by August 3, 2025 | Sunday.</p>
        <p className="text-base md:text-lg mb-6">Contact Us for confirming your Attendance! +639664654778 or Click the Button Below to Message</p>
       <a
  href="https://www.facebook.com/iAmjOnas.ivx?mibextid=wwXIfr&rdid=sW7n2wfYN0F3wUyB&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15nUrdGwT2%2F%3Fmibextid%3DwwXIfr#"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-white text-amber-600 font-semibold px-6 py-3 rounded-md shadow hover:bg-amber-100 transition"
>
  Message Us
</a>
      </section>
    </div>
  );
}

export default App;
