import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class ItemComponent extends React.Component {
  render() {
    const { classes } = this.props;

    return(
      <Paper className={classes.repos}>
        <Typography variant="h5" component="h3" className={classes.repotitle}>
          This is a sheet of paper.
        </Typography>
        <Typography component="p" className={classes.reposummary}>
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </Paper>
    );
  }
}

export default ItemComponent;