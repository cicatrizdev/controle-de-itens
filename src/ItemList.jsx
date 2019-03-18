import React, { Component } from 'react';
import Item from './Item.jsx';

export default class ItemList extends Component {
    render() {
        let itens = this.props.itemList;
        const trItem = itens.map( (item,index) => <Item key={index} item={item} index={index} editItemSubmit={this.props.editItemSubmit} deleteItem={this.props.deleteItem}/>)
      return (
            <tbody>{trItem}</tbody>
      );
    }
  }