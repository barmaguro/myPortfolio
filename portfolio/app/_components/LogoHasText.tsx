import Image from "next/image";

export default function LogoHasText() {
  return (
    <>
      <div className="flex items-center gap-2">
        <div className="w-16 md:w-20">
          <Image
            src="/images/logo_main.svg"
            alt="motodesginのロゴ"
            width={500}
            height={500}
          />
        </div>
        <p className="text-2xs uppercase tracking-widest text-secondary md:text-xs lg:text-sm">
        web design<br />
        and<br />
        frontend engineer
        </p>
      </div>
    </>
  );
}
