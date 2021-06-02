import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


    function RenderDish({dish}) {

        return(
            <div class="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>  
        )
        
    }

    function RenderComments({comments}) {

        if (comments != null)
        return(
            comments.map((comment)=>{
                return (
                
                <React.Fragment>
                    <div key={comment.id}>
                        
                        <ul className="list-unstyled">
                            <li>{comment.comment}</li>
                            <li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                        </ul>
                    </div>
                    
                </React.Fragment>
                )
            })
        );
        else
            return(
                <div></div>
            );
    }


    const DishDetail = (props) => { 
        if (props.dish != null)
            return ( 
                <div class = "container">
                    <div class = "row">
                           
                            <RenderDish dish = {props.dish} />
                            
                        
                        <div class="col-12 col-md-5 m-1">
                            <h3>Comments</h3>
                            <RenderComments comments = {props.dish.comments} />
                        </div>
                    </div> 
                </div>  
            )
        else
            return(
                <div></div>
        ); 
    }
    






export default DishDetail;
