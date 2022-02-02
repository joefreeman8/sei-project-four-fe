import { notify } from 'react-notify-toast'

export function createNotification(message) {
  notify.show(message, 'custom', 3000, { background: '#fed636', color: '#302c2c' })
}