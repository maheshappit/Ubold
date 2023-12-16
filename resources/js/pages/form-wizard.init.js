/*
Template Name: Ubold - Responsive Bootstrap 5 Admin Dashboard
Author: CoderThemes
Website: https://coderthemes.com/
Contact: support@coderthemes.com
File: Form wizard init js
*/

// import 'twitter-bootstrap-wizard';
// import 'twitter-bootstrap-wizard/bootstrap/js/bootstrap
// import {Tab} from "bootstrap";

$(document).ready(function () {
    "use strict";

    document.querySelectorAll('[data-bs-toggle="tab"]').forEach((e)=>Tab.getOrCreateInstance(e))
    $('#basicwizard').bootstrapWizard();

    $('#progressbarwizard').bootstrapWizard({
        onTabShow: function (tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index + 1;
            var $percent = ($current / $total) * 100;
            $('#progressbarwizard').find('.bar').css({ width: $percent + '%' });
        }
    });
    
    $('#btnwizard').bootstrapWizard({ 'nextSelector': '.button-next', 'previousSelector': '.button-previous', 'firstSelector': '.button-first', 'lastSelector': '.button-last' });
    
    $('#rootwizard').bootstrapWizard({
        'onNext': function (tab, navigation, index) {
            var form = $($(tab).data("targetForm"));
            if (form) {
                form.addClass('was-validated');
                if (form[0].checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                    return false;
                }
            }
        }
    });
});
