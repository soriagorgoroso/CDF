import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { fCurrency } from 'src/utils/format-number';


// ----------------------------------------------------------------------

export default function UnsplashImageCard({ image }) {
  console.log(image, "prueba")
  const renderImg = (
    <Box
      component="img"
      alt={image.alt_description}
      src={image.urls.full}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  );

  const renderPrice = (
    <Typography variant="subtitle1">
      <Typography
        component="span"
        variant="body1"
        sx={{
          color: 'text.disabled',
          textDecoration: 'line-through',
        }}
      >
        {/* {image.priceSale && fCurrency(image.priceSale)} */}
      </Typography>
      {fCurrency(image.price)}
    </Typography>
  );

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {renderImg}
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link
          href={image.links.html}
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          underline="hover"
          variant="subtitle2"
          noWrap
        >
          {image.description || 'Untitled'}
        </Link>
        {
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            {renderPrice}
          </Stack>
        }
      </Stack>
    </Card>
  );
}

UnsplashImageCard.propTypes = {
  image: PropTypes.object,
};
