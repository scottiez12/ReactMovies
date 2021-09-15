import React, { useState } from "react";

export default function Events(){
    const [canSee, setCanSee] = useState(false);
    const handleCheckboxChanged = () =>{
        setCanSee(canSee ? false : true)
    };
    const [textInput, setTextInpute] = useState('');
function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>){
    console.log(e.currentTarget.value);
    setTextInpute(e.currentTarget.value);
};
    return(
        <>
        <h1>Events Example</h1>
        <div>
        <input type="checkbox" onChange={handleCheckboxChanged}/>
        </div>
        <div>
            <button onClick= {() => {
                alert("Ive been clicked...");
            }}>Click me. </button>
        </div>
        <div>
            <input type="text"  onKeyUp={(e) => handleKeyUp(e)}/>
        </div>
        {canSee ? <div>See the light!</div> : <div>feel the heat...</div>}
        <div>{textInput}</div>
        </>
    )
}