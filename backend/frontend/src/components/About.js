import React,{useState, useEffect} from 'react'

import {Container, Row, Col, ListGroup} from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import { about } from '../actions/aboutActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

function About(){
    const dispatch = useDispatch()
    const aboutinfo = useSelector( state => state.aboutinfo)
    const { loading, error, info } = aboutinfo


    useEffect(() => {
        dispatch(about())

    }, [])
    const [data, setData] = useState([]);
    useEffect(() => {
    fetch(`/api/about/`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
    return(
        <Container>
            <Row>
                <div id="about">
                <h3>About</h3>
                {loading ?
                 <Loader/>
                 : error
                    ? <Message variant= 'danger'>{error}</Message>
                 :(
                    <p>
                      {data.map((about) => (
                        <p key={about.id}>{about.about}</p>
                      ))}
                    </p>
                 )

             }

                </div>
            </Row>
        </Container>
    )

}
export default About