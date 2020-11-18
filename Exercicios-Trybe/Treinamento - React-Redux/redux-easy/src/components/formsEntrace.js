import React from 'react';
import { connect } from 'react-redux'
import { actionUpdate } from '../redux/actions/actions';


class FormsEntrace extends React.Component{
  constructor() {
    super();
    this.state = { }
  }

  render() {
    const {id, type, update} = this.props
    return (
        <input 
            type={type}
            id={id}
            onChange= {(event) => update(event.target.value.id)} 
            placeholder={id}
          />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  update: (value, tipo) => dispatch(actionUpdate(value, tipo))
})

export default connect(null, mapDispatchToProps)(FormsEntrace) ;
