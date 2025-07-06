import rightArrow from "@/app/_images/rightArrow.svg";
import Image from "next/image";
import Link from "next/link";
import project1 from "@/app/_images/portfolio/project1.png";

export const FeaturedProjects = () => {
    return (
        <section className="py-[50px] border border-solid border-[rgba(79,79,79,0.08)]">
            <div className="container">
                <div className="flex gap-3 flex-wrap justify-between items-end mb-8">
                    <div className="w-full">
                        <div className="flex items-center gap-2">
                            <div className="w-1 h-[40px] bg-[rgb(84,185,137)]"></div>
                            <h2 className="text-[32px]/[120%] font-semibold">Featured Projects</h2>
                        </div>
                        <p className="text-[rgba(79,79,79,1) mt-2">
                            My step-by-step guide ensures a smooth project journey, from the initial consultation to the final delivery. I take care of every detail, allowing you to focus on what you do best.
                        </p>
                    </div>
                    <Link href="/portfolio" className="px-3 md:px-6 py-2 md:py-4 rounded-full flex items-center gap-2 font-medium text-white bg-[rgb(84,185,137)]">
                        <div className="flex gap-3">
                            <Image src={rightArrow} alt="right arrow" />{" "}
                            <span>View Portfolio</span>
                        </div>
                    </Link>
                </div>
                {/* cards container start */}
                <div className="flex flex-wrap mt-[-24px] mx-[-12px]">
                    {
                        [0, 1, 2, 3, 4, 5].map(item => (
                            <div key={item} className="flex-[0_0_auto] w-full max-w-full px-[12px] xl:px-[16px] mt-[24px] xl:mt-[32px] xl:w-1/2 2xl:w-1/3">
                            {/* <div key={item} className="flex-shrink-0 w-full max-w-full px-[12px] xl:px-[16px] mt-[24px] xl:mt-[32px] xl:flex-[0_0_auto] xl:w-1/2 "> */}
                                <div className="w-full lg:max-w-[720px] lg:mx-auto">
                                    <Link href="/portfolio" className="relative block overflow-hidden ">
                                        <div className="w-full">
                                            <div>
                                                <Image src={project1} className="w-full" alt="project1" />
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="flex justify-between gap-2 items-center pt-4 px-3">
                                        <div className="">
                                            <div className="flex flex-wrap gap-2 items-center">
                                                {
                                                    ["React JS", "gsap", "Web Dev"].map(item => (
                                                        <Link
                                                            key={item}
                                                            href="#"
                                                            className="px-2 py-1 rounded-[50rem] font-medium border border-solid border-[rgba(143,143,143,1)] text-[11px]"
                                                        >
                                                            {item}
                                                        </Link>
                                                    ))
                                                }
                                            </div>
                                            <Link href="#" className="font-semibold mt-3 block text-[24px]/[120%]">
                                                Crypto website development
                                            </Link>
                                        </div>
                                        <Link
                                            href="#"
                                            className="flex items-center justify-between flex-shrink-0"
                                        >
                                            link
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/* cards container end */}
            </div>
        </section>
    );
};
