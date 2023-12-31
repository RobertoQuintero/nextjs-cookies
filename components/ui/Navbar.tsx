import NextLink from 'next/link'
import { MenuOutlined } from "@mui/icons-material"
import { AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material"

export const Navbar = () => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton
          size="large"
          edge='start'
        >
          <MenuOutlined/>
        </IconButton>
        <NextLink href='/' passHref legacyBehavior>
          <Link underline='none' color='white'>
            <Typography variant='h6' color='white'>CookieMaster</Typography>
          </Link>
        </NextLink>
        
        <div style={{flex:1}} />

        <NextLink href='/theme-changer' passHref legacyBehavior>
          <Link underline='none' color='white'>
            <Typography variant='h6' color='white'>Cambiar Tema</Typography>
          </Link>
        </NextLink>

      </Toolbar>
    </AppBar>
  )
}
