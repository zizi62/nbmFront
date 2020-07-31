import React from 'react'
import User from '../User/User'
import AddUserButton from '../AddUserButton/AddUserButton'
import { Grid } from '@material-ui/core'
import {usersType } from '../../Redux/usersPageReducer'

type usersPropsType = {
    addUser: () => void
    users: usersType
}

const Users: React.FC<usersPropsType> = (props) => {
    const { users, addUser } = props
  

    return <>
            <Grid container spacing={2}  alignItems="stretch">
                {users.map((us, i) => <Grid xs={3} item key={i}> <User index={i} {...us} /></Grid>)}
                <Grid xs={3} item><AddUserButton onClick={addUser} /></Grid>
            </Grid>
    </>

}


export default Users