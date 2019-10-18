import React from "react";
import ContestantItem from "./ContestantItem";
import firebase from '../utils/firebase';

export default class Contestants extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    const dataRef = firebase.database().ref('performers');
    dataRef.on('value', snapshot => {
      const dataObject = snapshot.val();
      const dataList = Object.keys(dataObject).map(key => ({
        ...dataObject[key],
      }));

      this.setState({
        data: dataList
      })
    })
  }
  handleClick = (index) => {
    console.log("I was clicked",index);
  }

  render() {
    return (
      
      <div className="listbox">
      <div id='title' >CONTESTANTS</div>
        <ul>
          {this.state.data.map((item,index) => {
            return <div onClick={() => this.handleClick(index+1)} key={index}><ContestantItem  name={item.name} branch={item.branch} event={item.event}  /></div>
          })}
        </ul>
      </div>
    )
  }
}