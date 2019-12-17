import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const ColorLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: '#b2dfdb',
  },
  barColorPrimary: {
    backgroundColor: '#00695c',
  },
})(LinearProgress);

class ProgressComponent extends React.Component {
  render() {
    const { classes } = this.props;
    
    return(
      <ColorLinearProgress className={classes.progressbar}/>
    );
  }
}

export default ProgressComponent;