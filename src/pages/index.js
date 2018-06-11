import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import InboxIcon from '@material-ui/icons/Inbox';
import { withStyles } from '@material-ui/core/styles';
import Link from 'gatsby-link'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  paper: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2
  },
  link: {
    color: theme.palette.secondary.light,
    textDecoration: 'none'
  },
  root: {
    backgroundColor: theme.palette.background.default,
    position: 'absolute',
    top: 0,
    bottom: 0
  },
})

const IndexPage = props => {
  const {classes} = props

  return (
    <div className={classes.root}>
      <Grid container alignContent="flex-start">
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <Typography variant="title">Vlad Rimsha</Typography>
            <img src="/static/profile_picture.jpg" width="100%" alt=""/>

            <Typography variant="body1">
              Language agnostic software engineer since 2008.
              Best practices and workflows advocate.
              Productive and disciplined.
              Traveling nomad and languages lover.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={2}>
          <Paper className={classes.paper}>
            <Typography variant="headline">Links</Typography>
            <List>
              <ListItem button>
                <ListItemText><a className={classes.link} href="https://instagram.com/vlad.rimsha">@vlad.rimsha on Instagram (RU)</a></ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText><a className={classes.link} href="https://www.linkedin.com/in/влад-римша-9b3a8a95">LinkedIn</a></ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText><a className={classes.link} href="mailto://senhorbardell@gmail.com">Mail</a></ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText><a className={classes.link} href="https://github.com/senhorbardell">GitHub</a></ListItemText>
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={classes.paper}>
            <Typography variant="headline">Work History</Typography>
            <List>
              <ListItem button>
                {/*<ListItemIcon><InboxIcon/></ListItemIcon>*/}
                <ListItemText secondary="lead software engineer">
                  <a className={classes.link} href="https://www.linkedin.com/company/redq-technologies-inc">RedQ</a>
                </ListItemText>
              </ListItem>
              <ListItem button>
                {/*<ListItemIcon><InboxIcon/></ListItemIcon>*/}
                <ListItemText secondary="senior software engineer">
                  <a className={classes.link} href="https://www.ambulnz.com">Ambulnz</a>
                </ListItemText>
              </ListItem>
              <ListItem button>
                {/*<ListItemIcon><InboxIcon/></ListItemIcon>*/}
                <ListItemText secondary="owner">
                  <a className={classes.link} href="https://moshimoshi.io">Moshimoshi</a>
                </ListItemText>
              </ListItem>
              <ListItem button>
                {/*<ListItemIcon><InboxIcon/></ListItemIcon>*/}
                <ListItemText secondary="freelance as senior software engineer">
                  <a className={classes.link} href="/jobs/upwork">Upwork</a>
                </ListItemText>
              </ListItem>
              <ListItem button>
                {/*<ListItemIcon><InboxIcon/></ListItemIcon>*/}
                <ListItemText secondary="lead software engineer">
                  <a className={classes.link} href="/jobs/proovela">Proovelab</a>
                </ListItemText>
              </ListItem>
              <ListItem button>
                {/*<ListItemIcon><InboxIcon/></ListItemIcon>*/}
                <ListItemText secondary="lead software engineer">
                  <a className={classes.link} href="https://appkode.ru/">Kode</a>
                </ListItemText>
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={classes.paper}>
            <Typography variant="headline">Tools & Technologies</Typography>
            <List>
              <ListItem>
                {/*<ListItemIcon><InboxIcon/></ListItemIcon>*/}
                <ListItemText primary="Python" secondary="Private Libraries maintainer, SQLAlchemy, Flask, PySpark" />
              </ListItem>
              <ListItem>
                {/*<ListItemIcon><InboxIcon/></ListItemIcon>*/}
                <ListItemText primary="JS" secondary="Fullstack, NodeJS, ES8, React, Angular, Cordova, Phonegap, ReactNative" />
              </ListItem>
              <ListItem>
                {/*<ListItemIcon><InboxIcon/></ListItemIcon>*/}
                <ListItemText primary="Swift" secondary="Promisekit, ReactiveCocoa" />
              </ListItem>
              <ListItem>
                {/*<ListItemIcon><InboxIcon/></ListItemIcon>*/}
                <ListItemText primary="Other" secondary="Spark, Go, Java, Android" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )}

  IndexPage.propTypes = {
    classes: PropTypes.object.isRequired
  }

  export default withStyles(styles)(IndexPage)
