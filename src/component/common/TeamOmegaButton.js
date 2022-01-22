import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';


class TeamOmegaButton extends PureComponent {

  handleClick = e => {
    if (!this.props.click)
      return;
    this.props.click(e);
  }
  render() {

    const { type, text, className, id, dataBsToggle, dataBsTarget, dataBsDismiss, ariaLabel } = this.props;
    return <button type={type} onClick={this.handleClick} className={className} id={id} data-bs-toggle={dataBsToggle} data-bs-target={dataBsTarget} data-bs-dismiss={dataBsDismiss} arial-label={ariaLabel} data-test="TeamOmegaButton_Component" title={ariaLabel}>
      {text}
    </button>

  }
}
TeamOmegaButton.propTypes = {
  type: PropTypes.string,
  dataBsToggle: PropTypes.string,
  dataBsTarget: PropTypes.string,
  dataBsDismiss: PropTypes.string,
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  click: PropTypes.func
}
export default TeamOmegaButton
