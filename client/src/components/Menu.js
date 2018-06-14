import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Menu extends React.Component {
  state = { menus: [], showMenu: false }

  componentDidMount() {
    axios.get('/api/menus')
      .then( ({ data }) => this.setState({ menus: data }) )
  }

  toggleMenu = () => {
    this.setState( state => {
      return { showMenu: !state.showMenu }
    })
  }

  
  show() {
    const { menus } = this.state
    return (
      <ul>
        { menus.map( m =>
            <li key={m.id}>
              <Link to={`/menus/${m.id}`}>
                {m.name}
              </Link>
            </li>
          )
        }
      </ul>
    )
  }



  render() {
    const { showMenu } = this.state
    return (
      <div>
        <h2>Here are the menus</h2>
        <button onClick={this.toggleMenu}>
          { showMenu ? 'Hide' : 'Show' } Menu
        </button>
        { showMenu? this.show() : '' }
      </div>
    )
  }


}


export default Menu