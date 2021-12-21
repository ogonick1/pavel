import React from 'react';

import './index.scss';

const PageTitle = (props) => {
  const { text } = props;

  return (
    <h2 className='login'>
      {text}
    </h2>
  );
};

export default PageTitle;
