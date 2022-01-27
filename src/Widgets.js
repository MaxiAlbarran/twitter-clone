import React from 'react';
import './Widgets.css';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';

import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets--input'>
        <SearchIcon className='widgets--searchIcon' />
        <input type='text' placeholder='Search Twitter' />
      </div>

      <div className='widgets--widgetContainer'>
        <h2>What's happening </h2>

        <TwitterTweetEmbed tweetId={'1483790401123209219'} />

        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='sudanalytics_'
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://maxialbportfolio.netlify.app/"}
          options={{text: "This PORTFOLIO is AMAZING! "}} 
          
        />  
      </div>
    </div>
  );
}

export default Widgets;
