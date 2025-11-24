import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Link from 'next/link';
import Button from '@/components/common/Button';
import UserCard from '@/components/common/UserCard';
import { type UserProps } from '@/interfaces';
import { useState } from 'react';

interface UsersPageProps {
  initialUsers: UserProps[];
}

const UsersPage: NextPage<UsersPageProps> = ({ initialUsers }) => {
  const [users, setUsers] = useState<UserProps[]>(initialUsers);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch users from JSONPlaceholder API (client-side for refresh)
  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      
      const data: UserProps[] = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Users - ALX Project 2</title>
        <meta name="description" content="Users page of ALX Project 2" />
      </Head>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold text-gray-800">
              Users Page
            </h1>
            <Button 
              onClick={fetchUsers}
              variant="primary"
              size="medium"
              disabled={loading}
            >
              {loading ? 'Refreshing...' : 'Refresh Users'}
            </Button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <p className="text-lg text-gray-600 mb-4">
              This page displays user data fetched from JSONPlaceholder API using the UserCard component.
            </p>
            <p className="text-gray-600">
              Each UserCard shows comprehensive user information including contact details, address, and company information.
            </p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="text-gray-600 mt-4">Loading users...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <div className="flex items-center mb-2">
                <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg font-semibold text-red-800">Error Loading Users</h3>
              </div>
              <p className="text-red-600 mb-4">{error}</p>
              <Button 
                onClick={fetchUsers}
                variant="danger"
                size="small"
              >
                Try Again
              </Button>
            </div>
          )}

          {/* Users Grid */}
          {!loading && (
            <section className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-700">
                  All Users ({users.length})
                </h2>
                <p className="text-gray-500 text-sm">
                  Showing {users.length} users from JSONPlaceholder API
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map((user) => (
                  <UserCard
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    username={user.username}
                    email={user.email}
                    address={user.address}
                    phone={user.phone}
                    website={user.website}
                    company={user.company}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Navigation Section */}
          <section className="text-center">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Navigation</h3>
              <p className="text-blue-600 mb-4">
                Explore other sections of the application:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/posts" passHref>
                  <Button size="large" variant="primary">
                    View Posts
                  </Button>
                </Link>
                <Link href="/about" passHref>
                  <Button size="large" variant="success">
                    Go to About
                  </Button>
                </Link>
                <Link href="/" passHref>
                  <Button size="large" variant="outline">
                    Go to Main
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

// Static Site Generation with getStaticProps()
export const getStaticProps = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    
    const initialUsers = await response.json();

    return {
      props: {
        initialUsers
      },
      revalidate: 3600 // Revalidate every hour
    };
  } catch (error) {
    console.error('Error fetching users:', error);
    
    // Return empty array as fallback
    return {
      props: {
        initialUsers: []
      }
    };
  }
};

export default UsersPage;