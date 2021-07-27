import { Alert, div, DialogContent, ImageList, ImageListItem, Switch, Typography, Button } from "@material-ui/core";
import { Dialog, DialogTitle, IconButton } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import { useState } from 'react'
import wallpaper from '../images/wallpapers/wallpaper.jpg';
import wallpaper2 from '../images/wallpapers/wallpaper2.jpg';
import wallpaper3 from '../images/wallpapers/wallpaper3.jpg';
import wallpaper4 from '../images/wallpapers/wallpaper4.jpg';
import wallpaper5 from '../images/wallpapers/wallpaper5.jpg';
import wallpaper6 from '../images/wallpapers/wallpaper6.jpg';
import wallpaper7 from '../images/wallpapers/wallpaper7.jpg';
import wallpaper8 from '../images/wallpapers/wallpaper8.jpg';
import wallpaper9 from '../images/wallpapers/wallpaper9.jpg';
import wallpaper10 from '../images/wallpapers/wallpaper10.jpg';
import wallpaper11 from '../images/wallpapers/wallpaper11.jpg';
import wallpaper12 from '../images/wallpapers/wallpaper12.jpg';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Confirm } from "notiflix";


const imageList = [wallpaper, wallpaper2, wallpaper3, wallpaper4, wallpaper5, wallpaper6, wallpaper7, wallpaper8,
    wallpaper9, wallpaper10, wallpaper11, wallpaper12]



function Options({ forecast, dispatcher }) {
    const [checked, setChecked] = useState(true);
    const handleChecked = () => {
        if (checked) {
            dispatcher({ type: 'setTempDegC' });
        }
        else {
            dispatcher({ type: 'setTempDegF' })
        };
        setChecked(!checked);
    };

    const handleDeleteLocalStorage = () => 
        Confirm.show(
            "Are You Sure?",
            "Deleting Local Storage would permanently remove all forecast Locations saved locally!",
            "Yes",
            "Cancel",
            () => {
                localStorage.removeItem('forecast');
                dispatcher({type:'setLocalStorage', data:false})
            },
        )

    return (
        <Dialog onClose={() => dispatcher({ type: 'closeMenu' })} open={forecast.openMenu} fullWidth>
            <div class='p-2' >
                <DialogTitle class='w-100 flex'>
                    <Typography class='font-medium text-xl ml-4 w-full'>Options</Typography>
                    <IconButton class='ml-auto' onClick={() => dispatcher({ type: 'closeMenu' })}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                <DialogContent class='p-2 space-y-1'>
                    <div class='flex justify-center'>
                        <Button variant='contained' size="small" color='error' sx={{ mx: 'auto' }} onClick={handleDeleteLocalStorage}>Delete local Storage</Button>
                    </div>

                    <div class='flex items-center justify-center'>
                        <Typography class='font-medium text-2xl'>°C</Typography>
                        <Switch
                            checked={checked}
                            onChange={handleChecked}>
                        </Switch>
                        <Typography class='font-medium text-2xl'>°F</Typography>
                    </div>
                    <Alert component='div' className='mx-auto mb-2 w-52'>Choose a Wallpaper</Alert>
                    <ImageList cols={3} rowHeight={156} >
                        {imageList.map((item, key) =>
                            <ImageListItem key={key} onClick={() => dispatcher({ type: 'setWallpaper', data: item })} class='rounded-lg flex items-center justify-center cursor-pointer'
                                style={{ backgroundImage: `url(${item})`, backgroundSize: 'cover', height: '8rem' }}>

                                <div className={`${forecast.wallpaper === item ? 'inline-block' : 'invisible'}`}><CheckCircleIcon sx={{ color: 'error.main', fontSize: '4rem' }} /></div>
                            </ImageListItem>
                        )}
                    </ImageList>

                </DialogContent>
            </div>
        </Dialog>
    )
};


export default Options;