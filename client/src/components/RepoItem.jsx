import React from 'react';

const RepoItem = (props) => (
  <div className = 'list'>
    <h3> Repo name: {props.item.name} </h3>
    <a href={props.item.html_url}>Url: {props.item.html_url}</a>
    <h4> User: {props.item.owner.login} </h4>
    <h4> Description: {props.item.description} </h4>
    <h4> stars: {props.item.stargazers_count} </h4>
  </div>
)

module.exports = RepoItem;