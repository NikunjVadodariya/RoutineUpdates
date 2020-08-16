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



toggleModal() {
    document.querySelector(".modal").classList.toggle("show-modal");
    this.props.onClickSubCategory(this.props.category_name, this.props.sub_category_name)
}

windowOnClick(event) {
    if (event.target === document.querySelector(".modal")) {
        this.toggleModal();
    }
}
componentDidMount(){
    window.addEventListener("click", this.windowOnClick);
    console.log(this.props.data)
}
    render() {

        return (
            <div class="modal show-modal">
            <div class="modal-content">
                <div class="content-control">
                    <button class="download">Download</button>
                    <div class="social-media-share">
                        <img class="share" src="/whatsapp_icon.png"/>
                    </div>
                    {/* <div class="share">
                    <i  class="fab fa-whatsapp"></i></div> */}
                    <span class="close-button" onClick={() => this.toggleModal()}>&times;</span>
                </div>
                
                <img class="content" src={this.props.data[0].src}/>
            </div>
        </div>
        )
    }
}


