import React, { useState } from 'react'
import Input from './components/Input'
import Entries from './components/Entries'

export default function Main() {
    const [entries, setEntries] = useState([]);
    return (
        <React.Fragment>
            <Input todos={entries} setter={setEntries}/>
            <br />
            <Entries todos={entries} setter={setEntries}/>
        </React.Fragment>
    )
}
