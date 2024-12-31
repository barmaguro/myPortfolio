import Image from "next/image";

function KeyVisual() {
  return (
    <>
      <div className="relative gird place-items-center overflow-hidden h-[calc(100svh_-_64px)] ">
        <div className="absolute top-1/2 -translate-y-1/2 w-full text-[0] leading-[0] align-bottom ">
          <span className="h-[35vh] md:h-[40vh] lg:h-[50vh] bg-primary block global_clip-top translate-y-px"></span>
          <span className="h-[20vh] md:h-[15vh] lg:h-[10vh] bg-primary block"></span>
          <span className=" bg-primary block global_clip-bottom h-[35vh]  md:h-[40vh] lg:h-[50vh] -translate-y-px"></span>
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
          <p className="absolute left-0 bottom-0 -translate-x-1/3 translate-y-16 text-white text- font-bold tracking-widest whitespace-nowrap  leading-loose md:text-xl md:-translate-x-1/2">
            おしゃれなだけじゃない、<br />課題を解くデザイン。
          </p>
        </div>
      </div>
    </>
  );
}

export default KeyVisual;
