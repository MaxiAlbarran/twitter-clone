import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({ displayName, username, verified, text, avatar, image }) {
  return (
    <div className='post'>
      <div className='post--avatar'>
        <Avatar
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdWK_Pz64mX0CrnlzUC6tQiS1qfRoG3jd0gg&usqp=CAU'
          alt='Lionel Messi'
        />
      </div>
      <div className='post--body'>
        <div className='post--header'>
          <div className='post--headerText'>
            <h3>
              Lionel Messi {''}{' '}
              <span className='post--headerSpecial'>
                <CheckCircleIcon className='post--badge' />
                @LeoMessiOK
              </span>{' '}
            </h3>
          </div>
        </div>
        <div className='post--headerDescription'>
          <p>Hi everyone!</p>
        </div>
        <div className='post--footer'>
          <ChatBubbleOutlineIcon fontSize='small' />
          <FavoriteBorderIcon fontSize='small' />
          <RepeatIcon fontSize='small' />
          <PublishIcon fontSize='small' />
        </div>
      </div>
    </div>
  );
}

export default Post;