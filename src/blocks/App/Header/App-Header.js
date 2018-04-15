import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import 'e:Logo';
import logoSvg from '../Logo/zen_logo@3x.png';

export default decl({
  block: 'App',
  elem: 'Header',
  tag: 'header',
  content() {
    return (
      <Fragment>
        <Bem elem="Logo" tag="img" src={logoSvg} alt="Dzen"/>
      </Fragment>
    );
  }
});
