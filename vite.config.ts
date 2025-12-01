import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   base: '/Akromah-Nyame-Travel-and-Tour/',
     resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, 'src')}],
    },
 
  });



  //  resolve: {
  //   alias: [{ find: "@", replacement: path.resolve(__dirname, 'src')}],
  //   },