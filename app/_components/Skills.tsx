import Link from "next/link";
// import SkillCardContainer from "./SkillCardContainer";
// import SkillCard from "./SkillCard";
import rightArrow from "@/app/_images/rightArrow.svg";
import Image from "next/image";
import js from "@/app/_images/js.png";

export const Skills = () => {
  return (
    <section id="skills-section" className="py-[120px] order border-solid border-[rgba(79,79,79,0.08)]">
      <div className="container">
      {/* <div className="2xl:max-w-[1320px] mx-auto w-full pr-3 px-3"> */}
        <div className="flex gap-3 flex-wrap justify-between items-end mb-8">
          <div className="w-full">
            <div className="flex items-center gap-2">
              <div className="w-1 h-[40px] bg-[rgb(84,185,137)]"></div>
              <h2 className="text-[32px]/[120%] font-semibold">What I do</h2>
            </div>
            <p className="text-[rgba(79,79,79,1)] mt-2">
              I have more than 10 years&apos; experience building software for
              clients all over the world. Below is a quick overview of my main
              technical skill sets and technologies I use. Want to find out more
              about my experience? Check out my online resume and project
              portfolio.
            </p>
          </div>
          <Link
            href="#"
            className="cursor-pointer relative z-1 justify-center text-white text-[16px] min-w-[120px] bg-[rgb(84,185,137)] rounded-full px-6 py-4"
          >
            <div className="flex gap-3">
              <Image src={rightArrow} alt="right arrow" />{" "}
              <span>Services and pricing</span>
            </div>
          </Link>
        </div>
        {/* cards container start */}
        <div className="flex flex-wrap mt-[-24px] mx-[-12px]">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="flex-[0_0_auto] w-full max-w-full px-[12px] mt-[24px] sm:w-1/2 lg:w-1/3 xl:w-1/4">
              <div className="border border-solid border-[rgba(143,143,143,0.25)] px-4 lg:px-8 py-5 lg:py-10  hover:border hover:border-[rgb(84,185,137)] hover:shadow-[0_20px_50px_0_rgba(0,0,0,0.16)] transition duration-300">
                <Image src={js} alt="Js image" height="28" width="28" />
                <h4 className="font-medium mt-6 mb-3 text-[20px]/[120%]">Vanilla Javascript</h4>
                <p className="text-[18px]/[130%] text-[rgb(79,79,79)]">
                  List skills and technologies here. Customize as needed. Built
                  on HTML5, Sass, and Bootstrap 5.
                </p>
              </div>
            </div>
          ))}

          {/* <div className="flex md:w-1/3 lg:w-1/3 xl:w-1/4">
            <div className="border border-solid border-gray-500 px-4 py-5">
              <Image src={js} alt="Js image" height="28" width="28" />
              <h4 className="font-medium mt-3 mb-2">Vanilla Javascript</h4>
              <p>
                List skills and technologies here. Customize as needed. Built on
                HTML5, Sass, and Bootstrap 5.
              </p>
            </div>
          </div>

          <div className="flex md:w-1/3 lg:w-1/3 xl:w-1/4">
            <div className="border border-solid border-gray-500 px-4 py-5">
              <Image src={js} alt="Js image" height="28" width="28" />
              <h4 className="font-medium mt-3 mb-2">Vanilla Javascript</h4>
              <p>
                List skills and technologies here. Customize as needed. Built on
                HTML5, Sass, and Bootstrap 5.
              </p>
            </div>
          </div>

          <div className="flex md:w-1/3 lg:w-1/3 xl:w-1/4">
            <div className="border border-solid border-gray-500 px-4 py-5">
              <Image src={js} alt="Js image" height="28" width="28" />
              <h4 className="font-medium mt-3 mb-2">Vanilla Javascript</h4>
              <p>
                List skills and technologies here. Customize as needed. Built on
                HTML5, Sass, and Bootstrap 5.
              </p>
            </div>
          </div>*/}
        </div> 
        {/* cards container end */}
      </div>
    </section>
  );
};
