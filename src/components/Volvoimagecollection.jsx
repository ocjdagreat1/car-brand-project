import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import benz from '../assets/car-images/benz1.jpg'


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
          />jpg
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://cdn.pixabay.com/photo/2017/06/12/16/24/volvo-2396040_1280.jpg',
    title: 'Ex 30',
    author: '$15,000',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2021/11/03/07/16/car-6764878_1280.jpg',
    title: 'EX 90',
    author: '$20,000',
  },
  {
    img: 'https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/TA-03282016-iimg_1065_thumb.jpg',
    title: 'XC40',
    author: '$90,000',
  },
  {
    img: 'https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/BSHk3V_Riu35zo5c/001020-170000-43iqni7fcs_thumb.jpg',
    title: 'XC60',
    author: '$100,200',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2014/08/29/15/07/auto-431122_1280.jpg',
    title: 'S60',
    author: '$100,00',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2015/07/26/19/31/pv-861662_1280.jpg',
    title: 'S90',
    author: '$129,000',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2020/04/22/21/30/shenandoah-valley-5080156_1280.jpg',
    title: 'XC90',
    author: '$150,000',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2022/02/19/14/06/car-7022696_1280.jpg',
    title: 'Vintage',
    author: '$50.000',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2018/10/07/21/56/volvo-3731469_1280.jpg',
    title: 'Vintage 001',
    author: '$70,000',
  },
  {
    img: 'https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/SNv7Pyhimz0q0vg/000100-40000-0d9k3aiweo_thumb.jpg',
    title: 'cool RADIATOR',
    author: 'Parts',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2016/12/09/23/55/auto-1896360_1280.jpg',
    title: 'XC100',
    author: '$200,00',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2019/11/12/23/36/mercedes-eqc-4622242_1280.jpg',
    title: 'S110',
    author: '$250,000',
  },
];
