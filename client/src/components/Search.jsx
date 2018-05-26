import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onChange = this.onChange.bind(this)
    this.search = this.search.bind(this)
  }

  onChange(e) {
    this.setState({
      term: e.target.value
    });
    this.props.fetch(e.target.value)
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (
      <div>
        <p>Add Repos:</p>
        <h5>After you enter a username, we will have the repos ready to be displayed.</h5>
        <p>Enter a github username</p>
        <input type="text" value={this.state.terms} onChange={this.onChange}/>
        <button onClick={this.search}> Add Repos </button>
      </div>
    )
  }
}

export default Search;
