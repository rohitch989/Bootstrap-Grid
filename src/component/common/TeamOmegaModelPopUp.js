import React, { Component } from 'react'
import TeamOmegaButton from './TeamOmegaButton'
import TeamOmegaHeader from './TeamOmegaHeader'
import TeamOmegaInputBox from './TeamOmegaInputBox'
import PropTypes from 'prop-types';




class TeamOmegaModelPopUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
    }
  }

  handleChange = value => {
    this.setState({
      input: value
    });
  }

  handleSubmit = e => {
    this.props.isUpdate(this.props.editableTodo.id, this.state.input);
    this.setState({ input: '' })
  }
  componentDidUpdate(pP, pS, SS) {
    if (pP.editableTodo.text !== this.props.editableTodo.text)
      this.setState({ input: this.props.editableTodo.text });
  }
  render() {

    return (
      <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-test="TeamOmegaModelPopUp_Component" >
        <div className="modal-dialog container">
          <div className="modal-content ">
            <div className="modal-header">
              <TeamOmegaHeader text='Update' type="h3" className="modal-title text-primary w-100 text-center " id="exampleModalLabel" />
              <TeamOmegaButton type="button" className="btn-close" dataBsDismiss="modal" text="" ariaLabel="Model-Cross" />
            </div>
            <div className="modal-body">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Update</span>
                <TeamOmegaInputBox type='text' id="model-update" className="form-control" placeholder='Type Here ...' values={this.state.input} handlerChange={this.handleChange} focus={true} ariaLabel="Username" ariaDescribedby="basic-addon1" />
              </div>
            </div>
            <div className="modal-footer justify-content-center">
              <TeamOmegaButton type="button" className="btn btn-secondary" ariaLabel="Close" dataBsDismiss="modal" text="Close" />
              <TeamOmegaButton type="button" className="btn btn-primary" dataBsDismiss="modal" click={this.handleSubmit} text="Save changes" ariaLabel="Save" />
            </div>
          </div>
        </div>
      </div >
    )
  }
}

TeamOmegaModelPopUp.propTypes = {
  editableTodo: PropTypes.object,
  isUpdate: PropTypes.func
}

export default TeamOmegaModelPopUp
