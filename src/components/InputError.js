import React from 'react';

const InputError = ({error}) => (
  <div className="uk-alert-danger" data-uk-alert>
    <p> {error} </p>
  </div>
);

export default InputError;