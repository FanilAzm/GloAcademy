const valid = new Validator({
    selector: '#myform',
    pattern: {
        // phone: /^\d+$/
    },
    method: {
        'phone': [
            ['notEmpty'],
            ['pattern', 'phone']
        ],
        'email': [
            ['notEmpty'],
            ['pattern', 'email']
        ]
    }
});

valid.init();