import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';


export default function Home(){
      return (
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              The Village Crossing Apartments
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              The easiest way to get intouch and informed from the announcements and social events with your apartment complex and city.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Login</Button>
              <Button variant="outlined">Sign up</Button>
            </Stack>
          </Container>
        </Box>
      );
      }