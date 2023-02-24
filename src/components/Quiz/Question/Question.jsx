import { styled } from '@mui/material/styles';

export const Question = ({quiz, questionIndex, points})=>{

    const Header = styled('div')({
        backgroundColor: '#162447',
        padding: '1rem',
        marginBottom: '1.5rem',
        color: '#FFF',
        fontSize: '1rem',
    });

    return (
        <Header>
            <p>Score {points}</p>
            <p>{questionIndex} / {quiz.length}</p>
            <h2 dangerouslySetInnerHTML={{ __html: quiz[questionIndex]?.question }}></h2>
        </Header>
    )
}