"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link";

const Manage = () => {
    return (
      <section className="flex flex-col overflow w-full bg-neutral-900 p-7 rounded-2xl border border-neutral-800">
          <h2 className="text-white font-normal text-2xl">
              Manage Account
          </h2>
          <div className="flex items-center mt-4">
            <h2 className="mr-4">
              Welcome, fefefe!
            </h2>
            <Avatar className="">
              <AvatarImage src="/avatar.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col justify-center mt-4">
            <h2 className="">
              Your Plan: Hydra 30 Days
            </h2>
            <h2 className="mt-4">
              Expires in: 8 days
            </h2>
            <div className="mt-4">
              <Link target="_blank" href="https://discord.com/invite/hydragg"> 
                <Button className="rounded-xl hover:bg-neutral-300 hover:text-neutral-950" variant="outline">Upgrade Plan</Button>
              </Link>
            </div>
          </div>
      </section>
    );
  }
  
  export default Manage;