import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';


class TeamOmegaHeader extends PureComponent {

  render() {

    let { text, type, className, id } = this.props;


    let value = <h1>{text};</h1>
    switch (type) {
      case "h2":
        value = <h2 className={className} id={id} data-test="TeamOmegaHeader_component"> {text}</h2>;
        break;
      case "h3":
        value = <h3 className={className} id={id} data-test="TeamOmegaHeader_component"> {text}</h3>;
        break;
      case "h4":
        value = <h4 className={className} id={id} data-test="TeamOmegaHeader_component"> {text}</h4>;
        break;
      case "h5":
        value = <h5 className={className} id={id} data-test="TeamOmegaHeader_component"> {text}</h5>;
        break;
      case "h6":
        value = <h6 className={className} id={id} data-test="TeamOmegaHeader_component"> {text}</h6>;
        break;
      default:
        value = <h1 className={className} id={id} data-test="TeamOmegaHeader_component">{text}</h1>;
        break;
    }
    return value;

  }
}
TeamOmegaHeader.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string,
  className: PropTypes.string
}
export default TeamOmegaHeader;
