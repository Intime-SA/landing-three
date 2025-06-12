import { motion } from "framer-motion";
import Link from "next/link";

export function Header() {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <Link href="/" className="flex items-center mr-8">
            <img 
              src="https://mooneymaker.co/frontend/CSOFTV7/img/logo%20mooney.png" 
              alt="MooneyMaker Logo" 
              className="h-8 w-auto"
            />
          </Link>
          
          <nav className="flex-1 flex justify-center">
          
        
          </nav>

          <Link 
            href="https://mooneymaker.co/?ref=57783"
            className="bg-green-600 text-white px-6 py-2 rounded-full font-bebas text-xl hover:bg-green-700 transition-colors ml-8"
          >
            Empezar
          </Link>
        </div>
      </div>
    </motion.header>
  );
} 