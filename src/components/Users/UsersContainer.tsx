import React, { useEffect, useCallback, useState } from 'react'
import Users from './Users'
import { useDispatch, useSelector } from 'react-redux'
import { setUsers, addNewUserData } from '../../Redux/usersPageReducer'
import { Modal,Container} from '@material-ui/core'
import AddNewUserForm from '../AddNewUserForm/AddUserForm'
import { AppStateType } from '../../Redux/store'
import Loading from '../common/Loading/Loading'


type usersContainerPropsType = {

}

const UsersContainer: React.FC<usersContainerPropsType> = () => {

    const dispatch = useDispatch()
    const users = useSelector((store: AppStateType) => store.usersPage.users)
    const isLoading = useSelector((store: AppStateType) => store.usersPage.loading)

    const [isNewUserForm, setNewUserForm] = useState<boolean>(false)

    useEffect(() => {
        dispatch(setUsers())
    }, [dispatch])
      

    const addNewUser = useCallback((firstName, lastName, email) => {
        dispatch(addNewUserData(firstName, lastName, email))
    }, [dispatch])

    const showNewUserForm = useCallback(() => {
        setNewUserForm(true)
    }, [setNewUserForm])


    const handleClose = useCallback(() => {
        setNewUserForm(false)
    }, [setNewUserForm])

    
    return <>
      <Container maxWidth= {false} style={{ backgroundColor: '#f5f5f5', padding:60, minHeight: '100vh'}}>
        <Modal
            open={isNewUserForm}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description">
          {<><AddNewUserForm sendFormData={addNewUser} /></>}
        </Modal>
        {isLoading ? <Loading />
        :<Users addUser={showNewUserForm} users = {users}/>}
        
      </Container>
        
    </>
}


export default UsersContainer