import { Banner } from "./_components/Banner";
import { FeaturedProjects } from "./_components/FeaturedProjects";
import { Footer } from "./_components/Footer";
import { LatestBlogPosts } from "./_components/LatestBlogPosts";
import { Skills } from "./_components/Skills";
import { Testimonials } from "./_components/Testimonials";
import { WorkOnNext } from "./_components/WorkOnNext";

export default function Home() {
  return (
    <div className="overflow-y-scroll h-screen w-full">
      <Banner />
      <Skills />
      <WorkOnNext />
      <FeaturedProjects />
      <Testimonials />
      <LatestBlogPosts />
      <Footer />
    </div>
  );
}
