import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'
class RestaurantsContainer extends Component {

  render() {

  	 // console.log(this.props," at restaurantContainer")
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurantList={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant}/>
     
      </div>
    )
  }
}
const mapStateToProps = (state) => {
return {
restaurants: state.restaurants

}
}

const mapDispatchToProps = (dispatch) => ({
    addRestaurant: text => dispatch({type: 'ADD_RESTAURANT', text}),
  deleteRestaurant: id => dispatch({type: 'DELETE_RESTAURANT', id})
})




export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
