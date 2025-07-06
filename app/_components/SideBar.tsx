import Image from "next/image";
import Link from "next/link";
import profile from "@/app/_images/profile.webp"
import rightArrow from "@/app/_images/rightArrow.svg";
import SideBarMenuButtons from "./SideBarMenuButtons";

export const SideBar = () => {
    return (
        <div className="w-[300px] h-screen py-10 px-5 hidden lg:block">
            <div className="overflow-y-auto w-full h-full">
                <div className="flex flex-col justify-between h-full text-center">
                    <div>
                        {/* profile */}
                        <div>
                            <Image src={profile} alt="profile image" className="rounded-full" />
                        </div>
                        <h4 className="mt-2 font-semibold text-[24px]/[120%]">Md Ahsanul Kabir</h4>
                        <p>Software Developer</p>
                        {/* divider */}
                        <div className="h-[1px] w-full my-4 md:my-8 bg-gray-200"></div>
                        {/* menu-list */}
                        <ul className="flex flex-col gap-3">
                            <SideBarMenuButtons linkto="/" label="About Me" pathName='/'/>
                            <SideBarMenuButtons linkto="/portfolio" label="Portfolio" pathName='/portfolio'/>
                            <SideBarMenuButtons linkto="/resume" label="Resume" pathName='/resume'/>
                            <SideBarMenuButtons linkto="/blog" label="Blogs" pathName='/blog'/>
                            <SideBarMenuButtons linkto="/contact" label="Contact" pathName='/contact'/>
                        </ul>
                    </div>
                    <Link href="/contact" className="px-3 mx-auto md:px-2 py-2 md:py-4 rounded-full  font-medium text-white bg-[rgb(84,185,137)] md:w-[150px] flex items-center justify-center">
                        <div className="flex gap-3 justify-center">
                            <Image src={rightArrow} alt="right arrow" />{" "}
                            <span>Hire Me</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
