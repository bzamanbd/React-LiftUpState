import { useState } from "react";

export const LiftingStatUp = ()=>{ 
    const [inputValue, setInputValue] = useState("")
    const [num, setNum] = useState(0)
    return (
        <>
        <InputComponent inputValue={inputValue} setInputValue={setInputValue} num={num} setNum={setNum} />
        <DisplayComponent inputValue={inputValue} num={num} /> 
        </>
    );
}

const InputComponent = ({inputValue, setInputValue, num, setNum})=>{ 
    return(
        <> 
            <input 
            type="text"
            placeholder="Enter your city name"
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
            />
            <br />
            <br />
            <button onClick={()=>setNum(num + 1)}>Click Me</button>

        </>
    );
}


const DisplayComponent = ({ inputValue, num })=>{
    return(
        <> 
            <h2>Current Number is: {num}</h2>
            <h2>City name is: {inputValue}</h2>
        </>
    ); 

}