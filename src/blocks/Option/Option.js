import React from 'react';
import { decl } from 'bem-react-core';

import 'm:size_s';
import 'm:size_m';
import 'm:size_l';
import 'm:image_none';

export default decl({
  block: 'Option',
  tag: 'a',
  mods({size, image}) {
    return {
      size,
      image: !image ? 'none' : ''
    };
  },
  content() {
    return (
      <svg width="14" height="4">
        <circle className="circle" r="2" cx="2" cy="2" />
        <circle className="circle" r="2" cx="7" cy="2" />
        <circle className="circle" r="2" cx="12" cy="2" />
      </svg>
    );
  }
})
