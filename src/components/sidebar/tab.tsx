interface Props {
  title: string;
}

const Tab: React.FC<Props> = ({ title }) => (
  <p className='bg-accent pl-2'>{title}</p>
);

export default Tab;
