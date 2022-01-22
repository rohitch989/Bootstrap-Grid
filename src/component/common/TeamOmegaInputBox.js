import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';


class TeamOmegaInputBox extends PureComponent {

  handleChange = e => this.props.handlerChange(e.target.value)

  render() {
    const { type, name, values, placeholder, className, id, focus, ariaLabel, ariaDescribedby } = this.props;
    return <input type={type} name={name} placeholder={placeholder} className={className} id={id} value={values} onChange={this.handleChange} autoFocus={focus} aria-label={ariaLabel} aria-describedby={ariaDescribedby} data-test="TeamOmegaInputBox_Component" />

  }
}
TeamOmegaInputBox.propTypes = {
  handlerChange: PropTypes.func.isRequired,
  values: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  ariaDescribedby: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  focus: PropTypes.bool
}

export default TeamOmegaInputBox;
