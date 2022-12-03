import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const apiURL = 'http://localhost:8001/projects'

const ProjectCreatePage = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [createdAt, setCreatedAt] = useState('')

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        const newProject = {
            title, 
            description,
            createdAt
        }

        //Segunda requisição que salva os dados atualizados na API 
        axios.post(`${apiURL}`, newProject)
            .then(response => {
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="ProjectCreatePage">
            <h1>Create Project</h1>

            <form onSubmit={ handleSubmit }>
                <div>
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text"
                        value={ title }
                        onChange={ e => setTitle(e.target.value) } />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input 
                        type="text"
                        value={ description }
                        onChange={ e => setDescription(e.target.value) } />
                </div>
                <div>
                    <label htmlFor="createdAt">Created At</label>
                    <input 
                        type="text"
                        value={ createdAt }
                        onChange={ e => setCreatedAt(e.target.value) } />
                </div>
                <button>CRIAR</button>
            </form>
            
        </div>
    )
}

export default ProjectCreatePage