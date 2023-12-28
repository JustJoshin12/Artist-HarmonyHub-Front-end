import logo from "../../images/loginlogo.png";

function LoginPage() {
  return (
    <div className="h-[500px] flex items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex xl:w-[850px] bg-gray-800 bg-opacity-90 rounded-lg shadow-xl overflow-hidden">
        <div
          className="hidden lg:block lg:w-1/2"
          style={{
            backgroundImage: `url(${logo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
        </div>
        <div className="w-full lg:w-1/2 p-8">
          <div className="mx-auto max-w-md">
            <h2 className="text-3xl font-bold text-neon-purple text-center">
              Sign In
            </h2>
            <form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white bg-gray-700 bg-opacity-50 rounded-t-md focus:outline-none focus:ring-neon-purple focus:border-neon-purple focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white bg-gray-700 bg-opacity-50 rounded-b-md focus:outline-none focus:ring-neon-purple focus:border-neon-purple focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between flex-col">
                <div className="flex items-center mb-3">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-neon-purple focus:ring-neon-purple border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-400"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-neon-purple hover:text-neon-purple"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-neon-purple hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neon-purple"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
