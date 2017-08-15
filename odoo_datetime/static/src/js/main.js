odoo.define('test_odoo.main', function (require) {
    "use strict";

//    JS for adding the current_datetime object for comparison in tree and other places
    var ListView = require('web.ListView');
    var session = require('web.session');
    var View = require('web.View');

    ListView.include({
        compute_decoration_classnames: function (record) {
            var classnames= '';
            var context = _.extend({}, record.attributes, {
                uid: session.uid,
                current_date: moment().format('YYYY-MM-DD'),
                current_datetime: moment().utc().format('YYYY-MM-DD hh:mm:ss'),

            });
            _.each(this.decoration, function(expr, decoration) {
                if (py.PY_isTrue(py.evaluate(expr, context))) {
                    classnames += ' ' + decoration.replace('decoration', 'text');
                }
            });
            return classnames;
        },
        style_for: function (record) {
            var len, style= '';
            var context = _.extend({}, record.attributes, {
                uid: session.uid,
                current_date: moment().format('YYYY-MM-DD'),
                current_datetime: moment().utc().format('YYYY-MM-DD hh:mm:ss'),

            });
            var i;
            var pair;
            var expression;
            if (this.fonts) {
                for(i=0, len=this.fonts.length; i<len; ++i) {
                    pair = this.fonts[i];
                    var font = pair[0];
                    expression = pair[1];
                    if (py.PY_isTrue(py.evaluate(expression, context))) {
                        switch(font) {
                        case 'bold':
                            style += 'font-weight: bold;';
                            break;
                        case 'italic':
                            style += 'font-style: italic;';
                            break;
                        case 'underline':
                            style += 'text-decoration: underline;';
                            break;
                        }
                    }
                }
            }

            if (!this.colors) { return style; }
            for(i=0, len=this.colors.length; i<len; ++i) {
                pair = this.colors[i];
                var color = pair[0];
                expression = pair[1];
                if (py.PY_isTrue(py.evaluate(expression, context))) {
                    return style += 'color: ' + color + ';';
                }
            }
            return style;
        },
    });

    View.include({
        color_for: function (record) {
        if (!this.colors) { return ''; }
        var context = _.extend({}, record, {
            uid: session.uid,
            current_date: moment().format('YYYY-MM-DD'),
            current_datetime: moment().utc().format('YYYY-MM-DD hh:mm:ss'),

        });
        for(var i=0, len=this.colors.length; i<len; ++i) {
            var pair = this.colors[i],
                color = pair[0],
                expression = pair[1];
            if (py.PY_isTrue(py.evaluate(expression, context))) {
                return 'color: ' + color + ';';
            }
        }
        return '';
    },
    });

});