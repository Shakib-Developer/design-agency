import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import FeaturedProject from "@/components/FeaturedProject";
import Subscribe from "@/components/Subscribe";
import WorksList from "@/components/WorksList";

const Page = async () => {
  return (
    <div>
      <Hero />
      <WorksList />
      <Stats />
      <FeaturedProject />
      <Subscribe />
    </div>
  );
};
export default Page;
