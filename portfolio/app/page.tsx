import KeyVisual from "app/_components/KeyVisual";
import ServiceSection from "app/_components/ServiceSection";
import WorksSection from "app/_components/WorksSection";

// rafce アロー関数コンポーネントの出し方

export default async function Page() {
  return (
    <div className="container mx-auto px-4">
      <KeyVisual />
      <ServiceSection />
      <WorksSection />
    </div>
  );
}
