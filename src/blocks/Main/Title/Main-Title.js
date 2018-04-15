// import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import 'm:size_s';
import 'm:size_m';
import 'm:size_l';

export default decl({
  block: 'Main',
  elem: 'Title',
  tag: 'h2',
  mods({size}) {
    return {
      size
    };
  },
  attrs({titleColor}) {
    return {
      style: {
        color: titleColor
      }
    }
  },
  content({ title }) {
    return `${title}`;
  }
})
