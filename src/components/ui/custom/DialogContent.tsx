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
  onClose?: () => void;
}

export default function DialogContent({
  title,
  subTitle = "",
  children,
  onClose,
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
          <DialogDescription>
            <TextAnimation text={subTitle} />
          </DialogDescription>
        </DialogHeader>
        <Suspense fallback={<CardSkeleton />}>{children}</Suspense>
        <DialogFooter>
          {onClose && <Button onClick={() => onClose()}>Close</Button>}
        </DialogFooter>
      </RootWrapAnimation>
    </OrgDialogContent>
  );
}
