"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SideBarMenuButtonProps {
    linkto: string;
    label: string;
    pathName: string;
}

const SideBarMenuButtons = ({linkto, label, pathName}: SideBarMenuButtonProps) => {
    const pathname = usePathname()
    return (
        <li className={`rounded-lg border border-gray-500 py-2 cursor-pointer hover:bg-[rgb(84,185,137)] hover:text-white transition-all duration-300 ease-in-out ${pathname === pathName ? 'active' : ''}`}>
            <Link className="px-3 py-2" href={linkto}>{label}</Link>
        </li>
    );
};

export default SideBarMenuButtons;