import React, { useContext, useState, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import ChoresContext from '../../utils/ChoresContext'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import AddKidChores from '../AddKidChores'
import Fab from '@material-ui/core/Fab'
import Icon from '@material-ui/core/Icon'
import DeleteIcon from '@material-ui/icons/Delete'
import AddIcon from '@material-ui/icons/Add'
import Chores from '../../utils/Chores.js'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

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
    minWidth: 300
  },
  editIcon: {
    color: 'white',
    height: 20,
    width: 20
  },
  editBtn: {
    backgroundColor: '#153B69',
    minHeight: 0,
    height: 30,
    width: 30
  },
  delIcon: {
    color: 'white',
    height: 20,
    width: 20
  },
  delBtn: {
    backgroundColor: "#60B0F5",
    minHeight: 0,
    height: 30,
    width: 30
  },
  taskEdit: {
    border: '1px solid #153B69',
    borderRadius: '4px',
    width: '90px'
  },
  addBtn: {
    backgroundColor: '#FFBA00',
    minHeight: 0,
    height: 30,
    width: 30,
  },
  addIcon: {
    color: 'white',
    height: 20,
    width: 20
  },
  textField: {
    backgroundColor: '#dce2e9',
    width: '350px'
  }
}))

const AddBonusChores = _ => {
  let childId

  const {
    childArr,
    addBonusChore,
    assignBonusChore,
    deleteAChore,
    choresArr
  } = useContext(ChoresContext)
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick  = (event)  => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose  = () => {
    setAnchorEl(null)
  }

  const [addView, toggleAddView] = useState(false)
  const [editing, updateEdits] = useState({
    id: false
  })

  const handleUpdateChange = event => {
    setCurrentChore({ ...currentChore, [event.target.id]: event.target.value })
  }

  const [currentChore, setCurrentChore] = useState({
    name: '',
    points: null,
    isCompleted: ''
  })

  const _choreName = useRef()
  const _chorePoints = useRef()
  const _choreComplete = useRef()

  // const updateAChore = event => {
  //   console.log(_choreName.current.value)

  //   let totalPoints
  //   const updatedChore = {
  //     name: _choreName.current.value,
  //     points: parseInt(_chorePoints.current.value),
  //     isCompleted: _choreComplete.current.value === 'Completed'
  //   }

  //   Chores.updateChore(event.currentTarget.id, updatedChore)
  //     .then(_ => {
  //       if (updatedChore.isCompleted) {
  //         Chores.getOneChild(childId)
  //           .then(({ data }) => {
  //             Chores.updateChild(childId, {
  //               totalPoints: data.totalPoints + updatedChore.points
  //             })
  //               .then(_ => {
  //                 window.location.reload()
  //               })
  //               .catch(e => console.log(e))
  //           })
  //           .catch(e => console.log(e))
  //       } else {
  //         window.location.reload()
  //       }
  //     })
  //     .catch(e => console.log(e))
  // }

  // const toggleEdit = (event, id) => {
  //   if (!editing[id]) {
  //     const selectedChoreToUpdate = child.chores.filter(
  //       chore => chore._id === event.currentTarget.id
  //     )[0];

  //     setCurrentChore({
  //       ...currentChore,
  //       name: selectedChoreToUpdate.name,
  //       points: selectedChoreToUpdate.points,
  //       isCompleted: selectedChoreToUpdate.isCompleted
  //         ? "Completed"
  //         : "Not Completed"
  //     });
  //   }

  //   updateEdits({
  //     ...editing,
  //     [id]: !editing[id]
  //   });
  // };

  const toggleThenAddChore = event => {
    toggleAddView(!addView)

    if (addView) {
      addBonusChore(event)
    }
  }


  return (
    <div>
      <Paper style={{ marginTop: '32px' }} className={classes.root}>
        <Grid
          container
          spacing={2}
          style={{
            height: '60px',
            color: 'white',
            fontFamily: 'roboto',
            fontSize: '25px',
            textAlign: 'left'
          }}
        >
          <p
            style={{
              color: 'white',
              padding: 10,
              marginTop: 0,
              marginLeft: 12,
              fontFamily: 'roboto',
              fontSize: '25px'
            }}
          >
            Bonus Chores{' '}
          </p>
        </Grid>

        {!addView ? (
          <Grid
            item
            id='bonusChoresBody'
            xs={12}
            style={{
              height: '400px',
              backgroundColor: 'white',
              overflowY: 'auto'
            }}
          >
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell style={{ color: "#153B69", width: "250px",}} >
                    Task
                  </TableCell>
                  
                  <TableCell style={{ color: "#153B69", width: "120px", }} align="left" >
                    Cheddar
                  </TableCell>
                  
                  <TableCell style={{ color: "#153B69", width: "150px",}} align="center" >
                    Claim
                  </TableCell>

                  <TableCell style={{ color: "#153B69", width: "53px", }} align="left" >
                  </TableCell>

                  <TableCell style={{ color: "#153B69", width: "53px", }} align="left" >
                  </TableCell>


                  
                  
                </TableRow>
              </TableHead>
              <TableBody style={{ maxHeight: '100%', overflow: 'hidden' }}>
                <>
                  {choresArr
                    ? choresArr
                      .filter(chore => chore.isBonus && !chore.isClaimed)
                      .map((chore, i) => {
                        // childId = chore.child;
                        // setUpdateForm({...updateForm, updateName: chore.name, updatePoints: chore.points, updateIsCompleted: chore.isCompleted.toString()})
                        return editing[i] ? (
                          <TableRow
                            style={{ maxHeight: '100%', overflow: 'hidden' }}
                          >
                            <TableCell
                              style={{
                                color: '#153B69',
                                width: '20px',
                                paddingRight: '10px'
                              }}
                            >
                              <input
                                id='name'
                                className={classes.taskEdit}
                                ref={_choreName}
                                onChange={handleUpdateChange}
                                value={currentChore.name}
                              />
                            </TableCell>
                            <TableCell
                              style={{
                                color: '#153B69',
                                width: '20px',
                                paddingRight: '10px'
                              }}
                            >
                              <input
                                id='points'
                                className={classes.taskEdit}
                                ref={_chorePoints}
                                onChange={handleUpdateChange}
                                value={currentChore.points}
                              />
                            </TableCell>
                            {/* <TableCell
                              style={{
                                color: '#153B69',
                                width: '20px',
                                paddingRight: '10px'
                              }}
                            > */}
                              {/* Might have to comment out the above tablecell */}
                              <TableCell
                                style={{
                                  color: "#153B69",
                                  width: "20px",
                                  paddingRight: "10px"
                                }}
                              >
                                <input
                                  id="name"
                                  className={classes.taskEdit}
                                  ref={_choreName}
                                  onChange={handleUpdateChange}
                                  value={currentChore.name}
                                />
                              </TableCell>
                              <TableCell
                                style={{
                                  color: "#153B69",
                                  width: "20px",
                                  paddingRight: "10px"
                                }}
                              >
                                <input
                                  id="points"
                                  className={classes.taskEdit}
                                  ref={_chorePoints}
                                  onChange={handleUpdateChange}
                                  value={currentChore.points}
                                />
                              </TableCell>
                            

                              <TableCell>
                                <Fab
                                  id={chore._id}
                                  assignedTo={chore.child}
                                  // onClick={event => {
                                  //   toggleEdit(event, i);
                                  //   updateAChore(event);
                                  // }}
                                  color="secondary"
                                  aria-label="Edit"
                                  className={classes.editBtn}
                                >
                                  <Icon className={classes.editIcon}>
                                    edit_icon
                                  </Icon>
                              </Fab>
                            </TableCell>

                              <TableCell>
                                <Fab
                                  aria-label="Delete"
                                  className={classes.delBtn}
                                >
                                  <DeleteIcon className={classes.delIcon} />
                                </Fab>
                              </TableCell>
                            </TableRow>
                          ) : (
                            <TableRow
                              style={{ maxHeight: "100%", overflow: "hidden" }}
                            >
                               <TableCell
                              style={{
                                color: '#153B69',
                                width: '20px',
                                paddingRight: '10px'
                              }}
                            >
                              {chore.name}
                            </TableCell>
                            <TableCell
                              style={{
                                color: '#FF9300',
                                width: '20px',
                                paddingRight: '10px'
                              }}
                            >
                              {chore.points}
                            </TableCell>

                            {/* ClaimButton */}
                            <TableCell align='left'>
                              <Button
                                aria-controls='simple-menu'
                                aria-haspopup='true'
                                onClick={handleClick}
                              >
                                <Fab
                                  size='small'
                                  aria-label='Add'
                                  className={classes.addBtn}
                                >
                                  <AddIcon className={classes.addIcon} />
                                </Fab>
                              </Button>

                              <Menu
                                id='customized-menu'
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                              >
                                {childArr.map(child => (
                                  <MenuItem
                                    id={child._id}
                                    choreid={chore._id}
                                    onClick={event => {
                                      assignBonusChore(event)
                                      handleClose()
                                    }}
                                  >
                                    {child.name}
                                  </MenuItem>
                                ))}
                              </Menu>
                            </TableCell>

                            {/* ClaimButtonEnd */}

                            <TableCell
                              style={{
                                paddingRight: '5px',
                                paddingLeft: '5px'
                              }}
                            >
                              <Fab
                                id={chore._id}
                                // onClick={event => toggleEdit(event, i)}
                                color='secondary'
                                aria-label='Edit'
                                className={classes.editBtn}
                              >
                                <Icon className={classes.editIcon}>
                                    edit_icon
                                </Icon>
                              </Fab>
                            </TableCell>

                            <TableCell style={{ paddingLeft: '5px' }}>
                              <Fab
                                id={chore._id}
                                onClick={event =>
                                  deleteAChore({
                                    id: chore._id,
                                    childId: chore.child,
                                    isBonus: chore.isBonus
                                  })
                                }
                                aria-label='Delete'
                                className={classes.delBtn}
                              >
                                <DeleteIcon className={classes.delIcon} />
                              </Fab>
                            </TableCell>
                          </TableRow>
                        )
                      })
                    : null // null when there are no chores
                  }
                </>
              </TableBody>
            </Table>
          </Grid>
        ) : (
          <AddKidChores />
        )}
      </Paper>
      <div style={{ textAlign: "center", backgroundColor: '#F5F5F5' }}>
        <Fab
          className={classes.fab}
          onClick={toggleThenAddChore}
          style={{
            padding: "auto",
            color: "white",
            backgroundColor: "#153B69",
            marginTop: "15px",
            marginBottom: "15px",

          }}
        >
          <AddIcon />
        </Fab>
      </div>
    </div>
  )
}

export default AddBonusChores;
