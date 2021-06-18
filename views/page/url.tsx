// import react
import { Page } from '@dashup/ui';
import React, { useState } from 'react';

// scss
import './url.scss';

// URL Page
const PageUrl = (props = {}) => {
  // state
  const [config, setConfig] = useState(false);

  // required
  const required = [{
    key   : 'data.url',
    label : 'URL',
  }];

  // return jsx
  return (
    <Page { ...props } bodyClass="flex-column" require={ required }>
      <Page.Config show={ config } onHide={ (e) => setConfig(false) } />
      <Page.Menu onConfig={ () => setConfig(true) } onShare />
      { !!props.page.get('data.url') && (
        <Page.Body>
          <iframe src={ props.page.get('data.url') } className="d-flex flex-1 embed-item" frameBorder="0" />
        </Page.Body>
      ) }
    </Page>
  );
};

// export default
export default PageUrl;