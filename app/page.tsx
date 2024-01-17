"use client";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  if (1 == 1) {
    router.push("/admin");
  } else {
    router.push("/auth/signin");
  }
};

export default Home;
