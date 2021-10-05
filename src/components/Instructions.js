import { useState } from "react";

const Instructions = () => {
    const [show, setShow] = useState(false);

    return (show) ? (
        <div id='instructions'>
            <p>
                This game consists in selecting all the items without repeating any of them.
            </p>
            <button onClick={() => setShow(false)}>Ok</button>
        </div>
    ) : (
        <div id='show-instructions'>
            <button onClick={() =>setShow(true)}>Instructions</button>
        </div>
    )
}

export default Instructions