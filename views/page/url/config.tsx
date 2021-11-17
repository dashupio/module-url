
// import react
import React from 'react';
import { TextField } from '@dashup/ui';

// create page url config
const PageUrlConfig = (props = {}) => {

  // return jsx
  return (
    <>
      <TextField
        label="Page URL"
        value={ props.page.get('data.url') }
        onChange={ (e) => props.setData('url', e.target.value, true) }
        helperText="The URL to display on this page."
        fullWidth
      />
    </>
  )
};

// export default
export default PageUrlConfig;