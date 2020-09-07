import React, {forwardRef} from 'react';
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import '../../../scss/components/components/sub_categories.scss'

export default class SubCategories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

       }
       this.onClickSubCategory = this.onClickSubCategory.bind(this)
    }
    
    onClickSubCategory(category_name, index){
        window.scrollTo(0, 0)
        this.setState({
          showCategory: false,
          category_name: category_name
        })
        this.props.onClickSubCategory(category_name, index, "vertical")
      }

    createCategoryUI(category_name){
      let content = [...this.props.categories[category_name]['vertical']]
      return content.map((item, i) =>{
        return <article>
          <div class='square-box' onClick={() => this.onClickSubCategory(category_name, i)}>
            <div class='square-content'>
              <div>
                <img src={item.src}/>
              </div>
            </div>
          </div>
        </article>
     })
   }

  goBack() {
    console.log("back callled")
    this.props.goBack("/")
  }

    render() {
      return (
        <div class="show-more-category">
          <div class="category-name">
          <button class="back" onClick={() => this.goBack()}>Back</button>
            <h1>{this.props.category_name}</h1>
          </div>  
          <div class="sub_category">      
            <main class="grid">
              {this.createCategoryUI(this.props.category_name)}
            </main>
          </div>
        </div>
        )
    }
}


