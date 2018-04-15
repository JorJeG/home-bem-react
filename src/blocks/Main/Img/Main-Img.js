import { decl } from 'bem-react-core';

import 'm:size_s';
import 'm:size_m';
import 'm:size_l';

export default decl({
  block: 'Main',
  elem: 'Img',
  tag: 'img',
  mods({size}) {
    return {
      size
    };
  },
  attrs({ img, alt }) {
    return {
      src: img.replace('.png', '@2x.png'),
      alt
    };
  }
});
