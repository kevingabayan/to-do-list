import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { registerHandler } from '../../store/database/asynchHandler'

class ItemScreen extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
      }

    handleChange = (e) => {
        const { target } = e;
        this.setState(state => ({
          ...state,
          [target.id]: target.value,
        }));
      }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const { props, state } = this;
        const { firebase } = props;
        const newUser = { ...state };
      }
    render() {
        const { auth, authError } = this.props;
        if (auth.uid) {
          return <Redirect to="/" />;
        }
    
        return (
          <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
              <h5 className="grey-text text-darken-3">Item</h5>
              <div className="input-field">
                <label htmlFor="email">Description</label>
                <input type="email" name="email" id="email" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="password">Assigned To</label>
                <input type="password" name="password" id="password" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="firstName">Due Date</label>
                <input type="text" name="firstName" id="firstName" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <button type="submit" className="btn pink lighten-1 z-depth-0">Sign Up</button>
                {authError ? <div className="red-text center"><p>{authError}</p></div> : null}
              </div>
            </form>
          </div>
        );
        }
}
const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps.match.params;
    const { key } = ownProps.match.params;
    const { todoLists } = state.firestore.data;
    const todoList = todoLists ? todoLists[id] : null;
    todoList.id = id;
    todoList.key = key;
  
    return {
      todoList,
      auth: state.firebase.auth,
    };
  };
  
  export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'todoLists' },
    ]),
  )(ItemScreen);