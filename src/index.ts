import app from "./app";
import logger from "./utils/logger";

app.listen(app.get("port") , ()=>{
    logger.info(`🟢 App listening on the port ${app.get('port')}`);
});

