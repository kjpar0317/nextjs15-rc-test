"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="login-app">
      <div className="bg-purple-900 absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 bottom-0 leading-5 h-full w-full overflow-hidden">
        <div className="animated-background">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{ opacity: 0, y: 0, x: 0 }}
              animate={{
                opacity: [0, 1, 0],
                // rotate: [0, 360, 90, 180],
                y: [0, Math.random() * 800 - 400, Math.random() * 800 - 400],
                x: [0, Math.random() * 1500 - 400, Math.random() * 800 - 400],
                filter: "brightness(150%)",
                boxShadow: [
                  "0 0 20px 10px rgba(255, 255, 255, 0.5)",
                  "0 0 30px 20px rgba(255, 255, 255, 0.5)",
                  "0 0 20px 10px rgba(255, 255, 255, 0.5)",
                ],
                scale: [0, 1, 3, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              whileFocus={{
                opacity: 1,
                scale: 10,
              }}
            />
          ))}
        </div>
      </div>
      <div className="relative   min-h-screen  sm:flex sm:flex-row  justify-center bg-transparent rounded-3xl shadow-xl">
        <div className="flex-col flex  self-center lg:px-14 sm:max-w-4xl xl:max-w-md  z-10">
          <div className="self-start hidden lg:flex flex-col  text-gray-300">
            <h1 className="my-3 font-semibold text-4xl">Test Site</h1>
            <p className="pr-3 text-sm opacity-75">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups
            </p>
          </div>
        </div>
        <motion.div
          className="login-box"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 250, rotateY: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-center self-center z-10">
            <div className="p-12 bg-white mx-auto rounded-3xl w-96 ">
              <div className="mb-7">
                <h3 className="font-semibold text-2xl text-gray-800">
                  Test Site
                </h3>
                <p className="text-gray-400">Login...</p>
              </div>
              <form action="/home">
                <div className="space-y-6">
                  <div className="">
                    <motion.input
                      id="id"
                      type="text"
                      className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                      placeholder="Login ID"
                      whileFocus={{
                        scale: 1.05,
                        boxShadow: "0 0 10px #6a82fb",
                      }}
                    />
                  </div>

                  <div className="relative">
                    <motion.input
                      id="password"
                      type="password"
                      className="text-sm text-gray-200 px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-purple-400"
                      placeholder="Login Password"
                      whileFocus={{
                        scale: 1.05,
                        boxShadow: "0 0 10px #fc5c7d",
                      }}
                    />
                    <div className="flex items-center absolute inset-y-0 right-0 mr-3  text-sm leading-5"></div>
                  </div>

                  <div className="flex items-center justify-between"></div>
                  <div>
                    <motion.button
                      type="submit"
                      className="w-full flex justify-center bg-purple-800  hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      Login
                    </motion.button>
                  </div>
                </div>
              </form>
              <div className="mt-7 text-center text-gray-300 text-xs">
                <span>Copyright © 2024</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <footer className="bg-transparent absolute w-full bottom-0 left-0 z-30">
        <div className="container p-5 mx-auto  flex items-center justify-between "></div>
      </footer>
      <svg
        className="absolute bottom-0 left-0 "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,0L40,42.7C80,85,160,171,240,197.3C320,224,400,192,480,154.7C560,117,640,75,720,74.7C800,75,880,117,960,154.7C1040,192,1120,224,1200,213.3C1280,203,1360,149,1400,122.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
