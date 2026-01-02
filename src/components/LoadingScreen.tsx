import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface LoadingScreenProps {
  onComplete: () => void
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Smooth progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 1.5
      })
    }, 25)

    const timer = setTimeout(() => {
      setLoading(false)
      setTimeout(() => {
        onComplete()
      }, 800) // Wait for fade out animation
    }, 2500)

    return () => {
      clearTimeout(timer)
      clearInterval(progressInterval)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="fixed inset-0 z-[99999] bg-gradient-to-br from-gray-950 via-blue-950/20 to-gray-950 flex items-center justify-center overflow-hidden"
          style={{ pointerEvents: loading ? 'auto' : 'none' }}
        >
      {/* Animated geometric background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-blue-500/30 rounded-full"
            style={{
              width: `${200 + i * 150}px`,
              height: `${200 + i * 150}px`,
              left: '50%',
              top: '50%',
              x: '-50%',
              y: '-50%',
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 20 + i * 5, repeat: Infinity, ease: 'linear' },
              scale: { duration: 3 + i, repeat: Infinity, ease: 'easeInOut' },
            }}
          />
        ))}
      </div>

      {/* Enhanced particle system */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-blue-400/50 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [0, 1.5, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Main content */}
      <div className="text-center relative z-10">
        {/* Enhanced animated logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ 
            type: 'spring', 
            stiffness: 200, 
            damping: 20,
            delay: 0.2
          }}
          className="mb-12"
        >
          <motion.div
            className="w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 p-1.5 mb-8 relative"
            animate={{ 
              rotate: 360,
            }}
            transition={{ 
              rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
            }}
          >
            {/* Outer glow rings */}
            <motion.div
              className="absolute -inset-4 rounded-full border-2 border-blue-500/30"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute -inset-8 rounded-full border border-purple-500/20"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
            />
            
            <div className="w-full h-full rounded-full bg-gray-950 flex items-center justify-center relative overflow-hidden">
              {/* Inner gradient animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              <span className="text-6xl font-bold text-white relative z-10">ES</span>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
            className="text-6xl md:text-7xl font-bold text-white mb-3"
          >
            Essa Shah
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="inline-block"
          >
            <motion.p
              className="text-blue-400 text-xl font-semibold"
              animate={{
                textShadow: [
                  '0 0 10px rgba(59, 130, 246, 0.5)',
                  '0 0 20px rgba(59, 130, 246, 0.8)',
                  '0 0 10px rgba(59, 130, 246, 0.5)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              AI/ML Engineer
            </motion.p>
          </motion.div>
        </motion.div>
        
        {/* Enhanced progress bar */}
        <motion.div
          className="w-96 max-w-full mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="w-full h-2 bg-gray-800/50 rounded-full overflow-hidden relative backdrop-blur-sm">
            {/* Background shimmer */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              {/* Animated shine */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              />
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 blur-sm"
                style={{
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(147, 51, 234, 0.4)',
                }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </div>
          
          <motion.div
            className="flex items-center justify-center gap-2 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <motion.span
              className="text-2xl font-bold text-blue-400"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              {Math.round(progress)}%
            </motion.span>
            <motion.span
              className="text-gray-500 text-sm"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Loading...
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen

