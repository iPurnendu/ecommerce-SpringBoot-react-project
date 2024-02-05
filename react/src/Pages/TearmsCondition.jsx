import React from 'react'

const TearmsCondition = () => {
  return (
    <>
      <div class="flex min-h-screen items-center justify-center">
        <div class="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img
              src="https://images.unsplash.com/photo-1573053986275-840ffc7cc685?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image"
              class="h-full w-full object-cover"
            />
          </div>
          <div class="p-6">
            <h1 class="mb-4 block font-sans text-larger font-bold uppercase leading-relaxed tracking-normal text-pink-500 antialiased w-500">
              Custom PC build
            </h1>
            <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              COMING SOON!!!
            </h4>
            <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              Get ready to redefine your computing experience! Our upcoming website lets you customize every detail of your computer—from design to performance. No tech expertise needed; it's all about your style and preferences.

              📅 Countdown to Launch:
              The grand unveiling is just around the corner. Stay tuned for the big day!

              🔗 Stay Connected:
              Sign up for exclusive updates and sneak peeks. Join us as we revolutionize personalized computing!

              Ready to transform your tech world? The future of customization awaits! 🌟
            </p>
            <a class="inline-block" href="#">
              <button
                class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Customize it & Buy it
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>

        <link
          rel="stylesheet"
          href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
        />
      </div>
      <div class="flex items-center justify-center">
        <div class="text-sm text-gray-700 py-1">
          Made with <a class="text-gray-700 font-semibold" href="https://www.material-tailwind.com/docs/html/card?ref=tailwindcomponents" target="_blank">Material Tailwind</a> by <a href="https://www.creative-tim.com?ref=tailwindcomponents" class="text-gray-700 font-semibold" target="_blank"> Creative Tim</a>.
        </div>
      </div>
    </>
  )
}

export default TearmsCondition