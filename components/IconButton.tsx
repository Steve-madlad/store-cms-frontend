import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface IconButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  asChild?: boolean;
  icon?: React.ReactNode;
  iconRight?: boolean;
}

export default function IconButton({
  icon,
  iconRight,
  className,
  ...props
}: IconButtonProps) {
  return (
    <Button
      {...props}
      size={"icon"}
      className={cn(
        className,
        "flex-center cursor rounded-full bg-white shadow-md",
      )}
    >
      {!iconRight && icon} {props.children} {iconRight && icon}
    </Button>
  );
}
