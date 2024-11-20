import KeyVisual from "./components/KeyVisual";
import ServiceSection from "./contents/ServiceSection";
import WorksSection from "./contents/WorksSection";

// rafce アロー関数コンポーネントの出し方

export default function Page() {
  return (
    <div className="container mx-auto px-4">
      <KeyVisual />
      <ServiceSection />
      <WorksSection />
    </div>
  );
}
