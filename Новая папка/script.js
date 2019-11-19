const valid = new Validator({
    selector: '#myform',
    pattern: {
        // phone: /^\d+$/
    },
    method: {}
});

valid.init();