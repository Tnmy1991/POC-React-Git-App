import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

class ProfileComponent extends React.Component {
  render() {
    const { classes } = this.props;

    return(
      <React.Fragment>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="https://avatars0.githubusercontent.com/u/10186035?v=4"
            title="Paella dish"
          />
        </Card>
        <Typography variant="h5" align="left" className={classes.title}>
          Tonmoy Malik
        </Typography>
        <Typography variant="h6" align="left" className={classes.username}>
          Tnmy1991
        </Typography>
      </React.Fragment>
    );
  }
}

export default ProfileComponent;