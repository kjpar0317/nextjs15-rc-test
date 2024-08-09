"use clients";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimationControls, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";
import useCommon from "@/service/useCommon";
import useBreakpoint from "@/hook/useBreakpoint";
import { MENU_ITEMS, CLOUD_MENU_ITEMS } from "@/constant/menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import ProjectLink from "./ProjectLink";
import ProjectNavigation from "./ProjectNavigation";

const containerVariants = {
  close: {
    width: "5rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    width: "16rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
};

const svgVariants = {
  close: {
    rotate: 360,
  },
  open: {
    rotate: 180,
  },
};

const framerSidebarPanel = {
  initial: { x: "-100%" },
  animate: { x: 0 },
  exit: { x: "-100%" },
  transition: { duration: 0.3 },
};

const framerText = (delay: number) => {
  return {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: {
      delay: 0.5 + delay / 10,
    },
  };
};

const framerIcon = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: {
    type: "spring",
    stiffness: 260,
    damping: 20,
    delay: 1.5,
  },
};

export default function Navigation() {
  const { isOpenSidebar, setOpenSidebar } = useCommon();
  const { isSm, isXs } = useBreakpoint();
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const containerControls = useAnimationControls();
  const svgControls = useAnimationControls();

  useEffect(() => {
    if (isOpenSidebar) {
      containerControls.start("open");
      svgControls.start("open");
    } else {
      containerControls.start("close");
      svgControls.start("close");
    }
  }, [isOpenSidebar]);

  useEffect(() => {
    if (isXs || isSm) {
      setOpenSidebar(false);
    } else {
      setOpenSidebar(true);
    }
  }, [isXs, isSm]);

  const handleOpenClose = () => {
    setOpenSidebar(!isOpenSidebar);
    setSelectedProject(null);
  };

  return (
    <>
      <motion.nav
        variants={containerVariants}
        animate={containerControls}
        initial="close"
        className="bg-neutral-900 flex flex-col z-30 gap-12 p-5 absolute top-0 left-0 h-full shadow shadow-neutral-600"
      >
        <div className="flex flex-row w-full justify-between place-items-center">
          {/* <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-700 rounded-full" /> */}
          <Avatar
            className={cn("w-10 h-10", isOpenSidebar ? "flex" : "hidden")}
          >
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Button
            className={cn(
              "p-1 rounded-full bg-neutral-900",
              isXs || isSm ? "hidden" : "flex"
            )}
            onClick={() => handleOpenClose()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-8 h-8 stroke-neutral-200"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={svgVariants}
                animate={svgControls}
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </Button>
        </div>
        <div className="flex flex-col gap-3">
          <AnimatePresence>
            <motion.div {...framerSidebarPanel} aria-label="Sidebar">
              <ul>
                {MENU_ITEMS.map((item, idx) => {
                  const { title, href, Icon } = item;
                  return (
                    <li key={title} className="w-full">
                      <Link
                        href={href}
                        className="flex items-center justify-between gap-5 p-4 transition-all border-b-2 hover:bg-zinc-500 border-zinc-800 text-gray-300"
                      >
                        <motion.span
                          {...framerText(idx)}
                          className={cn("", isOpenSidebar ? "flex" : "hidden")}
                        >
                          {title}
                        </motion.span>
                        <motion.div {...framerIcon}>
                          <Icon className="text-2xl" />
                        </motion.div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex flex-col gap-3">
          {CLOUD_MENU_ITEMS.map((item: any, index: number) => (
            <ProjectLink
              key={index}
              name={item.title}
              setSelectedProject={setSelectedProject}
            >
              {/* <div className="min-w-4 mx-2 border-pink-600 border rounded-full aspect-square bg-pink-700" /> */}
              <Image
                src={item.Icon}
                width={25}
                height={25}
                alt={item.title}
                priority
                className="bg-neutral-600"
              />
            </ProjectLink>
          ))}
          {/* <ProjectLink
            name="Apple Vision Pro"
            setSelectedProject={setSelectedProject}
          >
            <div className="min-w-4 mx-2 border-indigo-600 border rounded-full aspect-square bg-indigo-700" />
          </ProjectLink>
          <ProjectLink name="Porsche" setSelectedProject={setSelectedProject}>
            <div className="min-w-4 mx-2 border-cyan-600 border rounded-full aspect-square bg-cyan-700" />
          </ProjectLink>
          <ProjectLink
            name="Secret Project"
            setSelectedProject={setSelectedProject}
          >
            <div className="min-w-4 mx-2 border-yellow-600 border rounded-full aspect-square bg-yellow-700" />
          </ProjectLink> */}
        </div>
      </motion.nav>
      <AnimatePresence>
        {selectedProject && (
          <ProjectNavigation
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
            isOpen={isOpenSidebar}
          />
        )}
      </AnimatePresence>
    </>
  );
}
