"use client";


import Navbar from "@/components/Navbar";
import { useState } from "react";
import { useSession } from "next-auth/react";

import Sidebar from '../../../components/dashboard/Sidebar';



interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSideBar = (states: boolean) => {
    setSidebarOpen(states)
  }

  const { data: session, status } = useSession();


  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={handleSideBar} status={status} />
        
        <div className="xl:pl-72">
        
          <Navbar event={setSidebarOpen} />

          <main>
            {children}
          </main>

        </div>
      </div>
    </>
  );
}
