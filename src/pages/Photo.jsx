import PhotoCard from "../components/PhotoCard";
import { useState, useEffect } from "react";
import { getPhotos } from "../services/photo";

const PAGE_SIZE = 24;

const Photo = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchPhotos = async () => {
    const data = await getPhotos(page, PAGE_SIZE);

    setData((prevData) => [...prevData, ...data.data]);
    setLoading(false);
  };

  const handleScroll = () => {
    if (
      document.body.scrollHeight - 300 <
      window.scrollY + window.innerHeight
    ) {
      setLoading(true);
    }
  };

  function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }

  window.addEventListener("scroll", debounce(handleScroll, 1000));

  useEffect(() => {
    fetchPhotos();
  }, [page]);

  useEffect(() => {
    if (loading == true) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [loading]);

  console.log(page);

  return (
    <div>
      <div>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Watch all beautiful images in the world!
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
          Here are a variety of images that are exclusive to this website and
          cannot be found anywhere else.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {
            data.map(photoData => <PhotoCard key={photoData.id} data={photoData} />)
          }
        </div>
      </div>
    </div>
  );
};

export default Photo;
