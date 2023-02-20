import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY: string | undefined = process.env.REACT_APP_API_KEY;
const url: string = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

interface GifData {
  data: {
    images: {
      downsized_large: {
        url: string;
      };
    };
  };
}

interface UseGifHook {
  gif: string;
  fetchGif: (tag?: string) => void;
}

const useGif = (tag?: string): UseGifHook => {
  const [gif, setGif] = useState<string>('');

  const fetchGif = async (tag?: string) => {
    try {
      const { data } = await axios.get<GifData>(tag ? `${url}&tag=${tag}` : url);
      const imageSrc = data.data.images.downsized_large.url;
      setGif(imageSrc);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchGif(tag);
  }, [tag]);

  return { gif, fetchGif };
};

export default useGif;
