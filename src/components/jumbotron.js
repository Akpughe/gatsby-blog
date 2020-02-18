import React from 'react'
import {Jumbotron} from 'react-bootstrap'

const Jumbotron = (props) => {
    return (
        <>
            <section className="w-100">
                <Jumbotron>
                    {props.children}
                </Jumbotron>
            </section>
        </>
    )
}

export default Jumbotron

