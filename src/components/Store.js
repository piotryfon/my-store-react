import React, { Component } from 'react';

class Store extends Component {
   
    constructor() {
        super();
        this.state = {
            order: 0,
            sum: 0,
        }
    }

    addOrder = () => {
        this.setState({ order: this.state.order + 1 })
        this.setState({ sum: this.state.sum + this.props.price })
        this.props.addTotal(this.props.price)
    };

    subtractOrder = () => {
        if (this.state.order <= 0) {
            this.setState({ order: this.state.order })
            this.setState({ sum: this.state.sum })
        } else {
            this.setState({ order: this.state.order - 1 })
            this.setState({ sum: this.state.sum - this.props.price })
            this.props.subtractTotal(this.props.price)
        }
    };

    render() {
        let storeStyle = {
            color: "white",
        }
        return (
            <div style={storeStyle}>
                <p>Dish: {this.props.dish}</p>
                <p>Price: {this.props.price} zł.</p>
                <p>Order: {this.state.order}</p>
                <button onClick={this.addOrder}>+ order</button>
                <button onClick={this.subtractOrder}>- order</button>
                <p>Sum: {this.state.sum}</p>
            </div>
        )
    }
}
export default Store;