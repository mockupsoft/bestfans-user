import { Link } from "react-router-dom";
import { useState } from "react";
import { Modal, Ripple, initTE } from "tw-elements";

import TipItem from "../components/TipItem";
import { ToastContainer, toast } from "react-toastify";

// Layouts
import Container from "../layout/Container";
import Sidebar from "../layout/Sidebar";

// Icons
import { AiOutlineArrowLeft, AiFillStar, AiFillHeart } from "react-icons/ai";
import {
  BiDotsVerticalRounded,
  BiMessageRounded,
  BiDollarCircle,
} from "react-icons/bi";
import { FaSpotify } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import { BsBookmark, BsArrowUpShort, BsSearch } from "react-icons/bs";
import { SearchIcon } from "../icons/Icon";

const PublisherPage = () => {
  const [subscribed, setSubscribed] = useState(
    window.localStorage.getItem("isSubscribed")
  );
  const [media, setMedia] = useState(true);
  const [tip, setTip] = useState(0);
  const [amount, setAmount] = useState(0);

  const handleAmountAdd = () => {
    setTip(Number(tip) + Number(amount));
    setAmount(0);
  };

  const handleSubscribe = () => {
    setSubscribed(true);
    window.localStorage.setItem("isSubscribed", subscribed);
    toast.success("Being followed!");
  };

  const handleUnfollow = () => {
    setSubscribed(false);
    window.localStorage.setItem("isSubscribed", subscribed);
    toast.error("Being unfollowed!");
  };

  initTE({ Modal, Ripple });

  return (
    <Container>
      <Sidebar />
      <ToastContainer />
      <main className="flex-1 flex flex-col border-r border-l border-gray-extraLight">
        <div className="bg-gradient-to-b from-gray-500 to-gray-300 w-full h-52">
          <div className="header flex items-center justify-between py-2 px-4">
            <div className="header-left flex items-center gap-5">
              <Link
                to={-1}
                className="w-8 h-8 text-white rounded-full flex items-center justify-center hover:bg-blue-200 hover:text-blue-600"
              >
                <AiOutlineArrowLeft size={24} />
              </Link>
              <div className="flex flex-col items-start justify-center text-white">
                <p className="font-semibold text-lg">Scarlett Johansson</p>
                <p>No posts</p>
              </div>
            </div>
            <div className="header-right">
              <BiDotsVerticalRounded className="text-3xl cursor-pointer text-white hover:bg-gray-100 p-1 rounded-full" />
            </div>
          </div>
        </div>
        <div className="header-bottom flex flex-col px-4 pb-12 border-b">
          <div className="top flex items-center justify-between">
            <div className="flex flex-col ">
              <div className="-translate-y-10 w-24 h-24 rounded-full border-2 text-white bg-blue-300 flex items-center justify-center font-bold text-3xl">
                L
              </div>
              <div className="flex flex-col items-start justify-center gap-3">
                <p className="font-semibold">Scarlett Johansson</p>
                <p className="flex gap-4 text-gray-400">
                  @scarltt .
                  <a
                    className="hover:text-blue-400 hover:underline flex items-center"
                    href="/"
                  >
                    Available now
                  </a>
                </p>
                <p className="text-gray-700">
                  Your favorite country girl :) :){" "}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link
                to="/edit-profile"
                className="flex rounded-full items-center gap-4 px-4 py-2 border text-blue-500 hover:border-blue-200 hover:bg-sky-100 hover:text-blue-600"
              >
                <AiFillStar size={24} />
              </Link>
              <div className="flex cursor-pointer items-center gap-4 px-4 py-2 border rounded-3xl text-blue-500 hover:border-blue-200 hover:bg-sky-100 hover:text-blue-600">
                <FiCopy size={24} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-2 bg-gray-100"></div>
        <div className="p-4 flex gap-2 flex-col">
          <div className="text-gray-400">SUBSCRIPTION</div>
          {/* <button className="rounded-3xl bg-blue-400 hover:bg-blue-500 text-bold cursor-pointer text-white p-3 flex items-center justify-between" data-te-toggle="modal"
            data-te-target="#exampleModal"
            data-te-ripple-init
            data-te-ripple-color="light"
            > */}
          {subscribed ? (
            <button
              onClick={handleUnfollow}
              className="rounded-3xl bg-gray-400 hover:bg-gray-500 text-bold cursor-pointer text-white p-3 flex items-center justify-center"
              data-te-ripple-color="light"
            >
              <p>UNFOLLOW</p>
            </button>
          ) : (
            <button
              onClick={handleSubscribe}
              className="rounded-3xl bg-blue-400 hover:bg-blue-500 text-bold cursor-pointer text-white p-3 flex items-center justify-between"
              data-te-ripple-color="light"
            >
              <p>SUBSCRIBE</p>
              <p>For Free</p>
            </button>
          )}
        </div>
        <div className="w-full h-2 bg-gray-100"></div>
        <div className="media py-2">
          <div className="media-top flex items-center py-2 border-b-2">
            <div
              onClick={() => setMedia(true)}
              className="w-1/2 text-center font-semibold cursor-pointer"
            >
              1 POSTS
            </div>
            <div
              onClick={() => setMedia(false)}
              className="w-1/2 text-center font-semibold cursor-pointer"
            >
              162 MEDIA
            </div>
          </div>
          <div className="media-body flex flex-col">
            <div className="flex items-center justify-between p-4">
              <p className="text-gray-400">RECENT</p>
              <div className="text-gray-500">
                <BsSearch size={20} />
              </div>
            </div>
            {media ? (
              <div>
                <div className="main-head mt-3 pl-5 flex items-center justify-start gap-2">
                  <div className="bg-blue-200 hover:bg-blue-100 hover:text-blue-400 rounded-lg px-2 text-center text-sm cursor-pointer">
                    All 238
                  </div>
                  <div className="bg-gray-200 hover:bg-blue-100 hover:text-blue-400 rounded-lg px-2 text-center text-sm cursor-pointer">
                    Archive 0
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="p-4 flex items-start justify-between">
                    <div className="flex gap-2 items-center">
                      <div className="w-8 h-8 p-1 rounded-full text-white bg-blue-300 flex items-center justify-center font-bold text-3xl">
                        L
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="">Scarlett Johansson</p>
                        <p className="text-sm text-gray-400">@luxurylucia</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-center">
                      <p className="text-gray-500">May 7, 2022</p>
                      <FiCopy
                        className="cursor-pointer text-blue-400"
                        size={18}
                      />
                    </div>
                  </div>
                  <div className="p-4">
                    <p>In my own world, pick your favourite!</p>
                  </div>
                  <div className="bg-gray-100 h-72 flex flex-col justify-end">
                    {/* <button
                        data-te-toggle="modal"
                        data-te-target="#exampleModal"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className="uppercase text-center"
                      > */}

                    {subscribed ? (
                      <div className="p-1 rounded-lg overflow-hidden">
                        <img
                          src="https://cdn.britannica.com/59/182359-050-C6F38CA3/Scarlett-Johansson-Natasha-Romanoff-Avengers-Age-of.jpg"
                          alt=""
                        />
                      </div>
                    ) : (
                      <div className="rounded-3xl bg-blue-400 hover:bg-blue-500 text-bold cursor-pointer text-white p-3 flex items-center justify-center w-10/12 mx-auto mb-6">
                        <button
                          onClick={handleSubscribe}
                          className="uppercase text-center"
                        >
                          subscribe to see user's posts
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="card-bottom flex items-center justify-between px-4 pt-2 w-full">
                    <div className="bottom-left flex gap-3 items-center justify-between">
                      <AiFillHeart className="text-gray-400" size={26} />
                      <BiMessageRounded className="text-gray-400" size={26} />
                      <button
                        data-te-toggle="modal"
                        data-te-target="#exampleModal2"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className="flex gap-3 items-center"
                      >
                        <BiDollarCircle className="text-gray-400" size={26} />
                        <p className="font-semibold text-gray-400 text-sm">
                          SEND TIP
                        </p>
                      </button>
                    </div>
                    <div className="bottom-right">
                      <BsBookmark className="text-gray-400" size={26} />
                    </div>
                  </div>
                  <div className="card-like px-4 my-3">83 likes</div>
                </div>
              </div>
            ) : (
              <div>
                <div className="main-head mt-3 pl-5 flex items-center justify-start gap-2">
                  <div className="bg-blue-200 hover:bg-blue-100 hover:text-blue-400 rounded-lg px-2 text-center text-sm cursor-pointer">
                    All 135
                  </div>
                  <div className="bg-gray-200 hover:bg-blue-100 hover:text-blue-400 rounded-lg px-2 text-center text-sm cursor-pointer">
                    Photo 22
                  </div>
                  <div className="bg-gray-200 hover:bg-blue-100 hover:text-blue-400 rounded-lg px-2 text-center text-sm cursor-pointer">
                    Video 5
                  </div>
                </div>
                <div className="flex flex-wrap my-4">
                  <div className="bg-gray-100 cursor-pointer w-1/3 h-36 border border-white"></div>
                  <div className="bg-gray-100 cursor-pointer w-1/3 h-36 border border-white"></div>
                  <div className="bg-gray-100 cursor-pointer w-1/3 h-36 border border-white"></div>
                  <div className="bg-gray-100 cursor-pointer w-1/3 h-36 border border-white"></div>
                  <div className="bg-gray-100 cursor-pointer w-1/3 h-36 border border-white"></div>
                  <div className="bg-gray-100 cursor-pointer w-1/3 h-36 border border-white"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <aside className="w-96 hidden lg:block">
        <div className="flex items-center space-x-3 p-3 m-3 border rounded-sm text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base">
          <input
            type="text"
            placeholder="Search posts"
            className="focus:outline-none placeholder-dray-dark bg-transparent w-full text-sm"
          />
          <SearchIcon className="w-5 h-5" />
        </div>
        <div className="flex flex-col gap-5 items-center space-x-3 p-3 m-3 border rounded-sm text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base">
          <div className="focus:outline-none placeholder-dray-dark bg-transparent w-full flex -center justify-between">
            <p>Spotify</p>
            <BsArrowUpShort size={24} />
          </div>
          <div className="flex items-center justify-between w-full bg-green-500 p-2 px-4 rounded-3xl text-white font-semibold">
            <FaSpotify size={24} />
            <p>SIGN IN WITH SPOTIFY</p>
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-around mt-5 w-10/12 mx-auto">
          <p className="text-gray-400 text-xs">Privacy</p>
          <p className="text-gray-400 text-xs">.</p>
          <p className="text-gray-400 text-xs">Cookie Notice</p>
          <p className="text-gray-400 text-xs">.</p>
          <p className="text-gray-400 text-xs">Terms of Service</p>
        </div>
      </aside>
      <div
        data-te-modal-init
        className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          data-te-modal-dialog-ref
          className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]"
        >
          <div className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
            <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <h5
                className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                id="exampleModalLabel"
              >
                Subscribe
              </h5>
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                data-te-modal-dismiss
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="relative flex-auto p-4" data-te-modal-body-ref>
              Modal body text goes here.
            </div>
            <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <button
                type="button"
                className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                data-te-modal-dismiss
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Close
              </button>
              <button
                type="button"
                className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-toggle="modal"
                data-te-target="#exampleModalScrollable"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Save changess
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        data-te-modal-init
        className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="exampleModal2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          data-te-modal-dialog-ref
          className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]"
        >
          <div className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
            <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <h5
                className="text-xl font-medium leading-normal text-blue-400"
                id="exampleModalLabel"
              >
                Send Tip
              </h5>
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                data-te-modal-dismiss
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#60a5fa"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="relative flex-auto p-4" data-te-modal-body-ref>
              <div className="flex justify-around gap-2">
                <TipItem gift="Gift 1" price="5" tip={tip} setTip={setTip} />
                <TipItem gift="Gift 2" price="10" tip={tip} setTip={setTip} />
                <TipItem gift="Gift 3" price="15" tip={tip} setTip={setTip} />
              </div>
              <div className="px-10 mt-5 flex items-center gap-2">
                <p>Send Amount :</p>
                <input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="border rounded-md focus:outline-none px-2"
                  type="number"
                />
                <button
                  onClick={handleAmountAdd}
                  className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white hover:border-white px-2 py-1 rounded-md"
                >
                  Add
                </button>
              </div>
              <div className="px-10 mt-5 flex items-center justify-between">
                <div className="flex gap-2">
                  <p>Total Tip :</p>
                  <p>${tip}</p>
                </div>
                <button
                  onClick={() => setTip(0)}
                  className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white hover:border-white px-2 py-1 rounded-md"
                >
                  Reset
                </button>
              </div>
            </div>
            <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <button
                type="button"
                className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                data-te-modal-dismiss
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Close
              </button>
              <button
                type="button"
                className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-blue-500 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-modal-dismiss
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Send Tip
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        data-te-modal-init
        className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="exampleModalScrollable"
        tabIndex="-1"
        aria-labelledby="exampleModalScrollableLabel"
        aria-hidden="true"
      >
        <div
          data-te-modal-dialog-ref
          className="pointer-events-none relative h-[calc(100%-1rem)] w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
        >
          <div className="pointer-events-auto relative flex max-h-[100%] w-full flex-col overflow-hidden rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none ">
            <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4">
              <h5
                className="text-xl font-medium leading-normal text-blue-500 "
                id="exampleModalScrollableLabel"
              >
                Subscribe
              </h5>
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                data-te-modal-dismiss
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#60a5fa"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="relative overflow-y-auto p-4">
              <form className="flex flex-col gap-5 p-3">
                <h4 className="uppercase text-gray-400 font-semibold">
                  Billing Details
                </h4>
                <p className="mt-2 mb-2">
                  We are fully compliant with Payment Card Industry Data
                  Security Standards.
                </p>
                <div className="flex flex-col lg:flex-row gap-2 items-center justify-between w-100">
                  <div className="flex flex-col gap-2 w-full lg:w-5/12">
                    <label className="semibold" htmlFor="country">
                      Country
                    </label>
                    <input
                      required
                      className="border rounded-xl py-1 px-2 focus:border-blue-400"
                      type="text"
                      id="country"
                      name="country"
                      placeholder="Country"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full lg:w-5/12">
                    <label className="semibold" htmlFor="state">
                      State
                    </label>
                    <input
                      required
                      className="border rounded-xl py-1 px-2 focus:border-blue-400"
                      type="text"
                      id="state"
                      name="state"
                      placeholder="State"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-2">
                    <input
                      required
                      className="border rounded-xl py-1 px-2 focus:border-blue-400"
                      type="text"
                      id="street"
                      name="street"
                      placeholder="Street"
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-2 items-center justify-between w-100">
                  <div className="flex flex-col gap-2 w-full lg:w-5/12">
                    <label className="semibold" htmlFor="city">
                      City
                    </label>
                    <input
                      required
                      className="border rounded-xl py-1 px-2 focus:border-blue-400"
                      type="text"
                      id="city"
                      name="city"
                      placeholder="City"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full lg:w-5/12">
                    <label className="semibold" htmlFor="zip">
                      ZIP/Postal Code
                    </label>
                    <input
                      required
                      className="border rounded-xl py-1 px-2 focus:border-blue-400"
                      type="text"
                      id="zip"
                      name="zip"
                      placeholder="ZIP/Postal Code"
                    />
                  </div>
                </div>
                <h4 className="uppercase text-gray-400 font-semibold">
                  Card Details
                </h4>
                <div className="flex flex-col lg:flex-row gap-2 items-center justify-between w-100">
                  <div className="flex flex-col gap-2 w-full lg:w-5/12">
                    <label className="semibold" htmlFor="email">
                      E-mail
                    </label>
                    <input
                      required
                      className="border rounded-xl py-1 px-2 focus:border-blue-400"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="E-mail"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full lg:w-5/12">
                    <label className="semibold" htmlFor="name">
                      Name
                    </label>
                    <input
                      required
                      className="border rounded-xl py-1 px-2 focus:border-blue-400"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name on the card"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-2">
                    <input
                      required
                      className="border rounded-xl py-1 px-2 focus:border-blue-400"
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      placeholder="Card Number"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between w-100">
                  <div className="flex flex-col gap-2 w-full lg:w-5/12">
                    <label className="semibold" htmlFor="expiration">
                      Expiration
                    </label>
                    <input
                      required
                      className="border rounded-xl py-1 px-2 focus:border-blue-400"
                      type="text"
                      id="expiration"
                      name="expiration"
                      placeholder="MM / YY"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full lg:w-5/12">
                    <label className="semibold" htmlFor="cvc">
                      CVC
                    </label>
                    <input
                      required
                      className="border rounded-xl py-1 px-2 focus:border-blue-400"
                      type="text"
                      id="cvc"
                      name="cvc"
                      placeholder="CVC"
                    />
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <input
                    className="w-5 h-5"
                    type="checkbox"
                    id="age"
                    name="age"
                  />
                  <label className="cursor-pointer" htmlFor="age">
                    Tick here to confirm that you are at least 18 years old and
                    the age of majority in your place of residence
                  </label>
                </div>
                <div className="flex justify-between items-center">
                  <button
                    data-te-modal-dismiss
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="rounded-3xl bg-blue-500 text-white border border-blue-500 cursor-pointer w-2/12 py-1 hover:bg-white hover:text-blue-500"
                  >
                    Cancel
                  </button>
                  <input
                    className="rounded-3xl bg-blue-500 text-white border border-blue-500 cursor-pointer w-2/12 ml-auto py-1 hover:bg-white hover:text-blue-500"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PublisherPage;
