import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Row, Card, Container, Col } from 'react-bootstrap';
import Forms from './Forms'

import './Course.css'
import axios from 'axios'
function CourseList() {
    const navigate = useNavigate()

    // https://www.edx.org/images/marketing/homepage-hero-lg.png

    const url = "http://localhost:3002/courses"

    const [flag, setflag] = useState(false)

    const [courses, setcourses] = useState([])

    const enquiry = () => {
        console.log('Enquiry Button Clicked')
        setflag(true)
    }
    useEffect(() => {
        axios.get(url)
            .then(res => {
                console.log(res.data)
                setcourses(res.data)
            })
    }, [])
    return (
        <>
            <Container>
                <img src="laptop.jfif" alt="..." className="laptop"></img>

            </Container>
            <br></br>
            <Container className="text-center">
                <Row>

                    <Col>
                        <Card >
                            <Card.Img variant="top" src="https://prod-discovery.edx-cdn.org/organization/logos/2a73d2ce-c34a-4e08-8223-83bca9d2f01d-2cc8854c6fee.png" />
                        </Card>
                    </Col>
                    <Col>
                        <Card >
                            <Card.Img variant="top" src="https://prod-discovery.edx-cdn.org/organization/logos/54bc81cb-b736-4505-aa51-dd2b18c61d84-2082c7ba1024.png" />
                        </Card>
                    </Col>
                    <Col>
                        <Card >
                            <Card.Img variant="top" src="https://prod-discovery.edx-cdn.org/organization/logos/44022f13-20df-4666-9111-cede3e5dc5b6-2cc39992c67a.png" />
                        </Card>
                    </Col>
                    <Col>
                        <Card >
                            <Card.Img variant="top" src="https://prod-discovery.edx-cdn.org/organization/logos/b9dc96da-b3fc-45a6-b6b7-b8e12eb79335-bc0488f1a5f8.png" />
                        </Card>
                    </Col>
                    <Col>
                        <Card >
                            <Card.Img variant="top" src="https://prod-discovery.edx-cdn.org/organization/logos/36cfd0bb-1d18-4355-ae44-cb946573df3c-1e18515c3e4b.png" />
                        </Card>
                    </Col>




                </Row>
            </Container>

            <Container className="container_heading">
                <h2 className="heading2">Explore New Courses</h2>
            </Container>

            <br></br>

            <Container >
                <Row>
                    {courses.map(course => (
                        <>
                            <Col >
                                <Card style={{ width: '18rem', height: '21rem',padding:'2px',marginTop:'25px'}} className="text-center2">
                                    <h2 style={{fontSize: '1.5rem',padding: '4px'}}>{course.name}</h2>
                                    <img src={course.image} alt="..."></img>
                                    <button onClick={enquiry} className="enquiry">Click for enquiry</button>
                                </Card>
                            </Col>
                        </>
                    ))}
                </Row>
            </Container>


            {flag ? navigate('/forms') : null}



        </>
    )
}

export default CourseList
