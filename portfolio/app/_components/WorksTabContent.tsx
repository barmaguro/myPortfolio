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
    <div>
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
