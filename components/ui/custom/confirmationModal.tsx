import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export function ConfirmationModal({
  trigger,
  className,
  title,
  description,
  handleConfirm,
}: {
  trigger: string;
  className: string;
  title: string;
  description: string;
  handleConfirm: () => void;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className={className} variant="outline">
          {trigger}
          <Trash2 />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="!border-destructive bg-destructive focus:bg-primary-foreground focus:text-destructive hover:bg-primary-foreground hover:text-destructive focus-visible:ring-destructive/20 border"
            onClick={handleConfirm}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
