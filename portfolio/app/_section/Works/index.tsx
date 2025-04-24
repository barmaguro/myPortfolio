import ButtonHover from "@/components/ButtonHover";
import SectionTitle from "@/components/SectionTitle";
import WorksTab from "@/components/features/works/WorksTab";
import WorksTabContent from "@/components/features/works/WorksTabContent";
import { WORKS_LIST_LIMIT } from "@/constants/index";
import { getAllCategoryList, getWorksList } from "@/libs/microcms";
import { Tabs } from "@radix-ui/react-tabs";
import Link from "next/link";
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
          全ての実績一覧を見る
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`size-6 translate-y-px ml-2`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
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
