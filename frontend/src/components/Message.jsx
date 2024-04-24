import { Alert } from 'react-bootstrap';
import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ variant, children }) => {
  return (
    <div>
      <Alert variant={variant}>{children} </Alert>
    </div>
  );
}

Message.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};


Message.defaultProps = {
    variant: 'info',
    };


export default Message;
