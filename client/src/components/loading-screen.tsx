import { motion } from "framer-motion";

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50"
      data-testid="loading-screen"
    >
      <div className="text-center">
        <div className="loading-spinner mx-auto mb-4" data-testid="loading-spinner"></div>
        <p className="text-gray-400" data-testid="loading-text">Loading Portfolio...</p>
      </div>
    </motion.div>
  );
}
