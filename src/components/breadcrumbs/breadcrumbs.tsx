interface Props {
  path: string;
}

const Breadcrumbs: React.FC<Props> = ({ path }) => {
  const pathDirs = path.split('/').filter(function (entry) {
    return entry.trim() != '';
  });

  const lastDir = pathDirs.pop();

  if (lastDir)
    return (
      <div className='md:hidden pt-6 px-6 font-bold text-xl'>
        <a href={'/'}>gergus.no</a>
        {pathDirs.map((dir) => {
          return (
            <>
              <p className='inline text-accent'>/</p>
              <a href={dir}>{dir}</a>
            </>
          );
        })}
        <p className='inline'>/</p>
        <a className='border-b-[2px] border-accent'>{lastDir}</a>
      </div>
    );

  return (
    <div className='md:hidden pt-6 px-6 font-bold text-xl'>
      <p className='border-b-[2px] border-accent w-min'>gergus.no</p>
    </div>
  );
};

export default Breadcrumbs;
