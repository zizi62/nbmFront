import React, { useState, useCallback, ChangeEvent } from 'react'
import { makeStyles, Theme, createStyles, Button, Typography } from '@material-ui/core'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: 400,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 3,
            position: 'absolute',
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            top: `50%`,
            left: `50%`,
            transform: `translate(-50%, -50%)`
        },
        fields: {
            width: '100%'
        }
    }),
);


type AddNewUserFormPropsType = {
    sendFormData: (firstName: string, lastName: string, email: string,) => void

}

const AddNewUserForm: React.FC<AddNewUserFormPropsType> = (props) => {
    const { sendFormData } = props

    const classes = useStyles()

    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    const changeFirstName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.currentTarget.value)
    }, [setFirstName])



    const changeLastName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.currentTarget.value)
    }, [setLastName])

    const changeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }, [setEmail])



    const sendFieldsData = () => {
        sendFormData(firstName, lastName, email)
        setFirstName('')
        setLastName('')
        setEmail('')
    }


    return <>
        <ValidatorForm className={classes.root} autoComplete="off" onSubmit={sendFieldsData}>
            <Typography variant="h6" gutterBottom align='left' >Создание пользователя</Typography>
            <TextValidator className={classes.fields}
                id="outlined-basic"
                label="Имя"
                variant="outlined"
                margin="normal"
                onChange={changeFirstName}
                value={firstName} name="firstName"
                validators={['required']}
                errorMessages={['Необходимо заполнить']} />
            <TextValidator className={classes.fields}
                id="outlined-basic"
                label="Фамилия"
                variant="outlined"
                margin="normal"
                onChange={changeLastName}
                value={lastName}
                name="lastName"
                validators={['required']}
                errorMessages={['Необходимо заполнить']} />
            <TextValidator className={classes.fields}
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
                margin="normal"
                onChange={changeEmail}
                value={email}
                name="email"
                validators={['required', 'isEmail']}
                errorMessages={['Необходимо заполнить', 'Введите правильный Email']}
            />
            <Button type="submit" variant="contained" color="primary" size="large" >Создать</Button>

        </ValidatorForm>
    </>

}


export default AddNewUserForm