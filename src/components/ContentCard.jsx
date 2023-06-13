import {
  Modal,
  Ripple,
  initTE,
} from "tw-elements";
import {useState} from "react";

import TipItem from "../components/TipItem";

// Icons
import {
  BiDotsHorizontalRounded,
  BiMessageRounded,
  BiDollarCircle,
} from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import WidgetItem from "./WidgetItem";
import { Link } from "react-router-dom";

const ContentCard = () => {

  initTE({ Modal, Ripple });

  const [tip, setTip] = useState(0);
  const [amount, setAmount] = useState(0);

  const handleAmountAdd = () => {
    setTip(Number(tip) + Number(amount));
    setAmount(0);
  };

  return (
    <div className="mt-3 flex flex-col border-b py-4">
      <div className="card-head flex items-center justify-between px-4">
        <div className="card-head-left flex items-center justify-center gap-2 ">
          <div className="rounded-full bg-blue-200 w-12 h-12"></div>
          <div className="flex flex-col">
            <p className="font-semibold text-sm">OnlyFans</p>
            <p className="font-light text-gray-400 text-xs">@onlyfans</p>
          </div>
        </div>
        <div className="card-head-right flex items-center justify-center gap-2">
          <p className="text-gray-400">9 hours ago</p>
          <BiDotsHorizontalRounded className="cursor-pointer" />
        </div>
      </div>
      <div className="card-content px-4 flex flex-col">
        <p>
          Aldea Zama Tulum, Casa Shalva | Luxury with Lucia Experience the
          epitome of luxury living and explore the breathtaking beauty of Casa
          Shalva with{" "}
          <Link
            className="text-blue-400"
            to="https://onlyfans.com/luxurylucia"
            target="_blank"
          >
            @luxurylucia
          </Link>
          !
        </p>
        <p>
          For more, watch OFTV:{" "}
          <Link
            className="text-blue-400"
            to="https://of.tv/creators/luxury-with-lucia/"
            target="_blank"
          >
            of.tv/luxury-with-lucia
          </Link>
        </p>
        <div>
          <Link
            className="text-blue-400"
            target="_blank"
            to="https://of.tv/creators/luxury-with-lucia/"
          >
            onlyfans.com/luxurylucia
          </Link>

          <Link
            className="text-blue-400"
            target="_blank"
            to="https://onlyfans.com/oftv"
          >
            onlyfans.com/oftv
          </Link>
        </div>
      </div>
      <div className="card-media">
        <div className="media-video w-100">
          <iframe
            className="w-full h-72"
            src="https://www.youtube.com/embed/IN8MOfbaIZY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="media-imgs flex items-center justify-between mt-3 pb-4">
          <WidgetItem
            className="rounded-lg"
            to="https://onlyfans.com/luxurylucia"
            hero="https://pbs.twimg.com/profile_images/3032363142/a16a150bf6def6614d6b38096fd03330_400x400.jpeg"
            name="LuxuryLucia"
            link="@luxurylucia"
            backGround="https://pbs.twimg.com/profile_banners/3030879222/1429285493/1080x360"
          />
          <WidgetItem
            to="https://onlyfans.com/oftv"
            hero="https://pbs.twimg.com/profile_images/3032363142/a16a150bf6def6614d6b38096fd03330_400x400.jpeg"
            name="OFTV"
            link="@oftv"
            backGround="https://pbs.twimg.com/profile_banners/3030879222/1429285493/1080x360"
          />
        </div>
      </div>
      <div className="card-bottom flex items-center justify-between px-4 w-full">
        <div className="bottom-left flex gap-3 items-center justify-between">
          <AiFillHeart className="text-gray-400" size={26} />
          <BiMessageRounded className="text-gray-400" size={26} />
          <button className="flex gap-2 items-center" data-te-toggle="modal"
            data-te-target="#exampleModal"
            data-te-ripple-init
            data-te-ripple-color="light">
            <BiDollarCircle className="text-gray-400" size={26} />
            <p className="font-semibold text-gray-400 text-sm">SEND TIP</p>
          </button>
        </div>
        <div className="bottom-right">
          <BsBookmark className="text-gray-400" size={26} />
        </div>
      </div>
      <div className="card-like px-4 my-3">83 likes</div>
      <div
        data-te-modal-init
        className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div
          data-te-modal-dialog-ref
          className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
          <div
            className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
            <div
              className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">

              <h5
                className="text-xl font-medium leading-normal text-blue-400"
                id="exampleModalLabel">
                Send Tip
              </h5>
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                data-te-modal-dismiss
                aria-label="Close">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#60a5fa"
                  className="h-6 w-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="relative flex-auto p-4" data-te-modal-body-ref>
              <div className="flex justify-around gap-2">
                <TipItem gift="Gift 1" price='5' tip={tip} setTip={setTip} />
                <TipItem gift="Gift 2" price='10' tip={tip} setTip={setTip} />
                <TipItem gift="Gift 3" price='15' tip={tip} setTip={setTip} />
              </div>
              <div className="px-10 mt-5 flex items-center gap-2">
                 <p>Send Amount :</p>
                 <input value={amount} onChange={(e) => setAmount(e.target.value)} className="border rounded-md focus:outline-none px-2" type="number" />
                 <button onClick={handleAmountAdd} className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white hover:border-white px-2 py-1 rounded-md">Add</button>
              </div>
              <div className="px-10 mt-5 flex items-center justify-between">
                <div className="flex gap-2">
                 <p>Total Tip :</p>
                 <p>${tip}</p>
                </div>
                <button onClick={() => setTip(0)} className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white hover:border-white px-2 py-1 rounded-md">Reset</button>
              </div>
            </div>
            <div
              className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <button
                type="button"
                className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                data-te-modal-dismiss
                data-te-ripple-init
                data-te-ripple-color="light">
                Close
              </button>
              <button
                type="button"
                className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-blue-500 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light">
                Send Tip
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
