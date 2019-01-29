import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import Button from '@material-ui/core/Button'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { withStyles } from '@material-ui/core/styles';
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
  const { classes } = props

  return (
    <div className={classes.root}>
        <Paper elevation={1} className={classes.paper}>
        <Paper elevation={0} className={classes.paper}>
        <Typography variant="title">Vlad Rimsha</Typography>
        </Paper>
      <Grid container alignContent="flex-start">
          <Grid item xs={12} md={4}>
            <img src="/static/profile_picture.jpg" width="95%" alt="" />

            <Typography variant="body1">
              Language agnostic software engineer since 2008.
              Best practices and workflows advocate.
              Productive and disciplined.
              Traveling nomad and languages lover.
            </Typography>

            <p>
              <Button variant="extendedFab" color="secondary" href="https://goo.gl/forms/rHpdQkq9BC0UvQd22">Contact me</Button>
            </p>

          </Grid>
          <Grid item xs={12} md={4} lg={2}>
            <Typography variant="headline">Footprint</Typography>
            <List>
              <ListItem button>
                <ListItemText><a className={classes.link} href="https://instagram.com/vlad.rimsha">@vlad.rimsha on Instagram (RU)</a></ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText><a className={classes.link} href="https://www.linkedin.com/in/влад-римша-9b3a8a95">LinkedIn</a></ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText><a className={classes.link} href="https://github.com/senhorbardell">GitHub</a></ListItemText>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Typography variant="headline">Some guys</Typography>
            <List>
              <ListItem button>
                <ListItemText secondary="senior react native developer/consultant">
                  <a className={classes.link} href="https://www.crowdbotics.com/">Crowdbotics</a>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText secondary="outsource development&consultancy">
                  <a className={classes.link} href="https://www.ajaib.co.id/">Ajaib investment</a>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText secondary="outsource development&consultancy">
                  <a className={classes.link} href="http://www.ready2meet.com/">Ready to meet dating</a>
                </ListItemText>
              </ListItem>
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
                  <a className={classes.link} href="https://www.upwork.com/freelancers/~01806f74d5eff33ba9">Upwork</a>
                </ListItemText>
              </ListItem>
              <ListItem button>
                {/*<ListItemIcon><InboxIcon/></ListItemIcon>*/}
                <ListItemText secondary="lead software engineer">
                  <a className={classes.link}>Proovelab</a>
                </ListItemText>
              </ListItem>
              <ListItem button>
                {/*<ListItemIcon><InboxIcon/></ListItemIcon>*/}
                <ListItemText secondary="lead software engineer">
                  <a className={classes.link} href="https://appkode.ru/">Kode</a>
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Typography variant="headline">Random letters</Typography>
            <List>
              <ListItem>
                {/*<ListItemIcon><InboxIcon/></ListItemIcon>*/}
                <ListItemText primary="Python" secondary="Private Libraries maintainer, SQLAlchemy, Flask, PySpark" />
              </ListItem>
              <ListItem>
                {/*<ListItemIcon><InboxIcon/></ListItemIcon>*/}
                <ListItemText primary="JS" secondary="Fullstack, NodeJS, ES8, React, Angular, Cordova, Phonegap, ReactNative, Express, Koa" />
              </ListItem>
              <ListItem>
                {/*<ListItemIcon><InboxIcon/></ListItemIcon>*/}
                <ListItemText primary="Swift" secondary="Promisekit, ReactiveCocoa" />
              </ListItem>
              <ListItem>
                {/*<ListItemIcon><InboxIcon/></ListItemIcon>*/}
                <ListItemText primary="Other" secondary="Spark, Go, Java, Android, Kotlin, Dart, Flutter" />
              </ListItem>
            </List>
          </Grid>
      </Grid>
        </Paper>
    </div>
  )
}

IndexPage.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(IndexPage)
