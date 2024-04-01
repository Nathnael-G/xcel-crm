import { Button } from "@/components/ui/button";

const signup = () => {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-primary py-6 sm:py-12">
      <div className="relative bg-transparent px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 Login border-white border-4">
        <div className="mx-auto max-w-md">
          <h1 className="text-3xl font-semibold leading-9 text-white font-poppins xs:text-[48px] text-[40px] xs:leading-[76.8px] w-full text-center">
            Signup
          </h1>

          <div className="divide-y divide-gray-300/50">
            <form className="flex-1 items-center justify-center py-8 text-base leading-7 text-gray-600">
              <label className="text-secondary">Username</label>
              <input
                type="text"
                required
                placeholder="Tom"
                className="mb-6 h-10 w-full rounded bg-transparent border-b-2 border-white p-4 outline-none text-sky-500 filled-input"
              />

              <br />
              <label className="text-secondary">Email</label>
              <input
                type="email"
                required
                placeholder="tom@gmail.com"
                className="mb-6 h-10 w-full rounded bg-transparent border-b-2 border-white p-4 outline-none text-sky-500 filled-input"
              />
              <br />
              <label className="text-secondary">Password</label>
              <input
                type="password"
                required
                placeholder="Password123"
                className="mb-6 h-10 w-full rounded bg-transparent border-b-2 border-white p-4 outline-none text-sky-500 filled-input"
              />

              <Button className="bg-sky-500  hover:bg-sky-600 transition-colors w-full text-center font-semibold font-poppins">
                Signup
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signup;
