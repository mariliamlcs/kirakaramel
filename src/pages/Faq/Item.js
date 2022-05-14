import Collapsible from 'react-collapsible';

export default function itemFAQ({question, answer}){
    return(
    <>
     <Collapsible trigger={question}>
            <div className='resposta'>
                {answer}
            </div>
        </Collapsible>   
    </>
    )
}