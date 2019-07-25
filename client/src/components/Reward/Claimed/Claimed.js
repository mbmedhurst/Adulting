import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import 'typeface-roboto'
import Form from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Avatar from '@material-ui/core/Avatar'
import Hamza from '../../../assets/hamza.png'
import Jennifer from '../../../assets/jennifer.png'
import Matthew from '../../../assets/matthew.png'
import Marianna from '../../../assets/marianna.png'
import Button from '@material-ui/core/Button'


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#153B69',
    padding: theme.spacing(0, 0),
    width: 'auto',
    fontFamily: 'roboto'
  },
  table: {
    width: '100%',
    overflowX: 'auto',
    minWidth: 300,
  },
  avatar: {
    height: 30,
    width: 30,
  },
  iconLeft: {
    height: 30,
    width: 30,
  },
  textField: {
    backgroundColor: '#dce2e9',
    width: '350px'
  },
  // form - focused input text
  cssFocused: {
    color: '#153B69 !important',
    borderColor: '#153B69'
  },
  // form - focused text field outline
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `#FFBA00 !important`,
      border: '2px solid'
    }
  },
}))

const Claimed = _ => {
  const classes = useStyles()
  const [addView, toggleAddView] = useState(false)
  // const [editing, updateEdits] = useState({
  //   id: false
  // })

  return (
    <div>
      <Paper style={{ marginTop: '10px' }} className={classes.root}>
        <Grid item id='claimedChoresHead' xs={12} style={{ height: '50px', color: 'white', fontFamily: 'roboto', fontSize: '25px', textAlign: 'left' }}>
          <p style={{ margin: '0px', padding: '10px' }}>Claimed</p>
        </Grid>
        <Grid item id='claimedChoresBody' xs={12} style={{ height: '250px', backgroundColor: 'white' }}>
          {!addView ? <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell style={{ color: '#153B69', width: '70px' }}>Reward</TableCell>
                <TableCell style={{ color: '#153B69', width: '10px' }} align="left">Cheddar</TableCell>
                <TableCell style={{ color: '#153B69', width: '10px' }} align="left">Claimed By</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {rows.map(row => ( */}
              <TableRow key='row.name'>
                <TableCell component="th" scope="row">
                  $100 Cash
              </TableCell>
                <TableCell align="left" style={{ color: '#FF9300' }}>500</TableCell>
                <TableCell align="left">
                  <Avatar className={classes.iconLeft} style={{ backgroundColor: '#968AF2' }}>
                    <img className={classes.avatar} alt="Avatar" src={Marianna} />
                  </Avatar>
                </TableCell>
              </TableRow>
              <TableRow key='row.name'>
                <TableCell component="th" scope="row">
                  Really Cool Gift
              </TableCell>
                <TableCell align="left" style={{ color: '#FF9300' }}>5000</TableCell>
                <TableCell align="left">
                  <Avatar className={classes.iconLeft} style={{ backgroundColor: '#FFBA00' }}>
                    <img className={classes.avatar} alt="Avatar" src={Hamza} />
                  </Avatar>
                </TableCell>
              </TableRow>
              <TableRow key='row.name'>
                <TableCell component="th" scope="row">
                  $100 Cash
              </TableCell>
                <TableCell align="left" style={{ color: '#FF9300' }}>500</TableCell>
                <TableCell align="left">
                  <Avatar className={classes.iconLeft} style={{ backgroundColor: '#60B0F5' }}>
                    <img className={classes.avatar} alt="Avatar" src={Matthew} />
                  </Avatar>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table> :
            <div>
              <Form style={{ marginBottom: '10px', marginTop: '5px', marginRight: '10px', marginLeft: '10px', height: '200px', width: 'auto' }}>
                <p style={{ marginTop: '20px', marginBottom: '10px', textAlign: 'center', fontSize: '20px', color: '#153B69' }}>Edit Rewards</p>
                <TextField
                  id="outlined-name"
                  label="Reward Name"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssInput,
                      focused: classes.cssFocused,
                      underline: classes.cssUnderline,
                    },
                  }}
                />
                <TextField

                  id="outlined-name"
                  label="Points"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssInput,
                      focused: classes.cssFocused,
                      underline: classes.cssUnderline,
                    },
                  }}
                />
              </Form>
            </div>}

        </Grid>

      </Paper>
      <Button
        className={classes.margin}
        onClick={() => toggleAddView(!addView)}
        style={{
          paddingLeft: '50px',
          paddingRight: '50px',
          color: 'white',
          backgroundColor: '#FFBA00',
          marginTop: '20px',
          width: 'auto'
        }}>
        Edit Reward
          </Button>
    </div>
  )
}

export default Claimed