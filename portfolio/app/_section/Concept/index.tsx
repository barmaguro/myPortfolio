
import Marker from 'app/_components/_animation/Marker'
import SectionTitle from 'app/_components/SectionTitle'

export default function index() {
  return (
    <div>
      <SectionTitle title="concept" />
      <div className="mt-10 leading-9">
        <p className=" mt-8">デザインがおしゃれで目を引くのはもちろん大切なことです。</p>
        <p className=" mt-8">でも、それだけで終わってしまうと本当に求めている成果には届きません。</p>
        <p className=" mt-8">私が大切にしているのは、デザインを通して<br />
          <Marker>
          「何を解決したいのか」
          </Marker><br />
          をしっかり考えること。</p>
        <p className=" mt-8">魅力を伝えるため、<br /> ユーザーに行動してもらうため、<br /> ビジネスの課題をクリアにするため。</p>
        <p className=" mt-8">目的に合わせて、一つひとつ丁寧にデザインを作り上げていきます。</p>
        <p className=" mt-8">ただの「おしゃれ」で終わらない、課題を解決するデザインを一緒に作りませんか？</p>
      </div>
    </div>
  )
}
