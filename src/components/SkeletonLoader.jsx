
export default function SkeletonLoader() {
  return (
    <div className="relative h-full w-full">
      <div className="min-h-screen bg-white dark:bg-[#18181b] text-gray-900">
        {/* Navbar */}
        <div className="h-16 w-full bg-gray-200 dark:bg-zinc-800 animate-pulse"></div>

        {/* Hero Section */}
        <section className="max-w-3xl mx-auto flex flex-col-reverse md:flex-row justify-between md:items-center py-12 px-6">
          <div className="max-w-lg space-y-3">
            <div className="h-8 w-52 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse"></div>
            <div className="h-4 w-64 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse"></div>
            <div className="h-4 w-56 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse"></div>
            <div className="h-4 w-72 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse"></div>
          </div>

          <div className="relative flex p-4 w-28 mb-5">
            <div className="h-20 w-20 bg-gray-200 dark:bg-zinc-800 rounded-full animate-pulse"></div>
          </div>
        </section>

        {/* Recent Blogs */}
        <section className="max-w-3xl mx-auto px-6 dark:text-gray-200">
          <div className="h-8 w-48 bg-gray-200 dark:bg-zinc-800 rounded mb-6 animate-pulse"></div>

          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="p-4 rounded-lg border border-gray-300 bg-gray-100 dark:bg-[#27272a] dark:border-gray-500/50 animate-pulse"
              >
                <div className="h-5 w-3/4 bg-gray-300 dark:bg-zinc-700 rounded mb-2"></div>
                <div className="h-4 w-5/6 bg-gray-300 dark:bg-zinc-700 rounded"></div>
              </div>
            ))}
          </div>
          <div className="flex mt-6 justify-center">
            <div className="h-4 w-32 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse"></div>
          </div>
        </section>

        {/* Projects */}
        <section className="max-w-3xl mx-auto px-6 py-12 dark:text-gray-200">
          <div className="h-8 w-40 bg-gray-200 dark:bg-zinc-800 rounded mb-6 animate-pulse"></div>

          <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="rounded-lg p-4 bg-gray-100 dark:bg-[#27272a] animate-pulse"
              >
                <div className="h-32 w-full bg-gray-300 dark:bg-zinc-700 rounded mb-3"></div>
                <div className="h-5 w-3/4 bg-gray-300 dark:bg-zinc-700 rounded mb-1"></div>
                <div className="h-4 w-2/3 bg-gray-300 dark:bg-zinc-700 rounded"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="max-w-2xl mx-auto px-6 py-12 dark:text-gray-200">
          <div className="space-y-4">
            <div className="h-6 w-40 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse"></div>
            <div className="h-20 w-full bg-gray-200 dark:bg-zinc-800 rounded animate-pulse"></div>
          </div>
        </section>

        {/* Footer */}
        <section className="max-w-2xl mx-auto px-6 py-12 dark:text-gray-200">
          <div className="h-4 w-1/2 bg-gray-200 dark:bg-zinc-800 rounded mx-auto animate-pulse"></div>
        </section>
      </div>
    </div>
  );
}
