const Subscribe = () => {
  return (
    <div>
      <div className="w-full h-[499px] pt-[91px] pb-[137px] bg-white justify-center items-center inline-flex">
        <div className="self-stretch flex-col justify-center items-center gap-10 inline-flex">
          <div className="flex-col justify-start items-center gap-[5px] flex">
            <div className="flex-col justify-start items-center gap-[22px] flex">
              <div className="text-green-500 text-lg xl:text-xl font-medium uppercase">
                SUBSCRIBE
              </div>
              <div className="w-3/4 xl:w-[495px] text-center text-black text-xl xl:text-3xl font-semibold capitalize">
                Subscribe to get the latest news about us
              </div>
            </div>
            <div className="w-3/4 xl:w-full text-center text-zinc-500 text-sm xl:text-base font-medium  capitalize">
              Please drop your email below to get daily update about what we do
            </div>
          </div>
          <div className="h-[50px] flex-col justify-start items-end flex">
            <div className="relative w-[330px] xl:w-[400px] px-4 py-3 rounded-[14px] border border-black justify-start items-center gap-4 inline-flex">
              <input
                placeholder="Enter Your Email"
                className="w-[180px] xl:w-[220px] text-zinc-500 text-base font-normal font-['Avenir'] outline-none"
              ></input>
              <div className="absolute right-2 w-[90px] lg:w-[130px] px-[24.32px] py-[8.11px] bg-orange-600 rounded-[14px] justify-center items-center gap-[8.11px] flex">
                <div className="text-white text-sm xl:text-base font-medium font-['Poppins']">
                  Subscribe
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
