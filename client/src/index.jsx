import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    fetch('/repos').then((response) => {
      response.json().then(body => {
        var result = []
        body.forEach(item => {
          if (!result.includes(item)) result.push(item)
          this.setState({repos: result})
        })
      })
    })
  }

  search (term) {
    console.log(`${term} was searched`);
    $.ajax({
      method: 'POST',
      url: '/repos',
      data: term,
      contentType: 'text/plain',
      success: function(data) {
        console.log(data)
      },
      error: function() {
        console.log("Error!")
      }
    })
  }
  searchOnChange(text) {
    fetch('/repos').then((response) => {
      response.json().then(body => {
        var result = []
        body.forEach(item => {
          if (!result.includes(item) && item.owner.login === text) result.push(item)
          this.setState({repos: result})
        })
      })
    })
  }
  render() {
    return(
      <div>
        <span>GitHub Fetcher</span>
        <Search onSearch={this.search.bind(this)} fetch={this.searchOnChange.bind(this)}/>
        <RepoList repos={this.state.repos}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
