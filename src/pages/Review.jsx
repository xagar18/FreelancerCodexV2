function Review() {
  // Sample reviews data
  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      rating: 5,
      date: '2024-01-15',
      project: 'E-commerce Platform',
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      review:
        'Absolutely exceptional work! The team delivered a stunning e-commerce platform that exceeded all our expectations.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'Digital Innovations',
      role: 'CTO',
      rating: 5,
      date: '2024-01-10',
      project: 'Mobile App Development',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      review:
        'Outstanding mobile app development! The team created a seamless user experience with clean, intuitive design.',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'Creative Agency',
      role: 'Creative Director',
      rating: 4,
      date: '2024-01-05',
      project: 'Brand Website Redesign',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      review:
        'Beautiful website redesign that perfectly captured our brand essence. Great collaboration throughout the process.',
    },
    {
      id: 4,
      name: 'David Thompson',
      company: 'Local Business',
      role: 'Owner',
      rating: 5,
      date: '2023-12-28',
      project: 'Business Website',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      review:
        'Transformed our small business with a professional website. Increased our online presence significantly.',
    },
    {
      id: 5,
      name: 'Lisa Park',
      company: 'Healthcare Solutions',
      role: 'Marketing Manager',
      rating: 5,
      date: '2023-12-20',
      project: 'Healthcare Platform',
      avatar:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      review:
        'Developed a secure, user-friendly healthcare platform. Excellent understanding of industry requirements.',
    },
    {
      id: 6,
      name: 'James Wilson',
      company: 'Educational Institute',
      role: 'Director',
      rating: 4,
      date: '2023-12-15',
      project: 'Learning Management System',
      avatar:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
      review:
        'Created an excellent learning management system. Students and faculty love the intuitive interface.',
    },
  ];

  // Render stars
  const renderStars = rating => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-3 h-3 sm:w-4 sm:h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div
      id="reviews"
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-6 px-3 sm:py-8 sm:px-4 lg:py-12 lg:px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-2 sm:mb-3 tracking-tight">
            Client{' '}
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Reviews
            </span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-lg lg:max-w-xl mx-auto leading-relaxed px-2 sm:px-0">
            Discover what our clients say about their experience working with us.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-12">
          {reviews.map(review => (
            <div
              key={review.id}
              className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 lg:p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Header */}
              <div className="flex items-center mb-3 sm:mb-4">
                {/* <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover mr-2 sm:mr-3 ring-2 ring-gray-100"
                /> */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                    {review.name}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm truncate">
                    {review.role} at {review.company}
                  </p>
                </div>
              </div>

              {/* Rating and Date */}
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex items-center gap-0.5">{renderStars(review.rating)}</div>
                <span className="text-gray-400 text-xs sm:text-sm">
                  {new Date(review.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>

              {/* Project */}
              <div className="mb-3 sm:mb-4">
                <span className="inline-block bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium">
                  {review.project}
                </span>
              </div>

              {/* Review Text */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{review.review}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 shadow-md border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            <div className="py-2 sm:py-4">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                50+
              </div>
              <div className="text-gray-600 text-xs sm:text-sm lg:text-base">Happy Clients</div>
            </div>
            <div className="py-2 sm:py-4">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                4.9
              </div>
              <div className="text-gray-600 text-xs sm:text-sm lg:text-base">Average Rating</div>
            </div>
            <div className="py-2 sm:py-4">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                100%
              </div>
              <div className="text-gray-600 text-xs sm:text-sm lg:text-base">Project Success</div>
            </div>
            <div className="py-2 sm:py-4">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                24/7
              </div>
              <div className="text-gray-600 text-xs sm:text-sm lg:text-base">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
