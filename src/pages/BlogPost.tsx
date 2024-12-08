import React from 'react';
import { useParams } from 'react-router-dom';
import { Clock, User, Share2 } from 'lucide-react';

export const BlogPost = () => {
  const { id } = useParams();

  // Mock post data
  const post = {
    title: 'Getting Started with React and TypeScript',
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `,
    author: 'malthus A.',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200',
    category: 'Development',
  };

  return (
    <article className="max-w-3xl mx-auto">
      <header className="space-y-4 mb-8">
        <span className="text-sm font-medium text-blue-600">{post.category}</span>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          {post.title}
        </h1>
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
      </header>

      <img
        src={post.image}
        alt={post.title}
        className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
      />

      <div className="prose prose-lg max-w-none">
        {post.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-4 text-gray-700 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      <footer className="mt-8 pt-8 border-t">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
              alt={post.author}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-medium text-gray-900">{post.author}</p>
              <p className="text-sm text-gray-500">Technical Writer</p>
            </div>
          </div>
          <button className="flex items-center text-gray-500 hover:text-gray-900">
            <Share2 className="h-5 w-5 mr-2" />
            Share
          </button>
        </div>
      </footer>
    </article>
  );
};