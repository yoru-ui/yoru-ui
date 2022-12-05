import React, { useEffect, useState } from 'react';

const useOutsideBounds = (
  ref: React.RefObject<HTMLElement>,
): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [visible, setVisible] = useState<boolean>(false);
  const [outside, setOutside] = useState<boolean>(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOutside(true);
        return;
      }
      setOutside(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  useEffect(() => {
    if (outside) {
      setVisible(false);
    }
  }, [visible, outside]);

  return [visible, setVisible];
};

export default useOutsideBounds;
