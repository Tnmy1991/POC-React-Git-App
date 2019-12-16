import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ProfileComponent from './body/profile';
import RepositoryComponent from './body/repository';

class BodyComponent extends React.Component {
  render() {
    const { classes } = this.props;

    return(
      <Grid container>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <ProfileComponent classes={classes}></ProfileComponent>
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper}>
            <RepositoryComponent classes={classes}></RepositoryComponent>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default BodyComponent;