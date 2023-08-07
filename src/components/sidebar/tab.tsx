interface Props {
  title: string;
}

const Tab: React.FC<Props> = ({ title }) => (
  <p className='bg-[#8000ff] pl-2'>{title}</p>
);

export default Tab;
