import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function Persona() {
    const params = useParams()
    const [searchParams, setSearchParam] = useSearchParams()

    const changeQueryParam = (event) => {
        setSearchParam({
            name: event.target.value
        })
    };
    
    return (
        <div>
            <p>
                Persona con ID: {params.personaID}
                Query Name: {searchParams.get("name")}
            </p>
            <input type="text" onChange={changeQueryParam} />
        </div>
    )
}

export default Persona
