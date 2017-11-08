import React from 'react';
import RepoItem from './RepoItem.jsx'
//come back/figure out what to do when no data
const RepoList = (props) => (
  <div>
    <h2> Repo List  </h2>
    {console.log(props.repos.sort(function(a,b){return b.stargazers_count - a.stargazers_count}))}
    {props.repos.map((el, index) => <RepoItem item = {el} key = {index} />)}
    There are {props.repos.length} repos.
  </div>
)

export default RepoList;