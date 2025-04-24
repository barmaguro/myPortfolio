import Marker from "@/components/_animation/Marker";
import SectionTitle from "@/components/SectionTitle";

export default function index() {
  return (
    <div>
      <SectionTitle title="concept" />
      <div className="mt-10 text-center text-lg/9 lg:text-xl/9">
        <p>デザインを通して</p>
        <Marker addClass="mt-5 lg:mt-7 inline-block">
          「何を解決したいのか」
        </Marker>
        <p className="mt-8  md:inline-block">をしっかり考えること。</p>
        <p className="mt-8 ">
          魅力を伝えるため、 <br />
          ユーザーに行動してもらうため、<br />
          ビジネスの課題をクリアにするため。
        </p>
        <Marker addClass="mt-5 lg:mt-7 inline-block">
        「課題を解決する」
        </Marker>
        <p className="mt-8  md:inline-block">
          webサイトを制作します。
        </p>
      </div>
    </div>
  );
}
