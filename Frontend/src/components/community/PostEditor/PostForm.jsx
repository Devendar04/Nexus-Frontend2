import React, { useState } from 'react';
import { useForm } from '../../../hooks/useForm';
import { useAutosave } from '../../../hooks/useAutosave';
import MediaUpload from './MediaUpload';
import TagInput from './TagInput';
import axios from 'axios';
// import PostPreview from './PostPreview';
import { validatePost } from '../../../utils/validation';

const PostForm = () => {
  const initialValues = {
    author: 'Peter parker',
   avatar:'https://images.unsplash.com/photo-1660680299120-c7c132df1b1f?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '',
    content: '',
    category: '',
    visibility: 'public',
    tags: [],
    image: '',
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    initialValues,
    validatePost,
    submitPost
  );

  const [preview, setPreview] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // Autosave functionality
  useAutosave(values, 'post-draft', 3000);

  async function submitPost() {
    setLoading(true);
    setApiError(null);
    setSuccessMessage(null);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/post/`,
        values
      );
      setSuccessMessage('Post published successfully!');
      console.log('Post submitted:', response.data);
    } catch (error) {
      console.error('Error submitting post:', error);
      setApiError(error.response?.data?.message || 'Failed to submit the post.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-5xl mx-auto py-8">
      <div className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Create New Post
          </h1>
          <button
            onClick={() => setPreview(!preview)}
            className="text-sm text-green-600 hover:text-green-700 dark:text-green-500"
          >
            {preview ? 'Edit' : 'Preview'}
          </button>
        </div>

        {preview ? (
          <PostPreview post={values} />
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={values.title}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                         bg-white dark:bg-dark-bg-primary text-gray-900 dark:text-white"
                placeholder="Enter post title"
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-600">{errors.title}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Content
              </label>
              <textarea
                name="content"
                value={values.content}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                         bg-white dark:bg-dark-bg-primary text-gray-900 dark:text-white"
                placeholder="Write your post content..."
              />
              {errors.content && (
                <p className="mt-1 text-sm text-red-600">{errors.content}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Category
              </label>
              <select
                name="category"
                value={values.category}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                         bg-white dark:bg-dark-bg-primary text-gray-900 dark:text-white"
              >
                <option value="">Select a category</option>
                <option value="event">Event</option>
                <option value="tip">Eco Tip</option>
                <option value="story">Success Story</option>
                <option value="discussion">Discussion</option>
              </select>
            </div>

            <MediaUpload
              onUpload={(files) => handleChange({ target: { name: 'image', value: files } })}
              existingFiles={values.image}
            />

            <TagInput
              value={values.tags}
              onChange={(tags) => handleChange({ target: { name: 'tags', value: tags } })}
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Visibility
              </label>
              <select
                name="visibility"
                value={values.visibility}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                         bg-white dark:bg-dark-bg-primary text-gray-900 dark:text-white"
              >
                <option value="public">Public</option>
                <option value="friends">Friends Only</option>
                <option value="private">Private</option>
              </select>
            </div>

            {apiError && (
              <p className="mt-2 text-sm text-red-600">{apiError}</p>
            )}
            {successMessage && (
              <p className="mt-2 text-sm text-green-600">{successMessage}</p>
            )}

            <div className="flex justify-end gap-4">
              <button
                type="button"
                className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400 
                         hover:text-gray-800 dark:hover:text-gray-200"
              >
                Save Draft
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white 
                         rounded-lg transition-colors"
                disabled={loading}
              >
                {loading ? 'Publishing...' : 'Publish Post'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default PostForm;
