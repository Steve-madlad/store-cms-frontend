import { useEffect, useState } from "react";

export const useLocal = () => {
  const [mounted, setMounted] = useState(false);

  const local =
    typeof window !== "undefined" && window.localStorage
      ? window.localStorage
      : "";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return "";
  }

  return local;
};
