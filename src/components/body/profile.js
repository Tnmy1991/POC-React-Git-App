import React from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import ProgressComponent from './repository/progress';
import Skeleton from '@material-ui/lab/Skeleton';

class ProfileComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: true,
      isLoading: true,
      login: null,
      name: null,
      email: null,
      location: null,
      avatar_url: null
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/tnmy1991')
    .then(res => {
      this.setState({
        error: false,
        isLoading: false,
        login: res.data.login,
        name: res.data.name,
        email: res.data.email,
        location: res.data.location,
        avatar_url: res.data.avatar_url
      });
    })
    .catch(error => {
      this.setState({
        error: true,
        isLoading: false,
      });
    });
  }

  render() {
    const { classes } = this.props;
    const { error, isLoading, name, login, email, location, avatar_url } = this.state;

    return(
      isLoading ? (
        <ProgressComponent classes={classes}></ProgressComponent>
      ) : (
        <React.Fragment>
          { error ? (
            <React.Fragment>
              <Skeleton variant="rect" width={"100%"} height={250} />
              <Box pt={0.5}>
                <Skeleton />
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {/* Avatar Url */}
              { avatar_url ? (
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    image={avatar_url}
                    title={name}
                  />
                </Card>
              ) : (
                <Skeleton variant="rect" width={"100%"} height={250} />
              ) }

              {/* Fullname */}
              { name ? (
                <Typography variant="h5" align="left" className={classes.title}>
                  {name}
                </Typography>
              ) : (
                <Box pt={0.5}>
                  <Skeleton />
                </Box>
              ) }

              {/* Username */}
              { login ? (
                <Typography variant="h6" align="left" className={classes.username}>
                  {login}
                </Typography>
              ) : (
                <Box pt={0.5}>
                  <Skeleton />
                </Box>
              ) }

              <ul className={classes.userdetails}>
                {/* Location */}
                { location ? (
                  <li>
                    <LocationOnOutlinedIcon className={classes.usericon} />
                    <span className={classes.useraddress}>{location}</span>
                  </li>
                ) : (
                  <Box pt={0.5}>
                    <Skeleton />
                  </Box>
                ) }

                {/* Email */}
                { email ? (
                  <li>
                    <EmailOutlinedIcon className={classes.usericon} />
                    <a className={classes.useremail} href={'mailto:' + email}>{email}</a>
                  </li>
                ) : (
                  <Box pt={0.5}>
                    <Skeleton />
                  </Box>
                ) }
              </ul>
            </React.Fragment>
          ) }
        </React.Fragment>
      )
    );
  }
}

export default ProfileComponent;