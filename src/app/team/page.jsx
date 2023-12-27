import { Camp } from "@/components/Camp";
import Subscribe from "@/components/Subscribe";
import TeamList from "@/components/TeamList";

const Page = async () => {
  return (
    <div>
      <Camp title={"Team"} />
      <TeamList />
      <Subscribe />
    </div>
  );
};
export default Page;
