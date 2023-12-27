async function getData() {
  let res = await fetch(process.env.URL + "api/TestimonialList");
  if (!res.ok) {
    throw new Error("Testimonial Data is not success");
  }
  return res.json();
}

const TestimonialList = async () => {
  const data = await getData();

  return (
    <section>
      <div className="max-w-full py-20 bg-gray-50 radius-for-skewed overflow-hidden">
        <div className="container px-5 mx-auto">
          <div className="flex-col justify-start items-start gap-5 flex">
            <div className="text-green-500 text-base lg:text-xl font-medium uppercase">
              Testimonial List
            </div>
            <div className="text-black text-xl lg:text-3xl font-semibold">
              Better Agency/SEO Solution At <br /> Your Fingertips
            </div>
          </div>
        </div>
        <div className="relative flex mt-24">
          <div className="flex flex-wrap max-w-6xl px-2 mx-auto">
            {data.map((item, index) => {
              return (
                <div key={index} className="mb-4 w-full lg:w-1/3 px-3">
                  <div className="p-8 bg-white rounded shadow text-center">
                    <div
                      className="bg-no-repeat bg-left-top"
                      style={{
                        backgroundImage:
                          'url("atis-assets/elements/quote-grey.svg")',
                      }}
                    >
                      <img
                        className="mb-2 mx-auto w-12 h-12 rounded-full object-cover"
                        src={item["image"]}
                        alt=""
                      />
                      <p className="mb-8 text-gray-500 leading-loose">
                        {item["msg"]}
                      </p>
                      <h4 className="text-black mb-1 text-2xl font-bold font-heading">
                        {item["name"]}
                      </h4>
                      <p className="text-gray-500">{item["designation"]}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialList;
