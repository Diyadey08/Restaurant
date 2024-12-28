import { Link } from "react-router-dom"
export default function Hero() {
    return (
      <section className="relative">
        <div className="absolute inset-0 bg-black">
          <div 
            className="absolute inset-0 bg-[url('https://img.freepik.com/free-photo/golden-cutlery-with-textile-plate-dark-background-top-view_1220-6580.jpg')] bg-cover bg-center bg-no-repeat opacity-50"
            style={{
              backgroundPosition: "50% 30%"
            }}
          />
        </div>
        <div className="relative container mx-auto px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              <span className="block text-white">Experience Culinary</span>
              <span className="block text-amber-500 mt-1">Excellence</span>
            </h1>
  
            <p className="mt-4 max-w-lg sm:text-xl/relaxed text-gray-300">
              Indulge in an unforgettable dining experience where every dish tells a story of passion and creativity.
            </p>
  
            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link
                to="/Reservation"
                className="w-full rounded bg-amber-500 px-12 py-3 text-sm font-medium text-white hover:bg-amber-600 focus:outline-none focus:ring active:bg-amber-500 sm:w-auto"
              >
                Reserve a Table
              </Link>
              <Link
                to="/Page"
                className="w-full rounded border border-amber-500 px-12 py-3 text-sm font-medium text-amber-500 hover:bg-amber-500 hover:text-white focus:outline-none focus:ring active:bg-amber-500 sm:w-auto"
              >
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  