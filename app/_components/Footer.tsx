import Link from "next/link";

export const Footer = () => {
    return (
        <div className="container flex flex-wrap gap-3 justify-center items-center pb-4 text-center mb-16">
            <span className="font-medium text-[16px]/[130%]">
                Designed by <Link href="#" className="text-[16px]/[130%] text-[rgba(41,41,41,1)] font-medium">
                    UIAXIS
                </Link>   
            </span>
            <span className="font-medium text-[16px]/[130%]">
            Copyright © 2024
            <Link href="#" className="text-[16px]/[130%] text-[rgba(41,41,41,1)] font-medium">
                    . All Rights Reserved
                </Link>   
            </span>
        </div>
    );
};