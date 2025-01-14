import React, { useContext } from 'react'
import 'typeface-roboto'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import ChoresContext from '../../utils/ChoresContext'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

function TabContainer ({ children, dir }) {
  return (
    <Typography component='div' dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {}
  },

  link: {
    textDecoration: 'none'
  },

  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '50vh'
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },

  // register and sign-in tabs
  tabs: {
    color: '#c12006',
    indicatorColor: '#c12006'
  },

  // focused and unfocused text field label
  cssLabel: {
    color: 'white',
    '&$cssFocused': {
      color: '#FFBA00',
      fontWeight: 'bold'
    }
  },

  // unfocused text field outline
  notchedOutline: {
    borderColor: 'white',
    border: '1 px'
  },

  // unfocused and focused text field outline
  cssOutlinedInput: {
    color: 'white',
    '&$cssFocused $notchedOutline': {
      borderColor: `#FFBA00 !important`,
      border: '2px solid'
    },
    // this contols the hover color of the text fields
    '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
      borderColor: '#FFBA00'
    }
  },

  // focused input text
  cssFocused: {
    color: '#FFBA00'
  },

  // sign-up and sign-in buttons
  submit: {
    margin: theme.spacing(3, 0, 2)
  },

  container: {
    // marginTop: 100,
    // marginBottom: 100,
    width: 'auto'
    // backgroundColor: '#153B69',
  }
}))

const SignUpForm = _ => {
  const classes = useStyles()
  const theme = useTheme()
  const [value, setValue] = React.useState(1)

  function handleChange (event, newValue) {
    setValue(newValue)
  }

  function handleChangeIndex (index) {
    setValue(index)
  }

  const {
    handleInputChange,
    name,
    userName,
    password,
    email,
    registerUser,
    _userName,
    _userPassword,
    loginUser,
    isLoggedIn
  } = useContext(ChoresContext)

  return (
    <div
      style={{
        marginTop: '100px',
        textAlign: 'center'
      }}
    >
      <img alt='adulting logo' src='logo.png' style={{ margin: 30 }} />

      <Container component='main' maxWidth='xs' className={classes.container}>
        <CssBaseline />
        <AppBar position='static' color='default'>
          <Tabs
            className={classes.tabs}
            value={value}
            onChange={handleChange}
            indicatorColor={classes.indicator}
            centered
          >
            <Tab label='Register' />
            <Tab label='Sign In' />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <div className={classes.paper}>
              {/* <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar> */}
              {/* <Typography
                className={classes.header}
                component="h1"
                variant="h5"
              >
                Sign up
              </Typography> */}
              <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete='name'
                      name='Name'
                      variant='outlined'
                      required
                      fullWidth
                      id='name'
                      value={name}
                      onChange={handleInputChange}
                      label='Name'
                      autoFocus
                      InputLabelProps={{
                        classes: {
                          root: classes.cssLabel,
                          focused: classes.cssFocused
                        }
                      }}
                      InputProps={{
                        classes: {
                          root: classes.cssOutlinedInput,
                          focused: classes.cssFocused,
                          hover: classes.cssHover,
                          notchedOutline: classes.notchedOutline
                        },
                        inputMode: 'numeric'
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete='userName'
                      name='userName'
                      variant='outlined'
                      required
                      fullWidth
                      id='userName'
                      value={userName}
                      onChange={handleInputChange}
                      label='User Name'
                      autoFocus
                      InputLabelProps={{
                        classes: {
                          root: classes.cssLabel,
                          focused: classes.cssFocused
                        }
                      }}
                      InputProps={{
                        classes: {
                          root: classes.cssOutlinedInput,
                          focused: classes.cssFocused,
                          notchedOutline: classes.notchedOutline
                        },
                        inputMode: 'numeric'
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant='outlined'
                      required
                      fullWidth
                      id='email'
                      value={email}
                      onChange={handleInputChange}
                      label='Email Address'
                      name='email'
                      autoComplete='email'
                      InputLabelProps={{
                        classes: {
                          root: classes.cssLabel,
                          focused: classes.cssFocused
                        }
                      }}
                      InputProps={{
                        classes: {
                          root: classes.cssOutlinedInput,
                          focused: classes.cssFocused,
                          notchedOutline: classes.notchedOutline
                        },
                        inputMode: 'numeric'
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant='outlined'
                      required
                      fullWidth
                      name='password'
                      label='Password'
                      type='password'
                      id='password'
                      value={password}
                      onChange={handleInputChange}
                      autoComplete='current-password'
                      InputLabelProps={{
                        classes: {
                          root: classes.cssLabel,
                          focused: classes.cssFocused
                        }
                      }}
                      InputProps={{
                        classes: {
                          root: classes.cssOutlinedInput,
                          focused: classes.cssFocused,
                          notchedOutline: classes.notchedOutline
                        },
                        inputMode: 'numeric'
                      }}
                    />
                  </Grid>
                </Grid>
                {
                  <Link className={classes.link} to='/'>
                    <Button
                      onClick={registerUser}
                      type='button'
                      fullWidth
                      variant='contained'
                      style={{
                        backgroundColor: '#FFBA00',
                        color: '#c12006',
                        fontWeight: 'bold',
                        textDecoration: 'none'
                      }}
                      className={classes.submit} >
                      Sign Up
                    </Button>
                  </Link>
                }
                <Grid container justify='flex-end'>
                  {/* <Grid item>
              <Link href="/logIn" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid> */}
                </Grid>
              </form>
            </div>
          </TabContainer>

          <div className={classes.paper}>
            {/* <Avatar className={classes.avatarLogin}>
              <LockOutlinedIcon />
            </Avatar> */}
            {/* <Typography className={classes.header} component="h1" variant="h5">
              Log in
            </Typography> */}
            <form className={classes.form} noValidate>
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='_userName'
                label='User Name'
                name='userName'
                autoComplete='email'
                autoFocus
                value={_userName}
                onChange={handleInputChange}
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused
                  }
                }}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline
                  },
                  inputMode: 'numeric'
                }}
              />
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='_userPassword'
                autoComplete='current-password'
                value={_userPassword}
                onChange={handleInputChange}
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused
                  }
                }}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline
                  },
                  inputMode: 'numeric'
                }}
              />

              <Button
                type='button'
                fullWidth
                variant='contained'
                className={classes.submit}
                onClick={loginUser}
                style={{
                  backgroundColor: '#FFBA00',
                  color: '#c12006',
                  fontWeight: 'bold',
                  textDecoration: 'none'
                }}
              >
                {/* {
                isLoggedIn ? ( */}
                {/* <Link to='/childrenForm'> */}
                Sign In
                {/* </Link> */}
                {/* ) : */}
                {/* <Link to='/welcome'> */}
                {/* Log In */}
                {/* </Link>
              } */}
              </Button>
              <Grid container>
                {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */}
                {/* <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid> */}
              </Grid>
            </form>
          </div>
        </SwipeableViews>
      </Container>
    </div>
  )
}

export default SignUpForm
