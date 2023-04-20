import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";


export const SelectNumbers=({number, setNumber})=>{
    const numbers =[5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
    return(
        <Box sx={{ width: '100%'}}>
            <FormControl fullWidth >
                <InputLabel id="demo-simple-select-label" >Number of questions</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Number of questions"
                    value={number}
                    onChange={e=> setNumber(e.target.value)}
                >
                    {numbers.map(number=>(
                        <MenuItem value={number}>{number}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}