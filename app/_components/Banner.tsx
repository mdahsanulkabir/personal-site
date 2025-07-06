import Image from "next/image";
import Link from "next/link";
import profileImage from '@/app/_images/profile.webp'
import rightArrow from "@/app/_images/rightArrow.svg";

export const Banner = () => {
    return (
        <section id='banner-section' className="pt-[120px] pb-[60px] overflow-hidden mt-10 lg:mt-0">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center lg:justify-between gap-10">
                    {/* Banner Content */}
                    <div className="w-full lg:w-[470px]">
                        <h3 className="text-[20px]/[130%]">HI, I&apos;M A FREELANCER</h3>
                        <h2 className="mt-2 mb-3 text-[56px]/[120%]">Developer</h2>
                        <p>
                            I&apos;m a software engineer specializing in scalable web apps.
                            Explore my <Link href="/blog">blog</Link>, <Link href="/portfolio">project portfolio</Link>, and <Link href="/resume">online resume</Link>.
                        </p>
                        {/* CTA */}
                        <div className="flex flex-wrap items-center gap-3 md:gap-6 mt-4 md:mt-6">
                            <Link href="/portfolio" className="px-3 md:px-6 py-2 md:py-4 rounded-full flex items-center gap-2 font-medium text-white bg-[rgb(84,185,137)]">
                                <div className="flex gap-3">
                                    <Image src={rightArrow} alt="right arrow" />
                                    <span>View Portfolio</span>
                                </div>
                            </Link>
                            <Link href="/resume" className="px-3 md:px-6 py-2 md:py-4 rounded-full flex items-center gap-2 font-medium text-white bg-[rgb(41,41,41)]">
                                <div className="flex gap-3">
                                    <Image src={rightArrow} alt="right arrow" />
                                    <span>View Resume</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    {/* Profile Image */}
                    <div className="relative md:ml-auto">
                        <Image
                            src={profileImage}
                            // width={280}
                            // height={200}
                            alt="Picture of the author"
                            className="rounded-xl min-w-[250px] h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
