import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

class FilterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'All',
      language: 'All',
      search: null
    };
  }

  handleSearch(event, ref) {
    let search = event.target.value;
    ref.setState({
      search: search
    })
  };

  handleRepoType(event, ref) {
    let type = event.target.value;
    ref.setState({
      type: type
    })
  };

  handleLanguage(event, ref) {
    let language = event.target.value;
    ref.setState({
      language: language
    })
  };

  render() {
    const { classes } = this.props;
    const { type, language } = this.state;
    
    return(
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <BootstrapInput 
            className={classes.searchbox} 
            placeholder="Find a repository…" 
            onChange={(e) => this.handleSearch(e, this)}
            />
        </Grid>
        <Grid item xs={2}>
          <FormControl className={classes.filterbytype}>
            <Select
              value={type}
              onChange={(e) => this.handleRepoType(e, this)}
              renderValue={value => `Type: ${value}`}
              input={<BootstrapInput />}
            >
              <MenuItem value={'All'}>All</MenuItem>
              <MenuItem value={'Public'}>Public</MenuItem>
              <MenuItem value={'Private'}>Private</MenuItem>
              <MenuItem value={'Sources'}>Sources</MenuItem>
              <MenuItem value={'Forks'}>Forks</MenuItem>
              <MenuItem value={'Archived'}>Archived</MenuItem>
              <MenuItem value={'Mirrors'}>Mirrors</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <FormControl className={classes.filterbytype}>
            <Select
              value={language}
              onChange={(e) => this.handleLanguage(e, this)}
              renderValue={value => `Type: ${value}`}
              input={<BootstrapInput />}
            >
              <MenuItem value={'All'}>All</MenuItem>
              <MenuItem value={'JavaScript'}>JavaScript</MenuItem>
              <MenuItem value={'HTML'}>HTML</MenuItem>
              <MenuItem value={'CSS'}>CSS</MenuItem>
              <MenuItem value={'PHP'}>PHP</MenuItem>
              <MenuItem value={'Python'}>Python</MenuItem>
              <MenuItem value={'TypeScript'}>TypeScript</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    );
  }
}

export default FilterComponent;