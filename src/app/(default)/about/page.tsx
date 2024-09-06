import { use } from "react";
import Image from "next/image";
import { trpcClient } from "@/server/router";

import RootWrapAnimation from "@/components/animation/RootWrapAnimation";
import { Button } from "@/components/ui/button";
import Label from "@/components/ui-custom/Label";
import { Input } from "@/components/ui/input";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DialogContent from "@/components/ui-custom/DialogContent";
import NumberAnimation from "@/components/animation/NumberAnimation";
import StaggerTest from "@/components/feature/StaggerTest";
import RotatingAroundDivAnimation from "@/components/animation/RotatingAroundDivAnimation";
import Movie from "@/components/feature/Movie";

export default function AboutPage() {
  const test = use(trpcClient.hello.query("world"));

  return (
    <RootWrapAnimation>
      <div>
        <NumberAnimation to={50000} />
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile {test}</Button>
        </DialogTrigger>
        <DialogContent
          title="Test"
          subTitle={
            "Make changes to your profile here. Click save when you're done."
          }
        >
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                defaultValue="Pedro Duarte"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                defaultValue="@peduarte"
                className="col-span-3"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <StaggerTest />
      <RotatingAroundDivAnimation height="mt-3 w-[400px] h-[210px]">
        <Card className="w-[400px] h-[230px]">
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
        <Movie />
      </RotatingAroundDivAnimation>
    </RootWrapAnimation>
  );
}
