import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: 'ai-certified-financial-advisor-ozslcyf2',
  authRequired: true
})

export default blink