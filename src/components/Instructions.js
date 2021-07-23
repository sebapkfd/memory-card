import { useState } from "react";

const Instructions = () => {
    const [show, setShow] = useState(false);

    if (show) {
        return (
            <div id='instructions'>
                <p>
                    This game consists in selecting all the items without repeating any of them.
                </p>
                <button 
                    className='instructions-controller' 
                    onClick={() => setShow(false)}>
                        Ok
                    </button>
            </div>
        )
    }

    return (
        <div id='show-instructions'>
            <button 
                className='instructions-controller' 
                onClick={() =>setShow(true)}>
                    Instructions
                </button>
        </div>
    )
}

export default Instructions