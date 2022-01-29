import React from 'react';
import './Feed.css';

import Post from './Post';
import TweetBox from './TweetBox';

import useGetPosts from './hooks/useGetPosts';

function Feed() {

  const [posts] = useGetPosts();

  console.log("Esto llega", posts)

  return (
    <div className='feed'>
      <div className='feed--header'>
        <h3>Home</h3>
      </div>

      <TweetBox />

      
      {posts.map((item) => (
        <Post post={{...item.data(), id:item.id}} key={item.id} />
      ))}


    </div>
  );
}

export default Feed;
