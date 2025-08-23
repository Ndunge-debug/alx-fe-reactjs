import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
<<<<<<< HEAD

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
=======
import tailwindcss from 'tailwindcss' 

export default defineConfig({
  plugins: [
    react(),
    tailwindcss() 
  ]
})

>>>>>>> 88a0050a03e5e51c49d765e9039a0d6cad74632e
