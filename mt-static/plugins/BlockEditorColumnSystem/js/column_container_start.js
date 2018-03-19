; (function ($) {

    var BEF = MT.BlockEditorField;
    var label = trans('Column Container Start');

    BEF.ColumnContainerStart = function () { BEF.apply(this, arguments) };
    $.extend(BEF.ColumnContainerStart, {
        label: trans('Column Container Start'),
        create_button: function () {
            return $('<button type="button" class="btn btn-contentblock"><svg title="' + label + '" role="img" class="mt-icon"><use xlink:href="' + StaticURI + 'plugins/BlockEditorColumnSystem/images/fontawesome/sprite.svg#ic_columns"></use></svg>' + label + '</button>');
        },
    });
    $.extend(BEF.ColumnContainerStart.prototype, BEF.prototype, {
        get_id: function () {
            return this.id;
        },
        get_type: function () {
            return 'column_container_start';
        },
        get_svg: function() {
          return '<svg title="' + this.label + '" role="img" class="mt-icon" style="margin: 0 auto; width: 14px; height: 14px;"><use xlink:href="' + StaticURI + 'plugins/BlockEditorColumnSystem/images/fontawesome/sprite.svg#ic_columns"></use></svg>';
        },
        create: function (id, data) {
            var self = this;
            self.id = id;
            self.edit_field = 'Column Container Start';
            return self.edit_field;
        },
        get_data: function () {
            var self = this;
            return {
                'html': self.get_html(),
            };
        },
        get_html: function () {
            return '<div class="layoutColumn">';
        }
    });

    MT.BlockEditorFieldManager.register('column_container_start', BEF.ColumnContainerStart);

})(jQuery);
