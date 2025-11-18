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
    img: 'https://s.car.info/image_files/1920/0-1516204.jpg',
    title: 'Breakfast',
    rows: 3,
    cols: 4,
  },
  {
    img: 'https://s.car.info/image_files/1920/0-1516177.jpg',
    title: 'Burger',
  },
  {
    img: 'https://s.car.info/image_files/1920/0-1516205.jpg',
    title: 'Camera',
  },
  {
    img: 'https://s.car.info/image_files/1920/0-1516173.jpg',
    title: 'Coffee',
  },
  {
    img: 'https://s.car.info/image_files/1920/0-1516207.jpg',
    title: 'Hats',
  },
 
];

const itemDataa = [
  {
    img: 'https://s.car.info/image_files/1920/0-1281673.jpg',
    title: 'Breakfast',
    rows: 3,
    cols: 4,
  },
  {
    img: 'https://s.car.info/image_files/1920/0-1281667.jpg',
    title: 'Burger',
  },
  {
    img: 'https://s.car.info/image_files/1920/0-1281675.jpg',
    title: 'Camera',
  },
  {
    img: 'https://s.car.info/image_files/1920/0-1281674.jpg',
    title: 'Coffee',
  },
  {
    img: 'https://s.car.info/image_files/1920/0-1281668.jpg',
    title: 'Hats',
  },
 
];

const itemDataaa = [
  {
    img: 'https://s.car.info/image_files/1920/0-1254577.jpg',
    title: 'Breakfast',
    rows: 3,
    cols: 4,
  },
  {
    img: 'https://s.car.info/image_files/1920/0-1254580.jpg',
    title: 'Burger',
  },
  {
    img: 'https://s.car.info/image_files/1920/0-1254579.jpg',
    title: 'Camera',
  },
  {
    img: 'https://s.car.info/image_files/1920/0-1254581.jpg',
    title: 'Coffee',
  },
  {
    img: 'https://s.car.info/image_files/1920/0-1254582.jpg',
    title: 'Hats',
  },
 
];

