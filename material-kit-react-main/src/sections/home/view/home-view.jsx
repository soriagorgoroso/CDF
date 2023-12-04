import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function HomeView() {
    return (
        <Container>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h4">Blog</Typography>

                <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
                    New Post
                </Button>
            </Stack>

            {/* <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">

            </Stack>

            <Grid container spacing={3}>

            </Grid> */}
        </Container>
    );
}
