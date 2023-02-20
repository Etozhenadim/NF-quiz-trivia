export const Finish = ({points})=>{
    const refreshPage = () => window.location.reload();
    return (
        <>
            <h2>Game is finished</h2>
            <h2> You have {points} out of 10</h2>
            <button onClick={refreshPage}>Retry</button>
        </>
    )
}