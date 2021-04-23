import React from 'react'

const Buttons = (props) => {

    return(
        <div className='buttons'>
            <div className='previous'>
                <button 
                    className='navbuttons'
                    onClick={props.backUserFn}>Previous</button>
            </div>
            <div className='edits'></div>
            <div className='next'>
                <button 
                    className='navbuttons'
                    onClick={props.nextUserFn}>Next</button>
            </div>
        </div>
    )
}

export default Buttons