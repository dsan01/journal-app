import { faBookmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

export const SideBar = ({ drawerWidth=240 }) => {
    return (
        <Box
            component='nav'
            sx={{
                width: { sm: drawerWidth },
                flexShrink: { sm: 0 }
            }}
        >
            <Drawer
                variant='permanent'
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar>
                    <Typography
                        variant='h6'
                        noWrap
                        component='div'
                    >
                        David Sanchez
                    </Typography>
                </Toolbar>
                    <Divider />
                    <List>
                        {
                            ['Enero', 'Febrero', 'Marzo'].map(text => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <FontAwesomeIcon icon={faBookmark} />
                                        </ListItemIcon>
                                        <Grid container>
                                            <ListItemText primary={text} />
                                            <ListItemText secondary={'Holio soy uan prueba'} />
                                        </Grid>
                                    </ListItemButton>
                                </ListItem>
                            ))
                        }
                    </List>
                
            </Drawer>
        </Box>
    )
}
