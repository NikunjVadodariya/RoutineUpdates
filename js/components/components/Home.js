import React, {forwardRef} from 'react';
import '../../../scss/components/components/home.scss'
import SubCategories from "./sub_categories";
import CategoryItems from "./category_items";
import SubCategoryItems from "./sub_category_items";
import SubCategoryItemDisplay from "./sub_category_item_display";
import {Route, withRouter, Switch, Link} from "react-router-dom";
import axios from 'axios';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          sub_category_index: 0,
          sub_category_item_index: 0,
          category_name: "videos",
          position: "horizontal",
          categories: {

          },
          isloading: true
       }
       this.onClickShowMore = this.onClickShowMore.bind(this)
       this.onClickSubCategory = this.onClickSubCategory.bind(this)
       this.onClickSubCategoryItems = this.onClickSubCategoryItems.bind(this)
       this.onClickSubCategoryItemDisplay = this.onClickSubCategoryItemDisplay.bind(this)
       this.goBack = this.goBack.bind(this)
    }

    onClickShowMore(category_name){
      window.scrollTo(0, 0)
      this.setState({
        show_category: "vertical_categories",
        category_name: category_name
      }, () =>{
        this.props.history.push("/" + category_name + "/vertical")
      })
    }

    onClickSubCategory(category_name, index, position){
      window.scrollTo(0, 0)
      this.setState({
        show_category: "sub_category_items",
        category_name: category_name,
        sub_category_index: 0,
        position: position
      },() =>{
        this.props.history.push("/" + category_name + "/" +  this.state.categories[category_name]['sub_categories'][0]['name'])
      })
    }

    onClickSubCategoryItems(category_name, sub_category_index, index){
      window.scrollTo(0, 0)
      this.setState({
        sub_category_index: sub_category_index,
        sub_category_item_index: index,
        show_category: "sub_category_item_display",
        category_name: category_name
      }, () =>{
        this.props.history.push("/" + category_name + "/" +  this.state.categories[category_name]['sub_categories'][0]['name'] + "/" + index)
      })
    }

    onClickSubCategoryItemDisplay(){
      window.scrollTo(0, 0)
      this.setState({
        show_category: "sub_category_items"
      },() => {
        this.props.history.push("/" + this.state.category_name + "/" +  this.state.categories[this.state.category_name]['sub_categories'][0]['name'])
      })
    }

    goBack(route) {
      console.log("back callled")
      this.props.history.push(route);
    }

    componentDidMount(){
      this.getdata().then((data) =>{
        console.log(data[0]['categories'])
        this.setState({
          categories: data[0]['categories'],
          isloading: false
        })
      })
        
    }

    getdata(endpoint, headers) {
      return axios.get("/get_data", {
          headers: {"content-type": "application/json"},
      }).then(function (response) {
          return response.data;
      }).catch(function (error) {

      });
  }

    render() {
        return <div class="home">
           { !this.state.isloading ?            
            <Switch>
                <Route  path="/:category_name/vertical" render={(props) => (<SubCategories {...props} position={this.state.position} goBack={this.goBack} categories={this.state.categories} category_name= {this.state.category_name} onClickSubCategory ={this.onClickSubCategory}/>)} />  
                <Route  path="/:category_name/:sub_category_name/:index" render={(props) => (<SubCategoryItemDisplay {...props}  categories={this.state.categories} sub_category_item_index= {this.state.sub_category_item_index} sub_category_index={this.state.sub_category_index} category_name= {this.state.category_name} onClickSubCategoryItemDisplay ={this.onClickSubCategoryItemDisplay}/>)} />
                <Route  path="/:category_name/:sub_category_name" render={(props) => (<SubCategoryItems {...props} position={this.state.position} goBack={this.goBack} categories={this.state.categories}  sub_category_index= {this.state.sub_category_index} category_name= {this.state.category_name} onClickSubCategoryItems ={this.onClickSubCategoryItems}/>)} />
                <Route path="/" render={(props) => (<CategoryItems {...props} categories={this.state.categories} categories={this.state.categories} onClickShowMore={this.onClickShowMore} onClickSubCategory={this.onClickSubCategory}/>)} />
            </Switch>
          :  null}
        </div>  

}
}
export default Home;
