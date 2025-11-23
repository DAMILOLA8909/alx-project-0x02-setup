import React from 'react';
import { type PostCardProps } from '@/interfaces';

const PostCard: React.FC<PostCardProps> = ({
  id,
  title,
  content,
  userId,
  className = ''
}) => {
  // Function to truncate long content
  const truncateContent = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  // Function to get user avatar color based on userId
  const getUserAvatarColor = (userId: number) => {
    const colors = [
      'bg-blue-500', 'bg-green-500', 'bg-purple-500', 
      'bg-pink-500', 'bg-orange-500', 'bg-teal-500',
      'bg-red-500', 'bg-indigo-500', 'bg-yellow-500'
    ];
    return colors[userId % colors.length];
  };

  return (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 ${className}`}>
      {/* Header with User Info */}
      <div className="flex items-center space-x-3 p-4 border-b border-gray-100">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold ${getUserAvatarColor(userId)}`}>
          U{userId}
        </div>
        <div>
          <p className="text-sm text-gray-600">User {userId}</p>
          <p className="text-xs text-gray-400">Post #{id}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {truncateContent(content)}
        </p>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 bg-gray-50 rounded-b-lg border-t border-gray-100">
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>{Math.ceil(content.length / 5)} words</span>
          <div className="flex space-x-2">
            <button className="hover:text-blue-600 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="hover:text-green-600 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;