import { FunctionComponent } from "react";

const Frame: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-snow h-[1156px] overflow-hidden text-left text-mini text-black font-montserrat">
    
      <div className="absolute top-[327px] left-[calc(50%_-_688.5px)] flex flex-row items-center justify-start gap-[134px]">
        <div className="self-stretch w-[611px] rounded-xl bg-white shadow-[8px_13px_34px_rgba(0,_0,_0,_0.1),_0px_0px_0px_rgba(0,_0,_0,_0.1)] flex flex-row items-start justify-start p-3 box-border">
          <img
            className="self-stretch flex-1 relative rounded-[10px] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/unsplash5tk1f5vfdik@2x.png"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-[40px]">
          <b className="relative text-[32px] capitalize">test product</b>
          <div className="relative tracking-[0.11em] leading-[31.5px] text-gray-100">
            <p className="m-0">Category</p>
            <p className="m-0 font-semibold text-black">electronic</p>
          </div>
          <div className="w-[632px] relative tracking-[0.11em] leading-[31.5px] inline-block text-gray-200">
            <p className="m-0">{`Description: `}</p>
            <p className="m-0 text-base text-black">
              Dive into the world of abstract painting and discover techniques
              that bring your visions to life.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-[12px] text-base">
            <div className="relative">Price</div>
            <b className="relative text-[36px]">$13.5</b>
          </div>
          <div className="w-[632px] relative h-[68px] text-base text-white">
            <div className="absolute right-[0px] bottom-[0px] rounded-xl bg-black w-[632px] h-[68px]" />
            <div className="absolute top-[calc(50%_-_5px)] left-[calc(50%_-_21px)] font-medium">
              Buy Now
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[251px] left-[283px] text-xl font-medium">
        Back
      </div>
    </div>
  );
};

export default Frame;
