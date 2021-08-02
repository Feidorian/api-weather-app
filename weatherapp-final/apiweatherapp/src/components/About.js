import { Alert, Box, Button, Container, Dialog, DialogContent, DialogTitle, Grid, IconButton, ImageList, ImageListItem, List, ListItem, Stack, Switch, Typography } from '@material-ui/core';
import wallpaperList from './wallpaperList';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
function Options({ appState, appDispatcher }) {
    return (
        <Dialog open={appState.about} onClose={() => appDispatcher({ type: 'closeAbout' })} fullWidth>
            <DialogTitle sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h5' sx={{ fontWeight: '500' }}>MetaData</Typography>
                <IconButton sx={{ ml: 'auto' }} onClick={() => appDispatcher({ type: 'closeAbout' })}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent sx={{ pb: '0px' }}>
                <Stack spacing={1}>
                    <Typography >
                        API Weather APP is a proof of concept application built on a backend of API services. The API services
                        utilized are therefore free/trial versions with limited features, accessibility and functionalities. Requests
                        made from the app should therefore be done sparingly.
                    </Typography>
                    <List dense sx={{ width: '100%' }}>
                        <ListItem disableGutters>
                            <Typography sx={{ fontWeight: '600', color: 'primary.main' }}>API Services Used</Typography>
                        </ListItem>

                        <ListItem disableGutters>
                            <Typography>Google Places: To fetch GeoCoordinates for locations.</Typography>
                        </ListItem>
                        <ListItem disableGutters>
                            <Typography>OpenWeather: To fetch weather information for locations.</Typography>
                        </ListItem>
                        <ListItem disableGutters>
                            <Typography>Amazon Lambda: (Central hub for requests) To mask API keys and restrict access to a single web domain.</Typography>
                        </ListItem>
                    </List>

                    <List dense sx={{ width: '100%' }}>
                        <ListItem disableGutters>
                            <Typography sx={{ fontWeight: '600', color: 'primary.main' }}>Libraries Used</Typography>
                        </ListItem>

                        <ListItem disableGutters>
                            <Typography>Material UI (CSS-npm): This app is written and styled with material UI's React components</Typography>
                        </ListItem>
                        <ListItem disableGutters>
                            <Typography>React (JS-npm): This app is built and deployed using the React JS Library.</Typography>
                        </ListItem>
                        <ListItem disableGutters>
                            <Typography>Notiflix (JS-npm): To display prompts, notifications, & confirmations.</Typography>
                        </ListItem>
                        <ListItem disableGutters>
                            <Typography>Element Id Generator (JS-npm): To generate unique keys for rendered elements.</Typography>
                        </ListItem>
                        <ListItem disableGutters>
                            <Typography>Moment (JS-npm): to convert unix timestamp into human readable date-time.</Typography>
                        </ListItem>
                    </List>
                </Stack>
            </DialogContent>
        </Dialog>
    )
};

export default Options;