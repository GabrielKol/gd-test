import gql from 'graphql-tag';

const getUserQuery = gql`
  {
    user{
      name
    }
  }
`;

const updateUserMutation = gql`
  mutation($name: String!){
    updateUser(name: $name){
      name
    }
  }
`;

export { getUserQuery, updateUserMutation };
