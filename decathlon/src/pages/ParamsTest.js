import React from 'react'
import {useParams} from 'react-router-dom'

const ParamsTest = () => {
    let {id} = useParams()
    return (
        <div>
            <h1>Custom link: {id}</h1>
        </div>
    )
}

export default ParamsTest
