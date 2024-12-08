import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User } from 'lucide-react';

export const HomePage = () => {
  const featuredPosts = [
    {
      id: 1,
      title: 'Getting Started with React and TypeScript',
      excerpt: 'Learn how to set up a new React project with TypeScript and start building modern web applications.',
      author: 'malthus A.',
      date: 'March 15, 2024',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
      category: 'Development',
    },
    {
      id: 2,
      title: 'Mastering Tailwind CSS',
      excerpt: 'Discover the power of utility-first CSS and learn how to build beautiful interfaces with Tailwind CSS.',
      author: 'Jane Smith',
      date: 'March 14, 2024',
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800',
      category: 'Design',
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Welcome to Our Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover stories, thinking, and expertise from writers on any topic.
        </p>
      </section>

      {/* Featured Posts */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 space-y-4">
                <span className="text-sm font-medium text-blue-600">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900">
                  <Link to={`/post/${post.id}`} className="hover:text-blue-600">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <span className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.date}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-blue-50 rounded-lg p-8 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600">
            Get the latest posts delivered right to your inbox.
          </p>
          <form className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};