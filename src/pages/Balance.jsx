import { Link } from "react-router-dom";
import Container from "../layout/Container";
import Sidebar from "../layout/Sidebar";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Balance = () => {
  return (
    <Container>
      <Sidebar />
      <main className="flex-1 flex flex-col border-r border-l border-gray-extraLight">
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
              MY BALANCE
            </span>
          </Link>
        </header>
        <div className="w-full h-full flex flex-col gap-5 mt-12 items-center">
          <div className="w-5/12 h-1/3 flex flex-col gap-5 p-4 shadow-md rounded-xl">
            <div className="font-semibold text-3xl text-center">$</div>
            <div className="text-center">
              <p className="font-semibold text-2xl">
                Total Receivable : <span className="text-gray-600">$1357</span>{" "}
              </p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-2xl">
                Total Active Subscriber :{" "}
                <span className="text-gray-600">61</span>{" "}
              </p>
            </div>
            <button className="font-semibold border border-blue-500 text-white bg-blue-500 w-1/2 rounded-md py-1 mt-auto mx-auto hover:bg-white hover:text-blue-500">
              Request Payment
            </button>
          </div>
          <div className="w-2/3 mx-auto flex flex-col">
            
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-blue-500">
            <tr>
                <th scope="col" class="px-6 py-3 text-center">
                    Date
                </th>
                <th scope="col" class="px-6 py-3 text-center">
                    IBAN
                </th>
                <th scope="col" class="px-6 py-3 text-center">
                    Amount
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr class="bg-blue-200 border-b">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center">
                    22.01.2023
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center">
                    12345678901
                </th>
                <td class="px-6 py-4 text-gray-900 text-center font-semibold">
                    $372
                </td>
               
            </tr>
            <tr class="border-b bg-blue-500">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center">
                    13.03.2023
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center">
                    12345678901
                </th>
                <td class="px-6 py-4 text-gray-900 text-center font-semibold">
                    $681
                </td>
            </tr>
        </tbody>
    </table>
</div>

          </div>
        </div>
      </main>
    </Container>
  );
};

export default Balance;
