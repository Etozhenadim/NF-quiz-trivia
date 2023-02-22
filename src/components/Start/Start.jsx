
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCategories} from "../../features/reducers/categories";

export const Start = ({setStart, setIdCategory})=> {
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

    return(
        <div>
            <select name="" id="">
                {categories && categories.map(categorie=>(
                    <option>{categorie.id} {categorie.name}</option>
                ))}
            </select>
            <h1>Click to start the quiz</h1>
            <button onClick={setStart}>Click here</button>
        </div>
    )
}