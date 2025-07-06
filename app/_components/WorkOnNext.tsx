import Image from "next/image";
import Link from "next/link";
// import bg from "@/app/_images/bg.png"
import rightArrow from "@/app/_images/rightArrow.svg";

export const WorkOnNext = () => {
  return (
    <section className="py-[50px] work_on_next">
      <div className="container flex gap-3 flex-wrap justify-between items-center">
        <div className="text-white">
          <h3 className="text-[32px]/[120%] font-semibold mb-2">
            Let&apos;s work together on your next project
          </h3>
          <p>
            I am available for freelance projects. Hire me and get your project
            done.
          </p>
        </div>
        <Link
          href="/portfolio"
          className="px-3 md:px-6 py-2 md:py-4 rounded-full flex items-center gap-2 font-medium text-white bg-[rgb(84,185,137)]"
        >
          <div className="flex gap-3">
            <Image src={rightArrow} alt="right arrow" />{" "}
            <span>Lets get in touch</span>
          </div>
        </Link>
      </div>
    </section>
  );
};
