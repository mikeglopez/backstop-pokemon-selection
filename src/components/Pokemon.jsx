import React from 'react';

import Card from './Card.jsx';

const Pokemon = props => {
  const formattedName =
    props.attributes.name.charAt(0).toUpperCase() +
    props.attributes.name.slice(1);

  return (
    <div className='col-sm my-5 text-center'>
      <button
        style={buttonStyle}
        data-toggle='modal'
        data-target={`#selection-${props.attributes.name}`}
      >
        <Card attributes={props.attributes} formattedName={formattedName} />
      </button>
      <div className='modal' id={`selection-${props.attributes.name}`}>
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h4 className='modal-title'>You received {formattedName}!</h4>
              <button type='button' className='close' data-dismiss='modal'>
                &times;
              </button>
            </div>
            <div className='modal-body'>
              <Card
                attributes={props.attributes}
                formattedName={formattedName}
                front
              />
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-danger'
                data-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const buttonStyle = {
  width: '100%',
  border: 'none',
  backgroundColor: 'transparent',
  outline: 'none'
};

export default Pokemon;
