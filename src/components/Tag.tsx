import React, { useState } from 'react';
import useGif from '../hooks/useGif';

const Tag = (): JSX.Element => {
  const [tag, setTag] = useState<string>('dog');
  const { gif, fetchGif } = useGif(tag);

  const handleClick = () => {
    fetchGif(tag);
  };

  return (
    <div className="container">
      <h1>Tag Gif</h1>
      <img src={gif} alt="Random Gif" />
      <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
      <button type="button" onClick={handleClick}>Click For New</button>
    </div>
  );
};

export default Tag;
