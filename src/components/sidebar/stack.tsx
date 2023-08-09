import Dir from './dir';

interface Props {
  path: string;
}

const Stack: React.FC<Props> = ({ path }) => (
  <div className='text-xl md:text-base underline md:no-underline'>
    <Dir path={path} title='blog' url='/blog' />
    <Dir path={path} title={'me'} url='/me' />
    <Dir path={path} title={'web'} url='/web' />
  </div>
);

export default Stack;
