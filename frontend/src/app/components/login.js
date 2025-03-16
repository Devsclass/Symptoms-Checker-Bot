

//       {/* Main Content */}
<main className="flex-grow flex items-center justify-center p-4">
<div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
  <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
  <form>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        Email
      </label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input
        type="password"
        id="password"
        placeholder="Enter your password"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
    >
      Login
    </button>
  </form>
  <p className="text-center mt-4 text-gray-600">
    Don't have an account?{" "}
    <a href="/signup" className="text-blue-600 hover:underline">
      Sign Up
    </a>
  </p>
</div>
</main>