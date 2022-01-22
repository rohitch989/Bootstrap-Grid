import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TeamOmegaButton from './TeamOmegaButton';
import TeamOmegaInputBox from './TeamOmegaInputBox';


class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: " "
    }

  }
  handleChange = value => {
    this.setState({
      input: value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: this.state.input
    });

    this.setState({
      input: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={this.props.className} data-test="TodoForm_Component">
        <div className='col-lg-6 col-xs-8 col-10'><label htmlFor="todo" className='d-none'></label>
          <TeamOmegaInputBox type='text' id="todo" placeholder="Add a Todo" name='text' values={this.state.input} className='form-control' handlerChange={this.handleChange} focus={true} /></div>

        <TeamOmegaButton text='ADD' className='btn btn-secondary col-xs-2 col-lg-1 col-3 m-2' type="submit" click={this.handleSubmit} />
      </form>
    )
  }
}


TodoForm.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
}
export default TodoForm;
