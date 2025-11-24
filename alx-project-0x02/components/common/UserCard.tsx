import React from 'react';
import { type UserCardProps } from '@/interfaces';

const UserCard: React.FC<UserCardProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
  className = ''
}) => {
  // Function to get user avatar color based on userId
  const getUserAvatarColor = (userId: number) => {
    const colors = [
      'bg-blue-500', 'bg-green-500', 'bg-purple-500', 
      'bg-pink-500', 'bg-orange-500', 'bg-teal-500',
      'bg-red-500', 'bg-indigo-500', 'bg-yellow-500'
    ];
    return colors[userId % colors.length];
  };

  // Function to format phone number
  const formatPhoneNumber = (phone: string) => {
    return phone.split(' ')[0]; // Just show the first part of the phone number
  };

  return (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 ${className}`}>
      {/* Header with User Avatar and Basic Info */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center space-x-4">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold ${getUserAvatarColor(id)}`}>
            {name.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            <p className="text-sm text-gray-600">@{username}</p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="p-4 space-y-3">
        <div className="flex items-center text-sm text-gray-600">
          <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <a href={`mailto:${email}`} className="hover:text-blue-600 transition-colors">
            {email}
          </a>
        </div>

        <div className="flex items-center text-sm text-gray-600">
          <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <a href={`tel:${phone}`} className="hover:text-blue-600 transition-colors">
            {formatPhoneNumber(phone)}
          </a>
        </div>

        <div className="flex items-center text-sm text-gray-600">
          <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
          </svg>
          <a href={`http://${website}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
            {website}
          </a>
        </div>
      </div>

      {/* Address Information */}
      <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
        <div className="flex items-start space-x-2">
          <svg className="w-4 h-4 mt-0.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div className="text-xs text-gray-600">
            <p>{address.street}, {address.suite}</p>
            <p>{address.city}, {address.zipcode}</p>
          </div>
        </div>
      </div>

      {/* Company Information */}
      <div className="px-4 py-3 bg-blue-50 rounded-b-lg border-t border-blue-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className="text-sm font-medium text-blue-800">{company.name}</span>
          </div>
          <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
            User #{id}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;