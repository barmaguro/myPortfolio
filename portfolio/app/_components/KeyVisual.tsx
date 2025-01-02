import Image from "next/image";

function KeyVisual() {
  return (
    <>
      <div className="gird relative h-[calc(100svh_-_64px)] place-items-center overflow-hidden ">
        <div className="absolute top-1/2 w-full -translate-y-1/2 align-bottom text-[0] leading-[0] ">
          <span className="global_clip-top block h-[35vh] translate-y-px bg-primary md:h-[40vh] lg:h-[50vh]"></span>
          <span className="block h-[20vh] bg-primary md:h-[15vh] lg:h-[10vh]"></span>
          <span className=" global_clip-bottom block h-[35vh] -translate-y-px  bg-primary md:h-[40vh] lg:h-[50vh]"></span>
        </div>
        <div className="relative top-1/2 -translate-y-1/2">
          <div className="w-[200px] md:w-[250px]">
            <Image
              src="/images/logo_main.png"
              alt="ロゴ"
              width={500}
              height={500}
            />
          </div>
          <p className="text- absolute bottom-0 left-0 -translate-x-1/3 translate-y-16 whitespace-nowrap font-bold leading-loose tracking-widest  text-white md:-translate-x-1/2 md:text-xl">
            おしゃれなだけじゃない、<br />課題を解くデザイン。
          </p>
        </div>
      </div>
    </>
  );
}

export default KeyVisual;
