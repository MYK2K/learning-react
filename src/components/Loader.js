import React from 'react';
import {FontAwesomeIcon as FontAwesome} from '@fortawesome/react-fontawesome';
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons';

function Loader() {
  return (
    <h1 className="text-info text-center">
      <FontAwesome icon={faCircleNotch} spin/>
    </h1>
  );
}

export default Loader;
