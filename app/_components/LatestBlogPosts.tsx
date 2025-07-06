import Image from "next/image";
import Link from "next/link";
import rightArrow from "@/app/_images/rightArrow.svg";
// import SkillCardContainer from "./SkillCardContainer";
// import SkillCard from "./SkillCard";
import blog1 from "@/app/_images/blog/blog1.png"
// import blog2 from "@/app/_images/blog/blog2.png"
// import blog3 from "@/app/_images/blog/blog3.png"

export const LatestBlogPosts = () => {
    return (
        <section className="py-[50px] border border-solid border-[rgba(79,79,79,0.08)]">
            <div className="container">
                <div className="flex gap-3 flex-wrap justify-between items-end mb-8">
                    <div className="w-full">
                        <div className="flex items-center gap-2">
                            <div className="w-1 h-[40px] bg-[rgb(84,185,137)]"></div>
                            <h2 className="text-[32px]/[120%] font-semibold">Latest Blog Posts</h2>
                        </div>
                        <p className="text-[rgba(79,79,79,1)] mt-2">More than 1500+ agencies using Portfolify.</p>
                    </div>
                    <Link
                        href="/blog"
                        className="cursor-pointer relative z-[1] justify-center text-white text-[16px] min-w-[120px] bg-[rgb(84,185,137)] rounded-full px-6 py-4"
                    >
                        <div className="flex gap-3">
                            <Image src={rightArrow} alt="right arrow" />{" "}
                            <span>See All Articles</span>
                        </div>
                    </Link>
                </div>
                {/* cards container start */}
                <div className="flex flex-wrap mt-[-24px] mx-[-12px]">
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
                {/* cards container end */}
            </div>
        </section>
    );
};