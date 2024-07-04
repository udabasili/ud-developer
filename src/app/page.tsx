"use client"
import { FaArrowRight } from 'react-icons/fa';
import { Layout } from './components/Layout';
import { About, Header, ProjectSummary, Services, WorkProcess } from './feature/home';


export default function Home() {
  return (
    <Layout>
      <Header />
      <About />
      <Services />
      <ProjectSummary />
      <div className="col-[full-start/full-end] grid grid-cols-[1fr_min-content]  px-6 my-8 tabPort:py-6 " >
        <span className="text-left text-[4rem] font-bold text-black tabPort:text-2xl ">SO START YOUR NEXT DREAM PROJECT</span>
        <span className="w-20 h-20 rounded-full flex justify-center items-center  self-center tabPort:my-2 justify-self-center tabPort:w-20 tabPort:h-20 bg-primary">
          <FaArrowRight color='white' size={20} />
        </span>
      </div>
    </Layout>
  );
}
