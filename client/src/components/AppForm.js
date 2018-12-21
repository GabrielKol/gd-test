import React, { Component } from 'react';
import { getUserQuery, updateUserMutation } from '../queries/queries';
import { Mutation } from 'react-apollo';

class AppForm extends Component {
  state = {
    name: ''
  }
  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  handleSumbit = (e, updateUserMutation) => {
    e.preventDefault();
    updateUserMutation({
      variables: {
        name: this.state.name,
      },
      refetchQueries: [{ query: getUserQuery }]
    });
  }
  render() {
    return (
      <div className="AppForm">
        <Mutation
          mutation={updateUserMutation}>
          {(updateUser, { data }) => (
            <form className="form" onSubmit={(e) => {this.handleSumbit(e, updateUser)}}>
              <input type="text" placeholder="Username" onChange={this.handleChange}/>
              <input type="submit" value="Submit"/>
            </form>
          )}
        </Mutation>
      </div>
    );
  }
}

export default AppForm;
