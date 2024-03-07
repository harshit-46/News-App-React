import React from 'react'

export default function About() {
    return (
        <div className="card text-center" style={{margin: '35px 0px ', marginTop: '72px', marginBottom: '0px', width: '25rem', marginLeft: '36%'}}>
            <img src="./world-news.png" className="card-img-top" alt="not available" style={{height: '300px'}}/>
                <div className="card-body">
                    <h5 className="card-title">News Monkey</h5>
                    <p className="card-text">This is a single page application developed using a production build of React.</p>
                    <p className="card-text" style={{fontWeight: 'bold'}}>Key technologies used - </p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">React JS</li>
                    <li className="list-group-item">Bootstrap</li>
                    <li className="list-group-item">HTML, CSS and Javascript</li>
                </ul>
                <div className="card-body">
                    <p>Developed By - <a href="https://www.linkedin.com/in/harshithere/" target='_blank' rel='noreferrer' className="card-link" style={{textDecoration: 'none'}}>Harshit Gupta</a></p>
                </div>
        </div>
    )
}
