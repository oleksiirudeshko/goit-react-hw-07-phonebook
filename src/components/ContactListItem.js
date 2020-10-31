import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import phoneOperations from "../redux/phone/phoneOperations";
import phoneSelectors from "../redux/phone/phoneSelectors";

const ContactListItem = ({ name, number, onRemove }) => (
  <li>
    <span>
      {name} {number}
    </span>
    <button type="button" className="deleteBtn" onClick={onRemove}>
      x
    </button>
  </li>
);

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  ...phoneSelectors.getContactById(state, ownProps.id),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: () => dispatch(phoneOperations.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
