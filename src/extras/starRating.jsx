import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function RatingSize(props) {

  return (
    <Stack spacing={1}>
      <Rating {...props} size="small"
      sx={{
          color: 'grey', // ⭐ ye color change karega
          '& .MuiRating-iconFilled': { color: 'grey' },
          '& .MuiRating-iconHover': { color: 'darkgrey' },
        }} />
    </Stack>
  );
}
