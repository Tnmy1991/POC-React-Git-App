import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class RepositoryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'All',
      language: 'All'
    };
  }

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
          <TextField
            id="outlined-secondary"
            variant="outlined"
            className={classes.searchbox}
          />
        </Grid>
        <Grid item xs={2}>
          <FormControl variant="filled" className={classes.filterbytype}>
            <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={type}
            onChange={(e) => this.handleRepoType(e, this)}
            renderValue={value => `Type: ${value}`}
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
          <FormControl variant="filled" className={classes.filterbytype}>
            <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={language}
            onChange={(e) => this.handleLanguage(e, this)}
            renderValue={value => `Type: ${value}`}
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

export default RepositoryComponent;