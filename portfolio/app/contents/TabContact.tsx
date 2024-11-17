import Image from "next/image";

const TabContact = () => {
  return (
    <div className="">
      <p className="">
        web制作のご相談がある方は公式ラインもしくは、XからDMをお願いします。
      </p>
      <button className="btn">
       {/* <Image src="/portfolio/public/images/icon_line.png" alt="" width={50} height={50} /> */}
        @motoDesign
      </button>
    </div>
  );
};

export default TabContact;
