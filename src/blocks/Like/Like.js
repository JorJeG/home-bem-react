import React from 'react';
import { decl } from 'bem-react-core';

import 'm:size_s';
import 'm:size_m';
import 'm:size_l';

export default decl({
  block: 'Like',
  tag: 'a',
  mods({size}) {
    return {
      size
    };
  },
  content() {
    return (
      <svg width="17" height="16">
        <path className="heart" d="M8 3.2C7.4-0.3 3.2-0.8 1.4 1 -0.5 2.9-0.5 5.8 1.4 7.7 1.9 8.2 6.9 13 6.9 13 7.4 13.6 8.5 13.6 9 13L14.5 7.7C16.5 5.8 16.5 2.9 14.6 1 12.8-0.7 8.6-0.3 8 3.2Z"></path>
      </svg>
    );
  }
})
