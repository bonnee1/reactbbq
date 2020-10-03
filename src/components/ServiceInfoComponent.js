import  React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

   function RenderService({service}) {
        return(
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={service.image} alt={service.name} />
                    <CardBody>
                        <CardTitle>{service.name}</CardTitle>
                        <CardText>{service.description}</CardText>
                    </CardBody>
                 </Card>
            </div>
        )
    }
 
    function ServiceInfo(props) {
        if (props.service) {
            return (
                <div classname="container">
                    <div className="row">
                        <RenderService service={props.service} />
                    </div>
                </div>
            )
        }
        return  <div />
    }



export default ServiceInfo;