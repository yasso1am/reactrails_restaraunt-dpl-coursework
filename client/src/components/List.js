import React, {Fragment} from 'react'
import axios from 'axios'
// import Form from './Form'

class List extends React.Component {
  state = { items: [], menu: {} }

  

  componentDidMount() {

    const {id} = this.props.match.params
    axios.get(`/api/menus/${id}/items`)
      .then(res => this.setState({items: res.data}))
    axios.get(`/api/menus/${id}`)
           .then(res => this.setState({ menu: res.data }))
  }

  render() {
    const { items, menu } = this.state
    // const { menu } = this.state
    return (
      <div>
      <h2> {menu.name} </h2>
        <ul>
          { items.map( f =>
          <li key={f.id}>
          {f.name} - $ {f.price}
          </li>
          )}
        </ul>
      </div>
    )

  }
}
export default List