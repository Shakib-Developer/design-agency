import { Camp } from "@/components/Camp";
import Subscribe from "@/components/Subscribe";
import TestimonialList from "@/components/TestimonialList";

const Page = async () => {
  return (
    <div>
      <Camp title={"Testimonials"} />
      <TestimonialList />
      <Subscribe />
    </div>
  );
};
export default Page;
