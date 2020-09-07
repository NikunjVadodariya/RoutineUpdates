import React from 'react';
import '../../../scss/components/components/sub_categories.scss'

export default class SubCategoryItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

       }
       this.onClickSubCategoryItems = this.onClickSubCategoryItems.bind(this)
       this.createSubCategoryUI = this.createSubCategoryUI.bind(this)
    }

    onClickSubCategoryItems(category_name, sub_category_item_index, sub_category_index){
        window.scrollTo(0, 0)
        this.setState({
          showCategory: false,
          category_name: category_name
        })
        this.props.onClickSubCategoryItems(category_name, sub_category_item_index, sub_category_index)
      }

    createSubCategoryUI(){
      let content = [...this.props.categories[this.props.category_name]['sub_categories'][0]['items']]
      return content.map((item, i) =>{
        return <article>
          <div class='square-box' onClick={() => this.onClickSubCategoryItems(this.props.category_name, this.props.sub_category_index, i)}>
            <div class='square-content'>
              <div>
                <img src={item.src}/>
              </div>
            </div>
          </div>
        </article>
     })
   }

  goBack(position) {
    console.log("back callled")
    let route = "/"
    console.log(position)
    if(position == "vertical"){
      console.log("yes")
      route = "/" + this.props.category_name + "/vertical"
    }
    this.props.goBack(route)
  }

    render() {
        return (
        <div class="show-more-category">
          <div class="category-name">
          <button class="back" onClick={() => this.goBack(this.props.position)}>Back</button>

              <h1>{this.props.categories[this.props.category_name]['sub_categories'][0]['name']}</h1> 
          </div>  
          <div class="sub_category">      
            <main class="grid">
              {this.createSubCategoryUI()}
            </main>
          </div>
        </div>
        )
    }
}


