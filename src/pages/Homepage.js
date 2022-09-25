import React from "react";
import Charts from "../Componets/Charts";

const Homepage = () => {
  return (
    <>
      <section id="home" className="relative z-10 pt-48 pb-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[720px] text-center">
                <h1 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white md:text-[45px]">
                  Tailwind CSS Template for Crypto, ICO and Web3
                </h1>
                <p className="mx-auto mb-4 max-w-[620px] text-lg font-medium text-body-color-2 dark:text-white">
                  Crypto Currency, Blockchain, ICO, Web3 related website
                  template crafted with Tailwind CSS. Comes with all essential
                  UI components and pages to launch complete website or landing
                  page for anything that related to Crypto, Blockchain and Web3.
                </p>

                <div className="-mx-1 mb-10 flex flex-wrap items-center justify-center sm:-mx-2">
                  <div className="group relative mt-4 px-1 sm:px-2">
                    <span className="mt-2 flex h-10 w-10 items-center justify-center rounded-full bg-white">
                      <svg
                        width="28"
                        height="29"
                        viewBox="0 0 28 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M27.5815 17.3879C25.7115 24.8885 18.1146 29.4533 10.6131 27.5829C3.11474 25.7129 -1.44998 18.1155 0.420775 10.6155C2.28989 3.11409 9.8868 -1.45098 17.386 0.418958C24.8869 2.28889 29.4514 9.8871 27.5813 17.3881L27.5814 17.3879H27.5815Z"
                          fill="#F7931A"
                        />
                        <path
                          d="M18.9713 12.0301C19.2001 10.454 18.0353 9.60675 16.4424 9.04155L16.9591 6.90652L15.6975 6.58268L15.1945 8.6615C14.8628 8.57628 14.5222 8.49599 14.1837 8.41639L14.6904 6.32384L13.4295 6L12.9125 8.13434C12.6381 8.06996 12.3685 8.00634 12.107 7.9393L12.1084 7.93259L10.3686 7.48503L10.033 8.87315C10.033 8.87315 10.969 9.09418 10.9493 9.10778C11.4602 9.23914 11.5526 9.58753 11.5372 9.86367L10.9486 12.296C10.9838 12.3052 11.0294 12.3185 11.0798 12.3393C11.0377 12.3286 10.9929 12.3168 10.9464 12.3054L10.1214 15.7127C10.059 15.8726 9.90051 16.1125 9.54333 16.0214C9.55597 16.0403 8.62637 15.7857 8.62637 15.7857L8 17.2734L9.64178 17.695C9.94721 17.7739 10.2465 17.8564 10.5413 17.9341L10.0192 20.0936L11.2794 20.4174L11.7964 18.2808C12.1406 18.3771 12.4747 18.4659 12.8018 18.5496L12.2865 20.6762L13.5482 21L14.0702 18.8445C16.2215 19.264 17.8391 19.0949 18.52 17.0903C19.0687 15.4764 18.4927 14.5455 17.3609 13.9385C18.1852 13.7426 18.8062 13.1841 18.9717 12.0303L18.9713 12.03L18.9713 12.0301ZM16.0888 16.194C15.6989 17.8079 13.0611 16.9355 12.2059 16.7167L12.8987 13.8557C13.7539 14.0757 16.4963 14.5109 16.0888 16.194H16.0888ZM16.4789 12.0068C16.1233 13.4748 13.9278 12.7289 13.2157 12.5461L13.8438 9.95132C14.556 10.1342 16.8494 10.4755 16.4791 12.0068H16.4789Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <div className="absolute -top-full left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#2D2C4A] px-5 py-2 text-white opacity-0 group-hover:opacity-100">
                      <span className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-[#2D2C4A]"></span>
                      <span>Bitcoin (BTC)</span>
                    </div>
                  </div>
                  <div className="group relative mt-4 px-1 sm:px-2">
                    <span className="mt-2 flex h-10 w-10 items-center justify-center rounded-full bg-white">
                      <svg
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="14.28"
                          cy="14.28"
                          r="14.28"
                          fill="#295ADA"
                        />
                        <g clip-path="url(#clip0_73_10326)">
                          <path
                            d="M14.4692 7L13.1848 7.73853L9.68479 9.76147L8.40039 10.5V17.5L9.68479 18.2385L13.2169 20.2615L14.5013 21L15.7857 20.2615L19.2536 18.2385L20.538 17.5V10.5L19.2536 9.76147L15.7536 7.73853L14.4692 7ZM10.9692 16.0229V11.9771L14.4692 9.95413L17.9692 11.9771V16.0229L14.4692 18.0459L10.9692 16.0229Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_73_10326">
                            <rect
                              width="12.1376"
                              height="14"
                              fill="white"
                              transform="translate(8.40039 7)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <div className="absolute -top-full left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#2D2C4A] px-5 py-2 text-white opacity-0 group-hover:opacity-100">
                      <span className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-[#2D2C4A]"></span>
                      <span>Bitcoin (BTC)</span>
                    </div>
                  </div>
                  <div className="group relative mt-4 px-1 sm:px-2">
                    <span className="mt-2 flex h-10 w-10 items-center justify-center rounded-full bg-white">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="14" cy="14" r="14" fill="#24292F" />
                        <g clip-path="url(#clip0_73_10306)">
                          <path
                            d="M17.0343 8.79657L14.7432 12.2005C14.5847 12.4323 14.8894 12.7129 15.1088 12.5177L17.3633 10.5534C17.4243 10.5046 17.5096 10.5412 17.5096 10.6266V16.7635C17.5096 16.8489 17.3999 16.8855 17.3511 16.8245L10.5265 8.65017C10.3071 8.38176 9.99026 8.23535 9.63684 8.23535H9.39311C8.75939 8.23535 8.23535 8.75997 8.23535 9.40659V18.0445C8.23535 18.6911 8.75939 19.2157 9.40529 19.2157C9.80746 19.2157 10.1853 19.0083 10.4046 18.6545L12.6958 15.2506C12.8542 15.0188 12.5495 14.7382 12.3301 14.9334L10.0756 16.8855C10.0146 16.9343 9.92933 16.8977 9.92933 16.8123V10.6876C9.92933 10.6022 10.039 10.5656 10.0878 10.6266L16.9124 18.8009C17.1318 19.0693 17.4608 19.2157 17.8021 19.2157H18.0458C18.6917 19.2157 19.2157 18.6911 19.2157 18.0445V9.40659C19.2157 8.75997 18.6917 8.23535 18.0458 8.23535C17.6314 8.23535 17.2537 8.44276 17.0343 8.79657Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_73_10306">
                            <rect
                              width="10.9804"
                              height="10.9804"
                              fill="white"
                              transform="translate(8.23535 8.23535)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <div className="absolute -top-full left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#2D2C4A] px-5 py-2 text-white opacity-0 group-hover:opacity-100">
                      <span className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-[#2D2C4A]"></span>
                      <span>Bitcoin (BTC)</span>
                    </div>
                  </div>
                  <div className="group relative mt-4 px-1 sm:px-2">
                    <span className="mt-2 flex h-10 w-10 items-center justify-center rounded-full bg-white">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M27.578 17.3867C25.7082 24.8867 18.1118 29.4511 10.6109 27.5809C3.11305 25.7111 -1.45134 18.1142 0.419279 10.6148C2.28826 3.11387 9.88462 -1.45087 17.3833 0.418928C24.8837 2.28873 29.4478 9.88639 27.5778 17.3868L27.5779 17.3867H27.578Z"
                          fill="#1181E7"
                        />
                        <g clip-path="url(#clip0_73_10312)">
                          <path
                            d="M13.9982 6.12451L13.8926 6.48343V16.8976L13.9982 17.003L18.8323 14.1456L13.9982 6.12451Z"
                            fill="#D6D6D6"
                          />
                          <path
                            d="M13.9982 6.12451L9.16406 14.1456L13.9982 17.003V11.9483V6.12451Z"
                            fill="white"
                          />
                          <path
                            d="M13.998 17.9175L13.9385 17.9901V21.6998L13.998 21.8736L18.835 15.0615L13.998 17.9175Z"
                            fill="#D6D6D6"
                          />
                          <path
                            d="M13.9982 21.8736V17.9175L9.16406 15.0615L13.9982 21.8736Z"
                            fill="white"
                          />
                          <path
                            d="M13.998 17.0025L18.8321 14.1451L13.998 11.9478V17.0025Z"
                            fill="#F3F3F3"
                          />
                          <path
                            d="M9.16406 14.1451L13.9982 17.0025V11.9478L9.16406 14.1451Z"
                            fill="#E2E2E2"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_73_10312">
                            <rect
                              width="15.749"
                              height="15.749"
                              fill="white"
                              transform="translate(6.125 6.12451)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <div className="absolute -top-full left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#2D2C4A] px-5 py-2 text-white opacity-0 group-hover:opacity-100">
                      <span className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-[#2D2C4A]"></span>
                      <span>Bitcoin (BTC)</span>
                    </div>
                  </div>
                  <div className="group relative mt-4 px-1 sm:px-2">
                    <span className="mt-2 flex h-10 w-10 items-center justify-center rounded-full bg-white">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="14" cy="13.9995" r="14" fill="#8247E5" />
                        <g clip-path="url(#clip0_73_10294)">
                          <path
                            d="M17.5729 10.8364C17.3177 10.686 16.9896 10.686 16.6979 10.8364L14.6562 12.0776L13.2708 12.8675L11.2656 14.1087C11.0104 14.2591 10.6823 14.2591 10.3906 14.1087L8.82292 13.1308C8.56771 12.9803 8.38542 12.6794 8.38542 12.3409V10.4603C8.38542 10.1594 8.53125 9.85852 8.82292 9.67046L10.3906 8.73016C10.6458 8.57972 10.974 8.57972 11.2656 8.73016L12.8333 9.70807C13.0885 9.85852 13.2708 10.1594 13.2708 10.4979V11.7391L14.6562 10.9117V9.63285C14.6562 9.33195 14.5104 9.03106 14.2187 8.843L11.3021 7.07524C11.0469 6.92479 10.7187 6.92479 10.4271 7.07524L7.4375 8.88061C7.14583 9.03106 7 9.33195 7 9.63285V13.1684C7 13.4693 7.14583 13.7702 7.4375 13.9582L10.3906 15.726C10.6458 15.8764 10.974 15.8764 11.2656 15.726L13.2708 14.5224L14.6562 13.6949L16.6615 12.4914C16.9167 12.3409 17.2448 12.3409 17.5365 12.4914L19.1042 13.4317C19.3594 13.5821 19.5417 13.883 19.5417 14.2215V16.1021C19.5417 16.403 19.3958 16.7039 19.1042 16.892L17.5729 17.8323C17.3177 17.9827 16.9896 17.9827 16.6979 17.8323L15.1302 16.892C14.875 16.7415 14.6927 16.4406 14.6927 16.1021V14.8985L13.3073 15.726V16.9672C13.3073 17.2681 13.4531 17.569 13.7448 17.757L16.6979 19.5248C16.9531 19.6752 17.2812 19.6752 17.5729 19.5248L20.526 17.757C20.7812 17.6066 20.9635 17.3057 20.9635 16.9672V13.394C20.9635 13.0931 20.8177 12.7923 20.526 12.6042L17.5729 10.8364Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_73_10294">
                            <rect
                              width="14"
                              height="12.6"
                              fill="white"
                              transform="translate(7 7)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <div className="absolute -top-full left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#2D2C4A] px-5 py-2 text-white opacity-0 group-hover:opacity-100">
                      <span className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-[#2D2C4A]"></span>
                      <span>Bitcoin (BTC)</span>
                    </div>
                  </div>
                  <div className="group relative mt-4 px-1 sm:px-2">
                    <span className="mt-2 flex h-10 w-10 items-center justify-center rounded-full bg-white">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="14" cy="14" r="14" fill="#F14E51" />
                        <path
                          d="M20.8096 11.2176C20.1191 10.6117 19.1639 9.6864 18.386 9.03016L18.34 8.99953C18.2634 8.94108 18.177 8.89524 18.0845 8.86391C16.2087 8.53142 7.47873 6.9805 7.30841 7.00019C7.26069 7.00654 7.21507 7.02298 7.17492 7.04831L7.13119 7.08112C7.07734 7.1331 7.03645 7.19589 7.01151 7.26487L7 7.29331V7.44862V7.47268C7.98278 10.0736 11.8633 18.5938 12.6274 20.5931C12.6734 20.7288 12.7609 20.9869 12.9243 21H12.9611C13.0486 21 13.4215 20.5319 13.4215 20.5319C13.4215 20.5319 20.0869 12.8495 20.7612 12.0314C20.8485 11.9306 20.9256 11.8222 20.9914 11.7076C21.0082 11.618 21.0003 11.5257 20.9684 11.4399C20.9366 11.354 20.8818 11.2774 20.8096 11.2176ZM15.1315 12.1123L17.9763 9.87015L19.645 11.3314L15.1315 12.1123ZM14.0268 11.9657L9.12898 8.1508L17.0534 9.53984L14.0268 11.9657ZM14.4687 12.9654L19.4816 12.1976L13.7506 18.76L14.4687 12.9654ZM8.46382 8.53142L13.6171 12.6876L12.8714 18.7644L8.46382 8.53142Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <div className="absolute -top-full left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#2D2C4A] px-5 py-2 text-white opacity-0 group-hover:opacity-100">
                      <span className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-[#2D2C4A]"></span>
                      <span>Bitcoin (BTC)</span>
                    </div>
                  </div>
                </div>

                <a
                  href="/#"
                  className="rounded-full bg-primary py-3 px-8 text-base font-semibold text-white hover:bg-opacity-90 dark:hover:bg-opacity-90"
                >
                  Buy Tokens 47% Off
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute top-0 left-0 -z-10 h-full w-full opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(180deg,#3e7dff 0%,rgba(62, 125, 255, 0) 100%)",
          }}
        ></div>
        <img
          src="images/shapes/hero-shape-1.svg"
          alt=""
          className="absolute left-0 top-0 -z-10"
        />
        <img
          src="images/shapes/hero-shape-2.svg"
          alt=""
          className="absolute right-0 top-0 -z-10"
        />
      </section>

      <section id="about">
        <div className="container">
          <div className="wow fadeInUp border-y border-[#F3F4F4] pt-10 dark:border-[#2D2C4A]">
            <h2 className="mb-10 text-center text-lg font-bold text-black dark:text-white sm:text-2xl">
              Join the 20,000+ companies using the our platform
            </h2>

            <div className="-mx-4 flex flex-wrap items-center justify-center">
              <div className="px-4">
                <a
                  href="https://uideck.com"
                  className="mb-10 flex max-w-[170px] justify-center opacity-70 grayscale hover:opacity-100 hover:grayscale-0 dark:hover:opacity-100"
                >
                  <img
                    src="images/brands/uideck-white.svg"
                    alt="uideck"
                    className="mx-auto hidden h-10 text-center dark:block"
                  />
                  <img
                    src="images/brands/uideck.svg"
                    alt="uideck"
                    className="mx-auto h-10 text-center dark:hidden"
                  />
                </a>
              </div>
              <div className="px-4">
                <a
                  href="https://tailgrids.com"
                  className="mb-10 flex max-w-[170px] justify-center opacity-70 grayscale hover:opacity-100 hover:grayscale-0 dark:hover:opacity-100"
                >
                  <img
                    src="images/brands/TailGrids-white.svg"
                    alt="tailgrids"
                    className="mx-auto hidden h-10 text-center dark:block"
                  />
                  <img
                    src="images/brands/tailgrids.svg"
                    alt="tailgrids"
                    className="mx-auto h-10 text-center dark:hidden"
                  />
                </a>
              </div>
              <div className="px-4">
                <a
                  href="https://lineicons.com"
                  className="mb-10 flex max-w-[170px] justify-center opacity-70 grayscale hover:opacity-100 hover:grayscale-0 dark:hover:opacity-100"
                >
                  <img
                    src="images/brands/LineIcons-white.svg"
                    alt="lineicons"
                    className="mx-auto hidden h-10 text-center dark:block"
                  />
                  <img
                    src="images/brands/lineicons.svg"
                    alt="lineicons"
                    className="mx-auto h-10 text-center dark:hidden"
                  />
                </a>
              </div>
              <div className="px-4">
                <a
                  href="https://ayroui.com"
                  className="mb-10 flex max-w-[170px] justify-center opacity-70 grayscale hover:opacity-100 hover:grayscale-0 dark:hover:opacity-100"
                >
                  <img
                    src="images/brands/AyroUI-white.svg"
                    alt="ayroui"
                    className="mx-auto hidden h-10 text-center dark:block"
                  />
                  <img
                    src="images/brands/ayroui.svg"
                    alt="ayroui"
                    className="mx-auto h-10 text-center dark:hidden"
                  />
                </a>
              </div>
              <div className="px-4">
                <a
                  href="https://plainadmin.com"
                  className="mb-10 flex max-w-[170px] justify-center opacity-70 grayscale hover:opacity-100 hover:grayscale-0 dark:hover:opacity-100"
                >
                  <img
                    src="images/brands/PlainAdmin-white.svg"
                    alt="plainadmin"
                    className="mx-auto hidden h-10 text-center dark:block"
                  />
                  <img
                    src="images/brands/plainadmin.svg"
                    alt="plainadmin"
                    className="mx-auto h-10 text-center dark:hidden"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="pt-[120px] pb-16">
        <div className="container">
          <div className="wow fadeInUp mx-auto mb-16 max-w-[590px] text-center md:mb-20">
            <span className="mb-3 text-lg font-bold uppercase text-primary sm:text-xl">
              CRYPTO FEATURE
            </span>
            <h2 className="mb-3 text-3xl font-bold leading-tight text-black dark:text-white md:text-[45px]">
              Best Features
            </h2>
            <p className="text-lg font-medium text-body-color-2 dark:text-body-color">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
              congue arcu, In et dignissim quam condimentum vel.
            </p>
          </div>

          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="wow fadeInUp mx-auto mb-14 max-w-[370px] text-center">
                <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 1.66675L5 8.33341V18.3334C5 27.5834 11.4 36.2334 20 38.3334C28.6 36.2334 35 27.5834 35 18.3334V8.33341L20 1.66675ZM20 19.9834H31.6667C30.7833 26.8501 26.2 32.9667 20 34.8834V20.0001H8.33333V10.5001L20 5.31675V19.9834Z"
                      fill="white"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl xl:text-3xl">
                    Safe & Secure
                  </h3>

                  <p className="text-base font-medium text-body-color-2 dark:text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod
                    tempor labore labore labore et dolor .
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="wow fadeInUp mx-auto mb-14 max-w-[370px] text-center">
                <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33.3333 9.99992H29.6999C29.8833 9.48325 29.9999 8.91658 29.9999 8.33325C29.9999 5.56659 27.7666 3.33325 24.9999 3.33325C23.2499 3.33325 21.7333 4.23325 20.8333 5.58325L19.9999 6.69992L19.1666 5.56659C18.2666 4.23325 16.7499 3.33325 14.9999 3.33325C12.2333 3.33325 9.99992 5.56659 9.99992 8.33325C9.99992 8.91658 10.1166 9.48325 10.2999 9.99992H6.66659C4.81659 9.99992 3.34992 11.4833 3.34992 13.3333L3.33325 31.6666C3.33325 33.5166 4.81659 34.9999 6.66659 34.9999H33.3333C35.1833 34.9999 36.6666 33.5166 36.6666 31.6666V13.3333C36.6666 11.4833 35.1833 9.99992 33.3333 9.99992ZM24.9999 6.66659C25.9166 6.66659 26.6666 7.41658 26.6666 8.33325C26.6666 9.24992 25.9166 9.99992 24.9999 9.99992C24.0833 9.99992 23.3333 9.24992 23.3333 8.33325C23.3333 7.41658 24.0833 6.66659 24.9999 6.66659ZM14.9999 6.66659C15.9166 6.66659 16.6666 7.41658 16.6666 8.33325C16.6666 9.24992 15.9166 9.99992 14.9999 9.99992C14.0833 9.99992 13.3333 9.24992 13.3333 8.33325C13.3333 7.41658 14.0833 6.66659 14.9999 6.66659ZM33.3333 31.6666H6.66659V28.3333H33.3333V31.6666ZM33.3333 23.3333H6.66659V13.3333H15.1333L11.6666 18.0499L14.3666 19.9999L18.3333 14.5999L19.9999 12.3333L21.6666 14.5999L25.6333 19.9999L28.3333 18.0499L24.8666 13.3333H33.3333V23.3333Z"
                      fill="white"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl xl:text-3xl">
                    Early Bonus
                  </h3>

                  <p className="text-base font-medium text-body-color-2 dark:text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod
                    tempor labore labore labore et dolor .
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="wow fadeInUp mx-auto mb-14 max-w-[370px] text-center">
                <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 3.33325L10.8334 18.3333H29.1667L20 3.33325Z"
                      fill="white"
                    />
                    <path
                      d="M29.1666 36.6667C33.3088 36.6667 36.6666 33.3089 36.6666 29.1667C36.6666 25.0246 33.3088 21.6667 29.1666 21.6667C25.0245 21.6667 21.6666 25.0246 21.6666 29.1667C21.6666 33.3089 25.0245 36.6667 29.1666 36.6667Z"
                      fill="white"
                    />
                    <path d="M5 22.5H18.3333V35.8333H5V22.5Z" fill="white" />
                  </svg>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl xl:text-3xl">
                    Universal Access
                  </h3>

                  <p className="text-base font-medium text-body-color-2 dark:text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod
                    tempor labore labore labore et dolor .
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="wow fadeInUp mx-auto mb-14 max-w-[370px] text-center">
                <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 24.9999H18.3333V21.6666H5V24.9999ZM5 31.6666H18.3333V28.3333H5V31.6666ZM5 18.3333H18.3333V14.9999H5V18.3333ZM5 8.33325V11.6666H18.3333V8.33325H5ZM21.6667 8.33325H35V31.6666H21.6667V8.33325Z"
                      fill="white"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl xl:text-3xl">
                    Secure Storage
                  </h3>

                  <p className="text-base font-medium text-body-color-2 dark:text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod
                    tempor labore labore labore et dolor .
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="wow fadeInUp mx-auto mb-14 max-w-[370px] text-center">
                <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M35 30V31.6667C35 33.5 33.5 35 31.6667 35H8.33333C6.48333 35 5 33.5 5 31.6667V8.33333C5 6.5 6.48333 5 8.33333 5H31.6667C33.5 5 35 6.5 35 8.33333V10H20C18.15 10 16.6667 11.5 16.6667 13.3333V26.6667C16.6667 28.5 18.15 30 20 30H35ZM20 26.6667H36.6667V13.3333H20V26.6667ZM26.6667 22.5C25.2833 22.5 24.1667 21.3833 24.1667 20C24.1667 18.6167 25.2833 17.5 26.6667 17.5C28.05 17.5 29.1667 18.6167 29.1667 20C29.1667 21.3833 28.05 22.5 26.6667 22.5Z"
                      fill="white"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl xl:text-3xl">
                    Low Cost
                  </h3>

                  <p className="text-base font-medium text-body-color-2 dark:text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod
                    tempor labore labore labore et dolor .
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="wow fadeInUp mx-auto mb-14 max-w-[370px] text-center">
                <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 13.3333C16.3167 13.3333 13.3333 16.3167 13.3333 20C13.3333 23.6833 16.3167 26.6667 20 26.6667C23.6833 26.6667 26.6667 23.6833 26.6667 20C26.6667 16.3167 23.6833 13.3333 20 13.3333ZM8.33333 25H5V31.6667C5 33.5 6.5 35 8.33333 35H15V31.6667H8.33333V25ZM8.33333 8.33333H15V5H8.33333C6.5 5 5 6.5 5 8.33333V15H8.33333V8.33333ZM31.6667 5H25V8.33333H31.6667V15H35V8.33333C35 6.5 33.5 5 31.6667 5ZM31.6667 31.6667H25V35H31.6667C33.5 35 35 33.5 35 31.6667V25H31.6667V31.6667Z"
                      fill="white"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-bold text-black dark:text-white sm:text-3xl lg:text-xl xl:text-3xl">
                    Several Profit
                  </h3>

                  <p className="text-base font-medium text-body-color-2 dark:text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Lorem ipsum dolor sit amet consectetur elit, sed do eiusmod
                    tempor labore labore labore et dolor .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chart section */}
      <section className="relative z-10">
        <div className="container">
          <div className="rounded-lg bg-light-bg py-12 px-8 dark:bg-[#14102C] sm:py-16 sm:px-14 lg:px-8 xl:px-14">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <div className="wow fadeInUp mb-12 flex items-center justify-center lg:mb-0">
                  <div id="chart">
                    <Charts />
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div className="wow fadeInUp mb-9">
                  <span className="mb-3 text-lg font-bold uppercase text-primary sm:text-xl">
                    TOKEN
                  </span>
                  <h2 className="mb-3 text-3xl font-bold leading-tight text-black dark:text-white md:text-[45px]">
                    Token Sale
                  </h2>
                  <p className="text-lg font-medium text-body-color-2 dark:text-body-color">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus condimentum tellus at lectus pulvinar, id auctor
                    felis iaculis. In vestibulum neque sem, at dapibus justo
                    facilisis in.
                  </p>
                </div>
                <div className="wow fadeInUp space-y-4">
                  <p className="flex">
                    <span className="mr-4 h-6 w-6 rounded-full bg-primary"></span>
                    <span className="text-lg font-medium text-body-color-2 dark:text-body-color">
                      73% Financial Overhead
                    </span>
                  </p>
                  <p className="flex">
                    <span className="mr-4 h-6 w-6 rounded-full bg-[#2347B9]"></span>
                    <span className="text-lg font-medium text-body-color-2 dark:text-body-color">
                      55% Bonus & found
                    </span>
                  </p>
                  <p className="flex">
                    <span className="mr-4 h-6 w-6 rounded-full bg-[#8BA6FF]"></span>
                    <span className="text-lg font-medium text-body-color-2 dark:text-body-color">
                      38% it infastrueture
                    </span>
                  </p>
                  <p className="flex">
                    <span className="mr-4 h-6 w-6 rounded-full bg-[#8696CA]"></span>
                    <span className="text-lg font-medium text-body-color-2 dark:text-body-color">
                      20.93% Gift Code Inventory
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-0 -top-32 -z-10">
          <img src="images/shapes/token-sale-shape.svg" alt="shape" />
        </div>
      </section>

      <section id="roadmap" className="relative z-10 py-[120px]">
        <div className="container">
          <div className="wow fadeInUp mx-auto mb-16 max-w-[590px] text-center md:mb-20">
            <span className="mb-3 text-lg font-bold uppercase text-primary sm:text-xl">
              ROADMAP
            </span>
            <h2 className="mb-3 text-3xl font-bold leading-tight text-black dark:text-white md:text-[45px]">
              The Timeline
            </h2>
            <p className="text-lg font-medium text-body-color-2 dark:text-body-color">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
              congue arcu, In et dignissim quam condimentum vel.
            </p>
          </div>

          <div className="-mx-4 flex justify-center">
            <div className="w-full px-4 lg:w-10/12 xl:w-9/12">
              <div className="wow fadeInUp relative -mx-4 flex flex-wrap md:py-14 lg:py-20">
                <span className="absolute top-0 left-2 hidden h-full w-[2px] bg-light-bg dark:bg-[#2D2C4A] md:left-1/2 md:block"></span>
                <div className="w-full px-4 md:w-1/2">
                  <div className="relative z-10 mb-10 rounded-lg bg-light-bg py-8 px-6 dark:bg-dark md:mr-3 md:mb-0 md:text-right lg:mr-5">
                    <span className="absolute top-1/2 left-0 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-primary bg-white dark:border-body-color md:left-auto md:-right-9 md:block lg:-right-11"></span>
                    <span className="absolute -right-1 top-1/2 hidden h-3 w-3 -translate-y-1/2 rotate-45 bg-light-bg dark:bg-dark md:block"></span>
                    <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                      Feb 25,2020
                    </h3>
                    <p className="mb-5 text-base font-medium text-body-color-2 dark:text-body-color">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc sed congue arcu, In et dignissim quam condimentum vel
                    </p>

                    <a
                      href="/#"
                      className="inline-flex items-center justify-center rounded-full bg-white p-2 pr-3"
                    >
                      <span className="pr-1">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.7287 11.1771C16.5267 15.9986 11.6433 18.9329 6.82128 17.7306C2.00125 16.5285 -0.933006 11.6449 0.269537 6.82378C1.47102 2.00177 6.3544 -0.932704 11.175 0.269311C15.9966 1.47133 18.9307 6.35553 17.7286 11.1772L17.7287 11.1771H17.7287Z"
                            fill="#F7931A"
                          />
                          <path
                            d="M13.1113 8.32768C13.2804 7.19652 12.4193 6.58848 11.2416 6.18285L11.6237 4.65059L10.6909 4.41817L10.319 5.91009C10.0738 5.84893 9.82201 5.79131 9.57173 5.73418L9.94632 4.23242L9.01417 4L8.63193 5.53176C8.42902 5.48556 8.22972 5.4399 8.03636 5.39179L8.03744 5.38697L6.75117 5.06577L6.50305 6.06199C6.50305 6.06199 7.19507 6.22062 7.18048 6.23038C7.55819 6.32465 7.62649 6.57468 7.61515 6.77286L7.17998 8.51847C7.20599 8.52507 7.23973 8.53463 7.27695 8.54959C7.24584 8.54186 7.21272 8.53343 7.17836 8.5252L6.56841 10.9705C6.52225 11.0853 6.40509 11.2575 6.14101 11.1921C6.15036 11.2057 5.46309 11.0229 5.46309 11.0229L5 12.0906L6.2138 12.3932C6.43961 12.4498 6.66089 12.5091 6.87881 12.5648L6.49283 14.1146L7.42449 14.347L7.80672 12.8137C8.06124 12.8828 8.30824 12.9465 8.55005 13.0066L8.1691 14.5327L9.10188 14.7651L9.48781 13.2182C11.0783 13.5192 12.2743 13.3979 12.7776 11.9592C13.1833 10.801 12.7574 10.1329 11.9207 9.69725C12.5301 9.55669 12.9892 9.15584 13.1116 8.32781L13.1113 8.3276L13.1113 8.32768ZM10.9802 11.316C10.6919 12.4743 8.74179 11.8481 8.10952 11.6911L8.62171 9.63788C9.25394 9.79571 11.2814 10.1081 10.9802 11.316H10.9802ZM11.2686 8.3109C11.0057 9.36445 9.38257 8.8292 8.85604 8.69795L9.32041 6.83576C9.84694 6.96701 11.5426 7.21197 11.2687 8.3109H11.2686Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      <span className="pr-2 text-xs font-semibold text-body-color-2 dark:text-body-color">
                        Bitcoin
                      </span>

                      <span className="text-[8px] font-semibold text-body-color-2 dark:text-[#959595]">
                        4.5%
                      </span>
                      <span>
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.66675 5.00008L2.25425 5.58758L4.58341 3.26258V8.33341H5.41675V3.26258L7.74175 5.59175L8.33341 5.00008L5.00008 1.66675L1.66675 5.00008Z"
                            fill="#60D16B"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2"></div>
                <div className="w-full px-4 md:w-1/2"></div>
                <div className="w-full px-4 md:w-1/2">
                  <div className="relative z-10 mb-10 rounded-lg bg-light-bg py-8 px-6 dark:bg-dark md:ml-3 md:mb-0 lg:ml-5">
                    <span className="absolute top-1/2 left-0 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-primary bg-white dark:border-body-color md:right-auto md:-left-9 md:block lg:-left-11"></span>
                    <span className="absolute -left-1 top-1/2 hidden h-3 w-3 -translate-y-1/2 rotate-45 bg-light-bg dark:bg-dark md:block"></span>
                    <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                      Jan 14,2021
                    </h3>
                    <p className="mb-5 text-base font-medium text-body-color-2 dark:text-body-color">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc sed congue arcu, In et dignissim quam condimentum vel
                    </p>

                    <a
                      href="/#"
                      className="inline-flex items-center justify-center rounded-full bg-white p-2 pr-3"
                    >
                      <span className="pr-1">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.7307 11.1771C16.5286 15.9986 11.6446 18.9329 6.82205 17.7306C2.00148 16.5285 -0.933111 11.6449 0.269567 6.82378C1.47119 2.00177 6.35511 -0.932704 11.1762 0.269311C15.9985 1.47133 18.9329 6.35553 17.7306 11.1772L17.7307 11.1771H17.7307Z"
                            fill="#1181E7"
                          />
                          <g clip-path="url(#clip0_27_564)">
                            <path
                              d="M8.99897 4L8.93188 4.22789V10.84L8.99897 10.907L12.0682 9.09273L8.99897 4Z"
                              fill="#D6D6D6"
                            />
                            <path
                              d="M8.99899 4L5.92969 9.09273L8.99899 10.907V7.69762V4Z"
                              fill="white"
                            />
                            <path
                              d="M8.99899 11.4881L8.96118 11.5342V13.8896L8.99899 13.9999L12.0701 9.6748L8.99899 11.4881Z"
                              fill="#D6D6D6"
                            />
                            <path
                              d="M8.99899 13.9999V11.4881L5.92969 9.6748L8.99899 13.9999Z"
                              fill="white"
                            />
                            <path
                              d="M8.99902 10.907L12.0682 9.09274L8.99902 7.69763V10.907Z"
                              fill="#F3F3F3"
                            />
                            <path
                              d="M5.92969 9.09274L8.99899 10.907V7.69763L5.92969 9.09274Z"
                              fill="#E2E2E2"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_27_564">
                              <rect
                                width="10"
                                height="10"
                                fill="white"
                                transform="translate(4 4)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <span className="pr-2 text-xs font-semibold text-body-color-2 dark:text-body-color">
                        ethereum
                      </span>

                      <span className="text-[8px] font-semibold text-body-color-2 dark:text-[#959595]">
                        2.5%
                      </span>
                      <span>
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.66675 5.00008L2.25425 5.58758L4.58341 3.26258V8.33341H5.41675V3.26258L7.74175 5.59175L8.33341 5.00008L5.00008 1.66675L1.66675 5.00008Z"
                            fill="#60D16B"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                  <div className="relative z-10 mb-10 rounded-lg bg-light-bg py-8 px-6 dark:bg-dark md:mr-3 md:mb-0 md:text-right lg:mr-5">
                    <span className="absolute top-1/2 left-0 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-primary bg-white dark:border-body-color md:left-auto md:-right-9 md:block lg:-right-11"></span>
                    <span className="absolute -right-1 top-1/2 hidden h-3 w-3 -translate-y-1/2 rotate-45 bg-light-bg dark:bg-dark md:block"></span>
                    <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                      Mar 30,2021
                    </h3>
                    <p className="mb-5 text-base font-medium text-body-color-2 dark:text-body-color">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc sed congue arcu, In et dignissim quam condimentum vel
                    </p>

                    <a
                      href="/#"
                      className="inline-flex items-center justify-center rounded-full bg-white p-2 pr-3"
                    >
                      <span className="pr-1">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.7287 11.1771C16.5267 15.9986 11.6433 18.9329 6.82128 17.7306C2.00125 16.5285 -0.933006 11.6449 0.269537 6.82378C1.47102 2.00177 6.3544 -0.932704 11.175 0.269311C15.9966 1.47133 18.9307 6.35553 17.7286 11.1772L17.7287 11.1771H17.7287Z"
                            fill="#295ADA"
                          />
                          <path
                            d="M9 4L8.15344 4.47477L5.84656 5.77523L5 6.25V10.75L5.84656 11.2248L8.1746 12.5252L9.02116 13L9.86772 12.5252L12.1534 11.2248L13 10.75V6.25L12.1534 5.77523L9.84656 4.47477L9 4ZM6.69312 9.80046V7.19954L9 5.89908L11.3069 7.19954V9.80046L9 11.1009L6.69312 9.80046Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      <span className="pr-2 text-xs font-semibold text-body-color-2 dark:text-body-color">
                        chainlink
                      </span>

                      <span className="text-[8px] font-semibold text-body-color-2 dark:text-[#959595]">
                        4.5%
                      </span>
                      <span>
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.66675 5.00008L2.25425 5.58758L4.58341 3.26258V8.33341H5.41675V3.26258L7.74175 5.59175L8.33341 5.00008L5.00008 1.66675L1.66675 5.00008Z"
                            fill="#60D16B"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2"></div>
                <div className="w-full px-4 md:w-1/2"></div>
                <div className="w-full px-4 md:w-1/2">
                  <div className="relative z-10 mb-10 rounded-lg bg-light-bg py-8 px-6 dark:bg-dark md:ml-3 md:mb-0 lg:ml-5">
                    <span className="absolute top-1/2 left-0 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-primary bg-white dark:border-body-color md:right-auto md:-left-9 md:block lg:-left-11"></span>
                    <span className="absolute -left-1 top-1/2 hidden h-3 w-3 -translate-y-1/2 rotate-45 bg-light-bg dark:bg-dark md:block"></span>
                    <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                      Dec 19,2021
                    </h3>
                    <p className="mb-5 text-base font-medium text-body-color-2 dark:text-body-color">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc sed congue arcu, In et dignissim quam condimentum vel
                    </p>

                    <a
                      href="/#"
                      className="inline-flex items-center justify-center rounded-full bg-white p-2 pr-3"
                    >
                      <span className="pr-1">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.7307 11.1771C16.5286 15.9986 11.6446 18.9329 6.82205 17.7306C2.00148 16.5285 -0.933111 11.6449 0.269567 6.82378C1.47119 2.00177 6.35511 -0.932704 11.1762 0.269311C15.9985 1.47133 18.9329 6.35553 17.7306 11.1772L17.7307 11.1771H17.7307Z"
                            fill="#8247E5"
                          />
                          <path
                            d="M11.5718 7.75074C11.389 7.64392 11.154 7.64392 10.9452 7.75074L9.48303 8.63205L8.49086 9.19288L7.05483 10.0742C6.87206 10.181 6.63708 10.181 6.4282 10.0742L5.30548 9.37982C5.12272 9.273 4.99217 9.05935 4.99217 8.81899V7.48368C4.99217 7.27003 5.09661 7.05638 5.30548 6.92285L6.4282 6.25519C6.61097 6.14837 6.84595 6.14837 7.05483 6.25519L8.17755 6.94956C8.36031 7.05638 8.49086 7.27003 8.49086 7.51039V8.39169L9.48303 7.80415V6.89614C9.48303 6.68249 9.37859 6.46884 9.16971 6.33531L7.08094 5.08012C6.89817 4.97329 6.66319 4.97329 6.45431 5.08012L4.31332 6.36202C4.10444 6.46884 4 6.68249 4 6.89614V9.40653C4 9.62018 4.10444 9.83383 4.31332 9.96736L6.4282 11.2226C6.61097 11.3294 6.84595 11.3294 7.05483 11.2226L8.49086 10.368L9.48303 9.78042L10.9191 8.92582C11.1018 8.81899 11.3368 8.81899 11.5457 8.92582L12.6684 9.59347C12.8512 9.7003 12.9817 9.91395 12.9817 10.1543V11.4896C12.9817 11.7033 12.8773 11.9169 12.6684 12.0504L11.5718 12.7181C11.389 12.8249 11.154 12.8249 10.9452 12.7181L9.82245 12.0504C9.63969 11.9436 9.50914 11.73 9.50914 11.4896V10.635L8.51697 11.2226V12.1039C8.51697 12.3175 8.62141 12.5312 8.83029 12.6647L10.9452 13.9199C11.1279 14.0267 11.3629 14.0267 11.5718 13.9199L13.6867 12.6647C13.8695 12.5579 14 12.3442 14 12.1039V9.56677C14 9.35312 13.8956 9.13947 13.6867 9.00594L11.5718 7.75074Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      <span className="pr-2 text-xs font-semibold text-body-color-2 dark:text-body-color">
                        polygon
                      </span>

                      <span className="text-[8px] font-semibold text-body-color-2 dark:text-[#959595]">
                        2.5%
                      </span>
                      <span>
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.66675 5.00008L2.25425 5.58758L4.58341 3.26258V8.33341H5.41675V3.26258L7.74175 5.59175L8.33341 5.00008L5.00008 1.66675L1.66675 5.00008Z"
                            fill="#60D16B"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-0 bottom-0 -z-10">
          <img src="images/shapes/timeline.svg" alt="shape" />
        </div>
      </section>

      <section
        id="team"
        className="border-t border-[#F3F4F4] pt-[120px] pb-20 dark:border-[#2D2C4A]"
      >
        <div className="container">
          <div className="wow fadeInUp mx-auto mb-16 max-w-[590px] text-center md:mb-20">
            <span className="mb-3 text-lg font-bold uppercase text-primary sm:text-xl">
              OUT TEAM
            </span>
            <h2 className="mb-3 text-3xl font-bold leading-tight text-black dark:text-white md:text-[45px]">
              Meet out Team
            </h2>
            <p className="text-lg font-medium text-body-color-2 dark:text-body-color">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
              congue arcu, In et dignissim quam condimentum vel.
            </p>
          </div>

          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
              <div className="group wow fadeInUp mb-10 rounded-lg border-b-4 border-transparent bg-light-bg p-4 text-center transition-all hover:border-primary dark:bg-dark">
                <div className="mb-6 overflow-hidden rounded">
                  <img
                    src="images/team/image-01.jpg"
                    alt="team"
                    className="rounded- w-full"
                  />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                    Matheus Ferrero
                  </h3>
                  <p className="mb-3 text-sm font-medium text-body-color-2 dark:text-body-color">
                    Marketing Expert
                  </p>

                  <div className="mb-4 flex items-center justify-center space-x-4">
                    <a
                      href="/#"
                      className="text-[#B6BFC9] hover:text-primary dark:text-white dark:hover:text-primary"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        className="fill-current"
                      >
                        <path d="M18.3337 10C18.3337 5.40002 14.6003 1.66669 10.0003 1.66669C5.40033 1.66669 1.66699 5.40002 1.66699 10C1.66699 14.0334 4.53366 17.3917 8.33366 18.1667V12.5H6.66699V10H8.33366V7.91669C8.33366 6.30835 9.64199 5.00002 11.2503 5.00002H13.3337V7.50002H11.667C11.2087 7.50002 10.8337 7.87502 10.8337 8.33335V10H13.3337V12.5H10.8337V18.2917C15.042 17.875 18.3337 14.325 18.3337 10Z" />
                      </svg>
                    </a>
                    <a
                      href="/#"
                      className="text-[#B6BFC9] hover:text-primary dark:text-white dark:hover:text-primary"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        className="fill-current"
                      >
                        <path d="M18.7168 4.99998C18.0751 5.29165 17.3834 5.48331 16.6668 5.57498C17.4001 5.13331 17.9668 4.43331 18.2334 3.59165C17.5418 4.00831 16.7751 4.29998 15.9668 4.46665C15.3084 3.74998 14.3834 3.33331 13.3334 3.33331C11.3751 3.33331 9.77511 4.93331 9.77511 6.90831C9.77511 7.19165 9.80845 7.46665 9.86678 7.72498C6.90011 7.57498 4.25845 6.14998 2.50011 3.99165C2.19178 4.51665 2.01678 5.13331 2.01678 5.78331C2.01678 7.02498 2.64178 8.12498 3.60845 8.74998C3.01678 8.74998 2.46678 8.58331 1.98345 8.33331C1.98345 8.33331 1.98345 8.33331 1.98345 8.35831C1.98345 10.0916 3.21678 11.5416 4.85011 11.8666C4.55011 11.95 4.23345 11.9916 3.90845 11.9916C3.68345 11.9916 3.45845 11.9666 3.24178 11.925C3.69178 13.3333 5.00011 14.3833 6.57511 14.4083C5.35845 15.375 3.81678 15.9416 2.13345 15.9416C1.85011 15.9416 1.56678 15.925 1.28345 15.8916C2.86678 16.9083 4.75011 17.5 6.76678 17.5C13.3334 17.5 16.9418 12.05 16.9418 7.32498C16.9418 7.16665 16.9418 7.01665 16.9334 6.85831C17.6334 6.35831 18.2334 5.72498 18.7168 4.99998Z" />
                      </svg>
                    </a>
                    <a
                      href="/#"
                      className="text-[#B6BFC9] hover:text-primary dark:text-white dark:hover:text-primary"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        className="fill-current"
                      >
                        <path d="M15.8333 2.5C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H15.8333ZM15.4167 15.4167V11C15.4167 10.2795 15.1304 9.5885 14.621 9.07903C14.1115 8.56955 13.4205 8.28333 12.7 8.28333C11.9917 8.28333 11.1667 8.71667 10.7667 9.36667V8.44167H8.44167V15.4167H10.7667V11.3083C10.7667 10.6667 11.2833 10.1417 11.925 10.1417C12.2344 10.1417 12.5312 10.2646 12.75 10.4834C12.9688 10.7022 13.0917 10.9989 13.0917 11.3083V15.4167H15.4167ZM5.73333 7.13333C6.10464 7.13333 6.46073 6.98583 6.72328 6.72328C6.98583 6.46073 7.13333 6.10464 7.13333 5.73333C7.13333 4.95833 6.50833 4.325 5.73333 4.325C5.35982 4.325 5.0016 4.47338 4.73749 4.73749C4.47338 5.0016 4.325 5.35982 4.325 5.73333C4.325 6.50833 4.95833 7.13333 5.73333 7.13333ZM6.89167 15.4167V8.44167H4.58333V15.4167H6.89167Z" />
                      </svg>
                    </a>
                    <a
                      href="/#"
                      className="text-[#B6BFC9] hover:text-primary dark:text-white dark:hover:text-primary"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        className="fill-current"
                      >
                        <path d="M8.33341 12.5L12.6584 10L8.33341 7.50002V12.5ZM17.9667 5.97502C18.0751 6.36669 18.1501 6.89169 18.2001 7.55835C18.2584 8.22502 18.2834 8.80002 18.2834 9.30002L18.3334 10C18.3334 11.825 18.2001 13.1667 17.9667 14.025C17.7584 14.775 17.2751 15.2584 16.5251 15.4667C16.1334 15.575 15.4167 15.65 14.3167 15.7C13.2334 15.7584 12.2417 15.7834 11.3251 15.7834L10.0001 15.8334C6.50841 15.8334 4.33341 15.7 3.47508 15.4667C2.72508 15.2584 2.24175 14.775 2.03341 14.025C1.92508 13.6334 1.85008 13.1084 1.80008 12.4417C1.74175 11.775 1.71675 11.2 1.71675 10.7L1.66675 10C1.66675 8.17502 1.80008 6.83335 2.03341 5.97502C2.24175 5.22502 2.72508 4.74169 3.47508 4.53335C3.86675 4.42502 4.58341 4.35002 5.68341 4.30002C6.76675 4.24169 7.75841 4.21669 8.67508 4.21669L10.0001 4.16669C13.4917 4.16669 15.6667 4.30002 16.5251 4.53335C17.2751 4.74169 17.7584 5.22502 17.9667 5.97502Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
              <div className="group wow fadeInUp mb-10 rounded-lg border-b-4 border-transparent bg-light-bg p-4 text-center transition-all hover:border-primary dark:bg-dark">
                <div className="mb-6 overflow-hidden rounded">
                  <img
                    src="images/team/image-02.jpg"
                    alt="team"
                    className="rounded- w-full"
                  />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                    Eva Hudson
                  </h3>
                  <p className="mb-3 text-sm font-medium text-body-color-2 dark:text-body-color">
                    Blockchain Developer
                  </p>

                  <div className="mb-4 flex items-center justify-center space-x-4">
                    <a
                      href="/#"
                      className="text-[#B6BFC9] hover:text-primary dark:text-white dark:hover:text-primary"
                      name="social-link"
                      aria-label="social-link"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        className="fill-current"
                      >
                        <path d="M18.3337 10C18.3337 5.40002 14.6003 1.66669 10.0003 1.66669C5.40033 1.66669 1.66699 5.40002 1.66699 10C1.66699 14.0334 4.53366 17.3917 8.33366 18.1667V12.5H6.66699V10H8.33366V7.91669C8.33366 6.30835 9.64199 5.00002 11.2503 5.00002H13.3337V7.50002H11.667C11.2087 7.50002 10.8337 7.87502 10.8337 8.33335V10H13.3337V12.5H10.8337V18.2917C15.042 17.875 18.3337 14.325 18.3337 10Z" />
                      </svg>
                    </a>
                    <a
                      href="/#"
                      className="text-[#B6BFC9] hover:text-primary dark:text-white dark:hover:text-primary"
                      name="social-link"
                      aria-label="social-link"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        className="fill-current"
                      >
                        <path d="M18.7168 4.99998C18.0751 5.29165 17.3834 5.48331 16.6668 5.57498C17.4001 5.13331 17.9668 4.43331 18.2334 3.59165C17.5418 4.00831 16.7751 4.29998 15.9668 4.46665C15.3084 3.74998 14.3834 3.33331 13.3334 3.33331C11.3751 3.33331 9.77511 4.93331 9.77511 6.90831C9.77511 7.19165 9.80845 7.46665 9.86678 7.72498C6.90011 7.57498 4.25845 6.14998 2.50011 3.99165C2.19178 4.51665 2.01678 5.13331 2.01678 5.78331C2.01678 7.02498 2.64178 8.12498 3.60845 8.74998C3.01678 8.74998 2.46678 8.58331 1.98345 8.33331C1.98345 8.33331 1.98345 8.33331 1.98345 8.35831C1.98345 10.0916 3.21678 11.5416 4.85011 11.8666C4.55011 11.95 4.23345 11.9916 3.90845 11.9916C3.68345 11.9916 3.45845 11.9666 3.24178 11.925C3.69178 13.3333 5.00011 14.3833 6.57511 14.4083C5.35845 15.375 3.81678 15.9416 2.13345 15.9416C1.85011 15.9416 1.56678 15.925 1.28345 15.8916C2.86678 16.9083 4.75011 17.5 6.76678 17.5C13.3334 17.5 16.9418 12.05 16.9418 7.32498C16.9418 7.16665 16.9418 7.01665 16.9334 6.85831C17.6334 6.35831 18.2334 5.72498 18.7168 4.99998Z" />
                      </svg>
                    </a>
                    <a
                      href="/#"
                      className="text-[#B6BFC9] hover:text-primary dark:text-white dark:hover:text-primary"
                      name="social-link"
                      aria-label="social-link"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        className="fill-current"
                      >
                        <path d="M15.8333 2.5C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H15.8333ZM15.4167 15.4167V11C15.4167 10.2795 15.1304 9.5885 14.621 9.07903C14.1115 8.56955 13.4205 8.28333 12.7 8.28333C11.9917 8.28333 11.1667 8.71667 10.7667 9.36667V8.44167H8.44167V15.4167H10.7667V11.3083C10.7667 10.6667 11.2833 10.1417 11.925 10.1417C12.2344 10.1417 12.5312 10.2646 12.75 10.4834C12.9688 10.7022 13.0917 10.9989 13.0917 11.3083V15.4167H15.4167ZM5.73333 7.13333C6.10464 7.13333 6.46073 6.98583 6.72328 6.72328C6.98583 6.46073 7.13333 6.10464 7.13333 5.73333C7.13333 4.95833 6.50833 4.325 5.73333 4.325C5.35982 4.325 5.0016 4.47338 4.73749 4.73749C4.47338 5.0016 4.325 5.35982 4.325 5.73333C4.325 6.50833 4.95833 7.13333 5.73333 7.13333ZM6.89167 15.4167V8.44167H4.58333V15.4167H6.89167Z" />
                      </svg>
                    </a>
                    <a
                      href="/#"
                      className="text-[#B6BFC9] hover:text-primary dark:text-white dark:hover:text-primary"
                      name="social-link"
                      aria-label="social-link"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        className="fill-current"
                      >
                        <path d="M8.33341 12.5L12.6584 10L8.33341 7.50002V12.5ZM17.9667 5.97502C18.0751 6.36669 18.1501 6.89169 18.2001 7.55835C18.2584 8.22502 18.2834 8.80002 18.2834 9.30002L18.3334 10C18.3334 11.825 18.2001 13.1667 17.9667 14.025C17.7584 14.775 17.2751 15.2584 16.5251 15.4667C16.1334 15.575 15.4167 15.65 14.3167 15.7C13.2334 15.7584 12.2417 15.7834 11.3251 15.7834L10.0001 15.8334C6.50841 15.8334 4.33341 15.7 3.47508 15.4667C2.72508 15.2584 2.24175 14.775 2.03341 14.025C1.92508 13.6334 1.85008 13.1084 1.80008 12.4417C1.74175 11.775 1.71675 11.2 1.71675 10.7L1.66675 10C1.66675 8.17502 1.80008 6.83335 2.03341 5.97502C2.24175 5.22502 2.72508 4.74169 3.47508 4.53335C3.86675 4.42502 4.58341 4.35002 5.68341 4.30002C6.76675 4.24169 7.75841 4.21669 8.67508 4.21669L10.0001 4.16669C13.4917 4.16669 15.6667 4.30002 16.5251 4.53335C17.2751 4.74169 17.7584 5.22502 17.9667 5.97502Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
              <div className="group wow fadeInUp mb-10 rounded-lg border-b-4 border-transparent bg-light-bg p-4 text-center transition-all hover:border-primary dark:bg-dark">
                <div className="mb-6 overflow-hidden rounded">
                  <img
                    src="images/team/image-03.jpg"
                    alt="team"
                    className="rounded- w-full"
                  />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                    Jackie Sanders
                  </h3>
                  <p className="mb-3 text-sm font-medium text-body-color-2 dark:text-body-color">
                    Creative Designer
                  </p>

                  <div className="mb-4 flex items-center justify-center space-x-4">
                    <a
                      href="/#"
                      className="text-[#B6BFC9] hover:text-primary dark:text-white dark:hover:text-primary"
                      name="social-link"
                      aria-label="social-link"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        className="fill-current"
                      >
                        <path d="M18.3337 10C18.3337 5.40002 14.6003 1.66669 10.0003 1.66669C5.40033 1.66669 1.66699 5.40002 1.66699 10C1.66699 14.0334 4.53366 17.3917 8.33366 18.1667V12.5H6.66699V10H8.33366V7.91669C8.33366 6.30835 9.64199 5.00002 11.2503 5.00002H13.3337V7.50002H11.667C11.2087 7.50002 10.8337 7.87502 10.8337 8.33335V10H13.3337V12.5H10.8337V18.2917C15.042 17.875 18.3337 14.325 18.3337 10Z" />
                      </svg>
                    </a>
                    <a
                      href="/#"
                      className="text-[#B6BFC9] hover:text-primary dark:text-white dark:hover:text-primary"
                      name="social-link"
                      aria-label="social-link"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        className="fill-current"
                      >
                        <path d="M18.7168 4.99998C18.0751 5.29165 17.3834 5.48331 16.6668 5.57498C17.4001 5.13331 17.9668 4.43331 18.2334 3.59165C17.5418 4.00831 16.7751 4.29998 15.9668 4.46665C15.3084 3.74998 14.3834 3.33331 13.3334 3.33331C11.3751 3.33331 9.77511 4.93331 9.77511 6.90831C9.77511 7.19165 9.80845 7.46665 9.86678 7.72498C6.90011 7.57498 4.25845 6.14998 2.50011 3.99165C2.19178 4.51665 2.01678 5.13331 2.01678 5.78331C2.01678 7.02498 2.64178 8.12498 3.60845 8.74998C3.01678 8.74998 2.46678 8.58331 1.98345 8.33331C1.98345 8.33331 1.98345 8.33331 1.98345 8.35831C1.98345 10.0916 3.21678 11.5416 4.85011 11.8666C4.55011 11.95 4.23345 11.9916 3.90845 11.9916C3.68345 11.9916 3.45845 11.9666 3.24178 11.925C3.69178 13.3333 5.00011 14.3833 6.57511 14.4083C5.35845 15.375 3.81678 15.9416 2.13345 15.9416C1.85011 15.9416 1.56678 15.925 1.28345 15.8916C2.86678 16.9083 4.75011 17.5 6.76678 17.5C13.3334 17.5 16.9418 12.05 16.9418 7.32498C16.9418 7.16665 16.9418 7.01665 16.9334 6.85831C17.6334 6.35831 18.2334 5.72498 18.7168 4.99998Z" />
                      </svg>
                    </a>
                    <a
                      href="/#"
                      className="text-[#B6BFC9] hover:text-primary dark:text-white dark:hover:text-primary"
                      name="social-link"
                      aria-label="social-link"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        className="fill-current"
                      >
                        <path d="M15.8333 2.5C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H15.8333ZM15.4167 15.4167V11C15.4167 10.2795 15.1304 9.5885 14.621 9.07903C14.1115 8.56955 13.4205 8.28333 12.7 8.28333C11.9917 8.28333 11.1667 8.71667 10.7667 9.36667V8.44167H8.44167V15.4167H10.7667V11.3083C10.7667 10.6667 11.2833 10.1417 11.925 10.1417C12.2344 10.1417 12.5312 10.2646 12.75 10.4834C12.9688 10.7022 13.0917 10.9989 13.0917 11.3083V15.4167H15.4167ZM5.73333 7.13333C6.10464 7.13333 6.46073 6.98583 6.72328 6.72328C6.98583 6.46073 7.13333 6.10464 7.13333 5.73333C7.13333 4.95833 6.50833 4.325 5.73333 4.325C5.35982 4.325 5.0016 4.47338 4.73749 4.73749C4.47338 5.0016 4.325 5.35982 4.325 5.73333C4.325 6.50833 4.95833 7.13333 5.73333 7.13333ZM6.89167 15.4167V8.44167H4.58333V15.4167H6.89167Z" />
                      </svg>
                    </a>
                    <a
                      href="/#"
                      className="text-[#B6BFC9] hover:text-primary dark:text-white dark:hover:text-primary"
                      name="social-link"
                      aria-label="social-link"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        className="fill-current"
                      >
                        <path d="M8.33341 12.5L12.6584 10L8.33341 7.50002V12.5ZM17.9667 5.97502C18.0751 6.36669 18.1501 6.89169 18.2001 7.55835C18.2584 8.22502 18.2834 8.80002 18.2834 9.30002L18.3334 10C18.3334 11.825 18.2001 13.1667 17.9667 14.025C17.7584 14.775 17.2751 15.2584 16.5251 15.4667C16.1334 15.575 15.4167 15.65 14.3167 15.7C13.2334 15.7584 12.2417 15.7834 11.3251 15.7834L10.0001 15.8334C6.50841 15.8334 4.33341 15.7 3.47508 15.4667C2.72508 15.2584 2.24175 14.775 2.03341 14.025C1.92508 13.6334 1.85008 13.1084 1.80008 12.4417C1.74175 11.775 1.71675 11.2 1.71675 10.7L1.66675 10C1.66675 8.17502 1.80008 6.83335 2.03341 5.97502C2.24175 5.22502 2.72508 4.74169 3.47508 4.53335C3.86675 4.42502 4.58341 4.35002 5.68341 4.30002C6.76675 4.24169 7.75841 4.21669 8.67508 4.21669L10.0001 4.16669C13.4917 4.16669 15.6667 4.30002 16.5251 4.53335C17.2751 4.74169 17.7584 5.22502 17.9667 5.97502Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
              <div className="group wow fadeInUp mb-10 rounded-lg border-b-4 border-transparent bg-light-bg p-4 text-center transition-all hover:border-primary dark:bg-dark">
                <div className="mb-6 overflow-hidden rounded">
                  <img
                    src="images/team/image-04.jpg"
                    alt="team"
                    className="rounded- w-full"
                  />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                    Jackie Sanders
                  </h3>
                  <p className="mb-3 text-sm font-medium text-body-color-2 dark:text-body-color">
                    SEO Expert
                  </p>

                  <div className="mb-4 flex items-center justify-center space-x-4">
                    <a
                      href="/#"
                      className="text-[#B6BFC9] hover:text-primary dark:text-white dark:hover:text-primary"
                      name="social-link"
                      aria-label="social-link"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        className="fill-current"
                      >
                        <path d="M18.3337 10C18.3337 5.40002 14.6003 1.66669 10.0003 1.66669C5.40033 1.66669 1.66699 5.40002 1.66699 10C1.66699 14.0334 4.53366 17.3917 8.33366 18.1667V12.5H6.66699V10H8.33366V7.91669C8.33366 6.30835 9.64199 5.00002 11.2503 5.00002H13.3337V7.50002H11.667C11.2087 7.50002 10.8337 7.87502 10.8337 8.33335V10H13.3337V12.5H10.8337V18.2917C15.042 17.875 18.3337 14.325 18.3337 10Z" />
                      </svg>
                    </a>
                    <a
                      href="/#"
                      className="text-[#B6BFC9] hover:text-primary dark:text-white dark:hover:text-primary"
                      name="social-link"
                      aria-label="social-link"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        className="fill-current"
                      >
                        <path d="M18.7168 4.99998C18.0751 5.29165 17.3834 5.48331 16.6668 5.57498C17.4001 5.13331 17.9668 4.43331 18.2334 3.59165C17.5418 4.00831 16.7751 4.29998 15.9668 4.46665C15.3084 3.74998 14.3834 3.33331 13.3334 3.33331C11.3751 3.33331 9.77511 4.93331 9.77511 6.90831C9.77511 7.19165 9.80845 7.46665 9.86678 7.72498C6.90011 7.57498 4.25845 6.14998 2.50011 3.99165C2.19178 4.51665 2.01678 5.13331 2.01678 5.78331C2.01678 7.02498 2.64178 8.12498 3.60845 8.74998C3.01678 8.74998 2.46678 8.58331 1.98345 8.33331C1.98345 8.33331 1.98345 8.33331 1.98345 8.35831C1.98345 10.0916 3.21678 11.5416 4.85011 11.8666C4.55011 11.95 4.23345 11.9916 3.90845 11.9916C3.68345 11.9916 3.45845 11.9666 3.24178 11.925C3.69178 13.3333 5.00011 14.3833 6.57511 14.4083C5.35845 15.375 3.81678 15.9416 2.13345 15.9416C1.85011 15.9416 1.56678 15.925 1.28345 15.8916C2.86678 16.9083 4.75011 17.5 6.76678 17.5C13.3334 17.5 16.9418 12.05 16.9418 7.32498C16.9418 7.16665 16.9418 7.01665 16.9334 6.85831C17.6334 6.35831 18.2334 5.72498 18.7168 4.99998Z" />
                      </svg>
                    </a>
                    <a
                      href="/#"
                      className="text-[#B6BFC9] hover:text-primary dark:text-white dark:hover:text-primary"
                      name="social-link"
                      aria-label="social-link"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        className="fill-current"
                      >
                        <path d="M15.8333 2.5C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H15.8333ZM15.4167 15.4167V11C15.4167 10.2795 15.1304 9.5885 14.621 9.07903C14.1115 8.56955 13.4205 8.28333 12.7 8.28333C11.9917 8.28333 11.1667 8.71667 10.7667 9.36667V8.44167H8.44167V15.4167H10.7667V11.3083C10.7667 10.6667 11.2833 10.1417 11.925 10.1417C12.2344 10.1417 12.5312 10.2646 12.75 10.4834C12.9688 10.7022 13.0917 10.9989 13.0917 11.3083V15.4167H15.4167ZM5.73333 7.13333C6.10464 7.13333 6.46073 6.98583 6.72328 6.72328C6.98583 6.46073 7.13333 6.10464 7.13333 5.73333C7.13333 4.95833 6.50833 4.325 5.73333 4.325C5.35982 4.325 5.0016 4.47338 4.73749 4.73749C4.47338 5.0016 4.325 5.35982 4.325 5.73333C4.325 6.50833 4.95833 7.13333 5.73333 7.13333ZM6.89167 15.4167V8.44167H4.58333V15.4167H6.89167Z" />
                      </svg>
                    </a>
                    <a
                      href="/#"
                      className="text-[#B6BFC9] hover:text-primary dark:text-white dark:hover:text-primary"
                      name="social-link"
                      aria-label="social-link"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        className="fill-current"
                      >
                        <path d="M8.33341 12.5L12.6584 10L8.33341 7.50002V12.5ZM17.9667 5.97502C18.0751 6.36669 18.1501 6.89169 18.2001 7.55835C18.2584 8.22502 18.2834 8.80002 18.2834 9.30002L18.3334 10C18.3334 11.825 18.2001 13.1667 17.9667 14.025C17.7584 14.775 17.2751 15.2584 16.5251 15.4667C16.1334 15.575 15.4167 15.65 14.3167 15.7C13.2334 15.7584 12.2417 15.7834 11.3251 15.7834L10.0001 15.8334C6.50841 15.8334 4.33341 15.7 3.47508 15.4667C2.72508 15.2584 2.24175 14.775 2.03341 14.025C1.92508 13.6334 1.85008 13.1084 1.80008 12.4417C1.74175 11.775 1.71675 11.2 1.71675 10.7L1.66675 10C1.66675 8.17502 1.80008 6.83335 2.03341 5.97502C2.24175 5.22502 2.72508 4.74169 3.47508 4.53335C3.86675 4.42502 4.58341 4.35002 5.68341 4.30002C6.76675 4.24169 7.75841 4.21669 8.67508 4.21669L10.0001 4.16669C13.4917 4.16669 15.6667 4.30002 16.5251 4.53335C17.2751 4.74169 17.7584 5.22502 17.9667 5.97502Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="testimonial"
        className="bg-light-bg pt-[120px] pb-20 dark:bg-[#14102C]"
      >
        <div className="container">
          <div className="wow fadeInUp mx-auto mb-16 max-w-[590px] text-center md:mb-20">
            <span className="mb-3 text-lg font-bold uppercase text-primary sm:text-xl">
              TESTIMONIALS
            </span>
            <h2 className="mb-3 text-3xl font-bold leading-tight text-black dark:text-white md:text-[45px]">
              What Our Client Say's
            </h2>
            <p className="text-lg font-medium text-body-color-2 dark:text-body-color">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
              congue arcu, In et dignissim quam condimentum vel.
            </p>
          </div>

          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2">
              <div className="wow fadeInUp relative z-10 mb-10 overflow-hidden rounded-[10px] bg-white px-6 py-8 dark:bg-[#131B4D] sm:p-10 md:p-8 xl:p-10">
                <div className="absolute right-0 top-0 z-[-1]">
                  <img src="images/shapes/testimonial-shape.svg" alt="shape" />
                </div>
                <div className="mb-8 flex items-center">
                  <div className="mr-5 h-20 w-full max-w-[80px] overflow-hidden rounded">
                    <image
                      src="images/testimonials/image-01.jpg"
                      alt="author"
                    />
                  </div>
                  <div className="w-full">
                    <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white">
                      Jason Keys
                    </h3>
                    <p className="text-sm font-medium text-body-color-2 dark:text-white">
                      CEO & Founder @ Dreampeet.
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-base font-medium leading-snug text-body-color-2 dark:text-body-color">
                    “I believe in lifelong learning and Learn. is a great place
                    to learn from experts. I've learned a lot and recommend it
                    to all my friends and familys.”
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div className="wow fadeInUp relative z-10 mb-10 overflow-hidden rounded-[10px] bg-white px-6 py-8 dark:bg-[#131B4D] sm:p-10 md:p-8 xl:p-10">
                <div className="absolute right-0 top-0 z-[-1]">
                  <img src="images/shapes/testimonial-shape.svg" alt="shape" />
                </div>
                <div className="mb-8 flex items-center">
                  <div className="mr-5 h-20 w-full max-w-[80px] overflow-hidden rounded">
                    <image
                      src="images/testimonials/image-02.jpg"
                      alt="author"
                    />
                  </div>
                  <div className="w-full">
                    <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white">
                      Mariya Merry
                    </h3>
                    <p className="text-sm font-medium text-body-color-2 dark:text-white">
                      CEO & Founder @ Betex.
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-base font-medium leading-snug text-body-color-2 dark:text-body-color">
                    “I believe in lifelong learning and Learn. is a great place
                    to learn from experts. I've learned a lot and recommend it
                    to all my friends and familys.”
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div className="wow fadeInUp relative z-10 mb-10 overflow-hidden rounded-[10px] bg-white px-6 py-8 dark:bg-[#131B4D] sm:p-10 md:p-8 xl:p-10">
                <div className="absolute right-0 top-0 z-[-1]">
                  <img src="images/shapes/testimonial-shape.svg" alt="shape" />
                </div>
                <div className="mb-8 flex items-center">
                  <div className="mr-5 h-20 w-full max-w-[80px] overflow-hidden rounded">
                    <image
                      src="images/testimonials/image-03.jpg"
                      alt="author"
                    />
                  </div>
                  <div className="w-full">
                    <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white">
                      Andria Jolly
                    </h3>
                    <p className="text-sm font-medium text-body-color-2 dark:text-white">
                      CEO & Founder @ CryptoX.
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-base font-medium leading-snug text-body-color-2 dark:text-body-color">
                    “I believe in lifelong learning and Learn. is a great place
                    to learn from experts. I've learned a lot and recommend it
                    to all my friends and familys.”
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div className="wow fadeInUp relative z-10 mb-10 overflow-hidden rounded-[10px] bg-white px-6 py-8 dark:bg-[#131B4D] sm:p-10 md:p-8 xl:p-10">
                <div className="absolute right-0 top-0 z-[-1]">
                  <img src="images/shapes/testimonial-shape.svg" alt="shape" />
                </div>
                <div className="mb-8 flex items-center">
                  <div className="mr-5 h-20 w-full max-w-[80px] overflow-hidden rounded">
                    <image
                      src="images/testimonials/image-04.jpg"
                      alt="author"
                    />
                  </div>
                  <div className="w-full">
                    <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white">
                      Devid Willium
                    </h3>
                    <p className="text-sm font-medium text-body-color-2 dark:text-white">
                      CEO & Founder @ Coinbase.
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-base font-medium leading-snug text-body-color-2 dark:text-body-color">
                    “I believe in lifelong learning and Learn. is a great place
                    to learn from experts. I've learned a lot and recommend it
                    to all my friends and familys.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="py-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="wow fadeInUp mb-12 max-w-[500px] lg:mb-0">
                <span className="mb-3 text-lg font-bold uppercase text-primary sm:text-xl">
                  Download Our App
                </span>
                <h2 className="mb-3 text-3xl font-bold leading-tight text-black dark:text-white md:text-[45px]">
                  The choice is yours, we've got you covered
                </h2>
                <p className="mb-10 text-lg font-medium text-body-color-2 dark:text-body-color">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  tristique, nisl ut viverra porttitor, dolor sem lacinia orci,
                  et pretium quam mi a eros sed molestie est.
                </p>

                <div className="-mx-3 flex items-center">
                  <div className="px-3">
                    <a
                      href="/#"
                      className="flex items-center justify-center rounded-full border border-[#2D2947] bg-[#2D2947] p-[10px] pr-5 text-base font-semibold text-white hover:bg-opacity-90 dark:hover:bg-opacity-90"
                    >
                      <span className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.7101 19.5C17.8801 20.74 17.0001 21.95 15.6601 21.97C14.3201 22 13.8901 21.18 12.3701 21.18C10.8401 21.18 10.3701 21.95 9.10009 22C7.79009 22.05 6.80009 20.68 5.96009 19.47C4.25009 17 2.94009 12.45 4.70009 9.39C5.57009 7.87 7.13009 6.91 8.82009 6.88C10.1001 6.86 11.3201 7.75 12.1101 7.75C12.8901 7.75 14.3701 6.68 15.9201 6.84C16.5701 6.87 18.3901 7.1 19.5601 8.82C19.4701 8.88 17.3901 10.1 17.4101 12.63C17.4401 15.65 20.0601 16.66 20.0901 16.67C20.0601 16.74 19.6701 18.11 18.7101 19.5ZM13.0001 3.5C13.7301 2.67 14.9401 2.04 15.9401 2C16.0701 3.17 15.6001 4.35 14.9001 5.19C14.2101 6.04 13.0701 6.7 11.9501 6.61C11.8001 5.46 12.3601 4.26 13.0001 3.5Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      App Store
                    </a>
                  </div>
                  <div className="px-3">
                    <a
                      href="/#"
                      className="flex items-center justify-center rounded-full border border-[#2D2947] bg-transparent p-[10px] pr-5 text-base font-semibold text-body-color-2 hover:bg-[#2D294710] dark:text-white dark:hover:bg-[#2D2947]"
                    >
                      <span className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-dark text-white dark:bg-white dark:text-dark">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="fill-current"
                        >
                          <path d="M3 20.5V3.50002C3 2.91002 3.34 2.39002 3.84 2.15002L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.50002L20.16 10.81ZM6.05 2.66002L16.81 8.88002L14.54 11.15L6.05 2.66002Z" />
                        </svg>
                      </span>
                      Play Store
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="wow fadeInUp relative -z-10 text-center">
                <img
                  src="images/download/app-image.png"
                  alt="appimage"
                  className="mx-auto hidden dark:block text-center"
                />
                <img
                  src="images/download/app-image-2.png"
                  alt="appimage"
                  className="mx-auto dark:hidden"
                />

                <span
                  className="absolute right-0 bottom-0 w-[320px] h-[320px] rounded-full -z-10"
                  style={{
                    background:
                      "linear-gradient(180deg,rgba(55, 109, 249, 0) 0%,rgba(255, 96, 166, 0.32) 100%)",
                    filter: "blur(100px)",
                  }}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="relative z-10 bg-light-bg py-24 dark:bg-[#14102C]"
      >
        <div className="container">
          <div className="wow fadeInUp mx-auto mb-16 max-w-[630px] text-center md:mb-20">
            <span className="mb-3 text-lg font-bold uppercase text-primary sm:text-xl">
              FAQ
            </span>
            <h2 className="mb-3 text-3xl font-bold leading-tight text-black dark:text-white md:text-[45px]">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-[590px] text-lg font-medium text-body-color-2 dark:text-body-color">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
              congue arcu, In et dignissim quam condimentum vel.
            </p>
          </div>

          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-9/12 xl:w-8/12">
              <div className="single-faq wow fadeInUp mb-10 rounded-lg bg-white py-6 px-7 dark:bg-dark md:py-8 md:px-10">
                <button className="faq-btn flex w-full items-center justify-between text-left">
                  <h3 className="mr-2 text-base font-bold text-dark dark:text-white sm:text-lg md:text-xl">
                    How can I participate in the ICO Token sale?
                  </h3>
                  <span className="icon inline-flex h-5 w-full max-w-[20px] items-center justify-center rounded bg-body-color-2 text-white dark:text-black dark:bg-body-color text-lg font-semibold">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_50_132)">
                        <path
                          d="M8.82033 1.91065L4.99951 5.73146L1.17869 1.91064L-0.000488487 3.08978L4.99951 8.08978L9.99951 3.08979L8.82033 1.91065Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_50_132">
                          <rect
                            width="10"
                            height="10"
                            fill="white"
                            transform="translate(-0.000488281 0.000488281)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </button>
                <div x-show="openFaq1" className="faq-content">
                  <p className="text-relaxed pt-6 text-base text-body-color-2 dark:text-body-color">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything.
                  </p>
                </div>
              </div>
              <div className="single-faq wow fadeInUp mb-10 rounded-lg bg-white py-6 px-7 dark:bg-dark md:py-8 md:px-10">
                <button className="faq-btn flex w-full items-center justify-between text-left">
                  <h3 className="mr-2 text-base font-bold text-dark dark:text-white sm:text-lg md:text-xl">
                    What is ICO Crypto?
                  </h3>
                  <span className="icon inline-flex h-5 w-full max-w-[20px] items-center justify-center rounded bg-body-color-2 text-white dark:text-black dark:bg-body-color text-lg font-semibold">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_50_132)">
                        <path
                          d="M8.82033 1.91065L4.99951 5.73146L1.17869 1.91064L-0.000488487 3.08978L4.99951 8.08978L9.99951 3.08979L8.82033 1.91065Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_50_132">
                          <rect
                            width="10"
                            height="10"
                            fill="white"
                            transform="translate(-0.000488281 0.000488281)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </button>
                <div x-show="openFaq2" className="faq-content">
                  <p className="text-relaxed pt-6 text-base text-body-color-2 dark:text-body-color">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything.
                  </p>
                </div>
              </div>
              <div className="single-faq wow fadeInUp mb-10 rounded-lg bg-white py-6 px-7 dark:bg-dark md:py-8 md:px-10">
                <button className="faq-btn flex w-full items-center justify-between text-left">
                  <h3 className="mr-2 text-base font-bold text-dark dark:text-white sm:text-lg md:text-xl">
                    How do I benefit from the ICO Token?
                  </h3>
                  <span className="icon inline-flex h-5 w-full max-w-[20px] items-center justify-center rounded bg-body-color-2 text-white dark:text-black dark:bg-body-color text-lg font-semibold">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_50_132)">
                        <path
                          d="M8.82033 1.91065L4.99951 5.73146L1.17869 1.91064L-0.000488487 3.08978L4.99951 8.08978L9.99951 3.08979L8.82033 1.91065Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_50_132">
                          <rect
                            width="10"
                            height="10"
                            fill="white"
                            transform="translate(-0.000488281 0.000488281)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </button>
                <div x-show="openFaq3" className="faq-content">
                  <p className="text-relaxed pt-6 text-base text-body-color-2 dark:text-body-color">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything.
                  </p>
                </div>
              </div>
              <div className="single-faq wow fadeInUp mb-10 rounded-lg bg-white py-6 px-7 dark:bg-dark md:py-8 md:px-10">
                <button className="faq-btn flex w-full items-center justify-between text-left">
                  <h3 className="mr-2 text-base font-bold text-dark dark:text-white sm:text-lg md:text-xl">
                    How can i purchase bitcoin?
                  </h3>
                  <span className="icon inline-flex h-5 w-full max-w-[20px] items-center justify-center rounded bg-body-color-2 text-white dark:text-black dark:bg-body-color text-lg font-semibold">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_50_132)">
                        <path
                          d="M8.82033 1.91065L4.99951 5.73146L1.17869 1.91064L-0.000488487 3.08978L4.99951 8.08978L9.99951 3.08979L8.82033 1.91065Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_50_132">
                          <rect
                            width="10"
                            height="10"
                            fill="white"
                            transform="translate(-0.000488281 0.000488281)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </button>
                <div x-show="openFaq4" className="faq-content">
                  <p className="text-relaxed pt-6 text-base text-body-color-2 dark:text-body-color">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-0 -bottom-36 -z-10">
          <img src="images/shapes/faq-shape-1.svg" alt="shape" />
        </div>
        <div className="absolute right-0 -top-36 -z-10">
          <img src="images/shapes/faq-shape-2.svg" alt="shape" />
        </div>
      </section>

      <section id="blog" className="pt-[120px] pb-20">
        <div className="container">
          <div
            className="wow fadeInUp mx-auto mb-16 max-w-[590px] text-center md:mb-20"
            data-wow-delay="0s"
          >
            <span className="mb-3 text-lg font-bold uppercase text-primary sm:text-xl">
              LATEST NEWS
            </span>
            <h2 className="mb-3 text-3xl font-bold leading-tight text-black dark:text-white md:text-[45px]">
              Recent News & Blogs
            </h2>
            <p className="text-lg font-medium text-body-color-2 dark:text-body-color">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
              congue arcu, In et dignissim quam condimentum vel.
            </p>
          </div>

          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                className="wow fadeInUp mb-10 overflow-hidden rounded-lg bg-light-bg dark:bg-[#14102C]"
                data-wow-delay="0s"
              >
                <a href="blog-details.html" className="block">
                  <img
                    src="images/blogs/image-01.jpg"
                    alt="blogimage"
                    className="w-full"
                  />
                </a>
                <div className="p-7 lg:px-6 xl:p-8">
                  <div className="mb-2 flex items-center">
                    <p className="mr-3 flex items-center text-body-color-2 dark:text-body-color">
                      <span className="pr-2 text-dark dark:text-white">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          className="fill-current"
                        >
                          <path d="M11.0001 3.66675C11.9725 3.66675 12.9052 4.05306 13.5928 4.74069C14.2804 5.42832 14.6667 6.36095 14.6667 7.33341C14.6667 8.30587 14.2804 9.2385 13.5928 9.92614C12.9052 10.6138 11.9725 11.0001 11.0001 11.0001C10.0276 11.0001 9.09499 10.6138 8.40736 9.92614C7.71972 9.2385 7.33341 8.30587 7.33341 7.33341C7.33341 6.36095 7.71972 5.42832 8.40736 4.74069C9.09499 4.05306 10.0276 3.66675 11.0001 3.66675ZM11.0001 12.8334C15.0517 12.8334 18.3334 14.4742 18.3334 16.5001V18.3334H3.66675V16.5001C3.66675 14.4742 6.94841 12.8334 11.0001 12.8334Z" />
                        </svg>
                      </span>
                      By Admin
                    </p>
                    <p className="flex items-center text-body-color-2 dark:text-body-color">
                      <span className="pr-2 text-dark dark:text-white">
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          className="fill-current"
                        >
                          <path d="M6.125 10.5H7.875V12.25H6.125V10.5ZM18.375 5.25V17.5C18.375 17.9641 18.1906 18.4092 17.8624 18.7374C17.5342 19.0656 17.0891 19.25 16.625 19.25H4.375C3.40375 19.25 2.625 18.4625 2.625 17.5V5.25C2.625 4.78587 2.80937 4.34075 3.13756 4.01256C3.46575 3.68437 3.91087 3.5 4.375 3.5H5.25V1.75H7V3.5H14V1.75H15.75V3.5H16.625C17.0891 3.5 17.5342 3.68437 17.8624 4.01256C18.1906 4.34075 18.375 4.78587 18.375 5.25ZM4.375 7H16.625V5.25H4.375V7ZM16.625 17.5V8.75H4.375V17.5H16.625ZM13.125 12.25V10.5H14.875V12.25H13.125ZM9.625 12.25V10.5H11.375V12.25H9.625ZM6.125 14H7.875V15.75H6.125V14ZM13.125 15.75V14H14.875V15.75H13.125ZM9.625 15.75V14H11.375V15.75H9.625Z" />
                        </svg>
                      </span>
                      Jan 25, 2025
                    </p>
                  </div>

                  <h3>
                    <a
                      href="blog-details.html"
                      className="mb-4 block text-xl font-bold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-lg xl:text-2xl"
                    >
                      Expenses as material bre mate insisted building
                    </a>
                  </h3>
                  <p className="text-base font-medium leading-loose text-body-color-2 dark:text-body-color">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc sed congue arcu, In et dignissim quam condime vel.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                className="wow fadeInUp mb-10 overflow-hidden rounded-lg bg-light-bg dark:bg-[#14102C]"
                data-wow-delay="0s"
              >
                <a href="blog-details.html" className="block">
                  <img
                    src="images/blogs/image-02.jpg"
                    alt="blogimage"
                    className="w-full"
                  />
                </a>
                <div className="p-7 lg:px-6 xl:p-8">
                  <div className="mb-2 flex items-center">
                    <p className="mr-3 flex items-center text-body-color-2 dark:text-body-color">
                      <span className="pr-2 text-dark dark:text-white">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          className="fill-current"
                        >
                          <path d="M11.0001 3.66675C11.9725 3.66675 12.9052 4.05306 13.5928 4.74069C14.2804 5.42832 14.6667 6.36095 14.6667 7.33341C14.6667 8.30587 14.2804 9.2385 13.5928 9.92614C12.9052 10.6138 11.9725 11.0001 11.0001 11.0001C10.0276 11.0001 9.09499 10.6138 8.40736 9.92614C7.71972 9.2385 7.33341 8.30587 7.33341 7.33341C7.33341 6.36095 7.71972 5.42832 8.40736 4.74069C9.09499 4.05306 10.0276 3.66675 11.0001 3.66675ZM11.0001 12.8334C15.0517 12.8334 18.3334 14.4742 18.3334 16.5001V18.3334H3.66675V16.5001C3.66675 14.4742 6.94841 12.8334 11.0001 12.8334Z" />
                        </svg>
                      </span>
                      By Admin
                    </p>
                    <p className="flex items-center text-body-color-2 dark:text-body-color">
                      <span className="pr-2 text-dark dark:text-white">
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          className="fill-current"
                        >
                          <path d="M6.125 10.5H7.875V12.25H6.125V10.5ZM18.375 5.25V17.5C18.375 17.9641 18.1906 18.4092 17.8624 18.7374C17.5342 19.0656 17.0891 19.25 16.625 19.25H4.375C3.40375 19.25 2.625 18.4625 2.625 17.5V5.25C2.625 4.78587 2.80937 4.34075 3.13756 4.01256C3.46575 3.68437 3.91087 3.5 4.375 3.5H5.25V1.75H7V3.5H14V1.75H15.75V3.5H16.625C17.0891 3.5 17.5342 3.68437 17.8624 4.01256C18.1906 4.34075 18.375 4.78587 18.375 5.25ZM4.375 7H16.625V5.25H4.375V7ZM16.625 17.5V8.75H4.375V17.5H16.625ZM13.125 12.25V10.5H14.875V12.25H13.125ZM9.625 12.25V10.5H11.375V12.25H9.625ZM6.125 14H7.875V15.75H6.125V14ZM13.125 15.75V14H14.875V15.75H13.125ZM9.625 15.75V14H11.375V15.75H9.625Z" />
                        </svg>
                      </span>
                      Jan 25, 2025
                    </p>
                  </div>

                  <h3>
                    <a
                      href="blog-details.html"
                      className="mb-4 block text-xl font-bold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-lg xl:text-2xl"
                    >
                      Quis nostrud exercitati ullamc laboris nisi aliquip
                    </a>
                  </h3>
                  <p className="text-base font-medium leading-loose text-body-color-2 dark:text-body-color">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc sed congue arcu, In et dignissim quam condime vel.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                className="wow fadeInUp mb-10 overflow-hidden rounded-lg bg-light-bg dark:bg-[#14102C]"
                data-wow-delay="0s"
              >
                <a href="blog-details.html" className="block">
                  <img
                    src="images/blogs/image-03.jpg"
                    alt="blogimage"
                    className="w-full"
                  />
                </a>
                <div className="p-7 lg:px-6 xl:p-8">
                  <div className="mb-2 flex items-center">
                    <p className="mr-3 flex items-center text-body-color-2 dark:text-body-color">
                      <span className="pr-2 text-dark dark:text-white">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          className="fill-current"
                        >
                          <path d="M11.0001 3.66675C11.9725 3.66675 12.9052 4.05306 13.5928 4.74069C14.2804 5.42832 14.6667 6.36095 14.6667 7.33341C14.6667 8.30587 14.2804 9.2385 13.5928 9.92614C12.9052 10.6138 11.9725 11.0001 11.0001 11.0001C10.0276 11.0001 9.09499 10.6138 8.40736 9.92614C7.71972 9.2385 7.33341 8.30587 7.33341 7.33341C7.33341 6.36095 7.71972 5.42832 8.40736 4.74069C9.09499 4.05306 10.0276 3.66675 11.0001 3.66675ZM11.0001 12.8334C15.0517 12.8334 18.3334 14.4742 18.3334 16.5001V18.3334H3.66675V16.5001C3.66675 14.4742 6.94841 12.8334 11.0001 12.8334Z" />
                        </svg>
                      </span>
                      By Admin
                    </p>
                    <p className="flex items-center text-body-color-2 dark:text-body-color">
                      <span className="pr-2 text-dark dark:text-white">
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          className="fill-current"
                        >
                          <path d="M6.125 10.5H7.875V12.25H6.125V10.5ZM18.375 5.25V17.5C18.375 17.9641 18.1906 18.4092 17.8624 18.7374C17.5342 19.0656 17.0891 19.25 16.625 19.25H4.375C3.40375 19.25 2.625 18.4625 2.625 17.5V5.25C2.625 4.78587 2.80937 4.34075 3.13756 4.01256C3.46575 3.68437 3.91087 3.5 4.375 3.5H5.25V1.75H7V3.5H14V1.75H15.75V3.5H16.625C17.0891 3.5 17.5342 3.68437 17.8624 4.01256C18.1906 4.34075 18.375 4.78587 18.375 5.25ZM4.375 7H16.625V5.25H4.375V7ZM16.625 17.5V8.75H4.375V17.5H16.625ZM13.125 12.25V10.5H14.875V12.25H13.125ZM9.625 12.25V10.5H11.375V12.25H9.625ZM6.125 14H7.875V15.75H6.125V14ZM13.125 15.75V14H14.875V15.75H13.125ZM9.625 15.75V14H11.375V15.75H9.625Z" />
                        </svg>
                      </span>
                      Jan 25, 2025
                    </p>
                  </div>

                  <h3>
                    <a
                      href="blog-details.html"
                      className="mb-4 block text-xl font-bold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-lg xl:text-2xl"
                    >
                      Laboris nisi aliquip dium exiuliym commo cons.
                    </a>
                  </h3>
                  <p className="text-base font-medium leading-loose text-body-color-2 dark:text-body-color">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc sed congue arcu, In et dignissim quam condime vel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-light-bg py-[120px] dark:bg-[#14102C]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-7/12">
              <div
                className="wow fadeInUp mb-16 max-w-[350px]"
                data-wow-delay="0s"
              >
                <span className="mb-3 text-lg font-bold uppercase text-primary sm:text-xl">
                  Contact Us
                </span>
                <h2 className="mb-3 text-3xl font-bold leading-tight text-black dark:text-white md:text-[45px]">
                  Let's talk about your problem.
                </h2>
              </div>

              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 sm:w-1/2">
                  <div
                    className="wow fadeInUp mb-11 max-w-[250px]"
                    data-wow-delay="0s"
                  >
                    <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                      Our Location
                    </h3>
                    <p className="text-base font-medium leading-loose text-body-color-2 dark:text-body-color">
                      401 Broadway, 24th Floor, Orchard Cloud View, London
                    </p>
                  </div>
                </div>
                <div className="w-full px-4 sm:w-1/2">
                  <div
                    className="wow fadeInUp mb-11 max-w-[250px]"
                    data-wow-delay="0s"
                  >
                    <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                      Email Address
                    </h3>
                    <p className="text-base font-medium leading-loose text-body-color-2 dark:text-body-color">
                      info@yourdomain.com
                    </p>
                    <p className="text-base font-medium leading-loose text-body-color-2 dark:text-body-color">
                      contact@yourdomain.com
                    </p>
                  </div>
                </div>
                <div className="w-full px-4 sm:w-1/2">
                  <div
                    className="wow fadeInUp mb-11 max-w-[250px]"
                    data-wow-delay="0s"
                  >
                    <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                      Phone Number
                    </h3>
                    <p className="text-base font-medium leading-loose text-body-color-2 dark:text-body-color">
                      +990 846 73644
                    </p>
                    <p className="text-base font-medium leading-loose text-body-color-2 dark:text-body-color">
                      +550 9475 4543
                    </p>
                  </div>
                </div>
                <div className="w-full px-4 sm:w-1/2">
                  <div
                    className="wow fadeInUp mb-11 max-w-[250px]"
                    data-wow-delay="0s"
                  >
                    <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
                      How Can We Help?
                    </h3>
                    <p className="text-base font-medium leading-loose text-body-color-2 dark:text-body-color">
                      Tell us your problem we will get back to you ASAP.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-5/12">
              <div
                className="sm:14 wow fadeInUp rounded-md bg-white py-12 px-8 dark:bg-dark"
                data-wow-delay="0s"
              >
                <h3 className="mb-8 text-2xl font-bold text-dark dark:text-white sm:text-[34px] lg:text-2xl xl:text-[34px]">
                  Send us a Message
                </h3>

                <form>
                  <div className="mb-5">
                    <label
                      for="name"
                      className="mb-2 block text-sm font-medium text-dark dark:text-white"
                    >
                      Full Name*
                    </label>

                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your full name"
                      className="w-full rounded-md border border-[#E9E9E9] border-opacity-50 py-3 px-5 text-base font-medium text-body-color outline-none focus:border-primary dark:border-opacity-20 dark:bg-white dark:bg-opacity-5"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      for="email"
                      className="mb-2 block text-sm font-medium text-dark dark:text-white"
                    >
                      Email Address*
                    </label>

                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email address"
                      className="w-full rounded-md border border-[#E9E9E9] border-opacity-50 py-3 px-5 text-base font-medium text-body-color outline-none focus:border-primary dark:border-opacity-20 dark:bg-white dark:bg-opacity-5"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      for="message"
                      className="mb-2 block text-sm font-medium text-dark dark:text-white"
                    >
                      Message*
                    </label>

                    <textarea
                      rows="6"
                      id="message"
                      placeholder="Type your message"
                      className="w-full rounded-md border border-[#E9E9E9] border-opacity-50 py-3 px-5 text-base font-medium text-body-color outline-none focus:border-primary dark:border-opacity-20 dark:bg-white dark:bg-opacity-5"
                    ></textarea>
                  </div>
                  <div>
                    <button className="w-full rounded-full bg-primary p-3 text-center text-base font-semibold text-white hover:bg-opacity-90 dark:bg-white dark:text-black dark:hover:bg-opacity-90">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="newsletter" className="relative z-10">
        <div className="absolute top-0 left-0 -z-10 h-[120px] w-full bg-light-bg dark:bg-[#14102C]"></div>
        <div className="container">
          <div className="wow fadeInUp relative z-10 overflow-hidden rounded bg-dark p-8 sm:p-12">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <div className="mb-10 lg:mb-0">
                  <div className="max-w-[500px]">
                    <h2 className="mb-2 text-3xl font-bold leading-tight text-white md:text-[45px]">
                      Newsletter
                    </h2>
                    <p className="text-lg font-medium text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam vitae quam nec ante aliquet fringilla vel at erat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full px-3 lg:w-1/2">
                <div>
                  <form className="relative">
                    <input
                      type="email"
                      placeholder="Enter email address"
                      className="w-full rounded-full border border-transparent bg-white py-5 px-10 text-base font-medium text-body-color-2 outline-none dark:text-body-color sm:pr-24"
                    />
                    <button className="right-[10px] top-1/2 mt-5 inline-flex h-12 items-center rounded-full bg-primary px-7 text-base font-medium text-white hover:bg-opacity-90 sm:absolute sm:mt-0 sm:-translate-y-1/2">
                      Submit
                      <span className="pl-1">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.67496 17.5L19.1666 10L1.67496 2.5L1.66663 8.33333L14.1666 10L1.66663 11.6667L1.67496 17.5Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="absolute top-0 right-0 -z-10">
              <img src="images/shapes/newsletter-shape.svg" alt="shape" />
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-4/12">
              <div
                className="wow fadeInUp mb-14 max-w-[330px] xl:mb-20"
                data-wow-delay="0s"
              >
                <a href="index.html" className="mb-6 inline-block">
                  <img
                    src="images/logo/logo-white.svg"
                    alt="logo"
                    className="hidden dark:block"
                  />
                  <img
                    src="images/logo/logo.svg"
                    alt="logo"
                    className="dark:hidden"
                  />
                </a>
                <p className="mb-10 text-base font-medium text-body-color-2 dark:text-body-color">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  vitae quam nec ante fringilla vel at erat convallis elit.
                </p>
                <div className="flex items-center space-x-3">
                  <a
                    href="/#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-light-bg text-body-color-2 hover:bg-primary hover:text-white dark:bg-dark dark:text-white dark:hover:bg-primary"
                    name="social-link"
                    aria-label="social-link"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.25 8.46875C7.6875 8.46875 7.28125 8.96875 7.28125 9.53125C7.28125 10.0938 7.71875 10.5938 8.25 10.5938C8.8125 10.5938 9.21875 10.125 9.21875 9.53125C9.25 8.9375 8.8125 8.46875 8.25 8.46875Z"
                        fill="currentColor"
                      />
                      <path
                        d="M11.75 10.5625C12.285 10.5625 12.7187 10.0868 12.7187 9.5C12.7187 8.9132 12.285 8.4375 11.75 8.4375C11.215 8.4375 10.7812 8.9132 10.7812 9.5C10.7812 10.0868 11.215 10.5625 11.75 10.5625Z"
                        fill="currentColor"
                      />
                      <path
                        d="M16.4687 0.3125H3.53125C2.4375 0.3125 1.53125 1.1875 1.53125 2.28125V15.375C1.53125 16.4688 2.40625 17.3438 3.5 17.3438H14.4687L13.9375 15.5938L15.1562 16.75L16.3437 17.8437L18.4062 19.6875V2.28125C18.5 1.1875 17.5625 0.3125 16.4687 0.3125ZM12.7187 12.9375C12.7187 12.9375 12.375 12.5313 12.0625 12.1563C13.3437 11.8125 13.8125 11 13.8125 11C13.4062 11.25 13.0312 11.4375 12.7187 11.5625C12.25 11.7812 11.75 11.9062 11.3125 11.9687C10.375 12.1562 9.5625 12.0937 8.8125 11.9687C8.25 11.875 7.8125 11.7188 7.40625 11.5625C7.1875 11.4687 6.90625 11.375 6.6875 11.25C6.65625 11.25 6.65625 11.2188 6.59375 11.2188C6.59375 11.2188 6.5625 11.2187 6.5625 11.1875C6.375 11.0937 6.3125 11 6.3125 11C6.3125 11 6.8125 11.7813 8.03125 12.1563C7.71875 12.5 7.375 12.9375 7.375 12.9375C5.21875 12.8438 4.4375 11.5 4.4375 11.5C4.4375 8.375 5.84375 5.875 5.84375 5.875C7.25 4.8125 8.5625 4.875 8.5625 4.875L8.65625 5C6.875 5.46875 6.09375 6.25 6.09375 6.25C6.09375 6.25 6.3125 6.125 6.65625 6C7.71875 5.5625 8.5 5.4375 8.84375 5.375C8.875 5.375 8.9375 5.375 9.03125 5.375C9.59375 5.28125 10.3125 5.28125 10.9687 5.375C11.9062 5.46875 12.875 5.78125 13.875 6.3125C13.875 6.3125 13.125 5.59375 11.4375 5.09375L11.5625 4.90625C11.5625 4.90625 12.875 4.875 14.2812 5.90625C14.2812 5.90625 15.6875 8.40625 15.6875 11.5313C15.7187 11.5 14.875 12.9063 12.7187 12.9375Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="/#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-light-bg text-body-color-2 hover:bg-primary hover:text-white dark:bg-dark dark:text-white dark:hover:bg-primary"
                    name="social-link"
                    aria-label="social-link"
                  >
                    <svg
                      width="18"
                      height="15"
                      viewBox="0 0 18 15"
                      className="fill-current"
                    >
                      <path d="M17.7165 2.00016C17.0749 2.29183 16.3832 2.4835 15.6665 2.57516C16.3999 2.1335 16.9665 1.4335 17.2332 0.591829C16.5415 1.0085 15.7749 1.30016 14.9665 1.46683C14.3082 0.750163 13.3832 0.333496 12.3332 0.333496C10.3749 0.333496 8.77487 1.9335 8.77487 3.9085C8.77487 4.19183 8.8082 4.46683 8.86654 4.72516C5.89987 4.57516 3.2582 3.15016 1.49987 0.991829C1.19154 1.51683 1.01654 2.1335 1.01654 2.7835C1.01654 4.02516 1.64154 5.12516 2.6082 5.75016C2.01654 5.75016 1.46654 5.5835 0.983203 5.3335C0.983203 5.3335 0.983203 5.3335 0.983203 5.3585C0.983203 7.09183 2.21654 8.54183 3.84987 8.86683C3.54987 8.95016 3.2332 8.99183 2.9082 8.99183C2.6832 8.99183 2.4582 8.96683 2.24154 8.92516C2.69154 10.3335 3.99987 11.3835 5.57487 11.4085C4.3582 12.3752 2.81654 12.9418 1.1332 12.9418C0.84987 12.9418 0.566536 12.9252 0.283203 12.8918C1.86654 13.9085 3.74987 14.5002 5.76654 14.5002C12.3332 14.5002 15.9415 9.05016 15.9415 4.32516C15.9415 4.16683 15.9415 4.01683 15.9332 3.8585C16.6332 3.3585 17.2332 2.72516 17.7165 2.00016Z" />
                    </svg>
                  </a>
                  <a
                    href="/#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-light-bg text-body-color-2 hover:bg-primary hover:text-white dark:bg-dark dark:text-white dark:hover:bg-primary"
                    name="social-link"
                    aria-label="social-link"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      className="fill-current"
                    >
                      <path d="M13.8333 0.5C14.2754 0.5 14.6993 0.675595 15.0118 0.988155C15.3244 1.30072 15.5 1.72464 15.5 2.16667V13.8333C15.5 14.2754 15.3244 14.6993 15.0118 15.0118C14.6993 15.3244 14.2754 15.5 13.8333 15.5H2.16667C1.72464 15.5 1.30072 15.3244 0.988155 15.0118C0.675595 14.6993 0.5 14.2754 0.5 13.8333V2.16667C0.5 1.72464 0.675595 1.30072 0.988155 0.988155C1.30072 0.675595 1.72464 0.5 2.16667 0.5H13.8333ZM13.4167 13.4167V9C13.4167 8.27949 13.1304 7.5885 12.621 7.07903C12.1115 6.56955 11.4205 6.28333 10.7 6.28333C9.99167 6.28333 9.16667 6.71667 8.76667 7.36667V6.44167H6.44167V13.4167H8.76667V9.30833C8.76667 8.66667 9.28333 8.14167 9.925 8.14167C10.2344 8.14167 10.5312 8.26458 10.75 8.48338C10.9688 8.70217 11.0917 8.99891 11.0917 9.30833V13.4167H13.4167ZM3.73333 5.13333C4.10464 5.13333 4.46073 4.98583 4.72328 4.72328C4.98583 4.46073 5.13333 4.10464 5.13333 3.73333C5.13333 2.95833 4.50833 2.325 3.73333 2.325C3.35982 2.325 3.0016 2.47338 2.73749 2.73749C2.47338 3.0016 2.325 3.35982 2.325 3.73333C2.325 4.50833 2.95833 5.13333 3.73333 5.13333ZM4.89167 13.4167V6.44167H2.58333V13.4167H4.89167Z" />
                    </svg>
                  </a>
                  <a
                    href="/#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-light-bg text-body-color-2 hover:bg-primary hover:text-white dark:bg-dark dark:text-white dark:hover:bg-primary"
                    name="social-link"
                    aria-label="social-link"
                  >
                    <svg
                      width="18"
                      height="12"
                      viewBox="0 0 18 12"
                      className="fill-current"
                    >
                      <path d="M7.33366 8.49984L11.6587 5.99984L7.33366 3.49984V8.49984ZM16.967 1.97484C17.0753 2.3665 17.1503 2.8915 17.2003 3.55817C17.2587 4.22484 17.2837 4.79984 17.2837 5.29984L17.3337 5.99984C17.3337 7.82484 17.2003 9.1665 16.967 10.0248C16.7587 10.7748 16.2753 11.2582 15.5253 11.4665C15.1337 11.5748 14.417 11.6498 13.317 11.6998C12.2337 11.7582 11.242 11.7832 10.3253 11.7832L9.00033 11.8332C5.50866 11.8332 3.33366 11.6998 2.47533 11.4665C1.72533 11.2582 1.24199 10.7748 1.03366 10.0248C0.925326 9.63317 0.850326 9.10817 0.800326 8.44151C0.741992 7.77484 0.716992 7.19984 0.716992 6.69984L0.666992 5.99984C0.666992 4.17484 0.800326 2.83317 1.03366 1.97484C1.24199 1.22484 1.72533 0.741504 2.47533 0.533171C2.86699 0.424837 3.58366 0.349837 4.68366 0.299837C5.76699 0.241504 6.75866 0.216504 7.67533 0.216504L9.00033 0.166504C12.492 0.166504 14.667 0.299837 15.5253 0.533171C16.2753 0.741504 16.7587 1.22484 16.967 1.97484Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-2/12">
              <div
                className="wow fadeInUp mb-14 xl:mb-20"
                data-wow-delay="0s"
              >
                <h2 className="mb-5 text-2xl font-bold text-black dark:text-white">
                  Quick Links
                </h2>
                <div className="space-y-3">
                  <a
                    href="/#"
                    className="block text-base font-medium text-body-color-2 hover:text-primary dark:text-body-color dark:hover:text-primary"
                  >
                    What is ico
                  </a>
                  <a
                    href="/#"
                    className="block text-base font-medium text-body-color-2 hover:text-primary dark:text-body-color dark:hover:text-primary"
                  >
                    Roadmap
                  </a>
                  <a
                    href="/#"
                    className="block text-base font-medium text-body-color-2 hover:text-primary dark:text-body-color dark:hover:text-primary"
                  >
                    Whitepaper
                  </a>
                  <a
                    href="/#"
                    className="block text-base font-medium text-body-color-2 hover:text-primary dark:text-body-color dark:hover:text-primary"
                  >
                    Social Network
                  </a>
                  <a
                    href="/#"
                    className="block text-base font-medium text-body-color-2 hover:text-primary dark:text-body-color dark:hover:text-primary"
                  >
                    Join Us Now
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-2/12">
              <div
                className="wow fadeInUp mb-14 xl:mb-20"
                data-wow-delay="0s"
              >
                <h2 className="mb-5 text-2xl font-bold text-black dark:text-white">
                  Supports
                </h2>
                <div className="space-y-3">
                  <a
                    href="/#"
                    className="block text-base font-medium text-body-color-2 hover:text-primary dark:text-body-color dark:hover:text-primary"
                  >
                    Setting & Privacy
                  </a>
                  <a
                    href="/#"
                    className="block text-base font-medium text-body-color-2 hover:text-primary dark:text-body-color dark:hover:text-primary"
                  >
                    Help & Support
                  </a>
                  <a
                    href="/#"
                    className="block text-base font-medium text-body-color-2 hover:text-primary dark:text-body-color dark:hover:text-primary"
                  >
                    Terms & Conditions
                  </a>
                  <a
                    href="/#"
                    className="block text-base font-medium text-body-color-2 hover:text-primary dark:text-body-color dark:hover:text-primary"
                  >
                    24/7 Supports
                  </a>
                  <a
                    href="/#"
                    className="block text-base font-medium text-body-color-2 hover:text-primary dark:text-body-color dark:hover:text-primary"
                  >
                    On Point FAQ
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-1/2 xl:w-4/12">
              <div
                className="wow fadeInUp mb-14 xl:mb-20"
                data-wow-delay="0s"
              >
                <h2 className="mb-5 text-2xl font-bold text-black dark:text-white">
                  News & Post
                </h2>
                <div className="space-y-3">
                  <div className="flex">
                    <div className="mr-5 h-[75px] w-full max-w-[75px] rounded-md">
                      <img
                        src="images/footer/blog-01.jpg"
                        alt="post"
                        className="h-full w-full rounded-md object-cover object-center"
                      />
                    </div>
                    <div>
                      <a
                        href="/#"
                        className="text-base font-medium text-body-color-2 hover:text-primary dark:text-body-color dark:hover:text-primary"
                      >
                        Roll Out New Features Without Hurting Loyal Users
                      </a>
                      <p className="flex items-center">
                        <span className="pr-1 text-body-color-2 dark:text-body-color">
                          <svg
                            width="14"
                            height="16"
                            viewBox="0 0 14 16"
                            className="fill-current"
                          >
                            <path d="M3.25 8H4.75V9.5H3.25V8ZM13.75 3.5V14C13.75 14.3978 13.592 14.7794 13.3107 15.0607C13.0294 15.342 12.6478 15.5 12.25 15.5H1.75C0.9175 15.5 0.25 14.825 0.25 14V3.5C0.25 3.10218 0.408035 2.72064 0.68934 2.43934C0.970644 2.15804 1.35218 2 1.75 2H2.5V0.5H4V2H10V0.5H11.5V2H12.25C12.6478 2 13.0294 2.15804 13.3107 2.43934C13.592 2.72064 13.75 3.10218 13.75 3.5ZM1.75 5H12.25V3.5H1.75V5ZM12.25 14V6.5H1.75V14H12.25ZM9.25 9.5V8H10.75V9.5H9.25ZM6.25 9.5V8H7.75V9.5H6.25ZM3.25 11H4.75V12.5H3.25V11ZM9.25 12.5V11H10.75V12.5H9.25ZM6.25 12.5V11H7.75V12.5H6.25Z" />
                          </svg>
                        </span>
                        <span className="text-sm font-medium text-body-color-2 dark:text-body-color">
                          Dec 18, 2025
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-5 h-[75px] w-full max-w-[75px] rounded-md">
                      <img
                        src="images/footer/blog-02.jpg"
                        alt="post"
                        className="h-full w-full rounded-md object-cover object-center"
                      />
                    </div>
                    <div>
                      <a
                        href="/#"
                        className="text-base font-medium text-body-color-2 hover:text-primary dark:text-body-color dark:hover:text-primary"
                      >
                        Top 10 Best Cryptocurrency Blogs and Websites
                      </a>
                      <p className="flex items-center">
                        <span className="pr-1 text-body-color-2 dark:text-body-color">
                          <svg
                            width="14"
                            height="16"
                            viewBox="0 0 14 16"
                            className="fill-current"
                          >
                            <path d="M3.25 8H4.75V9.5H3.25V8ZM13.75 3.5V14C13.75 14.3978 13.592 14.7794 13.3107 15.0607C13.0294 15.342 12.6478 15.5 12.25 15.5H1.75C0.9175 15.5 0.25 14.825 0.25 14V3.5C0.25 3.10218 0.408035 2.72064 0.68934 2.43934C0.970644 2.15804 1.35218 2 1.75 2H2.5V0.5H4V2H10V0.5H11.5V2H12.25C12.6478 2 13.0294 2.15804 13.3107 2.43934C13.592 2.72064 13.75 3.10218 13.75 3.5ZM1.75 5H12.25V3.5H1.75V5ZM12.25 14V6.5H1.75V14H12.25ZM9.25 9.5V8H10.75V9.5H9.25ZM6.25 9.5V8H7.75V9.5H6.25ZM3.25 11H4.75V12.5H3.25V11ZM9.25 12.5V11H10.75V12.5H9.25ZM6.25 12.5V11H7.75V12.5H6.25Z" />
                          </svg>
                        </span>
                        <span className="text-sm font-medium text-body-color-2 dark:text-body-color">
                          Dec 18, 2025
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="wow fadeInUp border-t border-[#F3F4F4] py-7 text-center dark:border-[#2D2C4A]"
            data-wow-delay="0s"
          >
            <p className="text-base font-medium leading-loose text-body-color-2 dark:text-body-color">
              © Crypto - all Rights Reserved, Crafted by
              <a
                href="https://uideck.com"
                className="hover:text-primary"
              >
                UIdeck
              </a>
            </p>
          </div>
        </div>

        <div className="absolute top-0 left-0 -z-10">
          <img src="images/shapes/footer-shape-2.svg" alt="shape" />
        </div>

        <div className="absolute bottom-0 right-0 -z-10">
          <img src="images/shapes/footer-shape-1.svg" alt="shape" />
        </div>
      </footer>
    </>
  );
};

export default Homepage;
