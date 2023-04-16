import { sendError } from 'h3';
export default defineEventHandler((event) => {
    const clientSideRoutes = !event.req.url.startsWith('/api');

    // eslint-disable-next-line no-console
    console.log(event)

    // if (clientSideRoutes) {
    //     return;
    // } else if (!event.req.headers.authorization) {
    //     sendError(event, new Error('Unathorized'))
    // }  event.context.auth = {
    //     authenticated: true,
    //     user: event.req.user,
    // }
});