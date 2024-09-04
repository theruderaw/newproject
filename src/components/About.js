import React from 'react'
import cat from '../assets/cat.png'
function About(props) {
  return (
    <div style={{   color: "#0ff", "font-size": "1.5rem","text-shadow": "0 0 5px rgba(0, 255, 255, 0.8)"}}>
        <div className="container text-center">
            <div className="row">
                <div className="col">
                <img src={cat} style={{width:"400px",height:"400px"}}/>
                </div>
                <div className="col">
                <h1>About</h1>
                lDuis nostrud eu laboris amet velit occaecat nulla culpa reprehenderit cillum officia deserunt. Occaecat labore ea nisi anim irure voluptate culpa occaecat est cupidatat eu laborum ad dolor. Nulla dolore qui velit incididunt nisi ullamco nulla nisi veniam mollit magna labore.
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
