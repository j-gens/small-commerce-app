import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ShopPreview from '../shop-preview/shop-preview.component.jsx';
import { shopDataSelector } from '../../redux/shop/shop.selectors.js';

import './shop-menu.styles.css';


const ShopMenu = ({ shopData }) => (
  <div>
    {shopData.map(({ id, ...otherShopProps }) =>
      <ShopPreview key={id} {...otherShopProps} />
    )}
  </div>
);

const mapStateToProps = createStructuredSelector({
  shopData: shopDataSelector,
});


export default connect(mapStateToProps)(ShopMenu);
