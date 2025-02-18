import React, { useContext, useState } from 'react'
import Home from '@material-ui/icons/Home'
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import ClearIcon from '@material-ui/icons/Clear'
import Fab from '@material-ui/core/Fab'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Button from '@material-ui/core/Button'
import ChoresContext from '../../utils/ChoresContext'
import randomColor from 'randomcolor'

const useStyles = makeStyles(theme => ({

  iconsright: {
    backgroundColor: '#153B69',
    color: '#E4ECF2',
    marginRight: 10,
    height: 48,
    width: 48,
    display: 'inline-flex'
  },

  // unfocused text field - label text
  cssLabel: {
    color: 'white'
  },

  // unfocused text field - input text
  cssInput: {
    color: 'white'
  },

  // text field - bottom border line
  cssUnderline: {
    borderBottom: '1px solid white',
    '&$cssFocused': {
      borderBottom: '2px solid #FFE200'
    }
  },

  // focused text field - label and input text
  cssFocused: {
    color: '#FFE200 !important',
    fontWeight: 'bold'
  }

}))

const ChildrenForm = _ => {
  const classes = useStyles()
  const { childArr, addChildren } = useContext(ChoresContext)
  const [inputs, setInputs] = useState([{ name: null, totalPoints: 0, color: '' }])

  const handleChange = (i, event) => {
    const names = [...inputs]
    names[i].name = event.target.value
    names[i].totalPoints = 0
    names[i].color = randomColor({ luminosity: 'dark' })
    setInputs(names)
  }

  const handleAdd = _ => {
    const names = [...inputs]
    names.push({ name: null })
    setInputs(names)
  }

  const handleRemove = (i) => {
    const names = [...inputs]
    names.splice(i, 1)
    setInputs(names)
  }

  return (
    <>
      <div>
        <Link className={classes.link} to='/Dashboard'>
          <IconButton className={classes.iconsright}>
            <Home />
          </IconButton>
        </Link>
      </div>

      <Container style={{ marginTop: '60px', marginLeft: '200px', marginRight: '200px', backgroundColor: '#153B69', width: 'auto', maxWidth: '100%', textAlign: 'center' }} component='main' maxWidth='xs'>
        <CssBaseline />
        <Typography style={{ fontFamily: 'roboto', fontSize: '25px', fontWeight: 'bold', color: 'white' }}>TELL US ABOUT YOUR SQUAD
        </Typography>
        <Typography style={{ marginTop: '30px', marginBottom: '25px', textAlign: 'center', color: 'white', fontFamily: 'roboto', fontWeight: 'bold', fontSize: '18px' }} variant='h6' gutterBottom>
        Add Children
          <Fab style={{ minHeight: '0', height: '30px', width: '30px', color: '#153B69', backgroundColor: '#FFBA00', marginLeft: '10px' }} aria-label='Add' onClick={() => handleAdd()}>
            <AddIcon />
          </Fab>
          <br />
        </Typography>

        {inputs.map((input, idx) =>
          (
            <Grid container style={{ marginTop: '25px' }} spacing={3} key={`${input}-${idx}`}>
              <Grid item xs={10} sm={10}>
                <TextField
                  classes={{ label: 'label' }}
                  required
                  id={`${idx}`}
                  label={`Child ${idx + 1} Name:`}
                  fullWidth
                  value={input.name || ''}
                  onChange={e => handleChange(idx, e)}
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused
                    }
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssInput,
                      focused: classes.cssFocused,
                      underline: classes.cssUnderline
                    }
                  }}
                />
              </Grid>

              <Grid item xs={2} sm={2} style={{ paddingTop: '15px' }}>
                <Fab style={{ color: '#ff0000', fontWeight: 'bold', backgroundColor: '#153B69', marginLeft: '0px' }} aria-label='Delete' onClick={() => handleRemove(idx)}>
                  <ClearIcon />
                </Fab>

              </Grid>
            </Grid>
          )
        )}

        <Button
          type='button'
          fullWidth
          variant='contained'
          style={{ marginTop: '50px', marginBottom: '50px', width: '300px', backgroundColor: '#968AF2', color: 'white', fontFamily: 'roboto', fontWeight: 'bold', fontSize: '20px' }}
          className={classes.submit}
          onClick={_ => addChildren(inputs)}
        >
        Submit
        </Button>
      </Container>
    </>
  )
}

export default ChildrenForm
