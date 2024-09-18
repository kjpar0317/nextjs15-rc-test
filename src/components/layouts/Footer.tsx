"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { trpcClient } from "@/lib/trpc";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const router = useRouter();

  async function handleLogout() {
    await trpcClient.auth.logout.mutate();
    router.push("/");
  }

  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/home"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/file-text.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        Home
      </Link>
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/form"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/window.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        From Test
      </Link>
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/about"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        About
      </Link>
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/#"
        rel="noopener noreferrer"
        onClick={handleLogout}
      >
        Logout
      </Link>
      <Button loading={true}>ddddd</Button>
    </footer>
  );
}
