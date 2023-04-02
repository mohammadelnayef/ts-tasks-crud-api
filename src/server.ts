import app from './app';
import constants from './utils/constants';

app.listen(constants.PORT, function(){
    console.log("Server listening on requests on PORT: ", constants.PORT);
});

