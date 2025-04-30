import Image from "next/image";
import MaskEffect from "./_animation/MaskEffect";

function KeyVisual() {
  return (
    <>
      <div className="gird relative h-[calc(100svh_-_64px)] place-items-center overflow-hidden">
        <div className="absolute top-1/2 w-full -translate-y-1/2 align-bottom text-[0] leading-[0]">
          <span className="global_clip-top block h-[40vh] translate-y-px bg-primary md:h-[40vh] lg:h-[55vh]"></span>
          <span className="block h-[20vh] bg-primary md:h-[15vh] lg:h-[10vh]"></span>
          <span className="global_clip-bottom block h-[40vh] -translate-y-px bg-primary md:h-[40vh] lg:h-[55vh]"></span>
        </div>
        <div className="relative top-1/2 mx-auto w-full max-w-xl -translate-y-1/2 px-4 md:max-w-2xl lg:max-w-4xl">
          <div className="mx-auto w-[200px] md:w-[250px] lg:w-[300px]">
            <Image
              src="/images/logo_main.png"
              alt="ロゴ"
              width={500}
              height={500}
              loading="eager"
            />
            {/* <h1 className="mx-auto absolute bottom-0 left-4 translate-y-12 whitespace-nowrap font-medium leading-loose tracking-wide text-white text-xl/10  lg:translate-y-12 lg:text-3xl/10 drop-shadow-md">
            課題を解決するwebデザイン
          </h1> */}
          </div>
          <MaskEffect>課題を解決するwebデザイン。</MaskEffect>
        </div>
      </div>
    </>
  );
}

export default KeyVisual;
