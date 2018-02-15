import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'

class Card extends Component {
  static propTypes = {
    cardDetails: PropTypes.object.isRequired,
    updateCardContent: PropTypes.func.isRequired,
    parentId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
  }
  
  render() {
    return (
      <div className="card" style={{ backgroundColor: '#f7f7f7', marginBottom: '5px'}}>
        <TextField
          name="card"
          value={this.props.cardDetails.cardContent}
          underlineStyle={{ border: 'none' }}
          multiLine={true}
          fullWidth={true}
          style={{padding: '0 5px', boxSizing: 'border-box'}}
          rowsMax={5}
          onChange={this.props.updateCardContent.bind(this, this.props.id, this.props.parentId)}
        />
      </div>
    )
  }
}

export default Card;
