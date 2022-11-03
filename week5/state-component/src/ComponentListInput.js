import { useState } from "react";

const ComponentListInput = () => {
 const [listInput, setListInput] = useState([])
 const [text, setText] = useState("")

 const handleAddInput = () => {
   setListInput(prevState => {
    return [text,...prevState]
   })
 }

 const handleRemoveInput = (index) => {
   setListInput((prevState) => {
    const copyState = [...prevState];
    return copyState.filter((item, i) => i !== index);
   });
 };

 return (
  <>
  {listInput.map((item,index)=> {
    return (
    <div key={index}>
     {item}
     {/* <button onClick={() => { return handleRemoveInput(index);
     }}> X </button> */}
     </div>
    );
   })}
  <input
    type="text"
    onChange={(event) => setText(event.target.value)}
    value={text}
    />
    <button onClick={handleAddInput}>Add Input</button>
  </>
 )
}

export default ComponentListInput;