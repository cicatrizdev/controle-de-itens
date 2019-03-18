import React, { Component } from 'react';
import './App.css';
import ItemList from './ItemList';

const itemList = [
  {
    id: 1,
    name: 'Raspberry',
    people: 'Meganha',
    date: "2019-01-02"
  }
];

if (localStorage.getItem("itens") === null)
  localStorage.setItem('itens', JSON.stringify(itemList));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: []
    }
    this.editItemSubmit = this.editItemSubmit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
  }
  componentWillMount() {
    let itemList = JSON.parse(localStorage.getItem("itens"));

    this.setState((prevState, props) => (
      {
        itemList: itemList
      }
    )
    );
  }
  addNewItem() {
    this.setState((prevState, props) => ({

      itemList: [...prevState.itemList, { id:Math.max(...prevState.itemList.map(function(o){return o.id})) + 1,name: '', people: '', date: '' }]

    }));
  }

  deleteItem(id) {
    let r = window.confirm("Confirmar devolução do item?");
    if (r === true) {
      let filteredItemList = this.state.itemList.filter(x => x.id !== id);

      this.setState((prevState, props) => ({
        itemList: filteredItemList
      }));
      localStorage.setItem('itens', JSON.stringify(filteredItemList));
    }
  }
  editItemSubmit(id, name, people, date) {
    let itemListCopy = this.state.itemList.map((item) => {
      if (item.id === id) {
        item.name = name;
        item.people = people;
        item.date = date;
      }
      return item;
    });
    this.setState((prevState, props) => ({
      itemList: itemListCopy
    }));
    localStorage.setItem('itens', JSON.stringify(itemListCopy));
  }
  render() {
    return (

      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                Controle de Itens - LocalStorage
              </div>
              <div className="card-body">
                <table className="table table-hover">
                  <thead className="thead-light"><tr><th>Item</th><th>Pessoa</th><th>Data</th><th>Editar/Salvar</th><th>Deletar Registro</th></tr></thead>
                <ItemList deleteItem={this.deleteItem} itemList={this.state.itemList} editItemSubmit={this.editItemSubmit} />
                </table>
                <button className="btn btn-dark pull-left" onClick={this.addNewItem}>Novo Item</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
