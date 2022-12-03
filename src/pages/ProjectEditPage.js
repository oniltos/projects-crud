import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const apiURL = 'http://localhost:8001/projects'

const ProjectEditPage = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [createdAt, setCreatedAt] = useState('')

    const { projectId } = useParams()

    const navigate = useNavigate()

    //Primeira requisição busca os dados na api e popula o form
    useEffect(() => {
        axios.get(`${apiURL}/${projectId}`)
            .then(response => {
                let { title, description, createdAt } = response.data 
                
                setTitle(title)
                setDescription(description)
                setCreatedAt(createdAt)
            })
            .catch(err => console.log(err))
    }, [projectId])

    const handleSubmit = e => {
        e.preventDefault()
        const editedProject = {
            title, 
            description,
            createdAt
        }

        //Segunda requisição que salva os dados atualizados na API 
        axios.put(`${apiURL}/${projectId}`, editedProject)
            .then(response => {
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="ProjectEditPage">
            <h1>Edit Project Page</h1>

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
                <button>EDITAR</button>
            </form>
            
        </div>
    )
}

export default ProjectEditPage