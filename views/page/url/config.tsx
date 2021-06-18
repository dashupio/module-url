
// import react
import React from 'react';

// create page url config
const PageUrlConfig = (props = {}) => {

  // return jsx
  return (
    <>
      <div className="mb-3">
        <label className="form-label">
          Page URL
        </label>
        <input value={ props.page.get('data.url') } onChange={ (e) => props.setData('url', e.target.value, true) } className="form-control" />
        <small>
          The URL to display on this page.
        </small>
      </div>
    </>
  )
};

// export default
export default PageUrlConfig;