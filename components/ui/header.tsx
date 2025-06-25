import { motion } from "framer-motion";
import Link from "next/link";
import { sendMetaEvent } from "../../services/metaEventService";

export function Header() {
  // Función para manejar el registro y enviar evento a Meta
  const handleRegistration = async () => {
    try {
      // Generar un email temporal para el evento (en producción esto vendría del formulario de registro)
      const tempEmail = `user_${Date.now()}@example.com`;
      
      // Enviar evento a Meta
      const success = await sendMetaEvent(tempEmail, "10");
      console.log(success);
      
      if (success) {
        console.log('Evento de registro enviado exitosamente a Meta');
      } else {
        console.warn('No se pudo enviar el evento a Meta');
      }
      
      // Redirigir al usuario a la URL de registro
      const registerUrl = process.env.NEXT_PUBLIC_REGISTER_URL;
      if (registerUrl) {
        window.location.href = registerUrl;
      }
    } catch (error) {
      console.error('Error en el proceso de registro:', error);
      // Aún redirigir al usuario aunque falle el evento
      const registerUrl = process.env.NEXT_PUBLIC_REGISTER_URL;
      if (registerUrl) {
        window.location.href = registerUrl;
      }
    }
  };

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

          <button 
            onClick={handleRegistration}
            className="bg-green-600 text-white px-6 py-2 rounded-full font-bebas text-xl hover:bg-green-700 transition-colors ml-8"
          >
            Empezar
          </button>
        </div>
      </div>
    </motion.header>
  );
} 