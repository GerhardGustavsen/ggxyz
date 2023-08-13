interface Props {
  text: string;
  date?: string;
  title?: string;
  img?: string;
}

const Smal: React.FC<Props> = ({ title, img, text, date }) => {
  return (
    <div className='border-b-[1px] border-fgLight pb-3 flex'>
      {img && (
        <img
          className='relative opacity-0 mr-[-250px]'
          src={`../../images/${img}`}
          width='250'
        />
      )}
      <div>
        {img && (
          <img
            className='float float-left mr-3 bg-red'
            src={`../../images/${img}`}
            alt={img}
            width='250'
          />
        )}
        <div>
          {title && <h2 className='font-bold text-lg inline'>{title + ' '}</h2>}
          <p className='inline whitespace-pre-wrap'>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Smal;
