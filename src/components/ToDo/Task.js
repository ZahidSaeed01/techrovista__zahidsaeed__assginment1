import React, { Component } from 'react'
import {Typography,Button,Grid} from '@material-ui/core'
import {AddCircleOutline,Delete} from '@material-ui/icons';

export class Task extends Component {

    render() {
        const {task,handleDeleteTask,handleUpdateTast}=this.props
        return (
            <div style={{border:'1px silver solid', padding:'10px', margin:'10px 10px'}}>
               <Grid container>
                    <Grid item style={{textAlign:'left'}} xs={12} sm={10}>
                        <Typography variant="h5">{task.title} </Typography>
                        <Typography variant="body1">{task.toDo}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} style={{padding:'5px', margin:'auto'}}>
                        <Button variant="contained"  style={{margin:'5px'}} onClick={()=>handleUpdateTast(task)}> <AddCircleOutline/></Button>
                        <Button variant="contained" color="secondary" style={{margin:'5px'}} onClick={()=>handleDeleteTask(task.id)}> <Delete/></Button>
                    </Grid>
                </Grid>
                

               
            </div>
        )
    }
}

export default Task
