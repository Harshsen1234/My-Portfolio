import React from 'react'

export const Mape = () => {
    let arr=[1,2,3,4,5,6,7]
  return (
    <div>
        {
            arr.map((a,c,d)=>{
                console.log(c);
            })
        }
    </div>
  )
}
export default Mape;