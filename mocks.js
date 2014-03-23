$.mockjax({
    url: '/api/success',
    dataType: "json",
    status: 200,
    responseTime: 1000,
    response: function(settings) {
        this.responseText = "Success after 1 second from the API"
    }
});

$.mockjax({
    url: '/api/success/slow',
    dataType: "json",
    status: 200,
    responseTime: 3000,
    response: function(settings) {
        this.responseText = "Success after 3 seconds from the API"
    }
});

$.mockjax({
    url: '/api/error/500',
    dataType: "json",
    status: 500,
    responseTime: 1000,
    response: function(settings) {
        this.responseText = "Error 500 after 1 second from the API"
    }
});

$.mockjax({
    url: '/api/error/500/slow',
    dataType: "json",
    status: 500,
    responseTime: 3000,
    response: function(settings) {
        this.responseText = "Error 500 after 3 seconds from the API"
    }
});
