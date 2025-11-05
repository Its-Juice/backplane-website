import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor libraries for better caching
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'effects': ['./src/components/effects/GlobalDarkVeil.jsx'],
          'performance': ['web-vitals']
        }
      }
    },
    // Increase chunk size warning limit for better analysis
    chunkSizeWarningLimit: 1000,
    // Enable source maps for production debugging
    sourcemap: false,
    // Optimize CSS
    cssCodeSplit: true,
    cssMinify: true,
    // Minify options
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info']
      },
      mangle: {
        safari10: true
      },
      format: {
        comments: false
      }
    },
    // Target modern browsers for better tree-shaking
    target: ['es2018', 'chrome80', 'firefox78', 'safari14']
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'web-vitals'],
    exclude: ['ogl'] // Lazy load heavy graphics library
  },
  // Server configuration for development
  server: {
    // Enable compression in development
    compress: true,
    // Optimize HMR
    hmr: {
      overlay: false
    }
  },
  // CSS optimization
  css: {
    devSourcemap: false,
    preprocessorOptions: {
      scss: {
        charset: false
      }
    }
  }
})
