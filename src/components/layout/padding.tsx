import type React from 'react';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Padding: React.FC<Props> = ({ children }) => (
  <div className='p-6 md:w-min'>{children}</div>
);

export default Padding;
