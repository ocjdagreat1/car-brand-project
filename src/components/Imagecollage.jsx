import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';



export default function TitlebarBelowImageList() {
  return (

    <ImageList sx={{ width: 500, height: 450 }}>
      
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_1280.jpg',
    title: 'Ex 350',
    author: '$15,000',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2020/04/28/10/36/vehicle-5103852_1280.jpg',
    title: 'W109',
    author: '$20,000',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2020/03/13/07/34/auto-4927195_1280.jpg',
    title: 'GLC',
    author: '$50,700',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2021/12/01/13/08/mercedes-benz-6837844_1280.jpg',
    title: 'AMG',
    author: '$70,000',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2017/06/07/09/18/auto-2379757_1280.jpg',
    title: 'VBoot-005',
    author: '$10,00',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2016/11/22/22/31/auto-1850953_1280.jpg',
    title: 'CS 450',
    author: '$20,000',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2020/01/09/18/25/mercedes-4753564_1280.jpg',
    title: 'GLS',
    author: '$200,000',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2023/05/05/06/05/car-7971685_1280.jpg',
    title: 'Vintage-010',
    author: '$70,000',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2017/08/06/12/36/car-2592136_1280.jpg',
    title: 'V-Boot-OO1',
    author: '$7,000',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2017/08/24/21/52/oldtimer-2678581_1280.jpg',
    title: 'V-Lurry',
    author: '$10,000',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2016/03/30/20/20/auto-1291492_1280.jpg',
    title: 'G-Wagon',
    author: '$250,000',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2019/11/12/23/36/mercedes-eqc-4622242_1280.jpg',
    title: 'AMG',
    author: '$270,OOO',
  },
];
