import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import mockData from './components/data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: mockData
    }

  }

  search (term) {
    // console.log(`${term} was searched`);
    // TODO
    //make post req
    console.log('ajax post spot', term)
    $.ajax({
      url: "http://127.0.0.1:1128/repos",
      method: "POST",
      data: JSON.stringify({username: 'enriq018'}),
      contentType: "application/json",
      success: function(data){
        console.log('success', data)
      },
      error: function(data) {
        console.log('error', data)
      }
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));