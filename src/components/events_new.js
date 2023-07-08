import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { postEvent } from '../actions'

class EventsNew extends Component {

  constructor(props){
      super(props)
      this.onSubmit = this.onSubmit.bind(this)
  }
  renderField(field){
      const { input, label, type, meta: { touched, error } } = field

      return (
        <div>
            <input {...input} placeholder={label} type={type}  />
            {touched && error && <span>{error}</span>}
        </div>
      )
  }

  async onSubmit(values){
      await this.props.postEvent(values)
debugger
      this.props.history.push('/')
  }
  
  render() {
      const { handleSubmit } = this.props
    return (
        <form onSubmit={handleSubmit(this.onSubmit)}>
            <div>
                <Field label="Title" name="title" type="text" component={this.renderField}></Field>
                <Field label="Body" name="body" type="text" component={this.renderField}></Field>
            </div>
            <div>
                <input type="submit"  value="Submit" disabled={false}/>
                <Link to="/">Cancel</Link>
            </div>
        </form>
    )
  }
}

const validate = values => {
    const errors = {}

    if(!values.title) errors.title = "Titleを入力してください"
    if(!values.body) errors.body = "Bodyを入力してください"

    console.log(errors)
    return errors
}
const mapDispatchToProps = ({ postEvent })

export default connect(null, mapDispatchToProps)(
    reduxForm({ validate, form: 'eventsNewForm' })(EventsNew)
)
