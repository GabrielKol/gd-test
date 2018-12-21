import React, { Component } from 'react';
import { getUserQuery } from '../queries/queries';
import { Query } from 'react-apollo';

class AppHeader extends Component {
  render() {
    return (
      <div className="AppHeader">
        <div className="centered">
          <Query query={getUserQuery}>
            {({ loading, error, data }) => {
              if (loading) return <h4>Loading...</h4>;
              if (error) console.log(error);
              return (
                <h4>{data.user.name}</h4>
              );
            }}
          </Query>
        </div>
      </div>
    );
  }
}

export default AppHeader;
