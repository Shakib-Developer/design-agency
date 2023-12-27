async function getData() {
  let res = await fetch(process.env.URL + "api/AllProject");
  if (!res.ok) {
    throw new Error("Brand Data is not success");
  }
  return res.json();
}

const AllProject = async () => {
  let data = await getData();

  return (
    <div>
      <section className="bg-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex-col mb-20 xl:pl-10">
            <div className="text-green-500 pb-5 text-lg lg:text-xl font-semibold font-['Poppins'] uppercase">
              All Projects
            </div>
            <div className="w-[400px] md:w-[495px] text-black text-xl lg:text-3xl font-semibold font-['Poppins']">
              Better Agency/SEO Solution At Your Fingertips
            </div>
          </div>

          <div className="grid xl:grid-cols-2 grid-cols-1 gap-0">
            {data.map((item, index) => {
              return (
                <div key={index} className="w-full">
                  <div>
                    <img
                      className="object-cover object-center rounded-lg w-[85%] mx-auto"
                      src={item["image"]}
                    />
                  </div>
                  <div className="mt-4 text-center mb-12">
                    <h3 className="text-black text-xl xl:text-[26px] font-bold tracking-wide">
                      {item["title"]}
                    </h3>
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

export default AllProject;
