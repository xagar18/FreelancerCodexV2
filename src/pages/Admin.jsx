import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import basinService from '../services/Basin';

function Admin() {
  // State for form submissions
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSubmissions, setFilteredSubmissions] = useState([]);

  // Admin authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  // Admin credentials from environment variables
  const ADMIN_USERNAME = import.meta.env.VITE_ADMIN_USERNAME;
  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

  // Fetch submissions using Basin service
  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      setError('');

      const submissionsData = await basinService.getSubmissions();
      setSubmissions(submissionsData);
      setFilteredSubmissions(submissionsData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Filter submissions based on search query
  useEffect(() => {
    const filtered = basinService.filterSubmissions(submissions, searchQuery);
    setFilteredSubmissions(filtered);
  }, [searchQuery, submissions]);

  // Handle admin login
  const handleLogin = e => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setAuthError('');
      fetchSubmissions();
    } else {
      setAuthError('Invalid username or password');
    }
  };

  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
    setSubmissions([]);
    setFilteredSubmissions([]);
    setSearchQuery('');
  };

  // If not authenticated, show login form
  if (!isAuthenticated) {
    return (
      <div className="h-screen overflow-hidden">
        <Navbar />
        <div className="h-[calc(100vh-80px)] bg-white flex items-center justify-center px-4">
          <div className="w-full max-w-sm">
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <div className="flex flex-col items-center mb-6">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-light text-black">Admin Access</h2>
                <p className="text-gray-500 text-sm mt-1 text-center">Enter your credentials</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-black focus:outline-none transition-colors"
                    placeholder="Username"
                  />
                </div>

                <div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-black focus:outline-none transition-colors"
                    placeholder="Password"
                  />
                </div>

                {authError && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm text-center">
                    {authError}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-black hover:bg-gray-800 text-white font-medium py-3 rounded-lg transition-colors"
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Authenticated admin panel
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-black text-white sticky top-0 z-10">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Left side - Logo and title */}
            <div className="flex items-center space-x-3 min-w-0 flex-1">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-lg font-semibold truncate">Admin Dashboard</h1>
                <p className="text-gray-300 text-sm truncate">
                  {username} • {filteredSubmissions.length} submissions
                </p>
              </div>
            </div>

            {/* Right side - Actions */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              <a
                href="/"
                className="text-white hover:text-gray-300 text-sm font-medium transition-colors underline"
              >
                Home
              </a>

              <button
                onClick={fetchSubmissions}
                className="bg-white text-black px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors flex items-center"
                title="Refresh"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                <span className="ml-1 hidden sm:inline">Refresh</span>
              </button>

              <button
                onClick={handleLogout}
                className="border border-white text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-white hover:text-black transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-4">
        {/* Search Bar */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
          <div className="space-y-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search submissions..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:border-black focus:outline-none text-sm"
              />
              <svg
                className="absolute left-3 top-3 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 bg-gray-50 py-2 rounded-lg">
              <span>Total: {submissions.length}</span>
              <span>•</span>
              <span>Showing: {filteredSubmissions.length}</span>
            </div>
          </div>
        </div>

        {/* Error Messages */}
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded-r-lg">
            <div className="flex items-start">
              <svg
                className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="font-medium text-sm">{error}</p>
            </div>
          </div>
        )}

        {/* Form Submissions Content */}
        {loading ? (
          <div className="bg-white border border-gray-200 rounded-lg p-12">
            <div className="flex flex-col items-center justify-center">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-black mb-4"></div>
              <p className="text-gray-600 text-sm">Loading submissions...</p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredSubmissions.length === 0 ? (
              <div className="bg-white border border-gray-200 rounded-lg p-12">
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">No submissions found</h3>
                  <p className="text-gray-600">
                    {searchQuery
                      ? 'Try adjusting your search criteria'
                      : 'No form submissions available yet'}
                  </p>
                </div>
              </div>
            ) : (
              // Mobile-first card layout
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredSubmissions.map((submission, index) => {
                  const name = basinService.getFieldValue(submission, 'name');
                  const email = basinService.getFieldValue(submission, 'email');
                  const company = basinService.getFieldValue(submission, 'company');
                  const project = basinService.getFieldValue(submission, 'project');
                  const budget = basinService.getFieldValue(submission, 'budget');
                  const message = basinService.getFieldValue(submission, 'message');

                  return (
                    <div
                      key={submission.id || index}
                      className="bg-white border border-gray-200 rounded-lg p-4 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3 min-w-0 flex-1">
                          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                            {(name || 'U')[0].toUpperCase()}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-black truncate text-sm">
                              {name || 'Unknown'}
                            </h3>
                            <p className="text-xs text-gray-600 truncate">{email || 'No email'}</p>
                          </div>
                        </div>
                        <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full flex-shrink-0">
                          #{submission.id}
                        </div>
                      </div>

                      {/* Details */}
                      <div className="space-y-2 mb-3">
                        <div>
                          <span className="text-xs font-medium text-gray-500 block">Company:</span>
                          <p className="text-sm text-gray-900 break-words">
                            {company || 'Not specified'}
                          </p>
                        </div>
                        <div>
                          <span className="text-xs font-medium text-gray-500 block">Project:</span>
                          <p className="text-sm text-gray-900 break-words">
                            {project || 'Not specified'}
                          </p>
                        </div>
                        <div>
                          <span className="text-xs font-medium text-gray-500 block">Budget:</span>
                          <p className="text-sm text-gray-900 font-medium break-words">
                            {budget || 'Not specified'}
                          </p>
                        </div>
                        <div className="pt-1 border-t border-gray-100">
                          <span className="text-xs text-gray-400">
                            {basinService.formatDate(submission.created_at)}
                          </span>
                        </div>
                      </div>

                      {/* Message */}
                      {message && (
                        <div>
                          <span className="text-xs font-medium text-gray-500 block mb-2">
                            Message:
                          </span>
                          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 max-h-20 overflow-hidden">
                            <p className="text-sm text-gray-800 leading-relaxed break-words line-clamp-3">
                              {message}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;
