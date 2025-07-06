import Link from "next/link";
import myIcon from "@/app/_images/js.png"
import Image from "next/image";

export const TopNavBar = () => {
    return (
        <div className="w-full p-3 fixed z-[3] top-0 bg-[#ffffff] flex items-center justify-between border border-solid border-[rgba(41,41,41,0.1)] lg:hidden">
            <Link href="/">
                <Image src={myIcon} alt="logo" width={28} height={28} />
            </Link>
            <div className="flex gap-3 items-center">
                <Image src={myIcon} alt="logo" width={28} height={28} />
                <Image src={myIcon} alt="logo" width={28} height={28} />
            </div>
        </div>
    );
};