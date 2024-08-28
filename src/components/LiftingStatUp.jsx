import { useState } from "react";

export const LiftingStatUp = ()=>{ 
    const [inputValue, setInputValue] = useState("")
    return (
        <>
        <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
        <DisplayComponent inputValue={inputValue} /> 
        </>
    );
}

const InputComponent = ({inputValue, setInputValue})=>{ 
    return(
        <> 
            <input 
            type="text"
            placeholder="Enter your city name"
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
            />
        </>
    );
}


const DisplayComponent = ({inputValue})=>{
    return(
        <> 
            <h2>City name is: {inputValue}</h2>
        </>
    ); 

}