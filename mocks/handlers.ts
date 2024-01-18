import { http, HttpResponse } from 'msw'

export const handlers = [
  http.post('/api/convertkit', () => {
    return HttpResponse.json({
      status: 'success',
      message: 'Successfully subscribed!',
    })
  }),
]
