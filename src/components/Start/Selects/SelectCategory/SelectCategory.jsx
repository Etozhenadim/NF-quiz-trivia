import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCategories} from "../../../../features/reducers/categories";


export const SelectCategory =({idCategory, setIdCategory})=>{
    const [categories, setCategories] = useState(null)
    const dispatch =useDispatch();
    const data = useSelector(state=> state.categories.data)
    const error = useSelector(state=>state.categories.error)

    useEffect(()=>{
        dispatch(fetchCategories())
    }, [])

    useEffect(()=>{
        setCategories(data)
    }, [data])

    if (error) {
        return <div>Error: {error}</div>;
    }
    const handleChange = (event) => {
        setIdCategory(event.target.value);
    };
    return(
        <>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Categories"
                        value={idCategory}
                        onChange={handleChange}
                    >
                        {categories && categories.map(categorie=>(
                            <MenuItem value={categorie.id}>{categorie.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        </>
    )
}