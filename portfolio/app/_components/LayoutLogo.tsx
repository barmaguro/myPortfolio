import Image from "next/image";

function LayoutLogo() {
  return (
    <div className="flex">
      <div className="h-16 w-24">
        <Image
          src="/images/logo.svg"
          width={500}
          height={500}
          alt="motodesignのロゴ"
          className="h-full w-full"
        />
      </div>
      <div className="text-center uppercase tracking-widest">
        <p className="text-xs">motodesign</p>
        <p className="text-2xs leading-tight mt-1">
          web design <br />
          and <br />
          frontend engineer
        </p>
      </div>
    </div>
  );
}

export default LayoutLogo;
