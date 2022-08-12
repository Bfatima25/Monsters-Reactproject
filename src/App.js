//import { Component } from 'react';
import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

// functional Components
const App = () => {
  const [searchField, setSearchField] = useState(''); //[value, setValue]
  const [title, setTitle] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setTitle(searchFieldString);
  };

  const onTitleChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox 
        className='monsters-search-box' 
        onChangeHandler={onSearchChange} 
        placeholder='search monsters' 
      />
      <br />
      <SearchBox 
        className='title-search-box' 
        onChangeHandler={onTitleChange} 
        placeholder='search monsters' 
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// Component = the entire app lives on this. Class Component
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then((users) => this.setState(() => {
  //       return { monsters: users }
  //     }
  //     ));
  // }

//   // Optimization
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   }

//   render() {
//     // Optimization
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//     // Component Props
//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolex</h1>

//         <SearchBox 
//           className='monsters-search-box' 
//           onChangeHandler={onSearchChange} 
//           placeholder='search monsters' />
//         <CardList monsters={filteredMonsters} /> 
//       </div>
//     );
//   }
// }

export default App;
