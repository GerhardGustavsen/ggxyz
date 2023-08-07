import type { ReactNode } from 'react';
import Dir from './dir';
import Tab from './tab';

interface Props {
  path: string;
}

const Stack: React.FC<Props> = ({ path }) => (
  <>
    <Dir title='blog'>
      <Tab path={path} title={'test'} url='/test' />
      <Tab path={path} title={'empty'} url='' />
    </Dir>
    <Dir title='images'>
      <Tab path={path} title={'404'} url='/nope' />
      <Tab path={path} title={'empty'} url='' />
    </Dir>
    <Dir title='code'>
      <Tab path={path} title={'empty'} url='' />
      <Tab path={path} title={'empty'} url='' />
    </Dir>
  </>
);

export default Stack;
