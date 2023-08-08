interface Props {
  text: string;
  title?: string;
  img?: string;
  date?: Date;
}

const Article: React.FC<Props> = ({ title, date, img, text }) => {
  if (img) {
    return (
      <div className='border-b-[1px] border-fgLight mb-6 pb-3 flex'>
        <img
          className='float-left mr-3'
          src={`../../images/${img}.jpg`}
          alt={img}
          width='250'
        />
        <div>
          <h2 className='font-bold text-lg inline'>
            {date && date.toLocaleDateString('es-pa') + ' - '}
            {title && title + ' '}
          </h2>
          <p className='inline'>{text}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className='border-b-[1px] border-fgLight mb-6 pb-3 flex'>
        <h2 className='font-bold text-lg inline'>
          {date && date.toLocaleDateString('es-pa') + ' - '}
          {title && title + ' '}
        </h2>
        <p className='inline'>{text}</p>
      </div>
    );
  }
};

export default Article;
