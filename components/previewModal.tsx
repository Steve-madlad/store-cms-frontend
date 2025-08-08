"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import usePreviewModal from "@/hooks/usePreviewModal";
import ProductView from "./productView";

export default function PreviewModal() {
  const { isOpen, onClose, data } = usePreviewModal();

  return (
    <Dialog open={isOpen} onOpenChange={(value) => !value && onClose()}>
      <DialogContent className="max-h-125 w-11/12 overflow-y-auto sm:max-h-max sm:!max-w-2xl lg:!max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">Preview</DialogTitle>
        </DialogHeader>

        {data && (
          <ProductView
            className="col container mx-auto pb-5 sm:!flex-row sm:py-0"
            product={data}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
