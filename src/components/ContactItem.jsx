import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ contact }) => (
  <li>
    {contact.name}: {contact.number}
  </li>
);

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItem;
