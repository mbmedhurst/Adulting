import React from 'react'
import './Dashboard.css'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import 'typeface-roboto'
import MenuBar from '../../components/MenuBar'
import ProgressChart from '../../components/ProgressChart'
import SquadGoals from '../../components/SqualGoals/SquadGoals'
import BonusChores from '../../components/BonusChores'

const useStyles = makeStyles(theme => ({
  mainCon: {
    backgroundColor: '#E4ECF2',
    boxShadow: 'none',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 50,
    paddingRight: 50,
    height: 768

  },
  date: {
    textAlign: 'center'
  },
  root: {
    backgroundColor: '#153B69',
    padding: theme.spacing(0, 0)
  }
}))

export default function Dashboard () {
  const classes = useStyles()

  return (
    <div className={classes.mainCon}>
      <MenuBar />
      <Grid container id='dashContainer' spacing={3} style={{ textAlign: 'center', width: 'auto', marginTop: '40px', marginBottom: '20px' }}>
        <Grid item id='progressChartContainer' xs={12} style={{ marginBottom: '10px' }}>
          <Paper className={classes.root}>
            <Grid item id='progressHead' xs={12} style={{ height: '50px', color: 'white', fontFamily: 'roboto', fontSize: '25px', textAlign: 'left' }}>
              <p style={{ margin: '0px', padding: '10px' }}>Progress Chart</p>
            </Grid>
            <Grid item id='progressBody' xs={12} style={{ height: '200px', backgroundColor: 'white' }} >
              <ProgressChart />
            </Grid>
          </Paper>
        </Grid>
        <Grid item id='squadGoalsContainer' xs={12} md={12}>
          <SquadGoals />
        </Grid>
      </Grid>
    </div>
  )
}
