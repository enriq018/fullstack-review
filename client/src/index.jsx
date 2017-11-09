import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import mockData from './components/data.json';
var body = {
  backgroundColor:'aqua',
 margin: 'auto',
 padding:'5px'
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    };

  }

  getRequest(callback) {
    console.log('Getting');
    $.ajax({
      url: 'http://127.0.0.1:1128/repos',
      method: 'GET',
      contentType: 'application/json',
      success: function(data) {
        console.log('success heres the data: ', data);
        callback(data);
      },
      error: function(data) {
        console.log('error', data);
      }
    });
  }

  componentDidMount() {
    this.getRequest(data => this.setState({repos: data}));
  }


  search (term) {
    // console.log(`${term} was searched`);
    // TODO
    //make post req
    console.log('ajax post spot', term);
    $.ajax({
      url: 'http://127.0.0.1:1128/repos',
      method: 'POST',
      data: JSON.stringify({username: term}),
      contentType: 'application/json',
      success: data => {
        console.log('success', data);
        this.getRequest(data => this.setState({repos: data}));
      },
      error: function(data) {
        console.log('error', data);
      }
    });
  }

  render () {
    return (
      <div style = {body}>
        <Search onSearch={this.search.bind(this)}/>
        <RepoList repos={this.state.repos}/>
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));