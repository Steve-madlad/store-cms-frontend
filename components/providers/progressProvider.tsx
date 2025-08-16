"use client";

import { ProgressProvider as AppProgressProvider } from "@bprogress/next/app";
import { ReactNode } from "react";

export default function ProgressProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <AppProgressProvider options={{ showSpinner: false }} color="black">
      {children}
    </AppProgressProvider>
  );
}
