import AppleWatch from './../../assets/images/apple-watch.png'

const Hero = () => {
  return (
    <section>
      <div className="container mx-auto py-20 flex justify-between gap-10">
        <div className="content flex flex-col justify-center basis-1/2">
          <h1 className="text-7xl font-black">Your website, reimagined</h1>
          <div className="mt-5 text-xl">
            Our landing page template works on all devices, so you only have to
            set it up once, and get beautiful results forever.
          </div>
          <ul className="mt-10">
            <li className="flex items-center">
              <svg
                className="fill-teal-500 w-3 inline-block mr-4"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
              </svg>
              <span>Lorem ipsum is placeholder text commonly.</span>
            </li>
            <li className="flex items-center">
              <svg
                className="fill-teal-500 w-3 inline-block mr-4"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
              </svg>
              <span>Excepteur sint occaecat cupidatat.</span>
            </li>
            <li className="flex items-center">
              <svg
                className="fill-teal-500 w-3 inline-block mr-4"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
              </svg>
              <span>Lorem ipsum is placeholder text commonly.</span>
            </li>
          </ul>
        </div>
        <div className="relative basis-1/2 overflow-hidden rounded-xl animate-vertically-moving">
          <img
            src={AppleWatch}
            alt="Phone Mockup"
            className="h-full object-cover lg:w-full"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
