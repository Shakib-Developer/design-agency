async function getData() {
  let res = await fetch(process.env.URL + "api/AllService");
  if (!res.ok) {
    throw new Error("Brand Data is not success");
  }
  return res.json();
}

const AllServices = async () => {
  let data = await getData();

  return (
    <div>
      <section className="bg-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex-col mb-20 xl:pl-10">
            <div className="text-green-500 pb-5 text-lg lg:text-xl font-medium font-['Poppins'] uppercase">
              Our All Services
            </div>
            <div className="w-[400px] xl:w-[495px] text-black text-xl lg:text-3xl font-semibold font-['Poppins']">
              We Provide BestWeb design services
            </div>
          </div>

          <div className="grid xl:grid-cols-2 grid-cols-1 gap-8">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="xl:p-10 max-w-full bg-white rounded-[20px] shadow"
                >
                  <div className="mt-4">
                    <h3 className="text-black text-xl xl:text-3xl mb-5 font-bold">
                      {item["title"]}
                    </h3>

                    <p className="mt-1 text-gray-500">{item["des"]}</p>
                  </div>

                  <div className="flex justify-center items-center gap-6 mt-8">
                    <img
                      className="object-cover object-center w-[358px] h-[164px] rounded-[10px] shadow flex justify-center items-center"
                      src={item["image1"]}
                    />
                    <img
                      className="object-cover object-center w-[143px] h-[164px] rounded-[10px] shadow"
                      src={item["image2"]}
                    />
                  </div>

                  <div className="flex justify-center items-center gap-6 mt-8">
                    <img
                      className="object-cover object-center w-[180px] lg:w-[245px] h-[240px] lg:h-[330px] rounded-[10px] shadow"
                      src={item["image3"]}
                    />
                    <img
                      className="object-cover object-center w-[180px] lg:w-[245px] h-[240px] lg:h-[330px] rounded-[10px] shadow"
                      src={item["image4"]}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllServices;
