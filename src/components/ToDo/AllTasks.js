import React, { Component } from 'react'
import {Typography,Grid,Paper,Button } from '@material-ui/core';
import {AddCircleOutline,Delete} from '@material-ui/icons';
import Task from './Task'

export class AllTasks extends Component {
    
    style={
        
        root: {
            flexGrow: 1,
            margin:'30px auto',
          },
          title:{
            paddingTop:'10px',
            marginBottom:'20px',
            backgroundColor:'gray',
          },
          paper: {
           // padding: theme.spacing(2),
            margin: 'auto',
            maxWidth: '65%',
          },
          buttons:{
            margin:' 20px auto 0px',
          },
          tasks:{
            padding:'10px',
            margin:'0px auto',
            marginTop:'20px',
            width:'100%',
            border:'1px silver solid',
          },
    }
    
    render() {
      const {tasks, handleShowAddTask, handleDeleteAllTask, handleDeleteTask, handleUpdateTast }=this.props;
      const disable=tasks.length===0;
        return (
            <div style={this.style.root}>
                <Paper style={this.style.paper} >
                    <Grid item xs={12} sm container >
                        <Grid item xs style={this.style.title}>
                            <Typography gutterBottom variant="h4">
                                TODO APP
                            </Typography>
                        </Grid>
                        <Grid container spacing={5} style={this.style.buttons}>
                            <Grid item>
                                <Button variant="contained" color="primary"  onClick={handleShowAddTask} ><AddCircleOutline/></Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="secondary"  disabled={disable} onClick={handleDeleteAllTask}><Delete/></Button>
                            </Grid> 
                        </Grid>
                        
                        <Paper style={this.style.tasks}>
                            {
                              !tasks.length? (
                                <div>
                                  <Typography gutterBottom variant="h5">
                                    there is no task in the list 
                                  </Typography>
                                </div>)
                              :(tasks.map(task=><Task 
                                key={task.id} 
                                task={task}
                                handleDeleteTask={handleDeleteTask}
                                handleUpdateTast={handleUpdateTast}
                                /> ) )
                            }
                        </Paper>
                    </Grid> 
                </Paper>
            </div>
        )
    }
}

export default AllTasks