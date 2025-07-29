import express from 'express'
import { clerkWebhook } from '../controllers/webhook.controller.js'
const router = express.Router()

router.post('/clerk', clerkWebhook)

export default router
