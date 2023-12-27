const Footer = () => {
  return (
    <div className="body-font bg-black">
      <div className="container px-5 lg:px-20 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-full md:w-[40%] flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <div className="text-white text-2xl lg:text-4xl font-bold font-['Poppins']">
            WEB LOGO
          </div>
          <p className="w-1/2 mx-auto md:mx-0 mt-2 text-sm lg:text-base text-white">
            Some footer text about the Agency. Just a little description to help
            people understand you better
          </p>

          <span className="inline-flex sm:ml-auto pt-10 justify-center sm:justify-start">
            <a className="text-green-500">
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

            <a className="ml-3 text-green-500">
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

            <a className="ml-3 text-green-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-8 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>

            <a className="ml-3 text-green-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-8 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>

        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="w-full md:w-1/2 px-4 text-white">
            <h2 className="title-font font-bold uppercase tracking-widest text-base lg:text-lg mb-3">
              Quick Links
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="hover:text-gray-200 font-semibold">Services</a>
              </li>
              <li className="pt-4">
                <a className="hover:text-gray-200 font-semibold">Portfolio</a>
              </li>
              <li className="pt-4">
                <a className="hover:text-gray-200 font-semibold">About Us</a>
              </li>
              <li className="pt-4">
                <a className="hover:text-gray-200 font-semibold">Contact Us</a>
              </li>
            </nav>
          </div>

          <div className="w-full md:w-1/2 px-4 text-white">
            <h2 className="title-font font-bold uppercase tracking-widest text-base lg:text-lg mb-3">
              Address
            </h2>
            <p className="font-semibold">
              Design Agency Head Office.
              <br />
              Airport Road
              <br />
              United Arab Emirate
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="container mx-auto lg:px-20 pb-8">
          <p className="text-white text-base text-center lg:text-left">
            Copyright Design Agency 2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
