import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import SettingsItem from "../../components/SettingsItem";
import { settings } from "../../data/Settings";

// Layouts
import Container from "../../layout/Container";
import Sidebar from "../../layout/Sidebar";

// Icons
import { AiOutlineArrowLeft } from "react-icons/ai";

const Account = () => {
  const [username, setUsername] = useState(
    window.localStorage.getItem("username")
  );
  const [email, setEmail] = useState(window.localStorage.getItem("email"));
  const [phone, setPhone] = useState(window.localStorage.getItem("phone"));
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    if (newPass === confirmPass) {
      window.localStorage.setItem("username", username);
      window.localStorage.setItem("email", email);
      window.localStorage.setItem("phone", phone);
      window.localStorage.setItem("newPass", newPass);
      window.localStorage.setItem("confirmPass", confirmPass);
      toast.success("Updated Successfully");
    } else {
      toast.error("Passwords doesn't match!");
    }
  };

  return (
    <Container>
      <Sidebar />
      <div className="bookmarks border-r w-96 hidden md:flex flex-col">
        <header className="sticky top-0 z-10 flex justify-between items-center p-4 bg-white border-b">
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
              SETTINGS
            </span>
          </Link>
        </header>
        {settings.map((setting) => {
          return <SettingsItem text={setting.name} slug={setting.slug} />;
        })}
        <div className="h-2 bg-gray-100 w-full"></div>
        <div className="flex items-center justify-between gap-4 border-b p-3 text-sm">
          <p className="font-semibold">General</p>
        </div>
        <SettingsItem text="Display" slug="/display" />
      </div>
      <div className="right-part border-r flex-1 flex flex-col">
        <div className="flex items-center p-4 justify-between border-b">
          <p className="font-semibold">ACCOUNT</p>
          <button
            onClick={handleSave}
            className="py-1 px-2 border rounded-3xl text-white bg-blue-500 border-blue-400 hover:text-blue-500 hover:bg-white"
          >
            SAVE
          </button>
        </div>
        <ToastContainer />
        <div className="h-full flex flex-col gap-2 px-5">
          <form onSubmit={handleSave} className="flex flex-col gap-4 items-center" action="">
            <h4 className="text-sm text-start uppercase font-semibold w-full border-b py-2">
              Account Info
            </h4>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border py-2 px-3 rounded-md w-full border-sky-200 focus:border-sky-500 focus:outline-none"
              name="username"
              id="username"
              placeholder="Username"
              type="text"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border py-2 px-3 rounded-md w-full border-sky-200 focus:border-sky-500 focus:outline-none"
              name="email"
              id="email"
              placeholder="E-mail"
              type="email"
            />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border py-2 px-3 rounded-md w-full border-sky-200 focus:border-sky-500 focus:outline-none"
              name="telNo"
              id="telNo"
              placeholder="Phone number"
              type="number"
            />
            <h4 className="text-sm text-start uppercase font-semibold w-full border-b py-2">
              Security
            </h4>
            <input
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
              className="border py-2 px-3 rounded-md w-full border-sky-200 focus:border-sky-500 focus:outline-none"
              name="newPassword"
              id="newPassword"
              placeholder="New password"
              type="password"
            />
            <input
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
              className="border py-2 px-3 rounded-md w-full border-sky-200 focus:border-sky-500 focus:outline-none"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm New password"
              type="password"
            />
            <h4 className="text-sm text-start uppercase font-semibold w-full border-b py-2">
              Account Management
            </h4>
            <button className="bg-red-500 py-2 px-3 rounded-xl border border-red-500 text-white font-semibold hover:text-red-500 hover:bg-white mr-auto">
              Delete Account
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Account;
