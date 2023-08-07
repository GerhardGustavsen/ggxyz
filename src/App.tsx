import Sidebar from './components/sidebar';

const sidebarWidth = 96;

function App() {
  return (
    <div className='border-[1px] h-full w-full absolute border-[#8000ff]'>
      <Sidebar width={sidebarWidth} />
      <div className={`ml-${sidebarWidth}`}>hello</div>
    </div>
  );
}

export default App;
