const express= require('express');
const cookiesRouter= require('./cookies/cookies.routes');
const sessionRouter= require('./session/session.routes');
const router= express.Router();

router.get('/health', (_req, res)=> {
    const environment= process.env.ENVIRONMENT || 'undefined';
    res.status(200).json({
        success: true,
        health: 'Up!',
        environment
    })
})

.use('/cookies', cookiesRouter)
.use('/session', sessionRouter);


module.exports= router;