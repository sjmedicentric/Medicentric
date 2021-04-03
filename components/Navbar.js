import { AppBar, Button, makeStyles, Toolbar, Typography } from "@material-ui/core"
import Link from "@material-ui/core/Link"
import NextLink from "next/link"
import React from "react"
import { useRouter } from "next/router"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Badge from "@material-ui/core/Badge"
import NotificationsIcon from "@material-ui/icons/Notifications"
import Avatar from "@material-ui/core/Avatar"

// Need this import { useSession, signOut } from "next-auth/client"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

function Navbar() {
  const classes = useStyles()
  const router = useRouter()
  // keep this const [session, loading] = useSession()

  function logoutHandler() {
    signOut()
  }

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton color="inherit" aria-label="open drawer">
          <MenuIcon />
        </IconButton>
        {/* <Typography variant="h6" className={classes.title}>
          Medicentric
        </Typography> */}

        <Typography
          variant="h6"
          noWrap
          className={classes.title}
          onClick={() => {
            router.push("/")
          }}
        >
          Medicentric
        </Typography>

        <Link href="/">
          <Avatar src="https://storage.googleapis.com/builderbook/logo.svg" alt="Builder Book logo" style={{ margin: "0px auto 0px 20px", cursor: "pointer" }} />
        </Link>

        {/* <Button color="inherit">
          <NextLink href="/">
            <a style={{ textDecoration: "none", color: "white" }}>
              <Typography color="inherit">Home</Typography>
            </a>
          </NextLink>
        </Button> */}

        <Button color="inherit">
          <NextLink href="/about">
            <a style={{ textDecoration: "none", color: "white" }}>
              <Typography color="inherit">About</Typography>
            </a>
          </NextLink>
        </Button>

        <IconButton aria-label="show 14 new notifications" color="inherit">
          <Badge badgeContent={14} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        {/* {!session && !loading && ( */}
        <Button color="inherit">
          <NextLink href="/auth">
            <a style={{ textDecoration: "none", color: "white" }}>
              <Typography color="inherit">Login</Typography>
            </a>
          </NextLink>
        </Button>
        {/* )} */}

        {/* {session && ( */}
        <Button color="inherit">
          <NextLink href="/profile">
            <a style={{ textDecoration: "none", color: "white" }}>
              <Typography color="inherit">Profile</Typography>
            </a>
          </NextLink>
        </Button>
        {/* )} */}
        {/* 
        <Button color="inherit">
          <NextLink href="/signup">
            <a style={{ textDecoration: "none", color: "white" }}>
              <Typography color="inherit">Signup</Typography>
            </a>
          </NextLink>
        </Button> */}

        {/* {session && ( */}
        <Button onClick={() => logoutHandler()} color="inherit">
          <NextLink href="/signOut">
            <a style={{ textDecoration: "none", color: "white" }}>
              <Typography color="inherit">Signout</Typography>
            </a>
          </NextLink>
        </Button>
        {/* )} */}
      </Toolbar>
      {/* {JSON.stringify(session)} */}
    </AppBar>
  )
}

export default Navbar
