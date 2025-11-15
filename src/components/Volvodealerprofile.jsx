import React from 'react'
import { Rating } from '@mui/material'
import './Benzdealerprofile.css'

const Benzdealerprofile = () => {
  return (
    <>
    <h1 className='h11'><span>0ur T</span>op dealers</h1>
    <div className="profile-container">
      
        <div className="profile">
            <img src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/HREFvw5NMjcghw0ij/000211-70333-y905erenow_thumb.jpg" alt="" />
            <h3>  Steingold Volvo Cars (London)</h3>
            <Rating className='rateing'  name="half-rating" defaultValue={5} precision={5}  size='small'/>
            <p> According to their own site, <br />  they are “ranked #1 in the nation for customer experience <br />  and satisfaction in both sales and service".  </p>
        </div>

         <div className="profile">
            <img src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/SLT9PsAAFkzcrqd4b/000025-10000-dgd5wj0sp0_thumb.jpg" alt="" />
            <h3>  Culver City Cars (Canada)</h3>
          <Rating className='rateing'  name="half-rating" defaultValue={5} precision={5}  size='small'/>
          <p>They won the 2024 <br />  Cars.com Consumer Satisfaction Award, placing them among the <br />  top 10% of Canada new-car dealers based on online reviews. </p>
        </div>

         <div className="profile">
            <img src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/SLT9PsAAFkzcrqd4b/000075-30000-9tt7r651oq_thumb.jpg" alt="" />
            <h3>  Grubbs Cars Central Houston (Sweden)</h3>
          <Rating className='rateing'  name="half-rating" defaultValue={5} precision={5}  size='small'/>
          <p> Named a Carfax Top-Rated Dealer, <br />  based on verified customer reviews.  
 • The CARFAX award highlights <br />  their trustworthiness and transparency (“building trust and transparency with their customers”).</p>
        </div>

    </div>

    </>
  )
}

export default Benzdealerprofile
