import * as React from 'react';
import Box from '@mui/joy/Box';
import Input from '@mui/joy/Input';

export const InputNumbers=({number, setNumber})=>{
    return(
        <Box>
            <Input
                color="neutral"
                size="lg"
                variant="outlined"
                defaultValue={10}
                value={number}
                onChange={e=> setNumber(e.target.value)}
            />
        </Box>
    )
}