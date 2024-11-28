import React from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ImageUpload from './components/imageUpload';

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: '#95d07b',
    color: 'white',
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Potato Leaf Disease Classification
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="md" className={classes.container}>
        <ImageUpload />
      </Container>
    </div>
  );
}

export default App;
