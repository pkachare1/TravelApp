angular.module('TravelBookingApplication', [
        'ngSanitize',
        'ui.router',
        'ui.bootstrap',
        'ui.select',
        /*'validation',
        'validation.rule',*/
        require('../compositions/hello-world-module.js')
    ])
    .config(require('../routes/routes'))
    .constant('appName', 'TravelBookingApplication')
;