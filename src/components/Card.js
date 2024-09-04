import React from 'react'
import './styles/Card.css'

function Card() {
  return (
    <div>
        <div className="card mx-5 my-5" style={{"width": "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
  )
}

export default Card
