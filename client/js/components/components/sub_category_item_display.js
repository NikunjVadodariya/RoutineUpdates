import React, {forwardRef} from 'react';
import '../../../scss/components/components/sub_category_item_display.scss'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';



export default class SubCategoryItemDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
       }
       this.toggleModal=this.toggleModal.bind(this);
       this.windowOnClick=this.windowOnClick.bind(this);
    }

      onOpenModal(){
        this.setState({ open: true });
      };
      onCloseModal(){
        this.setState({ open: false });
      };


toggleModal() {
    document.querySelector(".modal").classList.toggle("show-modal");
}

windowOnClick(event) {
    if (event.target === document.querySelector(".modal")) {
        this.toggleModal();
    }
}
componentDidMount(){
    window.addEventListener("click", this.windowOnClick);
}
    render() {

        return (
        <div class="sub-category-item-display">
 <button class="trigger" onClick={() => this.toggleModal()}>Click here to trigger the modal!</button>
    <div class="modal">
        <div class="modal-content">
            <span class="close-button" onClick={() => this.toggleModal()}>&times;</span>
            <h1>Hello, I am a modal!</h1>
        </div>
    </div>

        </div>
        )
    }
}


