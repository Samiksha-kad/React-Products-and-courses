import React, { useState, useEffect } from 'react'
import { Carousel, Card, Container,Row,Col } from 'react-bootstrap';
import { Alert,Nav,Navbar,Button} from 'react-bootstrap';
import axios from 'axios'
import './Products.css'
function Product() {
    const [Products, setProducts] = useState([]);

    useEffect(() => {
        const url = "http://localhost:3001/products"
        axios.get(url)
            .then(res => {
                console.log(res.data)
                setProducts(res.data)
            })
    }, [])
    return (
        <>
            <br></br>
            <Carousel variant="dark" className="m-2">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="slide2.webp"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/11/9dfb7761-c38e-48e6-8e5d-46d66249d4ab1636655318289-Weekend-sale_DK--1-.jpg"
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/10/8fa36b85-4dc8-465e-a174-b212df132b021636550941207-Wrogn_Desk_Banner--3-.jpg"
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>
            <h2 className="deals">Deals of the Day</h2>
            <Container className="text-center">
                <Row>
                    {
                        Products.map((item, index) => {
                            return (
                                <Col key={index} >
                                    <Card style={{ width: '15rem',     height: '21rem'}} >
                                        <Card.Img variant="top" src={item.image2} style={{ width: '15rem',     height: '21rem'}}/>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
            <h2 className="deals">BIGGEST DEALS ON TOP BRANDS</h2>
            <Container className="text-center">
                <Row>
                    {
                        Products.map((item, index) => {
                            return (
                                <Col key={index} >
                                    <Card style={{ width: '15rem',     height: '21rem'}} >
                                        <Card.Img variant="top" src={item.image} style={{ width: '15rem',     height: '21rem'}}/>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
            <h2 className="deals">TRENDING IN ACCESSORIES</h2>
            <Container className="text-center">
                <Row>
                    {
                        Products.map((item, index) => {
                            return (
                                <Col key={index} >
                                    <Card style={{width: "15rem",height: "15rem"}} >
                                        <Card.Img variant="top" src={item.image3} style={{ width: '15rem',     height: '15rem'}}/>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
                <br></br>
                <Row>
                    {
                        Products.map((item, index) => {
                            return (
                                <Col key={index} >
                                    <Card style={{width: "15rem",height: "15rem"}} >
                                        <Card.Img variant="top" src={item.image4} style={{ width: '15rem',     height: '15rem'}}/>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>

            <br></br>
            <footer>
            
            <Alert variant="secondary">
                <img src="footer_icon.jpg" className="footer_img mx-auto d-block img_thumbnail rounded-circle" alt="footer"/>
                <p className="footer_p">"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia ipsum tempora perspiciatis cupiditate, eos harum. Expedita vel explicabo ipsa cum aliquam voluptatibus corrupti, ea libero"</p>
                <h5 className="heading6">Billy Gramhan</h5>
                <p className="p1">Web Designer</p>
                <br/>
                <br/>
                <Button className="facebook">
                    <i className="fa fa-facebook"></i> 
                    <label className="label-facebook">Facebook</label>
                </Button>
                <Button className="instagram">
                    <i className="fa fa-instagram"></i> 
                    <label className="label-facebook">Instagram</label>
                </Button>
                <Button className="twitter">
                    <i className="fa fa-twitter"></i> 
                    <label className="label-facebook">Twitter</label>
                </Button>
                <Button className="dribble">
                    <i className="fa fa-bullseye"></i> 
                    <label className="label-facebook">Dribble</label>
                </Button>
                <Button className="pinterest">
                    <i className="fa fa-pinterest-p"></i> 
                    <label className="label-facebook">pinterest</label>
                </Button>
                
            <Container>
                <img src="logo.jfif" width="50" height="50" className="logo_down rounded mx-auto d-block rounded-circle" alt="logo"/>
                <p className="footer_p1">"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia ipsum tempora perspiciatis cupiditate, eos harum. Expedita vel explicabo ipsa cum aliquam voluptatibus corrupti, ea libero"</p>
                <img src="color_pink.png" className="img_color colors" alt="pink"/>
                <img src="color_blue.png" className="img_color" alt="blue"/>
                <img src="color_orange.png" className="img_color" alt="orange"/>
                

            </Container>

            <Container>
                <Navbar className="nav justify-content-center">
                    <Nav.Item >
                    <Nav.Link className="active nav_li_2" href="#">
                        <img src="visa.jfif" className="clients" alt="client"/></Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                    <Nav.Link className="nav_li_2 " href="#">
                        <img src="paypal.png " className="clients" alt="client"/></Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                    <Nav.Link className="nav_li_2" href="#">
                        <img src="discover.png" className="clients" alt="client"/></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link className="nav_li_2" href="#">
                        <img src="american.png" className="clients" alt="client"/></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link className="nav_li_2" href="#">
                        <img src="master.png" className="clients" alt="client"/></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link className="nav_li_2" href="#">
                        <img src="mastero.png" className="clients" alt="client"/></Nav.Link>
                    </Nav.Item>
                    
                </Navbar>
                
            </Container>
            <br/>
            <Alert variant="dark" className="text-center p1">
                Copyright &copy; 2021 Designed By Lorem Ipsim- All Rights Reserved.
            
            </Alert>
        </Alert>

            </footer>
        


        </>
    )
}

export default Product
