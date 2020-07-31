import React from 'react';
import styles from './loading.module.css'
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = () => {
    return (
        <div className = {styles.box}>
            <CircularProgress />
        </div>
    )
}

export default Loading
