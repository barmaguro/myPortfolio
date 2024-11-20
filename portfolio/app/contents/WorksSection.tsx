import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionTitle from "../components/SectionTitle";

const WorksSection = () => {
  return (
    <>
      <section id="" className="mt-5">
        <SectionTitle title="works" />
        <div className="">
      
            <Tabs defaultValue="website" className="w-[400px]">

              <TabsList>
                <TabsTrigger value="website" className="uppercase text-xl">web site</TabsTrigger>
                <TabsTrigger value="design" className="uppercase text-xl">design</TabsTrigger>
                <TabsTrigger value="apply" className="uppercase text-xl">apply</TabsTrigger>
              </TabsList>

              <TabsContent value="website">
                Make changes to your account here.
              </TabsContent>
              <TabsContent value="password">
                Change your password here.
              </TabsContent>
            </Tabs>
        </div>
      </section>
    </>
  );
};

export default WorksSection;
