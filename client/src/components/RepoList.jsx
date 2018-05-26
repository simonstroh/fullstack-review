import React from 'react';

class RepoList extends React.Component{
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {

  }
  render() {
    return(
      <div>
        <p> Repo List:</p>
        {this.props.repos.map((repo, index) => {
          return(
            <div key={index}>
              <a target="_blank" href={repo.html_url}><h5 onClick={this.handleClick}>{repo.full_name}</h5></a>
            </div>
          )
        })}
      </div>
    )
  }
}

export default RepoList;
