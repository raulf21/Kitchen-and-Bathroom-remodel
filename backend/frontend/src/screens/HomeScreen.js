import React,{useState, useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import Project from '../components/Projects'
import Loader from '../components/Loader'
import Message from '../components/Message'
import About from '../components/About'
import Contact from '../components/Contact'
import {Jumbotron} from 'react-bootstrap'
import {listProjects } from '../actions/projectActions'


function HomeScreen(){
    const dispatch = useDispatch()
    const projectList = useSelector( state => state.projectList)

    const {error, loading, projects} = projectList
    useEffect(() => {
        dispatch(listProjects())

    }, [])
    return(
        <div>
            <Container>
            <Jumbotron className="top"/>
            </Container>
            <h3 className="projects">Latest Projects</h3>
            {loading ? <Loader/>
                :error ? <Message variant= 'danger'>{error}</Message>
                    :
                    <Row>
                        {projects.map(project => (
                            <Col key={project._id} sm={12} md={6} lg={4} xl={3}>
                                <Project project={project}/>
                            </Col>

                        ))}
                    </Row>
            }
            <About className = "about"/>
            <Contact className="contact" />


            <Container>
            <Jumbotron className="bottom"/>
            </Container>

        </div>

    )

}
export default HomeScreen