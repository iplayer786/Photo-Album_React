import { React } from "react";
import{Typography, AppBar,Card, CardActionArea, CardContent, CardMediam, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
//Yes there are extra components because we are learning to use them.
import {PhotoCamera} from '@material-ui/icons';

const App = () => {
    return (
       <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera />
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Hello everyone! This is a photo album and I'm trying to make this sentence as long as possible to test this paragraph out.
                        </Typography>
                    </Container>

                </div>
            </main>
       </>
    )
}

export default App;