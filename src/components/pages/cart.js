"use strict"
import React from 'react';
import { connect } from 'react-redux';
import { Modal, Panel, Col, Row, Well, Button, ButtonGroup, Label } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { deleteCartItem, upDateCart } from '../../actions/cartActions';

class Cart extends React.Component{

    render(){
        if(this.props.cart[0]){
            return this.renderCart();
        } else {
            return this.renderEmpty();
        }
    }

   // renderEmpty(){
    //    return(<div></div>)
  //  }


  //  onDelete(_id){
           // Create a copy of the current array of books
 //       const currentBookToDelete = this.props.cart;
        // Determine at which index in books array is the book to be deleted
    //    const indexToDelete = currentBookToDelete.findIndex(
     //       function(cart){
    //            return cart._id === _id;
      //      }
    //    ) 
    // use slice to remove the book at the specified index    
 //   let cartAfterDelete = [...currentBookToDelete.slice(0, indexToDelete), 
   //  ...currentBookToDelete.slice(indexToDelete + 1)]    

     //   this.props.deleteCartItem(cartAfterDelete);
   // }
   // onIncrement(_id){
     //   this.props.updateCart(_id, 1);
   // }
   // onDecrement(_id){
     //   if(quantity > 1) {
       //     this.props.updateCart(_id, -1);
       // }
      

   // }


//    renderEmpty(){
 //       return(<div></div>)
  //  }
    
    renderCart(){
        const cartItemsList = this.props.cart.map(function(cartArr){
            return(
                <Panel key={cartArr.id}>
                    <Row>
                        <Col xs={12} sm={4}>
                        <h6>{cartArr.title}</h6><span>    </span>
                        </Col>
                        <Col xs={12} sm={2}>
                            <h6>usd. {cartArr.price}</h6>
                        </Col>
                        <Col xs={12} sm={2}>
                            <h6>qty. <Label bsStyle="success">{cartArr.quantity}</Label></h6>
                        </Col>
                        <Col xs={6} sm={4}>
                        <ButtonGroup style={{minWidth: '300px'}}>
                            <Button bsStyle="default" bsSize="small">-</Button>
                            <Button bsStyle="default" bsSize="small">+</Button>
                            <span>     </span>
                            <Button bsStyle="danger" bsSize="small">DELETE</Button>
                            </ButtonGroup>
                            </Col>
                    </Row>
                </Panel>
            )
        }, this)
        return (
            <Panel header="Cart" bsStyle="primary">
                {cartItemsList}
                <Row>
                    <Col xs={12}>
                        <h6>Total amount:</h6>
                        <Button bsStyle="success" bsSize="small">
                            PROCEED TO CHECKOUT
                        </Button>
                    </Col>
                </Row>
                    <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6>TEST</h6>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
            </Panel>
        )
    }
}
function mapStateToProps(state){
    return{
        cart: state.cart.cart
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        deleteCartItem:deleteCartItem,
        updateCart: upDateCart
    }, dispatch)
} 
export default connect(mapStateToProps, mapDispatchToProps) (Cart);  
    