import React from 'react';
//onsearch passed down
var listStyle = {
 padding: "2px",
 width: '50%',
 margin: 'auto',
};

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onChange (e) {

    this.setState({
      term: e.target.value
    });
    
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (<div style = {listStyle}>
      <h1>Github Fetcher</h1>
      Enter a github username: <input value={this.state.terms} onChange={(e) => this.onChange(e)}/>       
      <button onClick={() => this.search()}> Add Repos </button>
      <h4>Add more repos!</h4>

       <h1>Repo List</h1>

    </div>) 
  }
}

export default Search;