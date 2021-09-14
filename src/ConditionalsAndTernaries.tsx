import { useState } from "react";
import Simple from "./Simple";


export default function Conditionals(){
    const canSee = true;
    const [selectedRate, setSelectedRate] = useState(1);
    function displayResult(){
        if(selectedRate===1){
            return <span>No!</span>;
        } else if(selectedRate===2)
        return(
            <>
            <span>Tell us how to get better.</span>
            </>
        );
        else if(selectedRate === 3){
            return <Simple/>;                
        }
        else{
            return <span> Thanks!</span>;
        }
    }

    return(
        <>
        <div>
                  <h1>Conditional Example</h1>
        {canSee ? <div>Seeing the light...</div> : <span>Not allowed to see it.</span>}  
        </div>
        <div>
            <h2> Conditionals If Example</h2>
            <div>Rate This website</div>
            <select onChange={(e) => {
                console.log(e.currentTarget.value);
                setSelectedRate(parseInt(e.currentTarget.value, 10));
            }}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <div>
                {displayResult()}
            </div>
        </div>
        </>
    )
};