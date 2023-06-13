import { Link } from "react-router-dom";

// Layouts
import Container from "../layout/Container";
import Sidebar from "../layout/Sidebar";

// Icons
import { AiOutlineArrowLeft } from "react-icons/ai";

const MySubscribers = () => {
  const subscribers = [
    {
      id: 1,
      name: "Eyüp Ömer Odabaşı",
      date: "11.01.2023",
      type: "3 months"
    },
    {
      id: 2,
      name: "Hakan Binici",
      date: "17.03.2023",
      type: "1 months"
    },
    {
      id: 3,
      name: "Onur Alemdaroğlu",
      date: "23.32.2023",
      type: "Always and Forever"
    },
    {
      id: 4,
      name: "Ali Veli",
      date: "12.02.2023",
      type: "2 months"
    },
    {
      id: 5,
      name: "Ahmet Mehmet",
      date: "07.01.2023",
      type: "1 year"
    },
  ];

  return (
    <Container>
      <Sidebar />
      <div className="border-r flex-1 flex flex-col">
        <header className="sticky top-0 z-10 flex justify-between items-center p-2 bg-white border-b">
          <Link
            to={-1}
            className="flex items-center justify-center gap-2 cursor-pointer"
          >
            <Link
              to={-1}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-blue-200 hover:text-blue-600"
            >
              <AiOutlineArrowLeft />
            </Link>
            <span className="font-semibold text-lg text-gray-900">
              MY SUBSCRIBERS
            </span>
          </Link>
          <div className="flex items-center justify-center gap-3"></div>
        </header>
        <table>
          <thead>
            <tr>
              <th> </th>
              <th>Full Name</th>
              <th>Subscribe Date</th>
              <th>Subscribe Type</th>
              <th>Block</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((subscriber, index) => {
              return (
                <tr key={index}>
                  <td className="text-center">
                    <div className="w-12 h-12 hover:bg-gray-lightest rounded-full  flex items-center justify-center font-bold text-3xl text-gray-400 cursor-pointer">
                      {subscriber.name.charAt(0)}
                    </div>
                  </td>
                  <td className="text-center">{subscriber.name}</td>
                  <td className="text-center">{subscriber.date}</td>
                  <td className="text-center">{subscriber.type}</td>
                  <td className="text-center"><button className="bg-red-100 text-red-500 py-1 px-2 rounded-xl hover:scale-105">Block</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default MySubscribers;
