import { Alert, Box, Button, Container, Dialog, DialogContent, DialogTitle, Grid, IconButton, ImageList, ImageListItem, Stack, Switch, Tooltip, Typography } from '@material-ui/core';
import wallpaperList from './wallpaperList';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Confirm } from "notiflix";

function Options({ appState, appDispatcher }) {

    const confirmDeleteLocalStorage = (dispatcher) => {
        Confirm.show(
            'Are You Sure?',
            'Deleting Local Storage Will Remove All Saved Weather Data!',
            'Yes',
            'Cancel',
            () => dispatcher({ type: 'deleteLocalStorage' }),
            () => { }
        )
    };

    const confirmDisableLocalStorage = (dispatcher) => {
        Confirm.show(
            'Are You Sure?',
            'Disabling Local Storage will result in data loss on browser refresh!',
            'Yes',
            'Cancel',
            () => dispatcher({ type: 'disableLocalStorage' }),
            () => {}
        )
    }

    return (
        <Dialog open={appState.settings} onClose={() => appDispatcher({ type: 'closeSettings' })} fullWidth>
            <DialogTitle sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h5' sx={{ fontWeight: '500' }}>Options</Typography>
                <IconButton sx={{ ml: 'auto' }} onClick={() => appDispatcher({ type: 'closeSettings' })}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent sx={{ pb: '0px' }}>
                <Grid container spacing={1} direction='column'>
                    <Grid item>
                        <Stack direction='row' spacing={1} justifyContent='center'>
                            <Tooltip title='delete weather data saved in local storage'>
                                <Button variant='contained' size="small" color='error' sx={{ display: 'block', borderRadius: '0.5rem' }}
                                    onClick={()=>confirmDeleteLocalStorage(appDispatcher)}>
                                    Delete local Storage
                                </Button>
                            </Tooltip>
                            <Tooltip title={`${appState.enableLocalStorage? 'do not save weather data':'save weather data'}`}>
                                <Button variant='contained' size="small" color='warning' sx={{ display: 'block', borderRadius: '0.5rem' }}
                                onClick={()=>appState.enableLocalStorage? confirmDisableLocalStorage(appDispatcher) : appDispatcher({type:'enableLocalStorage'})}>
                                    {appState.enableLocalStorage ? 'Disable Local Storage' : 'Enable Local Storage'}
                                </Button>
                            </Tooltip>
                        </Stack>
                    </Grid>

                    <Grid item>
                        <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography variant='h5' sx={{ fontWeight: '500' }}>°C</Typography>
                            <Switch
                                checked={appState.degUnit === 'F'}
                                onChange={() => appDispatcher({ type: 'toggleDegUnit' })}>
                            </Switch>
                            <Typography variant='h5' sx={{ fontWeight: '500' }}>°F</Typography>
                        </Container>
                    </Grid>
                    <Grid item >
                        <Alert sx={{ mx: 'auto', width: '40%', display: 'flex', alignItems: 'center' }}>
                            <Typography sx={{ fontSize: '1.2rem', fontWeight: '500' }}>Choose a Wallpaper</Typography>
                        </Alert>
                        <ImageList cols={3} rowHeight={110} >
                            {wallpaperList.map((item, key) =>
                                <ImageListItem key={key} onClick={() => appDispatcher({ type: 'setWallpaper', data: item })}
                                    sx={{ backgroundImage: `url(${item})`, backgroundSize: 'cover', height: '8rem', cursor: 'pointer', borderRadius: '0.6rem' }}>

                                    <Box sx={{ display: `${appState.wallpaper === item ? 'flex' : 'none'}`, justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                        <CheckCircleIcon sx={{ color: 'error.main', fontSize: '4rem' }} />
                                    </Box>
                                </ImageListItem>
                            )}
                        </ImageList>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    )
};

export default Options;