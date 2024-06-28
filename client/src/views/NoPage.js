function NoPage() {
    return (
        <div className="flex h-screen justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800 mb-8">404</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Oops! Page not found.</h2>
          <p className="text-lg text-gray-600 mb-8">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
          <a href="/" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Go to Home Page</a>
        </div>
      </div>
    )
}

export default NoPage