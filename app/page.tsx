"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Main() {
  const router = useRouter();
  useEffect(() => {
    if (1 == 1) {
      router.replace("/admin");
    } else {
      router.replace("/auth/signin");
    }
  }, []);

  return <></>;
}
