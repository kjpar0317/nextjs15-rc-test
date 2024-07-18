import Image from "next/image";

import RootWrapAnimation from "@/components/animation/RootWrapAnimation";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import TextAnimation from "@/components/animation/TextAnimation";

export default function Home() {
  return (
    <RootWrapAnimation>
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="font-mono list-inside list-decimal text-sm text-center sm:text-left">
            <li className="mb-2">
              <TextAnimation text={"Get started by editing "} />

              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                src/app/page.tsx
              </code>
            </li>
            <li>
              <TextAnimation text={"Save and see your changes instantly."} />
            </li>
          </ol>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Deploy now</Button>
          <Button>Read our docs</Button>
        </CardFooter>
      </Card>
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="font-mono list-inside list-decimal text-sm text-center sm:text-left">
            <li className="mb-2">
              Get started by editing{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                src/app/page.tsx
              </code>
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Deploy now</Button>
          <Button>Read our docs</Button>
        </CardFooter>
      </Card>
    </RootWrapAnimation>
  );
}
