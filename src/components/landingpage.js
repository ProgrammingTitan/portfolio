import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import {Jumbotron, Button, Col, Grid, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import image from './image.jpeg';

class Landing extends Component{
    render(){
        return(
        <div className='Body'>
            <Grid>
            <div className='Introduction'>
            <Row className="show-grid">
            <Col  md={10} mdPush={1}>
                <div >
                    <Jumbotron className= 'Intro-Box'>
                        <h1>Paul Anthony Valenzuela Jr</h1>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                        <p>
                            <Button bsStyle="primary" ><Link to="/contact" >Learn more</Link></Button>
                        </p>
                    </Jumbotron>
                </div>
            </Col>
            </Row>
            </div>
            <div>
                <Row>
                <Carousel className='Cal'>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src={{image}} />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src={{image}} />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src={{image}} />
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </Row>
                
            </div>
            </Grid>
            <img href={{image}} alt='sad'></img>
        </div>


        );


    }


}

export default Landing