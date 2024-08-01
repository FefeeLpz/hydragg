"use client"

import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Profile = () => {
    return (
      <section className="flex flex-col overflow w-full bg-neutral-900 p-7 rounded-2xl border border-neutral-800">
        <div className='flex justify-center items-center'>
          <h2 className="text-white font-normal text-2xl mr-3">
              Welcome, fefefe!
          </h2>
          <Avatar className="">
            <AvatarImage src="/avatar.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className='flex justify-center items-center flex-col'>
          <h2 className='text-white font-normal text-xl mt-4'>
            In this Dashboard you can manage your account, upgrade your plan and redeem keys.
          </h2>
          <h2 className='text-white font-normal mt-4'>
            Look at the left side of the screen to navigate through the sections.
          </h2>
        </div>
        
      </section>
    );
  }
  
  export default Profile;