import { Tabs } from "@radix-ui/react-tabs";
import {
  getAllCategoryList,
  getWorksList,
} from "app/_components/_libs/microcms";
import ButtonHover from "app/_components/ButtonHover";
import SectionTitle from "app/_components/SectionTitle";
import WorksTab from "app/_components/WorksTab";
import WorksTabContent from "app/_components/WorksTabContent";
import { WORKS_LIST_LIMIT } from "app/_constance";
import  Link  from "next/link";
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
      <Link href={"/works"} className="mx-auto mt-8 block">
          <ButtonHover
            bgColor={"bg-primary"}
            textColor={"hover:text-primary"}
            borderColor={"hover:border-primary"}
            margin={"mx-auto"}
          >
            全ての実績一覧
          </ButtonHover>
        </Link>
      <div className="mt-10 px-4 lg:mt-20">
        <Tabs
          defaultValue={category[0].id}
          className="lg:flex lg:items-start lg:justify-between lg:gap-5"
        >
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
