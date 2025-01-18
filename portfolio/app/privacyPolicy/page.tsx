import BackButton from "app/_components/BackButton";
import SectionTitle from "app/_components/SectionTitle";

export default function index() {
  return (
    <main className="container mx-auto mt-20 max-w-xl">
      <SectionTitle title="privacy policy" />
      <p className="mt-10 text-lg">
        本プライバシーポリシー（以下「本ポリシー」といいます。）は、当サイトにおける個人情報の取扱いについて定めるものです。お問い合わせいただく際には、以下をご確認ください。
      </p>
      <dl className="mt-6">
        <dd className="policy-head">第1条（適用範囲）</dd>
        <dt className="policy-desc">
          本ポリシーは、当サイトで収集した個人情報の取得、利用、および管理に関して適用されます。
        </dt>
        <dd className="policy-head">第2条（取得する情報）</dd>
        <dt className="policy-desc">
          <p className="policy-desc">
            当サイトでは、お問い合わせフォームを通じて以下の情報を取得します
          </p>
          <ol className="list-inside list-decimal">
            <li className="policy-desc">氏名</li>
            <li className="policy-desc">メールアドレス</li>
            <li className="policy-desc">会社名（任意）</li>
            <li className="policy-desc">お問い合わせ内容</li>
          </ol>
        </dt>
        <dd className="policy-head">第3条（利用目的）</dd>
        <dt className="policy-desc">
          <p className="policy-desc">
            取得した個人情報は、以下の目的で利用します
          </p>
          <ol className="list-inside list-decimal">
            <li className="policy-desc">お問い合わせへの対応</li>
            <li className="policy-desc">必要なご連絡や情報提供</li>
          </ol>
        </dt>
        <dd className="policy-head">第4条（安全管理措置）</dd>
        <dt className="policy-desc">
          <p className="policy-desc">
            当サイトは、個人情報の漏えい、滅失、き損を防ぐため、以下の措置を講じます
          </p>
          <ol className="list-inside list-decimal">
            <li className="policy-desc">個人情報保護に関する基本方針の策定</li>
            <li className="policy-desc">
              データを保護するためのセキュリティ対策の実施
            </li>
          </ol>
        </dt>
        <dd className="policy-head">第5条（第三者への提供）</dd>
        <dt className="policy-desc">
          当サイトは、法令に基づく場合を除き、事前の同意なく個人情報を第三者に提供しません。
        </dt>
        <dd className="policy-head">第6条（プライバシーポリシーの変更）</dd>
        <dt className="policy-desc">
          本ポリシーは、必要に応じて改定する場合があります。変更があった場合は、本ウェブサイト上でお知らせします。
        </dt>
        <dd className="policy-head">第7条（お問い合わせ窓口）</dd>
        <dt className="policy-desc">
          <p className="policy-desc">
            個人情報の取扱いに関するご質問やご相談は、以下の窓口までお問い合わせください
          </p>
          <ol className="list-inside list-decimal">
            <li className="policy-desc">個人情報取扱事業者: 江田 企毅</li>
            <li className="policy-desc">
              Eメールアドレス:motoki.e29@gmail.com
            </li>
          </ol>
        </dt>
      </dl>
      <BackButton />
    </main>
  );
}
