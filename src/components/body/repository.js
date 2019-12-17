import React from 'react';
// import axios from 'axios';
// import { connect } from 'react-redux';
// import { addRepository } from '../../actions';
import FilterComponent from './repository/filter';
import ProgressComponent from './repository/progress';
import ItemComponent from './repository/item';

class RepositoryComponent extends React.Component {
  // componentDidMount() {
  //   axios.get('https://api.github.com/users/Tnmy1991/repos')
  //   .then(res => {
  //     res.data.forEach( elem => {
  //       let repo = {
  //         id: elem.id,
  //         name: elem.name,
  //         description: elem.description,
  //         language: elem.language,
  //         repo_type: "Public"
  //       };
  //       dispatch(addRepository(repo))
  //     });
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   });
  // }

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