import Blog from './falvors/blog';
import Broken from './falvors/broken';
import Smal from './falvors/smal';

interface Props {
  json: {
    title: string;
    text: string;
    img: string;
    date: string;
    type: string;
  };
}

const articleWidth = 'md:w-[675px] 2xl:w-[800px]';

const Article: React.FC<Props> = ({ json }) => {
  if (json.date == '' || json.text == '') {
    return <Broken />;
  }

  const title = json.title != '' ? json.title : undefined;
  const img = json.img != '' ? json.img : undefined;

  if (json.type == 'blog') {
    return (
      <div className={articleWidth + ' mb-6'}>
        <Blog title={title} text={json.text} date={json.date} img={img} />
        <p className='text-center'>{json.date}</p>
      </div>
    );
  } else if (json.type == 'info') {
    return (
      <div className={articleWidth + ' mb-6'}>
        <Smal title={title} text={json.text} img={img} />
      </div>
    );
  }
  return (
    <div className={articleWidth + ' mb-6'}>
      <Smal title={title} text={json.text} img={img} date={json.date} />
      <p className='text-center'>{json.date}</p>
    </div>
  );
};

export default Article;
