import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import {MdAdd} from 'react-icons/md'


export default function Input(props: any) {
  const {todos, setter} = props;
  const addNote = () => {
    setter([...todos,textInput]);
    setTextInput("");
    (document.getElementById("inputField") as HTMLInputElement).value = "";
  };
  const [textInput, setTextInput] = useState('');

    return (
        <FormControl fullWidth sx={{marginTop:"20px",}}>
          <InputLabel>Add Note</InputLabel>
          <div className='flex justify-between'>
            <OutlinedInput
              id="inputField"
              onChange={(evt:any) => setTextInput(evt.target.value)}
              className="w-11/12"
              label="Add Note"
            />
            <button onClick={addNote} className="p-3 bg-green-300 rounded-lg"><MdAdd className="text-white" size={28} /></button>
          </div>
          
        </FormControl>
    )
}
