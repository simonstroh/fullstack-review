import React from 'react';

const RepoList = (props) => (
  <div>
    <p> Repo List:</p>
    
    <h5>You have saved {props.repos.length} repos.</h5>
  </div>
)

export default RepoList;
