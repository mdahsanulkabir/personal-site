"use client";
import Link from "next/link";

interface SocialLinkProps {
    linkAddress: string;
    label: string;
    children: React.ReactNode
}

const SocialLink = ({ linkAddress, label, children }: SocialLinkProps) => {
    return (
        <Link href={linkAddress} passHref className="flex gap-1 items-center" legacyBehavior>
            <a target="_blank" className="flex gap-2 justify-center items-center">
                <div className="self-center">
                    {children}
                </div>
                <span className="self-center">{label}</span>
            </a>
        </Link>
    );
};

export default SocialLink;