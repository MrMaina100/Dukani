import PacmanLoader from 'react-spinners/PacmanLoader';
import { CSSProperties, useState } from 'react';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
};

export default function Pacman() {
  const [color] = useState('#2966eb');
  return (
    <div className='flex flex-col space-y-2 items-center justify-center'>
      <PacmanLoader
        color={color}
        cssOverride={override}
        size={16}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <p className='text-sm text-muted-foreground'>
         Loading......

      </p>
    </div>
  );
}
