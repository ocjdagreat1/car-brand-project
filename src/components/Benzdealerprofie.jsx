import React from 'react'
import { Rating } from '@mui/material'
import './Benzdealerprofile.css'

const Benzdealerprofile = () => {
  return (
    <>
    <h1 className='h11'><span>0ur T</span>op dealers</h1>
    <div className="profile-container">
      
        <div className="profile">
            <img src="https://media.istockphoto.com/id/1145969222/photo/businessman-is-holding-a-piggy-bank.jpg?s=612x612&w=0&k=20&c=LJ9GonlFmlV8e-3lZAc-_75O7PKF1bew0v4dL53Np20=" alt="" />
            <h3> Fletcher Jones Motorcars (USA)</h3>
            <Rating className='rateing'  name="half-rating" defaultValue={5} precision={5}  size='small'/>
            <p>Fletcher Jones is simply the gold standard. <br />  Their inventory is huge, and their service team  treated me like royalty.</p>
        </div>

         <div className="profile">
            <img src="https://cdn.pixabay.com/photo/2024/06/22/22/56/man-8847069_1280.jpg" alt="" />
            <h3> Globe Motors (London)</h3>
          <Rating className='rateing'  name="half-rating" defaultValue={5} precision={5}  size='small'/>
          <p>They gave me a very fair trade-in value for my old car, <br /> and the financing options  were flexible. Very happy with my E-Class.</p>
        </div>

         <div className="profile">
            <img src="https://media.istockphoto.com/id/875591614/photo/rich-african-american-man.jpg?s=612x612&w=0&k=20&c=rYXQ7rGyoCU_7JZCP9Zk4cVPeQUyhwnvomdPfZEHCx8=" alt="" />
            <h3> Weststar Associates Limited (Nigeria)</h3>
          <Rating className='rateing'  name="half-rating" defaultValue={5} precision={5}  size='small'/>
          <p>Weststar’s showroom team made buying my GLE smooth and stress-free. <br />  Their after-sales service is top-notch.</p>
        </div>

    </div>

    </>
  )
}

export default Benzdealerprofile
