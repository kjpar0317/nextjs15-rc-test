"use client";

import { motion } from "framer-motion";

import Label from "@/components/ui/custom/Label";
import TextAnimation from "@/components/animation/TextAnimation";

export default function Home() {
  return (
    <div className="login-app">
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
      <div className="login-container text-gray-300">
        <motion.div
          className="login-box"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-center">
            <TextAnimation text="LOGIN PAGE" />
          </h1>
          <div className="p-5">
            <TextAnimation text="이건 테스트 사이트 입니다. 아무 의미가 없습니다." />
          </div>
          <form action="/home" className="flex flex-between">
            <div className="space-x-4 text-gray-300 flex flex-between">
              <Label htmlFor="id" className="w-full md:w-1/2">
                ID
              </Label>
              <motion.input
                id="id"
                type="text"
                className="text-gray-800"
                placeholder="Login ID"
                whileFocus={{ scale: 1.05, boxShadow: "0 0 10px #6a82fb" }}
              />
            </div>
            <div className="space-x-4 text-gray-300 flex flex-between">
              <Label htmlFor="password" className="w-full md:w-1/2">
                Password
              </Label>
              <motion.input
                id="password"
                type="password"
                className="text-gray-800"
                placeholder="Login Password"
                whileFocus={{ scale: 1.05, boxShadow: "0 0 10px #fc5c7d" }}
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Sign In
            </motion.button>
          </form>
        </motion.div>
      </div>
      <div className="neon-bars">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="neon-bar"
            animate={{
              width: ["0%", "100%", "0%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}
      </div>
    </div>
  );
}
