import React, { useState, useEffect } from 'react';
import { ThumbsUp, MessageCircle, Share2 } from 'lucide-react';
import PostForm from './PostEditor/PostForm';
import axios from 'axios';

const CommunityFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPostFormVisible, setIsPostFormVisible] = useState(false);
  
  const togglePostForm = () => {
    setIsPostFormVisible((prev) => !prev);
  };

  // Fetch posts from the database
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/post/`);
        setPosts(response.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Handle like button click
  const handleLike = async (id) => {
    if (!id) {
      alert('Error: Post ID is undefined.');
      return;
    }
  
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/post/${id}/like`, {
        action: 'increment',
      });
  
      // Update local state with the new like count
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === id ? { ...post, likes: response.data.likes } : post
        )
      );
    } catch (err) {
      console.error('Error updating like count:', err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="space-y-6 relative">
      {/* Button to toggle the post form */}
      <button
        onClick={togglePostForm}
        className="bg-green-500 text-white px-4 py-2 rounded-md  hover:bg-green-600"
      >
        {isPostFormVisible ? 'Close Post Form' : 'Create Post'}
      </button>

      {/* Overlay with transition */}
      {isPostFormVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300"
          style={{ opacity: isPostFormVisible ? 1 : 0 }}
          onClick={togglePostForm}
        ></div>
      )}

      {/* Post form with adjusted height and centered */}
      {isPostFormVisible && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-20 transition-all duration-300 transform ${
            isPostFormVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          <div className="relative bg-white dark:bg-dark-bg-secondary p-6 rounded-lg shadow-lg w-full sm:w-[55%] h-[80vh] overflow-auto scrollbar-thin scrollbar-track-slate-900 scrollbar-thumb-green-600 ">
            {/* Close button */}
            <button
              onClick={togglePostForm}
              className="absolute w-9 top-3 right-3 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500"
            >
              &#10005; {/* Close icon */}
            </button>

            <PostForm />
          </div>
        </div>
      )}

      {/* Display posts */}
      {posts.map((post) => (
        <div key={post._id} className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow-lg">
          {/* Post Header */}
          <div className="p-4 flex items-center gap-3">
            <img
              src={post.avatar}
              alt={post.author}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {post.author}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {post.timestamp}
              </p>
            </div>
          </div>

          {/* Post Content */}
          <div className="px-4 pb-3">
            <p className="text-gray-800 dark:text-gray-200 mb-4">{post.content}</p>
            {post.image && (
              <img
                src={post.image}
                alt="Post content"
                className="rounded-lg w-full object-contain max-h-96"
              />
            )}
          </div>

          {/* Post Actions */}
          <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-6">
              <button
                onClick={() => handleLike(post._id)} // Use _id here
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
              >
                <ThumbsUp className="w-5 h-5" />
                <span>{post.likes || 0}</span>
              </button>
              <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500">
                <MessageCircle className="w-5 h-5" />
                <span>{post.comments?.length || 0}</span>
              </button>
              <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommunityFeed;
