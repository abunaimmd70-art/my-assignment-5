export default function Hero() {
  const brandGradient = "bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600";

  return (
    <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-20 md:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
      
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.15]">
            Build Your Ideal <br />
            <span className={`bg-clip-text text-transparent ${brandGradient}`}>
              Development Stack
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#technologies"
              className={`px-7 py-3 rounded-full text-white font-semibold text-sm shadow-md hover:shadow-lg hover:opacity-95 transition-all ${brandGradient}`}
            >
              Explore Technologies
            </a>
            <button className="px-7 py-3 rounded-full text-gray-700 font-semibold text-sm border border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-md">
            <div className={`absolute -inset-1 rounded-3xl ${brandGradient} opacity-20 blur-2xl`}></div>
            <img
              src="/banner-stack.png"
              alt="Dev Stack 3D Visual"
              className="relative w-full rounded-2xl shadow-xl object-cover border border-gray-100"
            />
          </div>
        </div>

      </div>
    </section>
  );
}