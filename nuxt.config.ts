export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'http://localhost:3000/api/app-api' // Public config accessible in client
    }
  }
})
