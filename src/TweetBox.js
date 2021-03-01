import React, { useState } from 'react';
import './Tweetbox.css';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = e => {
    e.preventDefault();
    db.collection('Posts').add({
      displayName: 'Serge',
      username: 'sergencoffee',
      verified:true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://sergeneeds.coffee/content/images/2020/12/PXL_20201218_224154058.jpg"
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://sergeneeds.coffee/content/images/2020/12/PXL_20201218_224154058.jpg"/>
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"/>
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__inputImage"
          placeholder="Optional: Enter image URL"
          type="text"
        />
      <Button
        onClick={sendTweet}
        type="submit"
        className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox;
