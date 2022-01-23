import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

/**
 * We will have to type Link and button
 * if isButton it will be normal button else it will Link
 */

/** props
 * isButton default true
 * title
 * action => onClick for button
 * href => destnation for Link
 * moreStyle for add more style beside a default
 */
const Button = ({ isButton = true, title = '', action, href, type='button' }) => {
 
  return (
    <Fragment>
      {isButton ? (
        <button className="btn btn-outline-light" type={type} onClick={action}>{title}</button>
      ) : (
        <Link to={href} className="btn btn-outline-light">
          {title}
        </Link>
      )}
    </Fragment>
  );
};

export default Button;
