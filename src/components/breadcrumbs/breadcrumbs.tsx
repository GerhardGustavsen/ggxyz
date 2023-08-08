interface Props {
  path: string;
}

const Breadcrumbs: React.FC<Props> = ({ path }) => {
  return (
    <div className='md:hidden pt-6 px-6'>
      <a>gergus.no</a>
      <a>{path}</a>
    </div>
  );
};

export default Breadcrumbs;
