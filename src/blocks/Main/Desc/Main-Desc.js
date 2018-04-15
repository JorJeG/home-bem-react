import { decl } from 'bem-react-core';

import 'm:size_s';
import 'm:size_m';
import 'm:size_l';

export default decl({
  block: 'Main',
  elem: 'Desc',
  tag: 'p',
  mods({size}) {
    return {
      size
    };
  },
  content({ desc, size }) {
    return `${desc}`;
  }
});
