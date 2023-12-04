import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Grid from '@mui/system/Unstable_Grid';
import Typography from '@mui/material/Typography';

import { fCurrency } from 'src/utils/format-number';

import { icon } from 'src/layouts/dashboard/config-navigation'
// ----------------------------------------------------------------------
export default function UnsplashImageCard({ bulding }) {

  const renderImg = (
    <Box
      component="img"
      alt={bulding.alt_description}
      src={bulding.urls.full}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  );

  const renderStatus = (
    <Grid container rowSpacing={1} ml={2} columnSpacing={{ xs: 1, sm: 10, md: 4 }}>
      <Grid item xs={12} sm={5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '1rem', color: '#4CAF50' }}>
          Status
        </Typography>
      </Grid>
    </Grid>
  );
  const renderPrice = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ margin: '10px', }}>
        <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'text.tertiary', textAlign: 'center' }}>
          {fCurrency(125000)}
        </Typography>
      </div>
      <div>
        <Typography variant="body1" sx={{ fontStyle: 'italic', fontSize: '1rem', color: 'text.primary', textAlign: 'center', margin: '10px' }}>
          1/10 Frags
          {renderStatus}
        </Typography>
      </div>
    </div>
  );


  return (
    <Card sx={{ maxWidth: 400, margin: 'auto' }}>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {renderImg}
      </Box>

      <Stack spacing={2} sx={{ p: 3, background: "", textAlign: 'center' }}>
        <Link
          href={bulding.links.html}
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          underline="hover"
          variant="h6"
          noWrap
          sx={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'text.primary' }}
        >
          {bulding.description || 'Untitled'}
        </Link>
        <Link sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#757575' }}>
          {icon('instagram-1-svgrepo-com')}
          <Typography variant="body2" sx={{ ml: 1 }}>
            {bulding.user.instagram_username}
          </Typography>
        </Link>
        <Grid container justifyContent="center">
          {renderPrice}
        </Grid>
      </Stack>

    </Card>
  );
}

UnsplashImageCard.propTypes = {
  bulding: PropTypes.object,
};
