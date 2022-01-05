import { motion } from 'framer-motion';

export default function Button({ method, name }) {
  return (
    <div>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 150 }}
        whileHover={{
          scale: 1.1,
        }}
        className="transition duration-500 ease-in-out transform hover:scale-110 hover:-translate-y-1  text-black bg-default ring-2 rounded-lg p-2 m-1 "
        onClick={method}
      >
        {name}
      </motion.button>
    </div>
  );
}
