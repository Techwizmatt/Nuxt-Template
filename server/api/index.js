// https://medium.com/@shahriarrahi/create-api-with-nuxt3-adcb7b6a17dd

import { createApp, useBase, sendError } from 'h3'

const app = createApp({
    debug: true,
    onError: (error, event) => {
        sendError(event, error)
    },
});

app.use('/', eventHandler(() => 'Hello world!'))

export default useBase('/api', app)