import React from 'react';
import PropTypes from 'prop-types';

export const Alert = ({ children, className }) => (
  <div className={`p-4 bg-yellow-100 border-l-4 border-yellow-500 ${className}`}>
    {children}
  </div>
);

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Alert.defaultProps = {
  className: '',
};

export const AlertTitle = ({ children }) => (
  <h4 className="font-semibold mb-2">{children}</h4>
);

AlertTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export const AlertDescription = ({ children }) => (
  <p className="text-sm">{children}</p>
);

AlertDescription.propTypes = {
  children: PropTypes.node.isRequired,
};
