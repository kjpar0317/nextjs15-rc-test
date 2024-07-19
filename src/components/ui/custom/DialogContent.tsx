import type { ReactNode } from "react";

import { Suspense } from "react";

import {
  DialogContent as OrgDialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import TextAnimation from "@/components/animation/TextAnimation";
import CardSkeleton from "@/components/skeleton/CardSkeleton";
import RootWrapAnimation from "@/components/animation/RootWrapAnimation";

export interface DialogContentProps {
  title?: string;
  subTitle?: string;
  children?: ReactNode;
}

export default function DialogContent({
  title,
  subTitle,
  children,
}: Readonly<DialogContentProps>) {
  return (
    <OrgDialogContent>
      <RootWrapAnimation parallel>
        <DialogHeader>
          {title && (
            <DialogTitle>
              <TextAnimation text={title} />
            </DialogTitle>
          )}
          {subTitle && (
            <DialogDescription>
              <TextAnimation text={subTitle} />
            </DialogDescription>
          )}
        </DialogHeader>
        <Suspense fallback={<CardSkeleton />}>{children}</Suspense>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </RootWrapAnimation>
    </OrgDialogContent>
  );
}
