import React from 'react';

import { Avatar, Button } from '@material-ui/core';

import './styles/Post.css';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

import useDeletePost from '../../hooks/useDeletePost';

function Post({ post }) {
  
  const deletePost = useDeletePost();

  return (
    <div className='post'>
      <div className='post--avatar'>
        <Avatar src={post.avatar} alt={post.displayName} />
      </div>
      <div className='post--body'>
        <div className='post--header'>
          <div className='post--headerText'>
            <h3>
              {post.displayName} {''}{' '}
              <span className='post--headerSpecial'>
                <CheckCircleIcon className='post--badge' />
                @{post.username}
              </span>{' '}
            </h3>
          </div>
          <Button
            color='secondary'
            variant='contained'
            className='deleteButton'
            type='button'
            onClick={(e) => deletePost(post)}
          >
            Delete
          </Button>
        </div>
        <div className='post--headerDescription'>
          <p>{post.text}</p>
        </div>
        {post.image && <img src={post.image} alt={post.username} />}
        <div className='post--footer'>
          <ChatBubbleOutlineIcon fontSize='small' />
          <RepeatIcon fontSize='small' />
          <FavoriteBorderIcon fontSize='small' />
          <PublishIcon fontSize='small' />
        </div>
      </div>
    </div>
  );
}

export default Post;
