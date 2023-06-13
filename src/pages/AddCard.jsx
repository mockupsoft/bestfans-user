import { Link } from "react-router-dom";

// Layouts
import Container from "../layout/Container";
import Sidebar from "../layout/Sidebar";

// Icons
import { AiOutlineArrowLeft } from "react-icons/ai";

const AddCard = () => {
  return (
    <Container>
      <Sidebar />
      <div className="lists border-r flex-1 flex flex-col">
        <header className="sticky top-0 z-10 flex justify-between items-center p-4 bg-white border-b">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 cursor-pointer"
          >
            <Link
              to={-1}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-blue-200 hover:text-blue-600"
            >
              <AiOutlineArrowLeft />
            </Link>
            <span className="font-semibold text-lg text-gray-900">
              ADD CARD
            </span>
          </Link>
          <div className="px-3 py-1 cursor-pointer rounded-full flex items-center justify-center hover:bg-blue-200 hover:text-blue-600">
            <p className="text-blue-400 text-sm font-semibold">VERIFY</p>
          </div>
        </header>
        <form className="flex flex-col gap-5 p-3">
          <h4 className="uppercase text-gray-400 font-semibold">
            Billing Details
          </h4>
          <p className="mt-2 mb-2">
            We are fully compliant with Payment Card Industry Data Security
            Standards.
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
            <input className="w-5 h-5" type="checkbox" id="age" name="age" />
            <label className="cursor-pointer" htmlFor="age">
              Tick here to confirm that you are at least 18 years old and the
              age of majority in your place of residence
            </label>
          </div>
          <input
            className="rounded-3xl bg-blue-500 text-white border border-blue-500 cursor-pointer w-2/12 ml-auto py-1 hover:bg-white hover:text-blue-500"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
      <aside className="w-96 hidden lg:block mt-10 px-4">
        <div className="flex flex-col gap-5">
          <div className="aside-top flex flex-col border rounded-lg">
            <div className="flex flex-col border-b py-2 px-4">
              <p>$0</p>
              <p>Wallet credits</p>
            </div>
            <div className="flex flex-col gap-3 py-2 px-4">
                <p className="text-gray-400 uppercase">Add funds to your wallet</p>
                <button className="uppercase w-100 py-2 text-white text-center text-sm bg-blue-500 border border-blue-500 rounded-3xl hover:bg-white hover:text-blue-500">add a payment card</button>
                <div className="flex items-center justify-between">
                <label htmlFor="walletPrimary">Make wallet primary method for rebills</label>
                <input className="w-3 h-3" id="walletPrimary" name="walletPrimary" type="checkbox" />
                </div>
            </div>
          </div>
          <div className="aside-bot flex flex-col gap-5 border rounded-lg p-4">
            <p className="text-gray-400 text-start w-100 uppercase text-sm font-semibold">Latest transactions</p>
            <p className="text-gray-400 tesk-sm text-center">No Payments done yet.</p>
          </div>
        </div>
      </aside>
    </Container>
  );
};

export default AddCard;
