import React, { Component } from 'react';


export default class Item extends Component {
  constructor(props)
  {
    super(props);
    this.state ={isEdit:false}
    this.editItem = this.editItem.bind(this);
    this.editItemSubmit = this.editItemSubmit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  deleteItem()
  {
    const {id} = this.props.item;
this.props.deleteItem(id);
  }
  editItem()
  {
    this.setState((prevState,props) => ({
      isEdit : !prevState.isEdit
    }))
  }
  editItemSubmit()
  {
    const {id} = this.props.item;
    this.setState((prevState,props) => ({
      isEdit : !prevState.isEdit
    }));
    this.props.editItemSubmit(id,this.nameInput.value,this.peopleInput.value,this.dateInput.value);
  }
    render() {
        const {name,people,date} = this.props.item;
      return (
        this.state.isEdit === true ? 

        <tr className="bg-warning" key={this.props.index}><td><input ref={nameInput => this.nameInput = nameInput} defaultValue={name}/></td><td><input defaultValue={people} ref={peopleInput => this.peopleInput = peopleInput}/></td><td><input type="date" ref={dateInput => this.dateInput = dateInput} defaultValue={date}/></td><td><i className="far fa-save" onClick={this.editItemSubmit}></i></td><td><i className="fas fa-trash"></i></td></tr>
 :
        <tr key={this.props.index}><td>{name}</td><td>{people}</td><td>{date}</td><td><i className="far fa-edit" onClick={this.editItem}></i></td><td><i className="fas fa-trash" onClick={this.deleteItem}></i></td></tr>
      );
    }
  }
