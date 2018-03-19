; (function ($) {

    var BEF = MT.BlockEditorField;
    var label = trans('Column End');

    BEF.ColumnEnd = function () { BEF.apply(this, arguments) };
    $.extend(BEF.ColumnEnd, {
        label: trans('Column End'),
        create_button: function () {
            return $('<button type="button" class="btn btn-contentblock"><svg title="' + label + '" role="img" class="mt-icon"><use xlink:href="' + StaticURI + 'plugins/BlockEditorColumnSystem/images/fontawesome/sprite.svg#ic_square"></use></svg>' + label + '</button>');
        },
    });
    $.extend(BEF.ColumnEnd.prototype, BEF.prototype, {
        get_id: function () {
            return this.id;
        },
        get_type: function () {
            return 'column_end';
        },
        get_svg: function() {
            return '<svg title="' + this.label + '" role="img" class="mt-icon" style="margin: 0 auto; width: 14px; height: 14px;"><use xlink:href="' + StaticURI + 'plugins/BlockEditorColumnSystem/images/fontawesome/sprite.svg#ic_square"></use></svg>';
        },
        create: function (id, data) {
            var self = this;
            self.id = id;
            self.edit_field = 'Column End';
            return self.edit_field;
        },
        get_data: function () {
            var self = this;
            return {
                'html': self.get_html(),
            };
        },
        get_html: function () {
            return '</div><!-- /.layoutColumn__col -->';
        }
    });

    MT.BlockEditorFieldManager.register('column_end', BEF.ColumnEnd);

})(jQuery);
