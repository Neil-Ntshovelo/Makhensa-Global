import React from "react";
import PropTypes from "prop-types";

const ClayCard = ({ children, className = "", ...rest }) => {
  return (
    <div className={`clay-card rounded-2xl ${className}`} {...rest}>
      {children}
    </div>
  );
};

ClayCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ClayCard;

