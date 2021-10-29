import React,{useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {Row,Col,Image, ListGroup, Button, Card} from 'react-bootstrap'
import { listProjectDetails } from '../actions/projectActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

function ProductScreen({ match }){
    const dispatch = useDispatch()
    const projectDetails = useSelector( state => state.projectDetails)
    const { loading, error, project } = projectDetails


    useEffect(() => {
        dispatch(listProjectDetails(match.params.id))

    }, [dispatch,match])
    return(
        <div>
            <Link to='/' className='btn btn-dark my-3'>Go Back</Link>

             {loading ?
                 <Loader/>
                 : error
                    ? <Message variant= 'danger'>{error}</Message>
                 :(
                    <Row>
                        <Col md={6}>
                            <Image src={project.image} alt={project.name} fluid/>
                        </Col>
                        <Col md={6}>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <h3>{project.name}</h3>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Description: {project.description}
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md={3}>
                        </Col>
                    </Row>

                 )

             }
        </div>
    )

}
export default ProductScreen