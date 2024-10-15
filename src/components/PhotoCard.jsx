/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const PhotoCard = ({data}) => {
  return (
    <Link to={data.id} className='border-4 rounded-lg hover:scale-110 hover:border-green-400 duration-150 cursor-pointer'>
      <img src={data.urls.small} alt="" />
      <div>
          <span className='font-bold'>{data.user.name}</span>
      </div>
    </Link>
  )
}

export default PhotoCard