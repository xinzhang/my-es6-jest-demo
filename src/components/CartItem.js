import React, {Component} from 'react';

class CartItem extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <section>
        <h4>{this.props.item.name}</h4>
      </section>
    )
  }
}

export default CartItem;
