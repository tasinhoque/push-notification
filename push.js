const push = require('web-push')

const vapidKeys = {
  publicKey:
    'BKjU0Q77w8J0hb2AOuE09eyPzzEOFb_VsmYGOmT_f9QmNffiiCpTO0GelVeIQrUhY1Q8_nR64_KkROyuwH9bvDQ',
  privateKey: 'bEYfuSR5ALd0z7LJ_12kjb8XRpeYF2MoIg4Boemucp8',
}

push.setVapidDetails(
  'mailto:test@code.co.uk',
  vapidKeys.publicKey,
  vapidKeys.privateKey
)

let sub = {}

push.sendNotification(sub, 'test message')
