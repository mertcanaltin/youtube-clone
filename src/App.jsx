import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {


  return (
    <div>
      <div className="bg-white font-sans">
        <nav className="py-2 shadow">
          <div className="container mx-auto flex items-center">
            <div className="w-1/5">
              <svg
                className="style-scope yt-icon"
                display="block"
                pointerEvents="none"
                viewBox="0 0 90 20"
                style={{ width: "40%", height: "100%" }}
              >
                <g className="style-scope yt-icon">
                  <g className="style-scope yt-icon">
                    <path
                      fill="red"
                      d="M27.973 3.123A3.578 3.578 0 0025.447.597C23.22 0 14.285 0 14.285 0S5.35 0 3.123.597A3.578 3.578 0 00.597 3.123C0 5.35 0 10 0 10s0 4.65.597 6.877a3.578 3.578 0 002.526 2.526C5.35 20 14.285 20 14.285 20s8.935 0 11.162-.597a3.578 3.578 0 002.526-2.526C28.57 14.65 28.57 10 28.57 10s-.002-4.65-.597-6.877z"
                      className="style-scope yt-icon"
                    ></path>
                    <path
                      fill="#fff"
                      d="M11.425 14.285L18.848 10l-7.423-4.285v8.57z"
                      className="style-scope yt-icon"
                    ></path>
                  </g>
                  <g className="style-scope yt-icon">
                    <g className="style-scope yt-icon">
                      <path
                        d="M34.602 13.004L31.395 1.418h2.798l1.124 5.252c.287 1.294.497 2.397.633 3.31h.082c.094-.655.306-1.75.633-3.291l1.164-5.27h2.799L37.38 13.003v5.557H34.6v-5.557h.002zM41.47 18.194c-.565-.381-.967-.974-1.207-1.778-.237-.805-.357-1.872-.357-3.208V11.39c0-1.348.136-2.432.409-3.248.273-.816.699-1.413 1.277-1.787.579-.374 1.338-.563 2.279-.563.927 0 1.667.191 2.227.572.558.381.967.978 1.225 1.787.26.812.389 1.891.389 3.239v1.818c0 1.336-.128 2.408-.38 3.217-.25.811-.66 1.404-1.224 1.778-.565.374-1.332.562-2.298.562-.997.002-1.776-.19-2.34-.571zm3.165-1.962c.156-.409.236-1.074.236-2.001v-3.902c0-.898-.078-1.557-.236-1.97-.157-.417-.432-.624-.828-.624-.38 0-.651.207-.806.623-.158.417-.235 1.073-.235 1.971v3.902c0 .927.075 1.594.225 2.001.15.41.421.614.816.614.396 0 .67-.204.828-.614zM56.815 18.563H54.61l-.244-1.533h-.061c-.6 1.157-1.498 1.736-2.698 1.736-.83 0-1.444-.273-1.839-.816-.395-.546-.593-1.397-.593-2.554V6.037h2.82v9.193c0 .56.061.957.184 1.195.122.237.327.357.613.357.245 0 .48-.075.706-.226.226-.15.39-.34.5-.571v-9.95h2.818v12.527z"
                        className="style-scope yt-icon"
                      ></path>
                      <path
                        d="M64.475 3.688h-2.798v14.875h-2.759V3.688H56.12V1.42h8.356v2.268z"
                        className="style-scope yt-icon"
                      ></path>
                      <path
                        d="M71.277 18.563H69.07l-.245-1.533h-.06c-.6 1.157-1.499 1.736-2.699 1.736-.83 0-1.443-.273-1.839-.816-.395-.546-.592-1.397-.592-2.554V6.037h2.82v9.193c0 .56.06.957.183 1.195.122.237.327.357.614.357.244 0 .48-.075.705-.226.226-.15.39-.34.501-.571v-9.95h2.818v12.527zM80.609 8.039c-.172-.79-.447-1.362-.828-1.717-.38-.355-.905-.532-1.573-.532-.518 0-1.002.146-1.451.44-.45.294-.798.677-1.042 1.155h-.021v-6.6h-2.717v17.776h2.329l.287-1.186h.06c.22.424.546.755.981 1.002.436.245.92.367 1.451.367.953 0 1.656-.44 2.105-1.317.45-.88.675-2.25.675-4.118v-1.982c0-1.4-.087-2.498-.256-3.288zm-2.585 5.11c0 .913-.037 1.628-.113 2.145-.075.518-.2.887-.378 1.103a.871.871 0 01-.715.327c-.233 0-.447-.054-.645-.165a1.232 1.232 0 01-.48-.489V8.96c.095-.34.26-.618.492-.837.23-.218.485-.327.755-.327a.76.76 0 01.663.337c.158.226.266.602.327 1.133.061.532.092 1.287.092 2.268v1.615h.002zM84.866 13.871c0 .804.023 1.407.07 1.809.047.402.146.694.297.88.15.183.38.274.693.274.421 0 .713-.164.868-.491.158-.327.243-.873.257-1.634l2.431.143c.014.108.022.259.022.45 0 1.156-.318 2.022-.95 2.593-.633.572-1.53.859-2.686.859-1.39 0-2.364-.436-2.921-1.308-.56-.873-.838-2.22-.838-4.045v-2.187c0-1.88.29-3.253.868-4.118.579-.866 1.569-1.299 2.973-1.299.966 0 1.71.177 2.227.532.517.355.882.905 1.094 1.656.211.75.317 1.785.317 3.106v2.145h-4.722v.635zm.357-5.903c-.143.176-.237.466-.287.868-.047.402-.07 1.011-.07 1.83v.898h2.062v-.898c0-.805-.028-1.414-.082-1.83-.054-.416-.153-.708-.296-.88-.144-.169-.365-.256-.664-.256-.3.002-.522.092-.663.268z"
                        className="style-scope yt-icon"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className="w-3/5">
              <div className="relative flex">
                <input type="text" className="h-8 p-4 text-sm w-full border" placeholder="Search" />
                <svg
                  className="style-scope yt-icon mt-1 ml-4"
                  display="block"
                  pointerEvents="none"
                  viewBox="0 0 24 24"
                  style={{ width: "4%", height: "100%" }}
                >
                  <g className="style-scope yt-icon">
                    <path
                      d="M20.87 20.17l-5.59-5.59A6.956 6.956 0 0017 10c0-3.87-3.13-7-7-7s-7 3.13-7 7a6.995 6.995 0 0011.58 5.29l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"
                      className="style-scope yt-icon"
                    ></path>
                  </g>
                </svg>
                <span className="flex items-center bg-grey-lightest hover:bg-grey-lighter absolute pin-r pin-y border px-8"><i className="fa fa-search text-grey-dark" /></span>
              </div>
            </div>
            <div className="w-1/5">
              <div className="flex items-center justify-end ">
                <svg
                  className="style-scope yt-icon mr-6"
                  display="block"
                  pointerEvents="none"
                  viewBox="0 0 24 24"
                  style={{ width: "10%", height: "100%" }}
                >
                  <g className="style-scope yt-icon">
                    <path
                      d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"
                      className="style-scope yt-icon"
                    ></path>
                  </g>
                </svg>
                <svg
                  className="style-scope yt-icon mr-4"
                  display="block"
                  pointerEvents="none"
                  viewBox="0 0 24 24"
                  style={{ width: "10%", height: "100%" }}
                >
                  <g className="style-scope yt-icon">
                    <path
                      d="M16 4v4h4V4h-4zm3 3h-2V5h2v2zm-3 3v4h4v-4h-4zm3 3h-2v-2h2v2zm-9-9v4h4V4h-4zm3 3h-2V5h2v2zm-3 3v4h4v-4h-4zm3 3h-2v-2h2v2zm3 3v4h4v-4h-4zm3 3h-2v-2h2v2zm-9-3v4h4v-4h-4zm3 3h-2v-2h2v2zM4 4v4h4V4H4zm3 3H5V5h2v2zm-3 3v4h4v-4H4zm3 3H5v-2h2v2zm-3 3v4h4v-4H4zm3 3H5v-2h2v2z"
                      className="style-scope yt-icon"
                    ></path>
                  </g>
                </svg>
                <svg
                  className="style-scope yt-icon mr-4"
                  display="block"
                  pointerEvents="none"
                  viewBox="0 0 24 24"
                  style={{ width: "10%", height: "100%" }}
                >
                  <g className="style-scope yt-icon">
                    <path
                      d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42l-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z"
                      className="style-scope yt-icon"
                    ></path>
                  </g>
                </svg>
                <a href="#">
                  <img className="h-8 w-8 rounded-full" src="https://avatars.githubusercontent.com/u/37827216?v=4" alt="avatar" />
                </a>
              </div>
            </div>
          </div>
        </nav>

        <div className="container mx-auto flex">

          <div className="w-1/4 py-6">

            <aside class="w-64" aria-label="Sidebar">
              <div class="">
                <ul class="space-y-2">
                  <li>
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <svg
                        className="style-scope yt-icon"
                        display="block"
                        pointerEvents="none"
                        viewBox="0 0 24 24"
                        style={{ width: "10%", height: "100%" }}
                      >
                        <g className="style-scope yt-icon">
                          <path
                            d="M4 10v11h6v-6h4v6h6V10l-8-7z"
                            className="style-scope yt-icon"
                          ></path>
                        </g>
                      </svg>
                      <span class="ml-3">Home</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <svg
                        className="style-scope yt-icon"
                        display="block"
                        pointerEvents="none"
                        viewBox="0 0 24 24"
                        style={{ width: "10%", height: "100%" }}
                      >
                        <g className="style-scope yt-icon">
                          <path
                            d="M9.8 9.8l-3.83 8.23 8.23-3.83 3.83-8.23L9.8 9.8zm3.28 2.97a1.327 1.327 0 01-1.08.56c-.28 0-.54-.08-.77-.25-.29-.21-.48-.51-.54-.86-.06-.35.02-.71.23-.99.21-.29.51-.48.86-.54.35-.06.7.02.99.23.29.21.48.51.54.86.06.35-.02.7-.23.99zM12 3c4.96 0 9 4.04 9 9s-4.04 9-9 9-9-4.04-9-9 4.04-9 9-9m0-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                            className="style-scope yt-icon"
                          ></path>
                        </g>
                      </svg><span class="flex-1 ml-3 whitespace-nowrap">Explore</span>
                      <span class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <svg
                        className="style-scope yt-icon"
                        display="block"
                        pointerEvents="none"
                        viewBox="0 0 24 24"
                        style={{ width: "10%", height: "100%" }}
                      >
                        <g className="style-scope yt-icon">
                          <path
                            d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33l-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94a3.744 3.744 0 00-2 3.49c.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93a3.751 3.751 0 003.51 6.63l8.5-4.5A3.736 3.736 0 0020 13.57a3.762 3.762 0 00-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46A2.751 2.751 0 015 10.38c-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"
                            className="style-scope yt-icon"
                          ></path>
                        </g>
                      </svg><span class="flex-1 ml-3 whitespace-nowrap">Shorts</span>
                      <span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
                    </a>
                  </li>
                  <li >
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <svg
                        className="style-scope yt-icon"
                        display="block"
                        pointerEvents="none"
                        viewBox="0 0 24 24"
                        style={{ width: "10%", height: "100%" }}
                      >
                        <g className="style-scope yt-icon">
                          <path
                            d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"
                            className="style-scope yt-icon"
                          ></path>
                        </g>
                      </svg><span class="flex-1 ml-3 whitespace-nowrap ">Subscribe</span>
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <svg
                        className="style-scope yt-icon"
                        display="block"
                        pointerEvents="none"
                        viewBox="0 0 24 24"
                        style={{ width: "10%", height: "100%" }}
                      >
                        <g className="style-scope yt-icon">
                          <path
                            d="M11 7l6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"
                            className="style-scope yt-icon"
                          ></path>
                        </g>
                      </svg><span class="flex-1 ml-3 whitespace-nowrap">Library</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <svg
                        className="style-scope yt-icon"
                        display="block"
                        pointerEvents="none"
                        viewBox="0 0 24 24"
                        style={{ width: "10%", height: "100%" }}
                      >
                        <g className="style-scope yt-icon">
                          <path
                            d="M14.97 16.95L10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"
                            className="style-scope yt-icon"
                          ></path>
                        </g>
                      </svg><span class="flex-1 ml-3 whitespace-nowrap">History</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <svg
                        className="style-scope yt-icon"
                        display="block"
                        pointerEvents="none"
                        viewBox="0 0 24 24"
                        style={{ width: "10%", height: "100%" }}
                      >
                        <g className="style-scope yt-icon">
                          <path
                            d="M10 8l6 4-6 4V8zm11-5v18H3V3h18zm-1 1H4v16h16V4z"
                            className="style-scope yt-icon"
                          ></path>
                        </g>
                      </svg><span class="flex-1 ml-3 whitespace-nowrap">Your videos</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <svg
                        className="style-scope yt-icon"
                        display="block"
                        pointerEvents="none"
                        viewBox="0 0 24 24"
                        style={{ width: "10%", height: "100%" }}
                      >
                        <g className="style-scope yt-icon">
                          <path
                            d="M14.97 16.95L10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"
                            className="style-scope yt-icon"
                          ></path>
                        </g>
                      </svg><span class="flex-1 ml-3 whitespace-nowrap">Watch Later</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <svg
                        className="style-scope yt-icon"
                        display="block"
                        pointerEvents="none"
                        viewBox="0 0 24 24"
                        style={{ width: "10%", height: "100%" }}
                      >
                        <g className="style-scope yt-icon">
                          <path
                            d="M18.77 11h-4.23l1.52-4.94C16.38 5.03 15.54 4 14.38 4c-.58 0-1.14.24-1.52.65L7 11H3v10h14.43c1.06 0 1.98-.67 2.19-1.61l1.34-6c.27-1.24-.78-2.39-2.19-2.39zM7 20H4v-8h3v8zm12.98-6.83l-1.34 6c-.1.48-.61.83-1.21.83H8v-8.61l5.6-6.06c.19-.21.48-.33.78-.33.26 0 .5.11.63.3.07.1.15.26.09.47l-1.52 4.94-.4 1.29h5.58c.41 0 .8.17 1.03.46.13.15.26.4.19.71z"
                            className="style-scope yt-icon"
                          ></path>
                        </g>
                      </svg><span class="flex-1 ml-3 whitespace-nowrap">Liked videos</span>
                    </a>
                  </li>

                </ul>
              </div>
            </aside>

          </div>
          <div className="w-4/4 mx-16 py-6">
            <div className="border-b">
              <h3 className="py-6 text-base font-medium">
                Best of Fun Fun Mert
                <span className="uppercase ml-3 text-grey-dark">Play all</span>
              </h3>
              <div className="flex mb-4 relative">

                <div className="flex-1 mr-1">
                  <div>
                    <img src="https://i.ytimg.com/vi/NDycDO8f00Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJ37vpDbUR0wLakphXUp5j4noLvA" alt="" />
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium">Higher-order functions - Part 1 of Functional Programming</h4>
                    <p className="mt-2 font-hairline text-sm text-grey-darker">
                      mertcanaltin
                      <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">✓</span>
                    </p>
                    <p className="mt-1 font-hairline text-xs text-grey-darker">
                      336K views · 2 years ago
                    </p>
                    <p className="inline block p-1 text-grey-darker bg-grey-lighter font-hairline text-2xs">
                      CC
                    </p>
                  </div>
                </div>
                <div className="flex-1 mr-1">
                  <div>
                    <img src="https://i.ytimg.com/vi/U68MJz9DrI4/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBpxUhB3Z-6V7IxmOpsTE6zhDSR5w" alt="" />
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium">Higher-order functions - Part 1 of Functional Programming</h4>
                    <p className="mt-2 font-hairline text-sm text-grey-darker">
                      mertcanaltin
                      <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">✓</span>
                    </p>
                    <p className="mt-1 font-hairline text-xs text-grey-darker">
                      336K views · 2 years ago
                    </p>
                    <p className="inline block p-1 text-grey-darker bg-grey-lighter font-hairline text-2xs">
                      CC
                    </p>
                  </div>
                </div>
                <div className="flex-1 mr-1">
                  <div>
                    <img src="https://i.ytimg.com/vi/JZOkN-T94qM/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDMReg8j-Dh3UCO5uy320IuXVQVWA" alt="" />
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium">Higher-order functions - Part 1 of Functional Programming</h4>
                    <p className="mt-2 font-hairline text-sm text-grey-darker">
                      mertcanaltin
                      <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">✓</span>
                    </p>
                    <p className="mt-1 font-hairline text-xs text-grey-darker">
                      336K views · 2 years ago
                    </p>
                    <p className="inline block p-1 text-grey-darker bg-grey-lighter font-hairline text-2xs">
                      CC
                    </p>
                  </div>
                </div>
                <div className="flex-1 mr-1">
                  <div>
                    <img src="https://i.ytimg.com/vi/pSJdOFruCT0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHzRVBB6_igI61QCwbX8eN1YVjsQ" alt="" />
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium">Higher-order functions - Part 1 of Functional Programming</h4>
                    <p className="mt-2 font-hairline text-sm text-grey-darker">
                      mertcanaltin
                      <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">✓</span>
                    </p>
                    <p className="mt-1 font-hairline text-xs text-grey-darker">
                      336K views · 2 years ago
                    </p>
                    <p className="inline block p-1 text-grey-darker bg-grey-lighter font-hairline text-2xs">
                      CC
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b">
              <h3 className="py-6 text-base font-medium">
                Uploads
                <span className="uppercase ml-3 text-grey-dark">Play all</span>
              </h3>
              <div className="flex mb-4 relative">

                <div className="flex-1 mr-1">
                  <div>
                    <img src="https://i.ytimg.com/vi/kICh_d6tHQk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqXunTFff47a31t4mFgYWgxHIiQg" alt="" />
                  </div>
                  <div className="mb-4 mt-1">
                    <h4 className="text-sm font-medium">Commit editor settings to version control? - mertcanaltin</h4>
                    <p className="mt-1 font-hairline text-xs text-grey-darker">
                      5.3K views · 4 days ago
                    </p>
                  </div>
                </div>
                <div className="flex-1 mr-1">
                  <div>
                    <img src="https://i.ytimg.com/vi/JA8_UMRMll4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBOJhJr-zV2BXlk8sLKdxHE4EkSXg" alt="" />
                  </div>
                  <div className="mb-4 mt-1">
                    <h4 className="text-sm font-medium">Commit editor settings to version control? - mertcanaltin</h4>
                    <p className="mt-1 font-hairline text-xs text-grey-darker">
                      5.3K views · 4 days ago
                    </p>
                  </div>
                </div>
                <div className="flex-1 mr-1">
                  <div>
                    <img src="https://i.ytimg.com/vi/JA8_UMRMll4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBOJhJr-zV2BXlk8sLKdxHE4EkSXg" alt="" />
                  </div>
                  <div className="mb-4 mt-1">
                    <h4 className="text-sm font-medium">Commit editor settings to version control? - mertcanaltin</h4>
                    <p className="mt-1 font-hairline text-xs text-grey-darker">
                      5.3K views · 4 days ago
                    </p>
                  </div>
                </div>
                <div className="flex-1 mr-1">
                  <div>
                    <img src="https://i.ytimg.com/vi/JA8_UMRMll4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBOJhJr-zV2BXlk8sLKdxHE4EkSXg" alt="" />
                  </div>
                  <div className="mb-4 mt-1">
                    <h4 className="text-sm font-medium">Commit editor settings to version control? - mertcanaltin</h4>
                    <p className="mt-1 font-hairline text-xs text-grey-darker">
                      5.3K views · 4 days ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b">
              <div className="py-6">
                <h3 className="text-base font-medium">
                  MPJ's Musings
                  <span className="uppercase ml-3 text-grey-dark">Play all</span>
                </h3>
                <p className="text-sm font-normal text-grey-dark mt-2 leading-loose max-w-md">More "soft" episodes about software, creativity, motivation, and career.</p>
              </div>
              <div className="flex mb-4 relative">

                <div className="flex-1 mr-1">
                  <div>
                    <img src="https://i.ytimg.com/vi/Y-_r24GOvjo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHLx2o_u9f8BZwKD0MrkFcyXUsbg" alt="" />
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium">Why remote working is so hard</h4>
                    <p className="mt-2 font-hairline text-sm text-grey-darker">
                      mertcanaltin
                      <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">✓</span>
                    </p>
                    <p className="mt-1 font-hairline text-xs text-grey-darker">
                      20K views · 2 months ago
                    </p>
                    <p className="inline block p-1 text-grey-darker bg-grey-lighter font-hairline text-2xs">
                      CC
                    </p>
                  </div>
                </div>
                <div className="flex-1 mr-1">
                  <div>
                    <img src="https://i.ytimg.com/vi/Y-_r24GOvjo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHLx2o_u9f8BZwKD0MrkFcyXUsbg" alt="" />
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium">Why remote working is so hard</h4>
                    <p className="mt-2 font-hairline text-sm text-grey-darker">
                      mertcanaltin
                      <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">✓</span>
                    </p>
                    <p className="mt-1 font-hairline text-xs text-grey-darker">
                      20K views · 2 months ago
                    </p>
                    <p className="inline block p-1 text-grey-darker bg-grey-lighter font-hairline text-2xs">
                      CC
                    </p>
                  </div>
                </div>
                <div className="flex-1 mr-1">
                  <div>
                    <img src="https://i.ytimg.com/vi/Y-_r24GOvjo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHLx2o_u9f8BZwKD0MrkFcyXUsbg" alt="" />
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium">Why remote working is so hard</h4>
                    <p className="mt-2 font-hairline text-sm text-grey-darker">
                      mertcanaltin
                      <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">✓</span>
                    </p>
                    <p className="mt-1 font-hairline text-xs text-grey-darker">
                      20K views · 2 months ago
                    </p>
                    <p className="inline block p-1 text-grey-darker bg-grey-lighter font-hairline text-2xs">
                      CC
                    </p>
                  </div>
                </div>
                <div className="flex-1 mr-1">
                  <div>
                    <img src="https://i.ytimg.com/vi/Y-_r24GOvjo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHLx2o_u9f8BZwKD0MrkFcyXUsbg" alt="" />
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium">Why remote working is so hard</h4>
                    <p className="mt-2 font-hairline text-sm text-grey-darker">
                      mertcanaltin
                      <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">✓</span>
                    </p>
                    <p className="mt-1 font-hairline text-xs text-grey-darker">
                      20K views · 2 months ago
                    </p>
                    <p className="inline block p-1 text-grey-darker bg-grey-lighter font-hairline text-2xs">
                      CC
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b">
              <div className="py-6">
                <h3 className="text-base font-medium">
                  Functional programming in Javascript
                  <span className="uppercase ml-3 text-grey-dark">Play all</span>
                </h3>
                <p className="text-sm font-normal text-grey-dark mt-2 leading-loose max-w-md">This is a collection of the videos from FunFunFunction that is specifically about functional programming in JavaScript</p>
              </div>
              <div className="flex mb-4 relative">

                <div className="flex-1 mr-1">
                  <div>
                    <img src="https://i.ytimg.com/vi/Zwq43Go1jYI/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUZAF96cmZpYVciUnTJ2nF7cUokw" alt="" />
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium">Higher-order functions - Part 1 of Functional Programming in JavaScript</h4>
                    <p className="mt-2 font-hairline text-sm text-grey-darker">
                      mertcanaltin
                      <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">✓</span>
                    </p>
                    <p className="mt-1 font-hairline text-xs text-grey-darker">
                      20K views · 2 months ago
                    </p>
                    <p className="inline block p-1 text-grey-darker bg-grey-lighter font-hairline text-2xs">
                      CC
                    </p>
                  </div>
                </div>
                <div className="flex-1 mr-1">
                  <div>
                    <img src="https://i.ytimg.com/vi/Zwq43Go1jYI/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUZAF96cmZpYVciUnTJ2nF7cUokw" alt="" />
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium">Higher-order functions - Part 1 of Functional Programming in JavaScript</h4>
                    <p className="mt-2 font-hairline text-sm text-grey-darker">
                      mertcanaltin
                      <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">✓</span>
                    </p>
                    <p className="mt-1 font-hairline text-xs text-grey-darker">
                      20K views · 2 months ago
                    </p>
                    <p className="inline block p-1 text-grey-darker bg-grey-lighter font-hairline text-2xs">
                      CC
                    </p>
                  </div>
                </div>
                <div className="flex-1 mr-1">
                  <div>
                    <img src="https://i.ytimg.com/vi/Zwq43Go1jYI/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUZAF96cmZpYVciUnTJ2nF7cUokw" alt="" />
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium">Higher-order functions - Part 1 of Functional Programming in JavaScript</h4>
                    <p className="mt-2 font-hairline text-sm text-grey-darker">
                      mertcanaltin
                      <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">✓</span>
                    </p>
                    <p className="mt-1 font-hairline text-xs text-grey-darker">
                      20K views · 2 months ago
                    </p>
                    <p className="inline block p-1 text-grey-darker bg-grey-lighter font-hairline text-2xs">
                      CC
                    </p>
                  </div>
                </div>
                <div className="flex-1 mr-1">
                  <div>
                    <img src="https://i.ytimg.com/vi/Zwq43Go1jYI/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUZAF96cmZpYVciUnTJ2nF7cUokw" alt="" />
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium">Higher-order functions - Part 1 of Functional Programming in JavaScript</h4>
                    <p className="mt-2 font-hairline text-sm text-grey-darker">
                      mertcanaltin
                      <span className="w-3 h-3 text-white inline-block text-center rounded-full bg-grey-dark text-2xs">✓</span>
                    </p>
                    <p className="mt-1 font-hairline text-xs text-grey-darker">
                      20K views · 2 months ago
                    </p>
                    <p className="inline block p-1 text-grey-darker bg-grey-lighter font-hairline text-2xs">
                      CC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
