import Image from "next/image";
import send from "@/app/_images/svgs/send.svg"
import person from "@/app/_images/svgs/person.svg"
import phone from "@/app/_images/svgs/phone.svg"
import location from "@/app/_images/svgs/geo-alt.svg"
import email from "@/app/_images/svgs/envelope-open.svg"
import Link from "next/link";

export default function Contact() {
  return (
    <div className="overflow-y-scroll h-screen w-full">

      {/* contact */}
      <section className="pt-[120px] pb-[60px] overflow-hidden mt-10 lg:mt-0">

        {/* contact heading */}
        <div className="container">
          <div className="pb-[60px] border-b border-b-[rgba(79,79,79,0.08)] mx-3">

            <div className="flex flex-col px-3 xl:px-4">
              <h1 className="text-[24px]/[120%] font-semibold">Contact</h1>
              <p className="mt-3">Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me an email to evans@yourwebsite.com .Want to get connected? Follow me on the social channels below.</p>
              <div className="flex flex-wrap justify-center items-center gap-2 mt-4">

              </div>
            </div>

          </div>
        </div>

        {/* contact body */}
        <div className="container mt-8 md:mt-14">
          <div className="w-full xl:w-[732px] mx-[12px]">
            <div className="flex items-center gap-2 px-4">
              <div className="w-1 h-[67px] bg-[rgb(84,182,137)]"></div>
              <h2 className="text-[52px]/[120%] text-[rgb(41,41,41)] font-semibold">Contact Details</h2>
            </div>
            <p className="text-[18px]/[130%] text-[rgb(79,79,79)] mt-2 md:mt-4 px-4">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the middle of text.</p>
          </div>
          <div className="flex flex-wrap gap-3 md:gap-6 items-center justify-between mt-8 md:mt-14 mx-3 px-4">
            <div className="flex gap-3 items-center p-3  md:p-5 px-4 border-l border-l-[rgb(84,182,137)]">
              <Image src={phone} alt="phone" width={48} height={48} />
              <div>
                <span className="block mb-2 font-semibold text-[24px]/[120%] text-[rgb(41,41,41)]">Phone</span>
                <Link href="tel:+1234567890" className="text-[14px]/[130%] text-[rgb(79,79,79)]">+123-456-7890</Link>
              </div>
            </div>
            <div className="flex gap-3 items-center p-3 md:p-5 px-4 border-l border-l-[rgb(84,182,137)]">
              <Image src={location} alt="phone" width={48} height={48} />
              <div>
                <span className="block mb-2 font-semibold text-[24px]/[120%] text-[rgb(41,41,41)]">Location</span>
                <span className="text-[14px]/[130%] text-[rgb(79,79,79)]">123 Example Street, City, Country</span>
              </div>
            </div>
            <div className="flex gap-3 items-center p-3 md:p-5 px-4 border-l border-l-[rgb(84,182,137)]">
              <Image src={email} alt="phone" width={48} height={48} />
              <div>
                <span className="block mb-2 font-semibold text-[24px]/[120%] text-[rgb(41,41,41)]">Email</span>
                <Link href="mailto:makabir98@gmail.com" className="text-[14px]/[130%] text-[rgb(79,79,79)]">makabir98@gmail.com</Link>
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-14 mx-3">
            <div className="w-full h-[400px] px-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747016.8778039054!2d87.7035567133411!3d23.489442669650543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1719998700959!5m2!1sen!2sbd"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pb-[120px]">
        <div className="container">
          <div className="w-full xl:w-[732px] mx-3">
            <div className="flex items-center gap-2 px-4">
              <div className="w-1 h-[67px] bg-[rgb(84,182,137)]"></div>
              <h2 className="text-[52px]/[120%] text-[rgb(41,41,41)] font-semibold">Get In Touch</h2>
            </div>
            <p className="text-[18px]/[130%] text-[rgb(79,79,79)] mt-2 md:mt-4 px-4">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the middle of text.</p>
          </div>
          <div className="mx-3  px-4">
            <form className="mt-8 md:mt-14 py-3 rounded-[32px] border border-[(rgba(79,79,79,1))]">
              <div className="flex flex-wrap md:flex-nowrap gap-3 md:gap-6 mb-3 md:mb-6 px-4">
                <div className="flex items-center gap-2 px-3 md:px-5 py-2 md:py-4 rounded-md w-full border border-[rgba(79,79,79,0.08)]">
                  <Image src={person} alt='name' width={32} height={32} className="mb-1" />
                  <input type="text" placeholder="Your Name" className="focus:bg-[rgba(84,182,137,0.3)] w-full outline-none" />
                </div>
                <div className="flex items-center gap-2 px-3 md:px-5 py-2 md:py-4 rounded-md w-full border border-[rgba(79,79,79,0.08)]">
                  <Image src={email} alt='name' width={32} height={32} className="mb-1" />
                  <input type="text" placeholder="Email address" className="focus:bg-[rgba(84,182,137,0.3)] w-full outline-none" />
                </div>
              </div>
              <div className="flex flex-wrap md:flex-nowrap gap-3 md:gap-6 mb-3 md:mb-6 px-4">
                <div className="flex items-center gap-2 px-3 md:px-5 py-2 md:py-4 rounded-md w-full border border-[rgba(79,79,79,0.08)]">
                  <Image src={phone} alt='name' width={32} height={32} className="mb-1" />
                  <input type="text" placeholder="Phone" className="focus:bg-[rgba(84,182,137,0.3)] w-full outline-none" />
                </div>
                <div className="flex items-center gap-2 px-3 md:px-5 py-2 md:py-4 rounded-md w-full border border-[rgba(79,79,79,0.08)]">
                  <Image src={location} alt='name' width={32} height={32} className="mb-1" />
                  <input type="text" placeholder="Location" className="focus:bg-[rgba(84,182,137,0.3)] w-full outline-none" />
                </div>
              </div>
              <div className="mt-3 md:mt-6 px-4">
                <textarea name="" id="message" placeholder="Your Message:" autoComplete="off" className="text-[rgba(41,41,41,1)] px-3 md:px-6 py-2 md:py-4 rounded-md border border-[rgba(41,41,41,0.08)] w-full h-[120px] focus:bg-[rgba(84,182,137,0.3)] outline-none"></textarea>
              </div>
              <div className="px-4">
                <Link href="#" className=" mx-3 py-2 md:py-4 rounded-full  font-medium text-white bg-[rgb(84,185,137)] w-[200px] flex items-center justify-center">
                  <div className="flex gap-3 justify-center">
                    <Image src={send} alt="send icon" width={24} height={24} />
                    <span className="text-nowrap">Send Message</span>
                  </div>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
