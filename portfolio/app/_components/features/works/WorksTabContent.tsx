import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TabsContent } from "@radix-ui/react-tabs";
import { Works } from "@/libs/microcms";
import WorksCard from "@/components/features/works/WorksCard";

type Props = {
  site: Works[];
  design: Works[];
  support: Works[];
};

export default function WorksTabContent({ site, design, support }: Props) {
  
  return (
    <div className="mx-auto mt-8 lg:relative lg:before:absolute lg:before:-left-12 lg:before:top-0 lg:before:block lg:before:h-full lg:before:w-px lg:before:bg-slate-400">
      <TabsContent value="works-site">
        <Carousel>
          <CarouselContent>
            <WorksCard category={site} />
          </CarouselContent>
          <CarouselPrevious className="border-none" />
          <CarouselNext className="border-none" />
        </Carousel>
      </TabsContent>
      <TabsContent value="works-design">
        <Carousel>
          <CarouselContent>
            <WorksCard category={design} />
          </CarouselContent>
          <CarouselPrevious className="border-none" />
          <CarouselNext className="border-none" />
        </Carousel>
          </TabsContent>

      <TabsContent value="works-support">
        <Carousel>
          <CarouselContent>
            <WorksCard category={support} />
          </CarouselContent>
          <CarouselPrevious className="border-none" />
          <CarouselNext className="border-none" />
        </Carousel>
      </TabsContent>
    </div>
  );
}
