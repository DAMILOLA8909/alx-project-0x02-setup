// Button component interfaces
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'outline';
  disabled?: boolean;
  className?: string;
}

// Card component interfaces
export interface CardProps {
  title: string;
  content: string;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  className?: string;
}

// Post Modal interfaces
export interface PostData {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (post: Omit<PostData, 'id' | 'createdAt'>) => void;
}

// Existing interfaces
export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}