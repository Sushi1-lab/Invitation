import { useRef, useEffect, useState } from 'react'; // Import useState
import { motion, useInView } from 'framer-motion';

function App() {
  // Using named refs for better readability and specific targeting
  const welcomeTextRef = useRef(null);
  const welcomeImage1Ref = useRef(null);
  const welcomeImage2Ref = useRef(null);
  const mainImageRef = useRef(null);
  const mainImageOverlay1Ref = useRef(null);
  const mainImageOverlay2Ref = useRef(null);
  const sideImagesRef = useRef(null);
  const photoGalleryRef = useRef(null);
  const eventDetails1Ref = useRef(null);
  const eventDetails2Ref = useRef(null);
  const mapSectionRef = useRef(null);
  const rsvpSectionRef = useRef(null);
  const audioRef = useRef(null); // Ref for the audio element

  // Use state to manage whether the music is playing or not
  const [isPlaying, setIsPlaying] = useState(false); // Re-introducing isPlaying state

  // Use useInView for each ref that needs entrance animations
  const isInViewWelcomeText = useInView(welcomeTextRef, { once: true });
  const isInViewWelcomeImage1 = useInView(welcomeImage1Ref, { once: true });
  const isInViewWelcomeImage2 = useInView(welcomeImage2Ref, { once: true });
  const isInViewMainImage = useInView(mainImageRef, { once: true });
  const isInViewMainImageOverlay1 = useInView(mainImageOverlay1Ref, { once: true });
  const isInViewMainImageOverlay2 = useInView(mainImageOverlay2Ref, { once: true });
  const isInViewSideImages = useInView(sideImagesRef, { once: true });
  const isInViewPhotoGallery = useInView(photoGalleryRef, { once: true });
  const isInViewEventDetails1 = useInView(eventDetails1Ref, { once: true });
  const isInViewEventDetails2 = useInView(eventDetails2Ref, { once: true });
  const isInViewMapSection = useInView(mapSectionRef, { once: true });
  const isInViewRsvpSection = useInView(rsvpSectionRef, { once: true });

  // Consolidated all gallery images into one array
  const allGalleryImages = [
    "https://i.imgur.com/sJU9PjB.jpeg",
    "https://i.imgur.com/LprlcPx.jpeg",
    "https://i.imgur.com/rYHDnDo.jpeg",
    "https://i.imgur.com/sUEGIpg.jpeg",
    "https://i.imgur.com/xMmHNiv.jpeg",
    "https://i.imgur.com/bX8W2s8.jpeg"
 
  ];

  // Function to toggle music playback - Re-introducing this function
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Attempt to play. This will only work if initiated by user interaction.
        audioRef.current.play().catch(error => {
          console.log("Play failed:", error);
          // This catch block will likely be hit if autoplay is attempted without user interaction
          // or if the user quickly navigates away/back.
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="pt-20 px-4 md:px-6 flex flex-col bg-amber-50 min-h-screen font-sans">
      {/* Audio Element for Background Music */}
      {/* Removed autoPlay and muted attributes. Playback is now triggered by the button. */}
      <audio ref={audioRef} src="/Happy Birthday song - Funny Wild Animal Party.mp3" loop />
      
      {/* "Click Me" Button to control music playback */}
      <button 
        onClick={togglePlayPause}
        className="fixed right-4 z-10 p-3 md:p-4 rounded-full bg-orange-400 text-white shadow-lg transition-transform hover:scale-110 text-sm md:text-base font-semibold"
      >
        {isPlaying ? "Pause Music" : "Click Me to Play Music"}
      </button>

      {/* Welcome Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-[url('https://i.imgur.com/PaftnfX.jpeg')] bg-cover bg-center rounded-3xl shadow-2xl p-6 md:p-10 text-center overflow-hidden mb-16">
        <div ref={welcomeTextRef}>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={isInViewWelcomeText ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-orange-400 text-5xl md:text-7xl font-extrabold mb-4 z-20 relative drop-shadow-lg"
          >
            Join Us for a Celebration!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={isInViewWelcomeText ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="text-orange-400 text-lg md:text-2xl max-w-xl z-20 relative px-4"
          >
            We are excited to invite you to our special event filled with fun, food, and friends.
          </motion.p>
        </div>
        <img
              src="https://i.imgur.com/3x68JCF.jpeg"
              alt="Detail Image 1"
              className=" pt-20 w-full h-auto rounded-3xl"
            />
      </section>

      {/* Main Feature Image Section */}
      <section className="relative flex justify-center py-16 px-4">
        <div ref={mainImageRef} className="w-full max-w-screen-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInViewMainImage ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-full"
          >
            <img
              src="https://i.imgur.com/HqzWBxK.jpeg"
              alt="Main Event Display"
              className="w-full h-auto object-cover rounded-3xl shadow-2xl border-4 border-amber-200"
            />
          </motion.div>
        </div>
      </section>

      {/* Side-by-Side Images Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 py-16">
        <div ref={sideImagesRef} className="w-full max-w-screen-lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInViewSideImages ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-full"
          >
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <img
                src="https://i.imgur.com/4kNTIAq.jpeg"
                alt="Side Image 1"
                className="w-full md:w-1/2 object-cover rounded-xl shadow-xl"
              />
              <img
                src="https://i.imgur.com/qAWF6kX.jpeg"
                alt="Side Image 2"
                className="w-full md:w-1/2 object-cover rounded-xl shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Static Photo Gallery Section */}
      <section className="py-16 bg-amber-100 rounded-3xl shadow-inner px-4 mb-16">
        <motion.h2
          ref={photoGalleryRef}
          initial={{ opacity: 0, y: -30 }}
          animate={isInViewPhotoGallery ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-amber-800 drop-shadow-sm"
        >
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center max-w-screen-xl mx-auto">
          {allGalleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInViewPhotoGallery ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
              className="w-full h-48 md:h-64 lg:h-72 flex items-center justify-center rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
            >
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Event Details Image 1 */}
      <section className="flex flex-col items-center justify-center p-6 text-center py-16">
        <div ref={eventDetails1Ref} className="max-w-screen-md w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInViewEventDetails1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <img
              src="https://i.imgur.com/CgWKLNx.png"
              alt="Event Details"
              className="w-full h-auto object-cover rounded-2xl shadow-xl border-2 border-amber-100"
            />
          </motion.div>
        </div>
      </section>

      {/* Event Details Image 2 */}
      <section className="flex flex-col items-center justify-center p-6 text-center py-16">
        <div ref={eventDetails2Ref} className="max-w-screen-md w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInViewEventDetails2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <img
              src="https://i.imgur.com/oads2N7.png"
              alt="Additional Event Details"
              className="w-full h-auto object-cover rounded-2xl shadow-xl border-2 border-amber-100"
            />
          </motion.div>
        </div>
      </section>

      {/* Location Map Section */}
      <section ref={mapSectionRef} className="w-full max-w-screen-xl mx-auto my-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={isInViewMapSection ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-4xl font-bold mb-8 text-center text-amber-800"
        >
          📍 Event Location
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInViewMapSection ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-300"
        >
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
        </motion.div>

        <div className="flex justify-center mt-8">
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={isInViewMapSection ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
            href="https://www.google.com/maps/dir/?api=1&destination=14.325872,121.013252"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition transform hover:scale-105 text-lg"
          >
            🧭 Get Directions
          </motion.a>
        </div>
      </section>
      <img className=" rounded-2xl shadow-2xl" src="https://i.imgur.com/fR7wWSo.png" alt="d" />
      {/* RSVP Section */}
      <section
        id="rsvp"
        ref={rsvpSectionRef}
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-500 to-amber-600 rounded-3xl shadow-2xl p-6 md:p-10 text-center mt-16 text-white mb-20"
      >
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={isInViewRsvpSection ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-bold mb-8 drop-shadow-md"
        >
          RSVP
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInViewRsvpSection ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="text-lg md:text-xl mb-6 max-w-prose px-4"
        >
          Please let us know if you can make it by August 3, 2025 | Sunday.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInViewRsvpSection ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
          className="text-lg md:text-xl mb-8 max-w-prose px-4"
        >
          Contact us to confirm your attendance! You can call or text +639664654778 or click the button below:
        </motion.p>
        <motion.a
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInViewRsvpSection ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
          href="https://www.facebook.com/iAmjOnas.ivx?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-amber-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-amber-100 transition transform hover:scale-105 text-lg"
        >
          Message Us on Facebook
        </motion.a>
      </section>
    </div>
  );
}

export default App;
