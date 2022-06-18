import './index.css';

export default function DateGrey ({day, hour}) {
    return (
    <div class="item-agenda-grey">
    <p>{day}</p>
    <p>{hour}</p>
    </div>
    )
}
