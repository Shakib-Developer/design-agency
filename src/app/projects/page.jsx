import Subscribe from "@/components/Subscribe";
import AllProject from "@/components/AllProject";
import { Camp } from "@/components/Camp";

const Page = async () => {
  return (
    <div>
      <Camp title={"Projects"} />
      <AllProject />
      <Subscribe />
    </div>
  );
};
export default Page;
