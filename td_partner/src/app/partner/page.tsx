import Link from 'next/link';
import Barcode from '../components/barcode';
import Navbar from '../components/navbar';

const Partner = () => {
    return (
        
<div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center pt-24 bg-gray-100">

         <div className="flex min-h-screen flex-col items-center justify-between p-24">
           <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
           <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
             Please scan using your TD ID app
           </p>
           </div>
        
  
        <div className="flex-grow flex justify-center items-center">
          Car Insurance Company
        </div>
        <Barcode value="Car Insurance Company Information" />
      </div>
    </main>
   </div>
    
    );
  }

  

export default Partner;