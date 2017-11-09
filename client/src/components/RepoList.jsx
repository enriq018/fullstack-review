import React from 'react';
import RepoItem from './RepoItem.jsx'
//come back/figure out what to do when no data

var listStyle = {
	padding: "5px", 
	 width: '50%',
  margin: 'auto'
}



const RepoList = (props) => (
  <div>

    
    {props.repos.map((el, index) => <RepoItem item = {el} key = {index} />)}
    
    There are {props.repos.length} repos.

  </div>
)

export default RepoList;