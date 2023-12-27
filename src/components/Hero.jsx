async function getData() {
  let res = await fetch(process.env.URL + "api/HeroList");
  if (!res.ok) {
    throw new Error("Hero Data is not success");
  }
  return res.json();
}

async function getLogo() {
  let res = await fetch(process.env.URL + "api/BrandList");
  if (!res.ok) {
    throw new Error("Brand Data is not success");
  }
  return res.json();
}

import Link from "next/link";

const Hero = async () => {
  let data = await getData();
  let logo = await getLogo();
  return (
    <div>
      <section className="relative bg-[#D7F5DC] pb-20 max-w-full">
        <div className="relative pt-12 lg:pt-20 pb-20 z-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4">
                <div className="flex flex-wrap lg:mb-4 lg:mr-6">
                  <img
                    className="w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-4xl lg:rounded-br-none rounded-[20px]"
                    src={data["image1"]}
                    alt=""
                  />
                  <img
                    className="w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-4xl lg:rounded-bl-none rounded-[20px]"
                    src={data["image2"]}
                    alt=""
                  />
                </div>
                <div className="flex flex-wrap lg:mb-4 lg:mr-6">
                  <img
                    className="w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-4xl lg:rounded-br-none rounded-[20px]"
                    src={data["image3"]}
                    alt=""
                  />
                  <img
                    className="w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-4xl lg:rounded-bl-none rounded-[20px]"
                    src={data["image4"]}
                    alt=""
                  />
                </div>
              </div>

              <div className="w-full lg:w-1/2 px-4 mb-12 mt-12 lg:mt-0 lg:mb-0 flex items-center">
                <div className="w-full text-center xl:text-right">
                  <div className="max-w-xl mx-auto lg:mx-0">
                    <h2 className="text-black mb-3 xl:ml-14 text-4xl lg:text-5xl font-bold font-heading">
                      <span>{data["title"]}</span>
                    </h2>
                  </div>
                  <div className="max-w-xl mx-auto lg:mx-0">
                    <p className="text-black mb-6 xl:ml-14 leading-loose">
                      {data["description"]}
                    </p>
                    <div>
                      <Link
                        className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200"
                        href="#"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Logo */}

        <div className=" py-10 bg-slate-100 max-w-full">
          <div className="container mx-auto px-4 text-center">
            <div className="flex flex-wrap -mx-2">
              {logo.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/4 px-2"
                  >
                    <a href="#">
                      <img className="mx-auto h-8" src={item["image"]} alt="" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
