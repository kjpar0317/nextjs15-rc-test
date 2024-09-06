import type { ReactNode } from "react";

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
  loading?: boolean;
  className?: string;
  children?: ReactNode;
  onClose?: () => void;
}

export default function DialogContent({
  title,
  subTitle,
  loading = false,
  className = "",
  children,
  onClose,
}: Readonly<DialogContentProps>) {
  return (
    <OrgDialogContent className={className}>
      <RootWrapAnimation parallel>
        <DialogHeader>
          {title && (
            <DialogTitle>
              <TextAnimation text={title} />
            </DialogTitle>
          )}
          {/* {subTitle && (
            <DialogDescription aria-describedby={title}>
              <TextAnimation text={subTitle} />
            </DialogDescription>
          )} */}
          <DialogDescription aria-describedby={title}>
            <TextAnimation text={subTitle ?? ""} />
          </DialogDescription>
        </DialogHeader>
        {(!loading && children) || <CardSkeleton />}
        <DialogFooter>
          {onClose && <Button type="submit">닫기</Button>}
        </DialogFooter>
      </RootWrapAnimation>
    </OrgDialogContent>
  );
}
