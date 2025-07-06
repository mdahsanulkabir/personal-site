import Image from "next/image";
import Link from "next/link";
import rightArrow from "@/app/_images/rightArrow.svg";
import project1 from "@/app/_images/portfolio/project1.png";
import { Footer } from "../_components/Footer";

export default function Portfolio() {
  return (
    <div className="overflow-y-scroll h-screen w-full">

      {/* portfolio */}
      <section className="pt-[120px] pb-[60px] overflow-hidden mt-10 lg:mt-0">

        {/* portfolio heading */}
        <div className="container">
          <div className="flex flex-col">
            <h1 className="text-[24px]/[120%] font-semibold">A collection of my best projects</h1>
            <p className="mt-3">With many years in web development, I acquired extensive experience working on projects across multiple industries and technologies. Let me show you my best creations.</p>
            <Link href="/contact" className="px-3 md:px-6 py-2 my-2 md:py-4 rounded-full flex justify-center items-center gap-2 font-medium text-white bg-[rgb(84,185,137)] w-[150px]">
              <div className="flex gap-3">
                <Image src={rightArrow} alt="right arrow" />
                <span>Hire me</span>
              </div>
            </Link>
          </div>
        </div>

        {/* portfolio body */}
        <div className="container">
          <div>
            {/* portfolio categories */}
            <ul className="flex gap-3 gap:md-6 justify-center flex-wrap p-2 pb-5 md:pb-10">

            </ul>
            <div className="flex flex-wrap mt-[-24px] mx-[-12px]">
                    {
                        [0, 1, 2, 3, 4, 5].map(item => (
                            <div key={item} className="flex-[0_0_auto] w-full max-w-full px-[12px] xl:px-[16px] mt-[24px] xl:mt-[32px] xl:w-1/2">
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
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
