import Loader from '../components/Loader'
import Message from '../components/Message'
import React,{useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Navbar, Nav, Container, Row, Form, Button} from 'react-bootstrap'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { send } from '../actions/contactActions'

function Contact(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [msg, setMsg] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()
    const contactSend = useSelector(state => state.contactSend)
    const { error, loading, contactInfo } = contactSend

    const submitHandler = (e) => {
        e.preventDefault()
            dispatch(send(name, email, subject, msg))
    }

    return(
        <div id="contact">
                <h3> Contact </h3>
                <div class="form-group row">
                  <div class="col-sm-10">
                    <p>Lets get in touch and talk about your next project</p>
                  </div>
                </div>
                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}
                <Form onSubmit={submitHandler}>


                    <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            type='name'
                            placeholder='Enter name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>



                    <Form.Group controlId='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type='email'
                            placeholder='name@example.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        >
                        </Form.Control>
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId='sub'>
                        <Form.Label>Subject</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Enter Subject'
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='msg'>
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Enter Message'
                            value={msg}
                            onChange={(e) => setMsg(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>
                  <Button type='submit' variant='primary'>
                    submit
                </Button>
                </Form>


        </div>
    )

}
export default Contact