import { verifyWebhook } from '@clerk/express/webhooks'
import User from '../models/user.model.js'

export const clerkWebhook = async (req, res) => {
  try {
    const evt = await verifyWebhook(req)

    // Do something with payload
    // For this guide, log payload to console
    const { id, email_addresses, profile_image_url } = evt.data
    const eventType = evt.type
    if (eventType === 'user.created') {
      console.log('userId:', id)
      const newUser = new User({
        clerkUserId: id,
        username: evt.data.username || email_addresses[0]?.email_address,
        email: email_addresses[0]?.email_address,
        avatar: profile_image_url
      })
      await newUser.save()
      return res.status(200).json(newUser)
    }

    return res.status(200).json(`Received webhook with ID ${id} and event type of ${eventType}`)
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return res.status(400).send('Error verifying webhook')
  }
}