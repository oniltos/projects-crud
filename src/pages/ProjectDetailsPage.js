import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const apiURL = 'http://localhost:8001/projects'

const ProjectDetailsPage = () => {
    const { projectId } = useParams()
    const [project, setProject] = useState(null)

    useEffect(() => {
        axios.get(apiURL + '/' + projectId)
            .then(response => {
                setProject(response.data)
            })
            .catch(err => console.log(err))
    }, [projectId])

    if(!project) {
        return <p>Loading...</p>
    }

    return (
        <div className="ProjectDetailsPage">
            <h1>Project - { project.title }</h1>
            <p>{ project.description }</p>
        </div>
    )
}

export default ProjectDetailsPage