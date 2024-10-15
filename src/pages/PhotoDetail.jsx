import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPhoto } from "../services/photo";

const PhotoDetail = () => {
    const [photo, setPhoto] = useState(null)
    const { id } = useParams();

    const fetchPhoto = async () => {
        const data = await getPhoto(id)
        setPhoto(data.data)
    }

    useEffect(() => {
        fetchPhoto()
    }, [])

  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
            <div className="col-span-1 lg:col-span-2">
                <img className="max-h-screen" src={photo ? photo.urls.full : "empty"} alt="" />
            </div>
            <div className="col-span-1 text-xl flex items-center">
                <div className="text-left">
                    <p className="my-8">{`Title: ${photo ? photo.alt_description : ""}`}</p>
                    <p className="my-8">{`Author: ${photo ? photo.user.name: ""}`}</p>
                    <p className="my-8 mb-20">{`Description: ${photo && photo.description ? photo.description : ""}`}</p>
                    {/*  className="bg-blue-400 p-4 rounded-2xl border-4 border-blue-400 cursor-pointer text-white hover:text-blue-400 hover:bg-white" */}
                
                    <Link to="/photos" className="bg-blue-400 p-4 rounded-2xl border-4 border-blue-400 cursor-pointer text-white hover:text-blue-400 hover:bg-white">&larr; Back to photos</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PhotoDetail