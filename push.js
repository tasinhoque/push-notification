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

let sub = {
  endpoint:
    'https://wns2-sg2p.notify.windows.com/w/?token=BQYAAADzwOYDczHfncdt22BTLLubdVo%2fd7D0AKTqWnUm%2byhpQl1f4kNxUkfl%2bLNM6AGWN9A3M6FUVgi8D%2bse0rLl9M6soXGBi%2fXjKqG5H9flUmsHZNMy%2fXcvT51aNjXir8fSZv3yCMwELTTDnlpz3OhmDcNHhb3hUhqGk2kgd4TPPt43Z4RSTDcaR1tGrSXwPwQAwsP8WkaWVhXFBjtA7aWF6MQczcR2MwHNoZsRWtuYpci4%2fB13XVtxlbMIsuhXcQBqOmMec%2fENo0LqNdZg0QUjEdkwyQZoZjS3DIRAYp6mXASaeHnJM9QIqPJyMtIrW%2f%2f2gaBTkrrH3U0iWuHxoFr2pIeDiMuVwClZuPm179uWELl47g%3d%3d',
  expirationTime: null,
  keys: {
    p256dh:
      'BEZAjwOKxgmdsMJluPm7riTiXzlnvH_EMh65wsRDsarzImnf6s4DBo_QmoGp7g2Wm9BB3ISKttZ7FNXPQgZAmf4',
    auth: 'HJ6aOS7ONUJ_BIN8VvxHrw',
  },
}

push.sendNotification(sub, 'test message')
