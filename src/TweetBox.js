import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import './TweetBox.css';

function TweetBox() {
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox--input'>
          <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdWK_Pz64mX0CrnlzUC6tQiS1qfRoG3jd0gg&usqp=CAU' alt="Lionel Messi"/>
          <input type="text" placeholder="What's Happening?"/>
        </div>
        <Button className='tweetBox--tweetButton'>Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
