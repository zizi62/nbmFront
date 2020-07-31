import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles, createStyles, Theme, Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import {grey, teal } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      display: 'flex',
      backgroundColor: theme.palette.background.paper
    },
    header: {
      width: 80,
      backgroundColor: grey[100],
      color: grey[300],
    },
    content: {
      display: 'flex',
      padding: 24
    },
    avatar: {
      backgroundColor: teal[500],
      marginRight: 8
    },
  }),
);

type userPropsType = {
  firstName: string
  lastName: string
  email: string
  _id: string
  index: number
}


const User: React.FC<userPropsType> = (props) => {

  const { firstName, lastName, email, index } = props

  const classes = useStyles()

  return <>
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        title={`#${index + 1}`}
      />
      <CardContent className={classes.content}>
        <Avatar aria-label="user" className={classes.avatar}>
          {firstName[0]}
          {lastName[0]}
        </Avatar>
        <div>
          <Typography variant="subtitle1" align = 'left'>{firstName} {lastName}</Typography>
          <Typography  variant="body1" align = 'left' color='textSecondary'>{email}</Typography>
        </div>
      </CardContent>
    </Card>

  </>
}


export default User