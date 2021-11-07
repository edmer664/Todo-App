import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { MdDelete } from 'react-icons/md'
export default function Entries(props: any) {
    const { todos, setter } = props;
    const deleteEnt = (item:any) => {
        setter([...todos.filter((s: string) => s !== item)]);
        
    };
    return (
        <React.Fragment >
            <List
                className="overflow-y-auto"
                sx={{
                    width: '100%',
                    padding: '10px'
                }}
            >

                {todos.map((item: string) => (
                    <div className="flex ">
                        <ListItem className="bg-gray-200 mb-3 mt-3 ">
                            <ListItemText
                                primary={item}
                            />
                        </ListItem>
                        <button className="p-3 mb-3 mt-3 bg-red-300" onClick={() => deleteEnt(item)} >
                        <MdDelete
                            size={28}
                        />
                    </button>
                    </div>
                    )
                    
                )}
        </List>
        </React.Fragment >
    )
}
