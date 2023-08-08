interface Props {
  text: string;
  date: string;
  title?: string;
  img?: string;
}

const Blog: React.FC<Props> = ({ title, img, text, date }) => {
  return (
    <div className='border-b-[1px] border-fgLight pb-3'>
      <div className='flex justify-between my-2'>
        {title && <h2 className='font-bold text-lg inline'>{title}</h2>}
      </div>
      {img && (
        <img
          className='float-left p-3'
          src={`../../images/${img}`}
          alt={img}
          width='full'
        />
      )}
      <div>
        <p className='inline'>{text}</p>
      </div>
    </div>
  );
};

export default Blog;
