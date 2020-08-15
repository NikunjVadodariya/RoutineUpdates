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
        <div class="sub-category-item-display">
    <div class="modal show-modal">
        {/* <div class="modal-content">
             <span class="close-button" onClick={() => this.toggleModal()}>&times;</span>
            <img src={this.props.data[0].src}/>
             </div> */}
        {/* <div class="modal-buttons">
                <button>Download</button>
        </div>
        <div class="modal-content">
               <div class='square-box'>
        <div class='square-content'>
        <div>
        <img src={this.props.data[0].src}/>
          
          </div>
        </div>
      </div>
      </div>
       <div class="outer">
      <div class = "inner"> 
           This will be Centered 
      </div>
 </div> */}
 <div class="container">
    <div class="box">  
    Stuff goes here...
    </div>
</div>
    </div>

        </div>
        )
    }
}

