import React from 'react';
import './Feed.css'
import TweetBox from './TweetBox';

function Feed() {
  return (
    <div className='feed'>
      {/* Header */}
      <div className='feed--header'>
        <h3>Home</h3>
      </div>

      {/* TweetBox */}
      <TweetBox />
    </div>
  );
}

export default Feed;
