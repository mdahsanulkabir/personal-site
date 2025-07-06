import Image from "next/image";
import Link from "next/link";
import rightArrow from "@/app/_images/rightArrow.svg";
import { Footer } from "../_components/Footer";
import profileImage from '@/app/_images/profile.webp'
import SocialLink from "./_components/SocialLink";
import github from "@/app/_images/svgs/github.svg"
// import linkedIn from "@/app/_images/svgs/linkedin.svg"
import linkedIn1 from "@/app/_images/svgs/linkedin (1).svg"
import xIcon from "@/app/_images/svgs/twitter-x.svg"

export default function Resume() {
  return (
    <div className="overflow-y-scroll h-screen w-full">
      <section className="pt-[120px] pb-[60px] overflow-hidden mt-10 lg:mt-0">

        {/* resume heading */}
        <div className="container">
          <div className="flex flex-col items-center">
            <h1 className="text-[24px]/[120%] sm:text-[32px] font-semibold">Online Resume</h1>
            <Link href="/contact" className="px-3 md:px-6 py-2 my-2 md:py-4 rounded-full flex justify-center items-center gap-2 font-medium text-white bg-[rgb(84,185,137)] w-[300px]">
              <div className="flex gap-3 items-center">
                <Image src={rightArrow} alt="right arrow" />
                <span>Download PDF Version</span>
              </div>
            </Link>
          </div>


          {/* resume detail */}
          <div className="container mt-8 md:mt-10">


            <div className="p-4 sm:p-8 md:p-10 rounded-xl">

              {/* name and contact info */}
              <div className="flex flex-wrap justify-between items-start gap-3 border-b border-gray-100">
                <div>
                  <h2 className="text-[32px]/[120%] sm:text-[42px] font-semibold text-[rgb(54,148,102)]">Ahsanul Kabir</h2>
                  <span className="font-medium">Software Developer</span>
                </div>
                <div className="ps-5 border-l border-l-gray-300">
                  <ul className="flex flex-col gap-3">
                    <li>
                      <a href="tel:+6494461709" className="flex gap-2 items-center">
                        0123 4567 890</a>
                    </li>
                    <li>
                      <a href="mailto:someone@example.com" className="flex gap-2 items-center">
                        Evans@yourwebsite.com</a>
                    </li>
                    <li>
                      <a href="tel:+6494461709" className="flex gap-2 items-center">
                        0123 4567 890</a>
                    </li>
                    <li>
                      <a href="mailto:someone@example.com" className="d-flex gap-2 items-center">
                        Evans@yourwebsite.com</a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* career summary */}
              <div className="flex flex-wrap items-center gap-5 pb-4 pt-[60px]">
                <div className="w-[120px] h-auto m-auto rounded-[50%] overflow-hidden flex justify-centerd flex-shrink-0">
                  <Image src={profileImage} alt="pofile pic" className="max-w-full object-cover h-auto" />
                </div>
                <p className="text-justify">Summarise your career here. You can make a PDF version of your resume using our free Sketch template here. Donec quam felis, ultricies nec, pellentesque eu. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.</p>
              </div>

              {/* main resume secton */}
              <div className="flex flex-wrap md:flex-nowrap mt-6 py-10 border-b border-b-[rgba(79,79,79.08)]">
                <div className="mr-6">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-1 h-[38px] bg-[rgb(84,182,137)]"></div>
                    <h2 className="text-[26px]/[130%] text-[rgba(84,182,137,1)] font-semibold">Work Experience</h2>
                  </div>
                  {/* work exp 1 */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 justify-between items-center">
                      <span className="font-medium">Software Engineer</span>
                      <span>Google | 2023 - Present</span>
                    </div>
                    <p className="my-2 text-justify">Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis</p>
                    <ul className="flex flex-col gap-3 ms-6">
                      <li className="list-disc text-[16px]/[130%]">Lorem ipsum dolor sit amet, consectetuer.</li>
                      <li className="list-disc text-[16px]/[130%]">Aenean commodo ligula eget dolor.</li>
                      <li className="list-disc text-[16px]/[130%]">Etiam ultricies nisi vel augue.</li>
                    </ul>
                  </div>
                  {/* work exp 2 */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 justify-between items-center">
                      <span className="font-medium">Lead Software Developer</span>
                      <span>Apple | 2016 - 2019</span>
                    </div>
                    <p className="my-2 text-justify">Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis</p>
                    <ul className="flex flex-col gap-3 ms-6">
                      <li className="list-disc text-[16px]/[130%]">Lorem ipsum dolor sit amet, consectetuer.</li>
                      <li className="list-disc text-[16px]/[130%]">Aenean commodo ligula eget dolor.</li>
                      <li className="list-disc text-[16px]/[130%]">Etiam ultricies nisi vel augue.</li>
                    </ul>
                  </div>
                  {/* work exp 1 */}
                  <div className="mb-5">
                    <div className="flex flex-wrap gap-1 justify-between items-center">
                      <span className="font-medium">Software Engineer</span>
                      <span>Google | 2023 - Present</span>
                    </div>
                    <p className="my-2 text-justify">Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis</p>
                    <ul className="flex flex-col gap-3 ms-6">
                      <li className="list-disc text-[16px]/[130%]">Lorem ipsum dolor sit amet, consectetuer.</li>
                      <li className="list-disc text-[16px]/[130%]">Aenean commodo ligula eget dolor.</li>
                      <li className="list-disc text-[16px]/[130%]">Etiam ultricies nisi vel augue.</li>
                    </ul>
                  </div>
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-1 h-[38px] bg-[rgb(84,182,137)]"></div>
                    <h2 className="text-[26px]/[130%] text-[rgba(84,182,137,1)] font-semibold">Projects</h2>
                  </div>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 justify-between items-center">
                      <span className="font-medium">Project Something</span>
                      <span>Open sourced</span>
                    </div>
                    <p className="my-2 text-justify">Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis</p>
                  </div>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 justify-between items-center">
                      <span className="font-medium">Project Another</span>
                      <span>Open sourced</span>
                    </div>
                    <p className="my-2 text-justify">Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis</p>
                  </div>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 justify-between items-center">
                      <span className="font-medium">Project Current</span>
                      <span>Open sourced</span>
                    </div>
                    <p className="my-2 text-justify">Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis</p>
                  </div>

                </div>

                {/* right side */}
                <div className="">
                  <div className="border-l border-l-[rgba(143,143,143,1)] pl-4 flex flex-col gap-8">
                    {/* skills */}
                    <div>
                      <div className="flex items-center gap-2 mb-5">
                        <div className="w-1 h-[38px] bg-[rgb(84,182,137)]"></div>
                        <h2 className="text-[26px]/[130%] text-[rgba(84,182,137,1)] font-semibold">Skills</h2>
                      </div>
                      <div className="mb-3">
                        <h5 className="font-medium mb-2">Technical</h5>
                        <ul className="flex flex-col gap-3 ml-6">
                          <li className="list-disc">JavaScript/React/Vue</li>
                          <li className="list-disc">Python/Ruby/PHP</li>
                          <li className="list-disc">Node.js/ASP.NET</li>
                          <li className="list-disc">PostgreSQL/MySQL</li>
                          <li className="list-disc">Object-oriented design</li>
                          <li className="list-disc">Design and implement database structure</li>
                          <li className="list-disc">Lead and deliver complex software system</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2 text-[16px]/[130%]">Professional</h5>
                        <ul className="flex flex-col gap-3 ml-6">
                          <li className="list-disc text-[16px]/[130%]">Effective Communicaton</li>
                          <li className="list-disc text-[16px]/[130%]">Team player</li>
                          <li className="list-disc text-[16px]/[130%]">Strong problem solver</li>
                          <li className="list-disc text-[16px]/[130%]">Good time management</li>
                        </ul>
                      </div>
                    </div>

                    {/* education */}
                    <div>
                      <div className="flex items-center gap-2 mb-5">
                        <div className="w-1 h-[38px] bg-[rgb(84,182,137)]"></div>
                        <h2 className="text-[26px]/[130%] text-[rgba(84,182,137,1)] font-semibold">Education</h2>
                      </div>
                      <div className="flex gap-2 mb-3">
                        <i></i>
                        <div>
                          <span className="text-[16px]/[130%] block">Masters in Business Administration (Finance)</span>
                          <span className="text-[10px]/[130%] block">2009 - 2013</span>
                        </div>
                      </div>
                      <div className="flex gap-2 mb-3">
                        <i></i>
                        <div>
                          <span className="text-[16px]/[130%] block">BSc in Mechanical Engineering</span>
                          <span className="text-[10px]/[130%] block">1999 - 2004</span>
                        </div>
                      </div>
                    </div>

                    {/* language */}
                    <div>
                      <div className="flex items-center gap-2 mb-5">
                        <div className="w-1 h-[38px] bg-[rgb(84,182,137)]"></div>
                        <h2 className="text-[26px]/[130%] text-[rgba(84,182,137,1)] font-semibold">Language</h2>
                      </div>
                      <ul className="flex flex-col gap-3 ml-6">
                        <li className="list-disc text-[16px]/[130%]">Bangla (Native)</li>
                        <li className="list-disc text-[16px]/[130%]">English (Professional)</li>
                      </ul>
                    </div>

                    {/* interests */}
                    <div>
                      <div className="flex items-center gap-2 mb-5">
                        <div className="w-1 h-[38px] bg-[rgb(84,182,137)]"></div>
                        <h2 className="text-[26px]/[130%] text-[rgba(84,182,137,1)] font-semibold">Interests</h2>
                      </div>
                      <ul className="flex flex-col gap-3 ml-6">
                        <li className="list-disc text-[16px]/[130%]">Snlow boarding</li>
                        <li className="list-disc text-[16px]/[130%]">Climbing</li>
                        <li className="list-disc text-[16px]/[130%]">Photography</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 md:gap-5 items-center justify-center mt-4 md:mt-8">
                <SocialLink linkAddress="https://github.com/mdahsanulkabir" label="github.com/mdahsanulkabir">
                  <Image src={github} alt="github icon"/>
                </SocialLink>
                <SocialLink linkAddress="https://www.linkedin.com/in/mohammed-ahsanul-kabir-9313741b/" label="linkedin.com/in/mohammed-ahsanul-kabir/">
                <Image src={linkedIn1} alt="linkedin icon"/>
                </SocialLink>
                <SocialLink linkAddress="https://x.com/AhsanulKabir98" label="@AhsanulKabir98">
                <Image src={xIcon} alt="x icon"/>
                </SocialLink>
              </div>

            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
