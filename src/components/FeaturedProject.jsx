async function getData() {
  let res = await fetch(process.env.URL + "api/FeaturedProject");
  if (!res.ok) {
    throw new Error("Featured Project Data is not success");
  }
  return res.json();
}

const FeaturedProject = async () => {
  const data = await getData();

  return (
    <div>
      <section className="bg-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex-col mb-20 pl-6">
            <div className="text-green-500 pb-5 text-xl lg:text-2xl font-medium font-['Poppins'] uppercase">
              Featured Project
            </div>
            <div className="w-[295px] md:w-[595px] text-black text-[24px] lg:text-3xl font-semibold font-['Poppins']">
              We provide the Perfect Solution to your business growth
            </div>
          </div>

          <div className="grid xl:grid-cols-2 grid-cols-1 gap-10 px-5">
            <div className="w-full mx-auto">
              <img
                className="object-cover object-center rounded mx-auto xl:mx-0 w-full xl:w-auto"
                src="/Masks.jpg"
              />
              <p className="opacity-80 mt-5 text-slate-700 text-sm font-normal leading-relaxed">
                App Design - June 20, 2023
              </p>
              <h2 className="text-indigo-950 text-xl my-5 font-bold leading-7">
                App Redesign
              </h2>
            </div>

            <div className="w-full">
              <div className="grid lg:grid-cols-2 grid-cols-1 my-auto h-auto gap-5 text-center xl:text-left">
                {data.map((item, index) => {
                  return (
                    <div key={index}>
                      <img
                        className="object-cover object-center rounded shadow mx-auto xl:mx-0 w-full xl:w-auto"
                        src={item["image"]}
                      />
                      <p className="opacity-80 mt-5 text-slate-700 text-sm font-normal leading-relaxed">
                        App Design - June 20, 2023
                      </p>
                      <h2 className="text-indigo-950 text-xl my-5 font-bold leading-7">
                        {item["title"]}
                      </h2>
                    </div>
                  );
                })}

                {/* <div>
                  <img
                    className="object-cover object-center rounded shadow mx-auto xl:mx-0 w-full xl:w-auto"
                    src="/Mask.png"
                  />
                  <p className="opacity-80 mt-5 text-slate-700 text-sm font-normal leading-relaxed">
                    App Design - June 20, 2023
                  </p>
                  <h2 className="text-indigo-950 text-xl my-5 font-bold leading-7">
                    Redesign channel website landng page
                  </h2>
                </div>

                <div>
                  <img
                    className="object-cover object-center rounded shadow mx-auto xl:mx-0 w-full xl:w-auto"
                    src="/Mask.png"
                  />
                  <p className="opacity-80 mt-5 text-slate-700 text-sm font-normal leading-relaxed">
                    App Design - June 20, 2023
                  </p>
                  <h2 className="text-indigo-950 text-xl my-5 font-bold leading-7">
                    Redesign channel website landng page
                  </h2>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedProject;
