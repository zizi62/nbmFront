import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { grey } from '@material-ui/core/colors';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            height: '100%',
            minHeight: 100,
            border: '3px dashed #e0e0e0',
            color: grey[300],
            position: 'relative'
        },
        icon: {
            position: 'absolute',
            top: `50%`,
            left: `50%`,
            transform: `translate(-50%, -50%)`
        }
    }),
);

type AddUserButtonPropsType = {
    onClick: () => void

}
const AddUserButton: React.FC<AddUserButtonPropsType> = (props) => {
    const classes = useStyles()

    const { onClick } = props

    return <div className={classes.root} onClick={onClick}>
        <AddIcon fontSize='large' className={classes.icon} />
    </div>
}

export default AddUserButton