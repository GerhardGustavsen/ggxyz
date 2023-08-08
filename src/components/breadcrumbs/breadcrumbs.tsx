interface Props {
  path: string;
}

const Breadcrumbs: React.FC<Props> = ({ path }) => {
  const pathDirs = path.split('/');

  return (
    <div className='md:hidden pt-6 px-6 last:bg-black font-bold text-xl'>
      <a href={'/'}>gergus.no</a>
      {pathDirs.map((dir) => {
        if (dir != '')
          return (
            <>
              <p className='inline text-accent'>/</p>
              <a href={dir}>{dir}</a>
            </>
          );
      })}
    </div>
  );
};

export default Breadcrumbs;
