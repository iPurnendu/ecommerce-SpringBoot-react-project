import { Grid, Link, Typography } from '@mui/material';
const Footer = () => {
  const footerStyle = {
    background: `url('https://i.pinimg.com/originals/11/56/71/115671a1a70292994ba9ed0e000dfc27.gif')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center 20px', // Center the background
    fontFamily: 'Space Mono, monospace', // Set Space Mono font
  };

  return (
    <Grid className='text-white mt-10 text-center  fontFamily: Space Mono, monospace' container sx={{ ...footerStyle, py: 3 }}>
      {/* Company Name in the Right Corner */}
      <Grid item xs={12}>
        <Typography variant="h3" align="left" fontWeight="bold" gutterBottom style={{ marginBottom: '20px', color: 'white',fontFamily: 'Cousine, monospace' }} >
          #<span style={{ color: 'red' }}>Variable</span>
        </Typography>
      </Grid>

      {/* Three Sections Below */}
      <Grid item xs={12} sm={4}>
        <Typography className='pb-5' variant="h4" fontWeight="bold" gutterBottom style={{ color: 'white',fontFamily: 'Cousine, monospace' }}>
          <span>Company</span>
        </Typography>
        <Typography variant="body1" component="p" fontWeight="bold" gutterBottom style={{ color: 'red',fontFamily: 'Cousine, monospace' }}>
          About
        </Typography>
        <Typography variant="body1" component="p" fontWeight="bold" gutterBottom style={{ color: 'red',fontFamily: 'Cousine, monospace' }}>
          Contact
        </Typography>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Typography className='pb-5' variant="h4" fontWeight="bold" gutterBottom style={{ color: 'white',fontFamily: 'Cousine, monospace' }}>
          <span>Legal</span>
        </Typography>
        <Typography variant="body1" component="p" fontWeight="bold" gutterBottom style={{ color: 'red',fontFamily: 'Cousine, monospace' }}>
          Claim
        </Typography>
        <Typography variant="body1" component="p" fontWeight="bold" gutterBottom style={{ color: 'red',fontFamily: 'Cousine, monospace' }}>
          Terms
        </Typography>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Typography className='pb-5' variant="h4" fontWeight="bold" gutterBottom style={{ color: 'white',fontFamily: 'Cousine, monospace' }}>
          <span>Socials</span>
        </Typography>
        <Typography variant="body1" component="p" fontWeight="bold" gutterBottom style={{ color: 'red',fontFamily: 'Cousine, monospace' }}>
          Instagram
        </Typography>
        <Typography variant="body1" component="p" fontWeight="bold" gutterBottom style={{ color: 'red',fontFamily: 'Cousine, monospace' }}>
          LinkedIn
        </Typography>
      </Grid>

      {/* Copyright and Icons */}
      <Grid className='pt-20' item xs={12}>
        <Typography variant="body1" component="p" align="center" style={{ color: 'white' }}>
          &copy; 2023 my_<span style={{ color: 'red' }}>Company</span>. All rights reserved.
        </Typography>
        <Typography variant="body1" component="p" align="center" style={{ color: 'white' }}>
          Made with love by Me.
        </Typography>
        <Typography variant="body1" component="p" align="center" style={{ color: 'white' }}>
          Icons made by{' '}
          <Link href="#" color="inherit" underline="always">
            Freepik
          </Link>{' '}
          from{' '}
          <Link href="#" color="inherit" underline="always">
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
