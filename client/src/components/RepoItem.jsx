import React from 'react';


var listStyle = {
 border: "3px solid black",
 padding: "5px",
 width: '50%',
 margin: 'auto',
 textalign: "center"
};

const RepoItem = (props) => (

  <div className = 'list' style = {listStyle}>
    <h3> Repo name: {props.item.name} </h3>
    <a href={props.item.html}>Url: {props.item.html}</a>
    <h4> User: {props.item.owner} </h4>
    <h4> Description: {props.item.description} </h4>
    <h4> size: {props.item.size} </h4>
  </div>
)

module.exports = RepoItem;