import React, { useState, useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import ProductCard from '../product-card';
import ProductSort from '../product-sort';
import ProductFilters from '../product-filters';
import ProductCartWidget from '../product-cart-widget';


export default function ProductsView() {
  const [openFilter, setOpenFilter] = useState(false);
  const [buildingImages, setBuildingImages] = useState([]);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };
  // ----------------------------------------------------------------------

  useEffect(() => {
    const accessKey = "np84PTFYlvVLg1AMXu38z_8qiMPBkV0XaNNr-94QoHI";
    const searchQuery = 'edificios';
    const orientation = 'landscape';
    const apiUrl = `https://api.unsplash.com/photos/random?query=${searchQuery}&orientation=${orientation}&client_id=${accessKey}&count=27`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setBuildingImages(data);
      })
      .catch(error => {
        console.error('Error al obtener fotos:', error);
      });
  }, []); // Empty dependency array ensures that the effect runs once after the initial render

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Products
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        sx={{ mb: 5 }}
      >
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <ProductFilters
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          />

          <ProductSort />
        </Stack>
      </Stack>

      <Grid container spacing={3}>
        {buildingImages.map((img) => (
          <Grid key={img.id} xs={12} sm={6} md={3}>
            <ProductCard image={img} />
          </Grid>
        ))}
      </Grid>

      <ProductCartWidget />
    </Container>
  );
}
