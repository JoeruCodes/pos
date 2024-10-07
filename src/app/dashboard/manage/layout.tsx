"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";
import { FaFolderOpen, FaHome } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>)  => {
    const routes = [
            "Category",
            "Customer",
            "Misc Products",
            "Product"
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