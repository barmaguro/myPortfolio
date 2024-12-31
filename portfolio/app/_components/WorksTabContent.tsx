import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TabsContent } from "@radix-ui/react-tabs";
import WorksCard from "./WorksCard";

export default function WorksTabContent({ site, design, support }: any) {
  
  return (
    <div className="mt-5 mx-auto lg:relative lg:before:block lg:before:absolute lg:before:top-0 lg:before:-left-12 lg:before:bg-slate-400 lg:before:w-px lg:before:h-full">
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
