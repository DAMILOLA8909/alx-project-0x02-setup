import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Link from 'next/link';
import Button from '@/components/common/Button';
import PostCard from '@/components/common/PostCard';
import { type PostProps } from '@/interfaces';
import { useState } from 'react';

interface PostsPageProps {
  initialPosts: PostProps[];
}

const PostsPage: NextPage<PostsPageProps> = ({ initialPosts }) => {
  const [posts, setPosts] = useState<PostProps[]>(initialPosts);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch posts from JSONPlaceholder API (client-side for refresh)
  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      
      const data: PostProps[] = await response.json();
      
      // Transform the data to match our PostProps interface
      const transformedPosts = data.map(post => ({
        id: post.id,
        title: post.title,
        content: post.body, // JSONPlaceholder uses 'body' instead of 'content'
        userId: post.userId
      }));
      
      setPosts(transformedPosts);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Posts - ALX Project 2</title>
        <meta name="description" content="Posts page of ALX Project 2" />
      </Head>

      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold text-gray-800">
              Posts Page
            </h1>
            <Button 
              onClick={fetchPosts}
              variant="primary"
              size="medium"
              disabled={loading}
            >
              {loading ? 'Refreshing...' : 'Refresh Posts'}
            </Button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <p className="text-lg text-gray-600 mb-4">
              This page displays posts fetched from JSONPlaceholder API using the PostCard component.
            </p>
            <p className="text-gray-600">
              Posts are pre-loaded at build time using getStaticProps and can be refreshed client-side.
            </p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="text-gray-600 mt-4">Loading posts...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <div className="flex items-center mb-2">
                <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg font-semibold text-red-800">Error Loading Posts</h3>
              </div>
              <p className="text-red-600 mb-4">{error}</p>
              <Button 
                onClick={fetchPosts}
                variant="danger"
                size="small"
              >
                Try Again
              </Button>
            </div>
          )}

          {/* Posts Grid */}
          {!loading && (
            <section className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-700">
                  Latest Posts ({posts.length})
                </h2>
                <p className="text-gray-500 text-sm">
                  Showing {posts.length} posts from JSONPlaceholder API
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.slice(0, 12).map((post) => (
                  <PostCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    content={post.content}
                    userId={post.userId}
                  />
                ))}
              </div>

              {/* Load More Section */}
              {posts.length > 12 && (
                <div className="text-center mt-8">
                  <p className="text-gray-600 mb-4">
                    Showing 12 of {posts.length} posts
                  </p>
                  <Button 
                    variant="outline"
                    size="large"
                  >
                    Load More Posts
                  </Button>
                </div>
              )}
            </section>
          )}

          {/* Navigation Section */}
          <section className="text-center">
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Navigation</h3>
              <p className="text-blue-600 mb-4">
                Use the buttons below to navigate between pages or the header navigation above.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/home" passHref>
                  <Button size="large" variant="primary">
                    Go to Home
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

// Static Site Generation with getStaticProps
export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    
    const data = await response.json();
    
    // Transform the data to match our PostProps interface
    const initialPosts = data.map((post: any) => ({
      id: post.id,
      title: post.title,
      content: post.body, // JSONPlaceholder uses 'body' instead of 'content'
      userId: post.userId
    }));

    return {
      props: {
        initialPosts: initialPosts.slice(0, 12) // Only load first 12 posts initially
      },
      revalidate: 3600 // Revalidate every hour (optional)
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    
    // Return empty array as fallback
    return {
      props: {
        initialPosts: []
      }
    };
  }
};

export default PostsPage;