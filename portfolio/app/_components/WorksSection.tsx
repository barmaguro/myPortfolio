import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionTitle from "./SectionTitle";
import WorksCard from "./WorksCard";
import { getWorksList } from "./_libs/microcms";

const WorksSection = async () => {
  const data = await getWorksList();

  return (
    <>
      <section id="works" className="mt-5">
        <SectionTitle title="works" />
        <div className="px-4 mt-5">
          <Tabs defaultValue="website" className="">
            <TabsList>
              <TabsTrigger value="website" className="uppercase text-xl">
                web site
              </TabsTrigger>
              <TabsTrigger value="design" className="uppercase text-xl">
                design
              </TabsTrigger>
              <TabsTrigger value="apply" className="uppercase text-xl">
                apply
              </TabsTrigger>
            </TabsList>
            <TabsContent value="website" className="">
              <Carousel>
                <CarouselContent>
                  <WorksCard works={data.contents} />
                </CarouselContent>
                <CarouselPrevious className="border-none" />
                <CarouselNext className="border-none" />
              </Carousel>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default WorksSection;
