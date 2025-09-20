
import React, { useState, useEffect } from 'react';
import Comment from './Comment';
import MessageInput from './MessageInput';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // Fetch comments from API or database
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Post new comment to API or database
    setComments([...comments, { text: newComment, author: 'Current User' }]);
    setNewComment('');
  };

  return (
    <div>
      <h2>Comments</h2>
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
      <MessageInput
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default CommentSection;
