import React from 'react';
import { type CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ 
  title, 
  content, 
  variant = 'default',
  className = ''
}) => {
  // Define styles based on variant
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-50 border-blue-200 text-blue-800';
      case 'secondary':
        return 'bg-gray-50 border-gray-200 text-gray-800';
      case 'success':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'danger':
        return 'bg-red-50 border-red-200 text-red-800';
      default:
        return 'bg-white border-gray-200 text-gray-800';
    }
  };

  const getHeaderStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-100 border-b-blue-200 text-blue-900';
      case 'secondary':
        return 'bg-gray-100 border-b-gray-200 text-gray-900';
      case 'success':
        return 'bg-green-100 border-b-green-200 text-green-900';
      case 'warning':
        return 'bg-yellow-100 border-b-yellow-200 text-yellow-900';
      case 'danger':
        return 'bg-red-100 border-b-red-200 text-red-900';
      default:
        return 'bg-gray-100 border-b-gray-200 text-gray-900';
    }
  };

  return (
    <div className={`border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ${getVariantStyles()} ${className}`}>
      <div className={`border-b px-4 py-3 font-semibold ${getHeaderStyles()}`}>
        {title}
      </div>
      <div className="px-4 py-4">
        <p className="text-sm leading-relaxed">{content}</p>
      </div>
    </div>
  );
};

export default Card;