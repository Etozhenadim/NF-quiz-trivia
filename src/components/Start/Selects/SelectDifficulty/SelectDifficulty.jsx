import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export const SelectDifficulty =({difficulty, setDifficulty})=>{
    const difficulties =['easy', 'medium', 'hard']


    const handleChange = (event) => {
        setDifficulty(event.target.value);
    };
    return(
        <>
            <Box sx={{ width: '100%' }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Categories"
                        value={difficulty}
                        onChange={handleChange}
                    >
                        {difficulties && difficulties.map(level=>(
                            <MenuItem value={level}>{level}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        </>
    )
}