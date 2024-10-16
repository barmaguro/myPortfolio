import SnsNav from "./SnsNav";

const firstView = () => {
  return (
    <>
      <div className="">
        <div className="h-40 bg-gray-500"></div>
        <div className="">
            <div className="avatar left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-20 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <h2 className=" text-center">
              はじめまして。
              <br />
              フロントエンドエンジアのもときです。
            </h2>
        </div>
        <SnsNav />
      </div>
    </>
  );
};

export default firstView;
