import React from 'react';

export default class addBooking extends React.Component{

    render(){
        return (
            <div>
                <h1>Package Warehouse-in</h1>
                <div>
                    Package Number: <input type="text" ref="pkgNum"/>
                </div>
                <div>
                    Receiver: <input type="text" ref="receiver"/>
                </div>
                <div>
                    Phone Number: <input type="text" ref="phoneNum"/>
                </div>
                <div>
                    Weight: <input type="text" ref="weight"/>
                </div>
                <button onClick={this.renderData}>Add Booking</button>
            </div>
        );
    }

    generateID(){
        return parseInt(new Date().getTime() + Math.random);
    }

    renderData = () => {
        this.props.addBooking({
            id : this.generateID(),
            packageNo: this.refs.pkgNum.value,
            receiver: this.refs.receiver.value,
            phoneNumber: this.refs.phoneNum.value,
            weight: this.refs.weight.value
        })
    }
}