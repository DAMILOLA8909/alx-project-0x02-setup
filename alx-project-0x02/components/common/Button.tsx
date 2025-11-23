import React from 'react';
import { type ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  size = 'medium',
  shape = 'rounded-md',
  variant = 'primary',
  disabled = false,
  className = '',
}) => {
  // Size styles
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return 'px-3 py-1.5 text-sm';
      case 'medium':
        return 'px-4 py-2 text-base';
      case 'large':
        return 'px-6 py-3 text-lg';
      default:
        return 'px-4 py-2 text-base';
    }
  };

  // Variant styles
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500';
      case 'secondary':
        return 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500';
      case 'success':
        return 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500';
      case 'warning':
        return 'bg-yellow-600 hover:bg-yellow-700 text-white focus:ring-yellow-500';
      case 'danger':
        return 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500';
      case 'outline':
        return 'bg-transparent border border-gray-300 hover:bg-gray-50 text-gray-700 focus:ring-gray-500';
      default:
        return 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500';
    }
  };

  // Disabled styles
  const getDisabledStyles = () => {
    return disabled ? 'opacity-50 cursor-not-allowed' : 'transition-colors duration-200';
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        font-medium focus:outline-none focus:ring-2 focus:ring-offset-2
        ${getSizeStyles()}
        ${getVariantStyles()}
        ${shape}
        ${getDisabledStyles()}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;