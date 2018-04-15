import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Header from 'e:Header';
import Inner from 'e:Inner';
import Main from 'b:Main';

export default decl({
  block: 'App',
  content() {
    return (
      <Fragment>
        <Inner>
          <Header/>
          <Main/>
        </Inner>
      </Fragment>
    );
  }
});
