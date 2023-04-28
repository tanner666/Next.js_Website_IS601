export default function Main() {
    return (
      <section class="text-gray-600 body-font">
        <section class="relative pb-24">  
          <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <div class="py-24 md:py-36">
              <h1 class="mb-5 text-5xl font-bold text-white">
                Subscribe to our newsletter
              </h1>
              <h1 class="subtext mb-9 text-2xl font-semibold">
                Enter your email address and get our newsletters straight away.
              </h1>
              <input
                type="email"
                placeholder="jack@example.com"
                name="email"
                autocomplete="email"
                class="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-700 bg-black"
              />{" "}
              <a
                class="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-black transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-white"
                href="/"
              >
                <span class="justify-center">Subscribe</span>
              </a>
            </div>
          </div>
        </section>
      </section>
    );
  }