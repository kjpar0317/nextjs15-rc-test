"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import TextAnimation from "@/components/animation/TextAnimation";

interface ConfirmDialogProps {
  target?: any;
  content: string;
  onOk?: () => void;
  onCancel?: () => void;
}

export default function ConfirmDialog({
  target,
  content,
  onOk,
  onCancel,
}: Readonly<ConfirmDialogProps>) {
  return (
    <AlertDialog open={!!target}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <TextAnimation init={0} text="확인 창" />
          </AlertDialogTitle>
          <AlertDialogDescription>
            <TextAnimation init={0} text={content} />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={() => onOk?.()}>확인</AlertDialogAction>
          <AlertDialogCancel onClick={() => onCancel?.()}>
            취소
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
