jest.dontMock('../../components/CartItem.js');

var TestUtils = require('react-addons-test-utils');
import React from 'react';
import CartItem from '../../components/CartItem';

describe("the cart item module", function() {
  describe("the name display of the item", function() {
    //var CartItem = require('../../components/CartItem.js');
    var item = {
      name:'abc'
    }

    var cartItem = TestUtils.renderIntoDocument(
      <CartItem item={item} />
    )

    var label = TestUtils.findRenderedDOMComponentWithTag(cartItem, 'h4');
    expect(label.textContent).toEqual(item.name);
  })
  
})
