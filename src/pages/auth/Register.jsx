import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    navigate('/');
  }

  return (
    <div className="flex justify-center h-screen">
     <div className="hidden lg:flex w-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 items-center justify-center">
        <h3 className="text-3xl text-white font-bold">BestFans</h3>
      </div>
      <div className="lg:w-1/2 w-full p-20 bg-gray-200">
        <h1 className="text-4xl text-center mb-12">Register</h1>
        <form id="register" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-3 items-start">
              <label className="pl-6 text-2xl" htmlFor="name inline">
                Name
              </label>
              <input
                className="w-full p-2 rounded-md border-2 focus:outline-none"
                name="name"
                id="name"
                placeholder="Enter your name."
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-y-3 items-start">
              <label className="pl-6 text-2xl" htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-2 rounded-md border-2 focus:outline-none"
                name="email"
                id="email"
                placeholder="Enter your email adress."
                type="mail"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-y-1 items-start">
              <label className="pl-6 text-2xl" htmlFor="password">
                Password
              </label>
              <input
                className="w-full p-2 rounded-md border-2 focus:outline-none"
                name="password"
                id="password"
                placeholder="Enter your password."
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input
              className="py-2 text-lg border-2 rounded-md cursor-pointer bg-blue-600 text-white w-full hover:bg-white hover:text-blue-600 duration-300 hover:border-blue-600"
              value="Register"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register