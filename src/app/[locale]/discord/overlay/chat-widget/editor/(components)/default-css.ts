export const defaultCss = `.chatContainer {
  font-family: gg sans;
  border-radius: 3px;
  height: 214px;
  width: 577px;
  font-size: 14px;
  color: rgba(255, 255, 255, 1);
}

.channelName {
  display: block;
  line-height: 24px;
  font-size: 20px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 3px 3px 0px 0px;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(30, 33, 36, 0.95);
}

.poundSign {
  opacity: 0.5;
  font-weight: 500;
  padding-right: 5px;
}

.messages {
  height: 162px;
  margin: 0px;
  border-radius: 0px 0px 3px 3px;
  background-color: rgba(30, 33, 36, 0.85);
  list-style-type: none;
  padding: 8px 20px;
  overflow: hidden;
}

.message {
  overflow: hidden;
  padding-bottom: 2px;
  max-height: 100px;
  transition: opacity 1s ease-in-out, max-height 0s 1s, padding-bottom 0s 1s;
}

.messageHidden {
  opacity: 0;
  max-height: 0;
  padding-bottom: 0;
}

.timestamp {
  display: inline-block;
  text-transform: uppercase;
  padding-right: 5px;
  opacity: 0.5;
  font-size: 9.65517px;
  font-weight: 500;
  line-height: 16px;
  color: rgba(255, 255, 255, 1);
}

.username {
  display: inline-block;
  padding-right: 5px;
  opacity: 1;
  font-weight: 600;
  line-height: 19px;
}

.messageText {
  padding-right: 5px;
  font-weight: 600;
  line-height: 19px;
  overflow: hidden;
  word-break: break-word;
  color: rgba(255, 255, 255, 0.6);
}

.emoji {
  vertical-align: middle;
}`;
