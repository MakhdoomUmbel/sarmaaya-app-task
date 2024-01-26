import { FunctionComponent } from "react";

const Frame: FunctionComponent = () => {
  return (
        <div className="w-[1640px] flex flex-row flex-wrap items-center justify-between text-xl">
          <div className="w-[383px] relative h-[608px]">
            <div className="absolute top-[0px] left-[0px] rounded-xl bg-white shadow-[-9px_-5px_24px_rgba(0,_0,_0,_0.1),_0px_0px_0px_rgba(0,_0,_0,_0.1)] w-[383px] h-[608px]" />
            <img
              className="absolute top-[12px] left-[13px] rounded-3xs w-[356px] h-[235px] object-cover"
              alt=""
              src="/rectangle-5480@2x.png"
            />
            <div className="absolute top-[285px] left-[24px] flex flex-col items-start justify-start gap-[34px]">
              <div className="flex flex-col items-start justify-start gap-[5px]">
                <b className="relative capitalize">test product</b>
                <div className="relative text-sm">electronic</div>
              </div>
              <div className="w-[334px] relative text-[16.88px] font-medium inline-block">
                Dive into the world of abstract painting and discover techniques
                that bring your visions to life.
              </div>
              <div className="flex flex-row items-center justify-start gap-[12px] text-base">
                <div className="relative">Price</div>
                <b className="relative text-xl">$13.5</b>
              </div>
              <div className="w-[331px] rounded-[8.44px] bg-black box-border flex flex-row items-center justify-center py-[26px] px-[30px] gap-[8.44px] text-[13.51px] text-white border-[0.8px] border-solid border-black">
                <div className="relative font-medium">Add to cart</div>
                <img
                  className="w-6 relative h-6"
                  alt=""
                  src="/vuesaxlinearshoppingcart.svg"
                />
              </div>
            </div>
          </div>
        </div>
      
  );
};

export default Frame;
