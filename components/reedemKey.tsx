"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const ReedemKey = () => {
    return (
      <section className="flex flex-col overflow w-full bg-neutral-900 p-7 rounded-2xl border border-neutral-800">
          <h2 className="text-white font-normal text-2xl">
              Reedem Key
          </h2>
          <div className="flex w-full max-w-sm items-center space-x-2 mt-5">
            <Input type="key" placeholder="Input a Key" />
            <Button type="submit">Redeem</Button>
          </div>
      </section>
    );
  }
  
  export default ReedemKey;