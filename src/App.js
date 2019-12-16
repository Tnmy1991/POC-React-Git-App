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
