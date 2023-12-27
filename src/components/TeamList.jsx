async function getData() {
  let res = await fetch(process.env.URL + "api/TeamList");
  if (!res.ok) {
    throw new Error("Hero Data is not success");
  }
  return res.json();
}

const TeamList = async () => {
  let data = await getData();
  return (
    <div>
      <div className="max-w-full pl-[20px] xl:pl-[60px] pr-[120px] pt-[67px] pb-[84px] bg-white flex-col justify-start items-start gap-[66px] inline-flex">
        <div className="self-stretch flex-col justify-start items-start gap-10 left-0 inline-flex">
          <div className="flex-col justify-start items-start gap-[15px] flex">
            <div className="text-green-500 text-lg lg:text-xl font-medium font-['Poppins'] uppercase">
              Our Team Member
            </div>
            <div className="w-[295px] lg:w-[495px] text-black text-2xl lg:text-3xl font-semibold font-['Poppins']">
              Check our awesome team members
            </div>
          </div>
        </div>

        <div className="self-center pb-1.5 justify-start items-start grid grid-cols-1 xl:grid-cols-3 xl:gap-x-24 gap-y-8 ">
          {/* inline-block lg:inline-flex */}
          {data.map((item, index) => {
            return (
              <div key={index} className="w-[392px] h-[490px] relative">
                <div className="w-[392px] h-[490px] left-0 top-0 absolute bg-white rounded-[20px] shadow border border-neutral-200"></div>
                <img
                  className="w-[392px] h-full left-0 top-0 absolute rounded-tl-[20px] rounded-tr-[20px]"
                  src={item["image"]}
                />
                <div className="w-[145px] h-[50px] left-[120px] top-[300px] relative">
                  <div className="w-[145px] h-[50px] left-0 top-0 absolute bg-white rounded-[25px] shadow"></div>
                  <div className="left-[11px] top-[17px] absolute text-gray-500 text-base font-normal">
                    <a href={item["facebook"]} className="text-green-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-8 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="left-[100px] -top-[8px] absolute text-gray-500 text-base font-normal font-['Font Awesome 6 Brands']">
                    <a href={item["instagram"]} className="ml-3 text-green-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-8 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="left-[53px] -top-[6px] absolute text-gray-500 text-base font-normal font-['Font Awesome 6 Brands']">
                    <a href={item["twitter"]} className="ml-3 text-green-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-8 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="left-[104px] top-[417px] absolute text-center text-gray-900 text-3xl font-semibold font-['Poppins'] leading-relaxed">
                  {item["name"]}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamList;
