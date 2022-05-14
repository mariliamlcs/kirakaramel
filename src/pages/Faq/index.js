import './index.css';
import estrelinha from '../../assets/estrelinha.png';
import Item from './Item';

export default function Faq(){
    return(
    <> 
    <div className="content">
        <div className='title-sections'>
        <div className='estrelinha'><img src={estrelinha}/></div>
        <h1 className='faq-title title-sections orange-text'>
        F.A.Q&nbsp;<b>Kira Kara</b></h1>
        <div className='estrelinha'><img src={estrelinha}/></div>
        </div>
        <br/>
        <hr className='linha-marrom'/>
        <hr className='linha-rose'/>
        <div className='faq-container'>
        <Item 
            question="How much does Kira control its creators and their content?"
            answer="Officia voluptate irure exercitation ad exercitation duis dolore reprehenderit do tempor nulla. Ea et esse cillum non deserunt dolore duis aliquip consequat non."
        />
        <Item 
            question="Do you set their schedules?"
            answer="Eiusmod dolor laborum et officia dolor aliqua elit officia cupidatat incididunt exercitation commodo sint."
        />
        <Item 
            question="Did you poach or buy your creators?"
            answer="Pariatur magna nisi dolor exercitation duis aliquip."
        />
        <Item 
            question="Are you planning Generations?"
            answer="Deserunt excepteur nulla est laboris sunt nostrud commodo irure elit minim sunt aliqua id."
        />
        <Item 
            question="When did kira kara start?"
            answer="Commodo eiusmod duis adipisicing eu laboris ea tempor."
        />
        <Item 
            question="What am I allowed to upload?"
            answer="Aute adipisicing aliqua occaecat deserunt mollit."
        />
        <Item 
            question="Do we control our creators's social media?"
            answer="Aliquip voluptate minim anim elit cupidatat aute laborum sint pariatur enim."
        />
        <Item 
            question="What does kira kara provide their creators?"
            answer="Voluptate do consequat velit eu eu commodo nostrud."
        />
        </div>
    </div>
    </>
    )
}