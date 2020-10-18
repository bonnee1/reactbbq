import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
} from "reactstrap";
import { Link } from 'react-router-dom'

function RenderServiceItem({service}) {
  return (
    <Card>
      <Link to={`/services/${service.id}`}>
      <CardImg width="100%" src={service.image} alt={service.name} />
        <CardImgOverlay>
          <CardTitle>{service.name}</CardTitle>
        </CardImgOverlay>
        </Link>
    </Card>
  );
}

function Catering(props) {

    const service = props.services.map((service) => {
      return (
        <div key={service.id} className="col-md-5 m-1">
          <RenderServiceItem service={service} />
          
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


export default Catering;
