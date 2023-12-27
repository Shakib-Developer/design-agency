async function getData() {
  let res = await fetch(process.env.URL + "api/WorkList");
  if (!res.ok) {
    throw new Error("Work Project Data is not success");
  }
  return res.json();
}

const WorksList = async () => {
  const data = await getData();

  return (
    <div>
      <div className=" max-w-full pt-[67px] pb-16 bg-white justify-center items-center">
        <div className="self-stretch flex-col justify-start items-start">
          <div className="flex-col pl-5 xl:pl-14 justify-start items-start flex">
            <div className="text-green-500 pb-5 text-lg lg:text-xl font-semibold font-['Poppins'] uppercase">
              Work List
            </div>
            <div className="w-[400px] md:w-[495px] text-black text-xl md:text-3xl font-semibold font-['Poppins']">
              We provide the Perfect Solution to your business growth
            </div>
          </div>

          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-10 gap-0 text-center md:text-left">
            <div className="w-[380px] mx-auto px-[30px] py-[50px] bg-white rounded-[30px] flex-col justify-start items-start gap-[43px] inline-flex">
              <div className="flex-col justify-start items-start gap-[15px] flex w-full">
                <div className="p-[16px] bg-emerald-100 rounded-[20px] justify-center items-center gap-2.5 inline-flex w-1/3 mx-auto md:mx-0 md:w-[68px]">
                  <img className="" src="/Work.jpg" />
                </div>
                <div className="flex-col justify-start items-start gap-[15px] flex">
                  <div className="text-black text-2xl font-semibold font-['Poppins'] w-full mx-auto">
                    Improve your business
                  </div>
                  <div className="w-[299px] text-black text-lg font-normal font-['Avenir']">
                    We help identify the best ways to improve your business
                  </div>
                </div>
              </div>
              <button className="w-full text-center md:text-left text-black text-lg font-medium font-['Avenir']">
                Learn More
              </button>
            </div>

            <div className="w-[380px] mx-auto px-[30px] py-[50px] bg-white rounded-[30px] flex-col justify-start items-start gap-[43px] inline-flex">
              <div className="flex-col justify-start items-start gap-[15px] flex w-full">
                <div className="p-[16px] bg-emerald-100 rounded-[20px] justify-center items-center gap-2.5 inline-flex w-1/3 mx-auto md:mx-0 md:w-[68px]">
                  <img className="" src="/Heart.jpg" />
                </div>
                <div className="flex-col justify-start items-start gap-[15px] flex">
                  <div className="text-black text-2xl font-semibold font-['Poppins'] w-full mx-auto">
                    Take care your health
                  </div>
                  <div className="w-[299px] text-black text-lg font-normal font-['Avenir']">
                    We help identify the best ways to improve your business
                  </div>
                </div>
              </div>
              <button className="w-full text-center md:text-left text-black text-lg font-medium font-['Avenir']">
                Learn More
              </button>
            </div>

            <div className="w-[380px] mx-auto px-[30px] py-[50px] bg-white rounded-[30px] flex-col justify-start items-start gap-[43px] inline-flex">
              <div className="flex-col justify-start items-start gap-[15px] flex w-full">
                <div className="p-[16px] bg-emerald-100 rounded-[20px] justify-center items-center gap-2.5 inline-flex w-1/3 mx-auto md:mx-0 md:w-[68px]">
                  <img src="/Activity.jpg" />
                </div>
                <div className="flex-col justify-start items-start gap-[15px] flex">
                  <div className="text-black text-2xl font-semibold font-['Poppins'] w-full mx-auto">
                    Improve brand loyalty
                  </div>
                  <div className="w-[299px] text-black text-lg font-normal font-['Avenir']">
                    We help identify the best ways to improve your business
                  </div>
                </div>
              </div>
              <button className="w-full text-center md:text-left text-black text-lg font-medium font-['Avenir']">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WorksList;
