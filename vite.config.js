import { defineConfig } from 'vite'

// พิมพ์ request ที่ Server ได้รับลง Terminal
// เพื่อเทียบกับที่เห็นฝั่ง Client ในแท็บ Network
const logRequests = {
  name: 'log-requests',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      res.on('finish', () => {
        // ข้ามไฟล์ภายในของ Vite เพื่อให้อ่านง่าย
        if (!req.url.startsWith('/@') && !req.url.startsWith('/node_modules')) {
          console.log(`${req.method} ${req.originalUrl} ${res.statusCode}`)
        }
      })
      next()
    })
  },
}

export default defineConfig({
  // ให้ไฟล์ที่ไม่มีจริงตอบ 404 (ค่าปกติของ Vite จะส่ง index.html กลับมาแทน)
  appType: 'mpa',
  plugins: [logRequests],
})
