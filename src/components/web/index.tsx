import Link from '../link';

const Web = () => (
  <div className='w-max'>
    <p>Friends of mine:</p>
    <div className='mb-6 pl-3'>
      <Link name='Isak' url='isak.me/'></Link>
      <Link name='Nuutti' url='nuutti.no/'></Link>
    </div>
    <p>Other cool websites</p>
    <div className='mb-6 pl-3'>
      <Link name='DanBall' url='dan-ball.jp/en/'></Link>
      <Link name='Luke Smith' url='lukesmith.xyz/'></Link>
    </div>
  </div>
);

export default Web;
