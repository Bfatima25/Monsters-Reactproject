//import { Component } from 'react';

import Card from '../card/card.component';
import './card-list.styles.css';

// functional Component
const CardList = ({ monsters }) => (
    <div className='card-list'>
        {monsters.map((monster) => {
            return <Card monster={monster} />;
        })}
    </div>
);

// Class Component
// class CardList extends Component {
//     render() {
//         const { monsters } = this.props;

//         return (
//             <div className='card-list'>
//                 {monsters.map((monster) => {
//                     return <Card monster={monster} />;
//             })}
//             </div>
//         );
//     }
// }

export default CardList;