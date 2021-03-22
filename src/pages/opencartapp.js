import React from 'react';

import '../css/bootstrap.css';
import '../css/custom.css';
import '../css/custom_new.css';
import '../css/shortcode.css';
import '../font-awesome/css/font-awesome.min.css';
import Footer from '../compnents/footer'; 
import NativeApp from '../compnents/nativeapp'; 
import EcommerceBlock from '../compnents/ecommerce_block'; 
import IntegrationBlock from '../compnents/integration_block'; 
import PriceTable from '../compnents/price_table'; 
class Opencartapp extends React.Component {

render() {
  const Pitems = [
    {id: 0, title: 'axclothes', image: '../portfolio/axclothes.jpg', date: 'Dec 10, 2017', grade:'web-design media-box'},
  ];
  return (  
      
    <div className="OpencartApp">


<section className="content" id="load-header">
<NativeApp></NativeApp>
<EcommerceBlock></EcommerceBlock>
<IntegrationBlock></IntegrationBlock>
<PriceTable></PriceTable>
</section>
          <Footer></Footer>    
    </div>
  );

}
}
export default Opencartapp;


