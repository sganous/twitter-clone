import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({
  displayName,
  username,
  verified,
  text,
  image,
  avatar
}) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://sergeneeds.coffee/content/images/2020/12/PXL_20201218_224154058.jpg" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Header text{" "}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" /> @sergeneedscoffee
              </span>
            </h3>
          </div>
          <div className="post__headerDesctiption">
            <p>
              Paragraph tag here.
            </p>
          </div>
        </div>
        <img src="https://media.giphy.com/media/vLq5FWMjfN47S/giphy.gif" alt=""/>
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  )
}

export default Post;
