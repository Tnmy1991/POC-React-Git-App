import React from 'react';
import FilterComponent from './repository/filter';
import ProgressComponent from './repository/progress';
import ItemComponent from './repository/item';

class RepositoryComponent extends React.Component {
  render() {
    const { classes } = this.props;
    
    return(
      <React.Fragment>
        <FilterComponent classes={classes}></FilterComponent>
        <ProgressComponent classes={classes}></ProgressComponent>
        <ItemComponent classes={classes}></ItemComponent>
        <ItemComponent classes={classes}></ItemComponent>
        <ItemComponent classes={classes}></ItemComponent>
        <ItemComponent classes={classes}></ItemComponent>
        <ItemComponent classes={classes}></ItemComponent>
      </React.Fragment>
    );
  }
}

export default RepositoryComponent;