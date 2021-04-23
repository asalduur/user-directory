import React from 'react'

const Slides = (props) => {
    
    return (
        <div className='slides'>
            <div className='slide'>
                <h1>{props.user.name.first} {props.user.name.last}</h1><br></br>
                <div className='blueLine'></div>
                <h4>From: </h4><p>{props.user.city}, {props.user.country}</p><br></br>
                <h4>Job Title: </h4><p>{props.user.title}</p><br></br>
                <h4>Employer: </h4><p>{props.user.employer}</p><br></br>
                <br></br>
                <h4>Favorite Movies: </h4><p>{props.user.employer}</p><br></br>
                    <ol className='movieList'>
                        <li className='movie'>{props.user.favoriteMovies[0]}</li>
                        <li className='movie'>{props.user.favoriteMovies[1]}</li>
                        <li className='movie'>{props.user.favoriteMovies[2]}</li>
                    </ol>

            </div>

        </div>
    )
}

export default Slides