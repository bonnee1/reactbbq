import React, { Component } from 'react';

class Service extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            catering: [
                {
                    id: 0,
                    name: 'Pickup',
                    image: 'assets/placeholder.jpg',
                    description: "Your order ready when you want it.  We'll have it ready for you to pickup in 'family-style' containers so your food stays at the perfect temperature.  Paper plates, napkins and plastic utensils are included."
                },
                {
                    id: 1,
                    name: 'Delivery',
                    image: 'assets/placeholder.jpg',
                    description: "Lorem Ipsum"
                },
                {
                    id: 2,
                    name: 'Onsite Service',
                    image: 'assets/placeholder.jpg',
                    description: "Ideal for groups ranging from 20 to 150 guests, our catering team will travel to your event location, set up buffet tables and chaffing dishes to form buffet line(s) and serve your guests. Two hours of service time is included together with time to set up and break down the event site. The cost will be the food & beverage total, tax, $375.00 set-up fee, and a mandatory 20% admin service charge. Gratuity is at your discretion."
                },
                {
                    id: 3,
                    name: 'Chuckwagon BBQ Onsite Event',
                    image: 'assets/placeholder.jpg',
                    description: "Ideal for groups of 75 or more guests, we bring our BBQ grills to your event location where the Grill Master will cook the BBQ to perfection. This catering option includes everything in our full-service staffed event with a 2-hour service time together with 2 hours for set up and break down of the event site. The pricing of the food is taken from our normal menu, then a $6.00 charge added per plate. There is also a mandatory 20% admin service charge and tax added on."
                }
            ],
        }
    }
    
    render() {
        const service = this.state.catering.map(cater => {
            return (
                <div key={cater.id} className="col">
                    <img src={cater.image} alt={cater.name} />
                    <h2>{cater.name}</h2>
                    <p>{cater.description}</p>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {service}
                </div>
            </div>
        );
    }
}
       


export default Service;