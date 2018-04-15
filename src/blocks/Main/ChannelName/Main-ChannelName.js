import { decl } from 'bem-react-core';

export default decl({
  block: 'Main',
  elem: 'ChannelName',
  tag: 'p',
  content({ channelName }) {
    return `${channelName}`;
  }
})
