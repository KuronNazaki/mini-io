import AppleWatch from './../../assets/images/apple-watch.png'
import Statistic from './../../assets/images/hero-statistic.png'

const Hero = () => {
  return (
    <section>
      <div className="container mx-auto py-10 flex justify-between gap-10 flex-col lg:flex-row">
        <div className="content flex flex-col justify-center md:basis-4/6 basis-1/2">
          <div className="mb-2 font-semibold text-slate-400 text-lg">
            SmartWatch Exclusive
          </div>
          <h1 className="text-7xl font-black">
            Let go of the challenge See yourself better
          </h1>
          <div className="mt-10 text-xl">
            Real-time display of data such as exercise duration, mileage, heart
            rate, etc
          </div>
          <ul className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-slate-500">
            <li className="flex items-center">
              <svg
                className="fill-teal-500 w-3 inline-block mr-4"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
              </svg>
              <span>Anti fingerprints</span>
            </li>
            <li className="flex items-center">
              <svg
                className="fill-teal-500 w-3 inline-block mr-4"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
              </svg>
              <span>Dust prevention</span>
            </li>
            <li className="flex items-center">
              <svg
                className="fill-teal-500 w-3 inline-block mr-4"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
              </svg>
              <span>Delicate touch</span>
            </li>
            <li className="flex items-center">
              <svg
                className="fill-teal-500 w-3 inline-block mr-4"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
              </svg>
              <span>3D anti-chip</span>
            </li>
            <li className="flex items-center">
              <svg
                className="fill-teal-500 w-3 inline-block mr-4"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
              </svg>
              <span>Hardness screen</span>
            </li>
            <li className="flex items-center">
              <svg
                className="fill-teal-500 w-3 inline-block mr-4"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
              </svg>
              <span>Impact resistant</span>
            </li>
          </ul>
        </div>
        <div className="relative basis-1/4 md:basis-1/3 lg:basis-1/2">
          <div className="animate-vertically-moving">
            <img
              src={AppleWatch}
              alt="Apple Watch Mockup"
              className="h-full object-cover lg:w-full"
            />
          </div>
          <div className="absolute w-[50%] rounded-xl overflow-hidden shadow-2xl bottom-20 -right-10 animate-vertically-moving-reversed">
            <img
              src={Statistic}
              alt="Statistic Mockup"
              className="h-full object-cover lg:w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
