import React, {forwardRef} from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import '../../../scss/components/components/sub_category_item_display.scss'
import 'react-responsive-modal/styles.css';
import {Modal} from 'react-responsive-modal';



export default class SubCategoryItemDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
       }
    }

      onOpenModal(){
        this.setState({ open: true });
      };
      onCloseModal(){
        this.setState({ open: false });
      };

    render() {

        return (
        <div class="sub-category-item-display">
  <p>Hello</p>
  <button onClick={this.onOpenModal}>Open modal</button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>Simple centered modal</h2>
        </Modal>

        </div>
        )
    }
}


