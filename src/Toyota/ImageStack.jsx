import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box } from '@mui/material';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
   <Box sx={{
    display:"flex",
   }}>
     <ImageList
      sx={{ width: 450, height: 415, paddingLeft:5 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
     <ImageList
      sx={{ width: 450, height: 415, paddingLeft:1 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemDataa.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
     <ImageList
      sx={{ width: 450, height: 415, paddingLeft:1 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemDataaa.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    
    
   </Box>
    
  );
}

const itemData = [
  {
    img: 'https://s.car.info/image_files/1920/0-1663132.jpg',
    title: 'Breakfast',
    rows: 3,
    cols: 4,
  },
  {
    img: 'https://s.car.info/image_files/1920/0-1663127.jpg',
    title: 'Burger',
  },
  {
    img: 'https://s.car.info/image_files/1920/0-1663128.jpg',
    title: 'Camera',
  },
  {
    img: 'https://s.car.info/image_files/1920/0-1663136.jpg',
    title: 'Coffee',
  },
  {
    img: 'https://s.car.info/image_files/1920/0-1663142.jpg',
    title: 'Hats',
  },
 
];

const itemDataa = [
  {
    img: 'https://s.car.info/image_files/1920/0-1743809.jpg',
    title: 'Breakfast',
    rows: 3,
    cols: 4,
  },
  {
    img: 'https://s.car.info/image_files/1920/0-1743804.jpg',
    title: 'Burger',
  },
  {
    img: 'https://s.car.info/image_files/1920/0-1743801.jpg',
    title: 'Camera',
  },
  {
    img: 'https://s.car.info/image_files/1920/0-1743806.jpg',
    title: 'Coffee',
  },
  {
    img: 'https://s.car.info/image_files/1920/0-1743803.jpg',
    title: 'Hats',
  },
 
];

const itemDataaa = [
  {
    img: 'https://s.car.info/image_files/1920/0-1742432.jpg',
    title: 'Breakfast',
    rows: 3,
    cols: 4,
  },
  {
    img: 'https://s.car.info/image_files/1920/0-1742431.jpg',
    title: 'Burger',
  },
  {
    img: 'https://s.car.info/image_files/1920/0-1742440.jpg',
    title: 'Camera',
  },
  {
    img: 'https://s.car.info/image_files/1920/0-1742436.jpg',
    title: 'Coffee',
  },
  {
    img: 'https://s.car.info/image_files/1920/0-1742430.jpg',
    title: 'Hats',
  },
 
];

