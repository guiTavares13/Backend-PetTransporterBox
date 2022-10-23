require('@google-cloud/debug-agent').start({serviceContext: {enableCanary: true}});
const app = require('./src/app');


const port = process.env.PORT | 3333
app.listen(port,()=>{
    console.log(`PET Transport Backend Running on port: ${port}!!`);
});

