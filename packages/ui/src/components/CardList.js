import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'material-ui/List';
import Card from './Card';
import _ from 'lodash';

export default class CardList extends Component {
  static propTypes = {
    cards: PropTypes.array,
    updateCardContent: PropTypes.func.isRequired,
    parentId: PropTypes.number.isRequired
  };

  /* shouldComponentUpdate(newProps, newState) {
    return !_.differenceWith(
      this.props.cards,
      newProps.cards,
      _.isEqual
    ).length;
  } */

  render() {
    const cards = this.props.cards.map((card, idx) => {
      return (
        <ListItem 
          key={idx}
          innerDivStyle={{padding: '0'}}
        >
          <Card
            key={idx}
            cardDetails={card}
            updateCardContent={this.props.updateCardContent}
            id={idx}
            parentId={this.props.parentId}
          />
        </ListItem>
      );
    });

    return <Fragment>{cards}</Fragment>;
  }
}
