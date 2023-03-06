import * as React from 'react';
import Input from '@mui/material/Input';

export const InputNumbers=({number, setNumber})=>{
    return(
            <Input
                color="neutral"
                size="lg"
                variant="outlined"
                defaultValue={10}
                value={number}
                onChange={e=> setNumber(e.target.value)}
            />
    )
}