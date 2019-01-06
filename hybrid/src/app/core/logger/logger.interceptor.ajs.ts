function interceptor() {

    return {
        response: function(response) {
            console.log('Response received from: ' +  response.config.url);
            return response;
        },
    };
}

export default interceptor;
