"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>)  => {
    const routes = [
            "Company Details",
            "Customer Types",
            "Discounts",
            "No Sale Reasons",
            "Refund Reasons",
            "Stock Movement Reasons",
            "Tax Rates",
            "Tender Types"
    ]
        const p = usePathname();
      return (
        <div className="flex h-screen bg-black flex-1">
        <div className="max-w-32 min-w-6">
          <div className='bg-gray-800/50 w-full rounded-lg h-full pr-4'>
            {routes.map((r, i) => 
    (<Link href={`${p}/${r.toLowerCase().replaceAll(" ", "_")}`} key={i} className="flex text-white py-2 px-4 hover:bg-gray-700">
            <span className="text-sm">{r}</span>
            </Link>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <div className='w-full rounded-lg h-full bg-gray-700/30 overflow-scroll'>
            {children}
          </div>
        </div>
      </div>
      );
}

export default layout