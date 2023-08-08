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
          className='float-left mr-3'
          src={`../../images/${img}`}
          alt={img}
          width='250'
        />
      )}
      <div>
        {title && <h2 className='font-bold text-lg inline'>{title + ' '}</h2>}
        <p className='inline'>{text}</p>
      </div>
    </div>
  );
};

export default Smal;
