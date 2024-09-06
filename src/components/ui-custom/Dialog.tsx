import { cn } from "@/lib/utils";
import {
  Dialog as OrgDialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import TextAnimation from "@/components/animation/TextAnimation";
import CardSkeleton from "@/components/skeleton/CardSkeleton";
import RootWrapAnimation from "@/components/animation/RootWrapAnimation";

interface DialogProps {
  key: React.Key;
  open: boolean;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  loading?: boolean;
  className?: string;
  onClose?: () => void;
}

export default function Dialog({
  key,
  open,
  title,
  subtitle,
  children,
  loading = false,
  className,
  onClose,
}: Readonly<DialogProps>) {
  console.log(open);
  return (
    <OrgDialog open={open}>
      <DialogContent className={cn("", className)}>
        <RootWrapAnimation parallel>
          <DialogHeader>
            {title && (
              <DialogTitle>
                <TextAnimation text={title} />
              </DialogTitle>
            )}
            <DialogDescription aria-describedby={title}>
              <TextAnimation text={subtitle ?? ""} />
            </DialogDescription>
          </DialogHeader>
          {(!loading && <>{children}</>) || <CardSkeleton />}
          <DialogFooter>
            {onClose && <Button type="submit">닫기</Button>}
          </DialogFooter>
        </RootWrapAnimation>
      </DialogContent>
    </OrgDialog>
  );
}
