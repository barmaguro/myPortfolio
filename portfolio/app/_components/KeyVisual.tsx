import Image from "next/image";

function KeyVisual() {
  // const [headerOffsetHeight, setHeaderOffsetHeight] = useState(0);

  // useEffect(() => {
  //   const header = document.querySelector("header");
  //   if (header) {
  //     setHeaderOffsetHeight(header.offsetHeight);
  //   }
  // }, []);

  return (
    <>
      <div className="relative gird place-items-center overflow-hidden h-[calc(100svh_-_64px)] ">
        <div className="absolute top-1/2 -translate-y-1/2 w-full text-[0] leading-[0] align-bottom ">
          <span className="h-[200px] bg-primary block global_clip-top"></span>
          <span className="h-[243px]  bg-primary block"></span>
          <span className=" bg-primary block global_clip-bottom h-[200px] "></span>
        </div>
        <div className="relative top-1/2 -translate-y-1/2">
          <div className="w-[200px]">
            <Image
              src="/images/logo_main.png"
              alt="ロゴ"
              width={500}
              height={500}
            />
          </div>
          <p className="absolute left-0 bottom-0 -translate-x-1/3 translate-y-16 text-white text-xl font-bold tracking-widest  leading-loose ">
            想いを届ける
            <br />
            WEBデザイン
          </p>
        </div>
      </div>
    </>
  );
}

export default KeyVisual;
