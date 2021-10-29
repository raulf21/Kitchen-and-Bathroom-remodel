import React from 'react'
import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Projects({ project}){
    return(
       <div id="projects">
            <Card className="my-3 p-2 rounded">
                <Link to={`/project/${project._id}`}>
                    <Card.Img src={project.image}/>
                </Link>
                <Card.Body>
                    <Link to={`/project/${project._id}`}>
                        <Card.Title as="div">
                            <strong>{project.name}</strong>
                        </Card.Title>
                    </Link>

                    <Card.Text as="div">
                        <div className="my-3">
                            {project.description}
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )

}
export default Projects