function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
      <h1 className="text-5xl font-extrabold text-blue-700 tracking-wide animate-pulse">
        SKIMITAR
      </h1>

      <p className="mt-2 text-gray-600 text-lg">
        Hindusthan Pvt Ltd
      </p>

      <div className="flex gap-2 mt-8">
        <span className="loader-dot"></span>
        <span className="loader-dot animation-delay-200"></span>
        <span className="loader-dot animation-delay-400"></span>
      </div>

      <p className="mt-6 text-gray-500 tracking-widest uppercase text-sm">
        Loading...
      </p>
    </div>
  );
}

export default Loader;