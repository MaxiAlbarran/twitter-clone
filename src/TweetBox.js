import React, { useState, useEffect } from 'react';
import { Avatar, Button } from '@material-ui/core';
import './TweetBox.css';
import usePostTweet from './hooks/usePostTweet';

function TweetBox() {
  const [tweet, setTweet] = useState({ text: '', image: '' });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTweet({ ...tweet, [name]: value });
  };

  const [submitNewTweet] = usePostTweet(tweet);

  return (
    <div className='tweetBox'>
      <form onSubmit={submitNewTweet}>
        <div className='tweetBox--input'>
          <Avatar
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdWK_Pz64mX0CrnlzUC6tQiS1qfRoG3jd0gg&usqp=CAU'
            alt='Lionel Messi'
          />
          <input
            name='text'
            type='text'
            placeholder="What's Happening?"
            value={tweet.text}
            onChange={handleChange}
            required
          />
        </div>
        <input
          name='image'
          value={tweet.image}
          className='tweetBox__imageInput'
          placeholder='Optional: Enter image URL'
          type='text'
          onChange={handleChange}
        />
        <Button className='tweetBox--tweetButton' type='submit'>
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
