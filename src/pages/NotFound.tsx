import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
      <div className="grid-bg opacity-30" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h1 className="font-orbitron text-8xl md:text-9xl font-bold gradient-text-blue mb-6">
            404
          </h1>
          <h2 className="font-orbitron text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="btn-neon inline-flex">
            <span className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Back to Home
            </span>
          </Link>
        </motion.div>
      </div>
    </main>
  );
};

export default NotFound;
