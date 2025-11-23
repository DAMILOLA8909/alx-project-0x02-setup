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