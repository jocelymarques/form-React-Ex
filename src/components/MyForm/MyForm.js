import React from 'react'
import './MyForm.css'
import {useState} from 'react'

const MyForm = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [bio, setBio] = useState()


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, bio)

        setName('')
        setEmail('')
        setBio('')
    }

    return (
        <div className="main">
        
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="form">
                    <label>
                        <span>Nome:  </span>
                        <input onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="Digite seu nome" required value={name} />
                    </label>
                    <label>
                        <span>E-mail:  </span>
                        <input onChange={(e) => setEmail(e.target.value)} type="text" name="E-mail" placeholder="Digite seu E-mail" required value={email}/>
                    </label>
                    <label>
                        <span>Bio:</span>
                        <input className="area" onChange={(e) => setBio(e.target.value)} type="text" name="bio" placeholder="Digite sua biografia" value={bio}/>
                    </label>
                    <input className="btn" type="submit" value="Enviar" />

                    
                </div>
            </form>
        </div>
    )
}

export default MyForm