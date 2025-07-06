import Image from "next/image";
import Link from "next/link";
import rightArrow from "@/app/_images/rightArrow.svg";
import blog1 from "@/app/_images/blog/blog1.png"

export default function Blog() {
  return (
    <div className="overflow-y-scroll h-screen w-full">

      {/* blog */}
      <section className="pt-[120px] pb-[60px] overflow-hidden mt-10 lg:mt-0">

        {/* blog heading */}
        <div className="container">
          <div className="pb-[60px] border-b border-b-[rgba(79,79,79,0.08)] mx-3">

              <div className="flex flex-col px-3 xl:px-4">
                <h1 className="text-[24px]/[120%] font-semibold">Blogs About Software Development</h1>
                <p className="mt-3">Welcome to my blog. Subscribe and get my latest blog post in your inbox.</p>
                <Link href="/contact" className="px-3 md:px-6 py-2 my-2 md:py-4 rounded-full flex justify-center items-center gap-2 font-medium text-white bg-[rgb(84,185,137)] w-[150px]">
                  <div className="flex gap-3">
                    <Image src={rightArrow} alt="right arrow" />
                    <span>Hire me</span>
                  </div>
                </Link>
              </div>
 
          </div>
        </div>

        {/* blog list */}
        <div className="container">
          <div className="flex flex-wrap mt-[24px] mx-[12px]">
            {
              [1, 2, 3, 4, 5, 6, 7].map(item => (
                <div key={item} className="flex-[0_0_auto] w-full max-w-full px-[12px] xl:px-[16px] mt-6 xl:mt-[32px] xl:w-1/2 2xl:w-1/3">
                  {/* <div key={item} className="flex-shrink-0 w-full max-w-full px-[12px] xl:px-[16px] mt-6 xl:mt-[32px] xl:flex-[0_0_auto] xl:w-1/2"> */}
                  <div className="w-full lg:max-w-[720px] lg:mx-auto">
                    <Link href="/blog" className="blog-card relative rounded-lg overflow-hidden ">
                      <div className="w-full">
                        <Image src={blog1} alt='blog'
                          // width={366} height={204} 
                          className="rounded-lg w-full"
                        />
                      </div>
                      <div className="p-4 px-3">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-[rgba(79,79,79,1)]">March 15, 2014</span>
                          <span className="text-[rgba(79,79,79,1)]"> - </span>
                          <span className="text-[rgba(79,79,79,1)]">Articles</span>
                        </div>
                        <h4 className="text-[rgba(41,41,41,1)] text-[20px]/[130%] font-semibold">7 Great web development languages to learn</h4>
                      </div>
                    </Link>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  );
}
