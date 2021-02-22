import React from 'react';
import './Tweetbox.css';
import { Avatar, Button } from '@material-ui/core';

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://sergeneeds.coffee/content/images/2020/12/PXL_20201218_224154058.jpg"/>
          <input placeholder="What's happening?" type="text"/>
        </div>
        <input
          className="tweetBox__inputImage"
          placeholder="Optional: Enter image URL"
          type="text"
        />
      <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox;
