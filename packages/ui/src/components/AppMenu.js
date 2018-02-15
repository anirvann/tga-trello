import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import { List, ListItem } from 'material-ui/List';
import ContentAdd from 'material-ui/svg-icons/content/add';

const styles = {
    icon: {
        backgroundColor: '#ff8a65',
        color: '#fff',
        padding: '10px'
    },
    list: {
        width: '200px'
    }
};
class AppMenu extends Component {
  render() {
    return <IconMenu iconButtonElement={<IconButton style={styles.icon}>
            <ContentAdd color={'#FFFFFF'} />
          </IconButton>}>
        <List>
          <ListItem style={styles.list} primaryText="Create Board" secondaryText="A board is made up of cards ordered on lists. Use it to manage projects, track information, or organize anything." />
        </List>
      </IconMenu>;
  }
}

export default AppMenu;
