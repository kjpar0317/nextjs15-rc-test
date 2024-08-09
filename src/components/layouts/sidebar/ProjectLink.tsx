"use client";

import { IoChevronForwardSharp } from "react-icons/io5";

import { cn } from "@/lib/utils";
import useCommon from "@/service/useCommon";

interface ProjectLinkProps {
  children: React.ReactNode;
  name: string;
  setSelectedProject: (val: string | null) => void;
}

export default function ProjectLink({
  children,
  name,
  setSelectedProject,
}: Readonly<ProjectLinkProps>) {
  const { isOpenSidebar } = useCommon();

  const handleClick = () => {
    setSelectedProject(null);
    setTimeout(() => {
      setSelectedProject(name);
    }, 250);
  };
  return (
    <a
      href="#"
      onClick={handleClick}
      className="flex p-1 rounded cursor-pointer stroke-[0.75] hover:stroke-neutral-100 stroke-neutral-400 text-neutral-400 hover:text-neutral-100 place-items-center gap-3 hover:bg-neutral-700/30 transition-colors duration-100"
    >
      {children}
      <div
        className={cn(
          "overflow-clip place-items-center justify-between w-full",
          isOpenSidebar ? "flex" : "hidden"
        )}
      >
        <p className="text-inherit truncate whitespace-nowrap tracking-wide">
          {name}
        </p>
        <IoChevronForwardSharp className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
      </div>
    </a>
  );
}
