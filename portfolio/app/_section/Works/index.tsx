import { Tabs } from "@radix-ui/react-tabs";
import {
  getAllCategoryList,
  getWorksList,
} from "app/_components/_libs/microcms";
import SectionTitle from "app/_components/SectionTitle";
import WorksTab from "app/_components/WorksTab";
import WorksTabContent from "app/_components/WorksTabContent";
import { WORKS_LIST_LIMIT } from "app/_constance";
import { notFound } from "next/navigation";

export default async function Works() {
  const category = await getAllCategoryList().catch(notFound);
  const { contents: worksSite } = await getWorksList({
    limit: WORKS_LIST_LIMIT,
    filters: "category[equals]works-site",
  }).catch(notFound);
  const { contents: worksDesign } = await getWorksList({
    filters: "category[equals]works-design",
  }).catch(notFound);
  const { contents: worksSupport } = await getWorksList({
    filters: "category[equals]works-support",
  }).catch(notFound);  

  return (
    <>
      <SectionTitle title="works" />
      <div className="px-4 mt-5">
        <Tabs defaultValue={category[0].id} className="lg:flex lg:gap-5 lg:justify-between lg:items-start">
          <WorksTab category={category} />
          <WorksTabContent
            site={worksSite}
            design={worksDesign}
            support={worksSupport}
          />
        </Tabs>
      </div>
    </>
  );
}
