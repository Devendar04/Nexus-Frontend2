import React, { useState } from 'react';
import { X } from 'lucide-react';

const TagInput = ({ value = [], onChange }) => {
  const [input, setInput] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addTag();
    }
  };

  const addTag = () => {
    const tag = input.trim().toLowerCase();
    if (tag && !value.includes(tag)) {
      onChange([...value, tag]);
      setInput('');
    }
  };

  const removeTag = (tagToRemove) => {
    onChange(value.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Tags
      </label>
      <div className="flex flex-wrap gap-2">
        {value.map(tag => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900/30 
                     text-green-800 dark:text-green-200 rounded-full text-sm"
          >
            #{tag}
            <button
              onClick={() => removeTag(tag)}
              className="p-0.5 hover:bg-green-200 dark:hover:bg-green-800 rounded-full"
            >
              <X className="w-3 h-3" />
            </button>
          </span>
        ))}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={addTag}
          placeholder="Add tags..."
          className="flex-grow min-w-[120px] px-2 py-1 bg-transparent text-gray-900 
                   dark:text-white focus:outline-none"
        />
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        Press enter or comma to add tags
      </p>
    </div>
  );
};

export default TagInput;