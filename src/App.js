import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HeaderComponent from './components/header';
import BodyComponent from './components/body';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: 'black'
  },
  navBar: {
    background: '#24292e'
  },
  menuButton: {
    color: '#fff',
    fontWeight: 600,
    whiteSpace: 'nowrap'
  },
  title: {
    flexGrow: 1,
    lineHeight: '30px',
    fontSize: '26px',
    fontWeight: 600,
    color: '#24292e',
    marginTop: '20px'
  },
  username: {
    fontSize: '20px',
    fontWtyle: 'normal',
    fontWeight: '300',
    lineHeight: '24px',
    color: '#666'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none'
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '100%',
  },
  searchbox: {
    width: '100%'
  },
  filterbytype: {
    width: '100%'
  },
  filter: {
    padding: '18px',
  },
  progressbar: {
    marginTop: '10px'
  },
  repos: {
    textAlign: 'left',
    boxShadow: 'none',
    padding: '15px 0px 15px 0px',
    borderBottom: '1px solid #e1e4e8'
  },
  repotitle: {
    color: '#0366d6',
    fontWeight: 600,
    fontSize: '20px',
    marginBottom: '10px'
  },
  reposummary: {
    color: '#586069',
    fontWeight: 300,
    fontSize: '12px',
    marginBottom: '10px'
  },
  userdetails: {
    listStyle: 'none',
    marginBottom: '16px',
    paddingLeft: '22px',
    marginTop: '30px',
    fontSize: '14px'
  },
  useraddress: {
    width: '100%',
    display: 'inline-block',
    verticalAlign: 'top',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    paddingTop: '7px'
  },
  useremail: {
    width: '100%',
    display: 'inline-block',
    verticalAlign: 'top',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    paddingTop: '7px',
    textAlign: 'left',
    color: '#0366d6',
    textDecoration: 'none'
  },
  usericon: {
    marginLeft: '-22px',
    float: 'left',
    width: '16px',
    marginTop: '3px',
    color: '#6a737d',
    textAlign: 'center',
    verticalAlign: 'text-bottom',
    display: 'inline-block',
    fill: 'currentColor'
  }
}));



function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <HeaderComponent classes={classes}></HeaderComponent>
      <BodyComponent classes={classes}></BodyComponent>
    </React.Fragment>
  );
}

export default App;
