"use client";
import { MainNav } from "@/components/Navbar/components/MainNav";
import { UserNav } from "@/components/UserNav";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="border-b ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">

        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          Logo
        </h1>

        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <UserNav />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
