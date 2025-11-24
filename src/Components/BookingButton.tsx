import React from 'react'

type Props = {textButton: string}

const BookingButton: React.FC<Props> = ({textButton}: Props) => {
  return (
    
    <a href='#' className='button'
    onClick={()=>{
        alert("Booking Button Clicked");
    }}>{textButton}</a>
  )
}

export default BookingButton;