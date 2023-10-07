import { defineClientAppEnhance } from '@vuepress/client'
import as from './components/as.vue'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('as', as)
})