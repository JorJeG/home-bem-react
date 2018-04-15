import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Title from 'e:Title';
import Img from 'e:Img';
import Desc from 'e:Desc';
import ChannelName from 'e:ChannelName';
import Option from 'b:Option';
import Like from 'b:Like';

import 'm:size_s';
import 'm:size_m';
import 'm:size_l';

export default decl({
  block: 'Main',
  elem: 'Article',
  tag: 'article',
  mods({size}) {
    return {
      size
    };
  },
  content({title, description, size, image, titleColor, channelName}) {
    return (
      <Fragment>
        <Title titleColor={titleColor} size={size} title={title}/>
        { image && <Img size={size} img={image} alt={title}/>}
        { description && <Desc size={size} desc={description}/>}
        { channelName && <ChannelName channelName={channelName}/>}
        <Option size={size} image={image} />
        <Like size={size} />
      </Fragment>
    );
  }
});
