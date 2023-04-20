import './FinishBlock.scss'
import Button from "@mui/material/Button";

export const FinishBlock = ({points})=>{
    const refreshPage = () => window.location.reload();
    return (
        <div className='finishBlock'>
            <h2>Game is finished</h2>
            <h2> You have {points} out of 10</h2>
            <Button sx={{ width: '100%', marginTop: '20px'}} variant="contained" onClick={refreshPage}>Start</Button>
        </div>
    )
}