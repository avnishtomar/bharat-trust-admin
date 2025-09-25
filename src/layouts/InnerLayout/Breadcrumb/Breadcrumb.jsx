const Breadcrumb = ({ page }) => {
  return (
    <>
      <div className="relative bg-white dark:bg-gray-900">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/images/${page?.toLowerCase()}-hero.jpg)`,
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="space-y-4 bg-white/90 dark:bg-gray-900/90 p-6 rounded-lg backdrop-blur-sm">
              <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2">
                  <li className="inline-flex items-center">
                    <a
                      href="/"
                      className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-400 dark:hover:text-white"
                    >
                      Home
                    </a>
                  </li>
                  <li aria-current="page">
                    <div className="flex items-center">
                      <svg
                        className="w-3 h-3 mx-1 text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 9 4-4-4-4"
                        />
                      </svg>
                      <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                        {page}
                      </span>
                    </div>
                  </li>
                </ol>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                {page}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
                Explore our comprehensive {page?.toLowerCase()} section for all
                the information you need
              </p>
            </div>
            <div className="w-full md:w-1/3"></div>
          </div>
          <div className="absolute inset-0 bg-black/10 dark:bg-black/30 z-0"></div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
