import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import data from '../../data';

import Article from 'e:Article';

export default decl({
  block: 'Main',
  tag: 'main',
  content() {
    const arrayList = data.map((card, index) => <Article key={index} {...card} />);

    return (
      <Fragment>
        {arrayList}
      </Fragment>
    );
  }
});
