import Subscribe from "@/components/Subscribe";
import AllServices from "@/components/AllServices";
import { Camp } from "@/components/Camp";

const Page = async () => {
  return (
    <div>
      <Camp title={"Services"} />
      <AllServices />
      <Subscribe />
    </div>
  );
};
export default Page;
