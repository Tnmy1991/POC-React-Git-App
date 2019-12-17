import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';

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
        <ul className={classes.userdetails}>
          <li>
            <LocationOnOutlinedIcon className={classes.usericon} />
            <span className={classes.useraddress}>Panchpara (Near Trikon Park), Radhadashi, Howrah 711317</span>
          </li>
          <li>
            <EmailOutlinedIcon className={classes.usericon} />
            <a className={classes.useremail} href="mailto:tonmoy.malik@gmail.com">tonmoy.malik@gmail.com</a>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default ProfileComponent;