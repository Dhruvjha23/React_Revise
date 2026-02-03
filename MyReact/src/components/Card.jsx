import './Card.css'
import { Bookmark } from 'lucide-react'


const Card = ({img, alt, title, time, description, type, level, rate, location}) => {
  return (
      <div className='Card'>
        <div className='top'>
          <img src={img} alt={alt}/>
          <button className='Buttton'>Save <Bookmark size={14}/></button>
        </div>
        <div className='Center'>
          <div className='Title'>{title} <span>{time}</span></div>
          <div className='Description'>{description}</div>
          <div className='btn-2'>
            <button className='Info'>{type}</button>
            <button className='Info-2'>{level}</button>
          </div>
        </div>
        <div className='Bottom'>
          <div className='Bottom-Left'>
            <span className='Rate'>{rate}</span>
            <span className='Location'>{location}</span>
          </div>
          <button className='Apply'>Apply Now</button>
        </div>
        </div>
  )
}


export default Card
