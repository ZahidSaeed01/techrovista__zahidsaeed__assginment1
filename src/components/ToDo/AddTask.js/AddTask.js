
import React, { Component } from 'react'
import {Grid,Button,TextField} from '@material-ui/core';

import Aux from '../../../hoc/Auxx';

export class AddTask extends Component {
    
    

    render() {
        const {task ,handleChange,handleAddNewTask,modalClosed}=this.props;
        return (
            <Aux>
            <form  noValidate autoComplete="off">
               
                <h4 style={{'textAlign':'center','lineHeight':'1.6em'}}>Add NEW Task</h4>
                <hr style={{'marginBottom':'20px'}}/>
                
                <Grid container spacing={3}>
                    <Grid container justify="space-around">
                        <TextField required style={{marginTop:'10px', width:'400px'}} variant="filled" id="filled-basic" label="Title"  name="title" value={task.title} onChange={(e)=>handleChange(e)}/>
                    </Grid>
                    <Grid container justify="space-around">
                        <TextField
                            style={{marginTop:'10px',width:'400px'}}
                            id="filled-multiline-static"
                            label="Todo"
                            multiline
                            name="toDo"
                            rows={4}
                            variant="filled"
                            value={task.toDo} 
                            onChange={(e)=>handleChange(e)}
                            />
                    </Grid>
                    <Grid container justify="space-around" style={{margin:'15px 0px'}}>
                        <Button 
                            disabled={ ( !task.toDo || !task.title) } 
                            variant="contained" color="primary" 
                             
                            onClick={handleAddNewTask}
                        >ADD In List
                        </Button>
                        <Button  
                            variant="contained" color="secondary" 
                             
                            onClick={modalClosed}
                        >Close
                        </Button>
                    </Grid>
                </Grid>
            
            </form>
        </Aux>
        )
    }
}

export default AddTask

