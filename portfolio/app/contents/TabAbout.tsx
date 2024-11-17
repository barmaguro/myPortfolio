import SlideItems from "../components/SlideItems";

const TabAbout = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-4">
        <div className="avatar">
          <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
            <img src="https://placehold.co/600x400" />
          </div>
        </div>
        <div className="border border-gray-400 rounded-md px-3 py-2">
          <p className="">
            プログラミングスクールで講師をしながら、WEB制作などのフリーランスをしています。
            アイコンは卒業生が書いてくれました。
          </p>
          <p className="">
            お酒が好きすぎてsakeDiplomaという資格を持っています。
          </p>
          
        </div>
      </div>
      <h3 className="">
        Skill
      </h3>
        <SlideItems/>
    </div>
  );
};

export default TabAbout;
