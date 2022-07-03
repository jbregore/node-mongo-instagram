import { Typography } from '@mui/material'
import React from 'react'

const HomeProfile = () => {
const arr = [1, 2, 3, 4, 5];
  return (
    <div style={{ width: '100%'}}>
        <div style={{display: 'flex',
         flexDirection: 'row', 
         alignItems: 'center',}}>
            <div style={{flex: .4}}>
                <img style={{width: 50, height: 50, objectFit: 'cover', borderRadius: '50%'}}
                src="https://media.customon.com/unsafe/1200x1200/img.customon.com/art/2/1200/1200/aec9e2/40193/82ae33cf56ff0d36f2a7bccd579de3e7.png.jpg" alt="" />
            </div>

            <div style={{flex: 1, textAlign: 'left'}}>
                <Typography variant="body1" color="text.secondary">username</Typography>
                <Typography variant="body2" color="text.secondary">name</Typography>
            </div>

            <div style={{flex: .5}}>
                <Typography variant="body2" style={{color: "#4a80e1"}}>Switch</Typography>
            </div>
        </div>

        <Typography variant="body1" style={{marginTop: 10, marginBottom: 10}}>Suggestions for you</Typography>
        {arr.map((item, index) => (
            <div style={{display: 'flex',
            flexDirection: 'row', 
            alignItems: 'center', marginBottom: 10}} key={index}>
               <div style={{flex: .3}}>
                   <img style={{width: 40, height: 40, objectFit: 'cover', borderRadius: '50%'}}
                   src="https://media.customon.com/unsafe/1200x1200/img.customon.com/art/2/1200/1200/aec9e2/40193/82ae33cf56ff0d36f2a7bccd579de3e7.png.jpg" alt="" />
               </div>
   
               <div style={{flex: 1.2, textAlign: 'left'}}>
                   <Typography variant="body2" color="text.secondary">username</Typography>
                   <Typography variant="body2" style={{fontSize: 12}} color="text.secondary">name</Typography>
               </div>
   
               <div style={{flex: .5}}>
                   <Typography variant="body2" style={{color: "#4a80e1"}}>Follow</Typography>
               </div>
           </div>
        ))}

    </div>
  )
}

export default HomeProfile