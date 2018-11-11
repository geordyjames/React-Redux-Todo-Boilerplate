import React from 'react';

const Error = ({error}) => (
  <div className="uk-alert-danger" data-uk-alert>
    <p> {error} </p>
  </div>
);

export default Error;