import React from 'react';
import './Feed.css';

import Post from './Post';
import TweetBox from './TweetBox';

import useGetPosts from './hooks/useGetPosts';

function Feed() {
  const [posts] = useGetPosts();


  return (
    <div className='feed'>
      <div className='feed--header'>
        <h3>Home</h3>
      </div>

      <TweetBox />

      {posts.map((post) => (
        <Post post={post.data()} key={post.data().id} />
      ))}
    </div>
  );
}

export default Feed;
