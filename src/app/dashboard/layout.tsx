"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { IconType } from 'react-icons';
import { FaFolderOpen, FaHome } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>)  => {

    const routes: {
        icon: IconType,
        route: string,
        name: string
    }[] = [
        {
            icon: FaHome,
            route: "/dashboard",
            name: "Home"
          },{
        icon: FaFolderOpen,
        route: "/dashboard/manage",
        name: "Manage"
      },{
        icon: IoSettingsOutline,
        route: "/dashboard/setup",
        name: "Setup"
      }]
    
      return (
        <div className="flex h-screen bg-black flex-1">
        <div className="max-w-32 min-w-6 p-4 pr-2">
          <div className='bg-gray-800/50 w-full rounded-lg h-full'>
            {routes.map((r, i) => 
            (<Link href={r.route} key={i} className="flex justify-center items-center text-white py-2 px-4 hover:bg-gray-700">
            <r.icon className={"h-6 w-6"}/>
            {usePathname() === "/dashboard" && <span>{r.name}</span>}
          </Link>)
            )}
          </div>
        </div>
        <div className="flex-1 p-4 pl-2">
          <div className='w-full rounded-lg h-full bg-gray-700/30 overflow-scroll'>
            {children}
          </div>
        </div>
      </div>
      );
}

export default layout