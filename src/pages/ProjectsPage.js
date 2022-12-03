import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const apiURL = 'http://localhost:8001/projects'

const ProjectsPage = () => {
    const [projects, setProjects] = useState([])
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        axios.get(apiURL)
            .then(response => {
                setProjects(response.data)
            })
            .catch(err => console.log(err))
    }, [refresh])

    const deleteProject = projectId => {
        axios.delete(`${apiURL}/${projectId}`)
            .then(response => {
                setRefresh(!refresh)
            })
            .catch(err => console.log(err))
    }

    if(!projects.length) {
        return <p>Loading...</p>
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                <div className="ProjectsPage">
            <h1>Projects <Link to='/projects/create'>criar projeto</Link></h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        projects.map(project => {
                            return (
                                <tr key={project.id}>
                                    <td>{ project.title }</td>
                                    <td>
                                        <Link to={`/projects/${project.id}`}>
                                            <button>Detalhes</button>
                                        </Link>
                                        <Link to={`/projects/edit/${project.id}`}>
                                            <button>Editar</button>
                                        </Link>
                                        <button onClick={ () => deleteProject(project.id) } >Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage