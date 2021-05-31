import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

    render() { 
        const {dish} = this.props;
        return ( 
            <div class = "container">
                <div class = "row">
                    {this.renderDish(dish)}
                </div>
            </div>
        );
    }


    renderDish=(dish)=> {
        if (dish!=null) {
            return(
            <React.Fragment>
            <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </div>
            <div className="col-12 col-md-5 m-1" >
            <h4>Comments</h4>
            {this.renderComments(dish.comments)}
            </div>
            </React.Fragment>
            )
        }
        else {
            return(<div></div>)
        }
    }

    renderComments =(comments) => {

        if (comments!=null) {
            const CO = comments.map(c=>{

                return(
                    <React.Fragment>
                    <li>{c.comment}</li><br/>
                    <li>-- {c.author}, {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit'
                    }).format(new Date(c.date))}
                    </li><br/>
                    </React.Fragment>
                )

                }
            );

            return(
                <ul className="list-unstyled">
                {CO}
                </ul>
            )
        }
        else{
            return(<div></div>)
        }
    }

    
}





export default Dishdetail;
