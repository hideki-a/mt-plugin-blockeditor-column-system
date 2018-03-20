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
            var $column;
            self.id = id;
            self.edit_field = $('<div class="row no-gutters py-2"><div class="col"></div></div>');
            self.select_header = $('<div class="form-group"><label class="form-control-label" for="' + id + '-ncolumns">' + trans('Number of columns') + '</label><select class="custom-select form-control w-25 ml-3" name="' + id + '-ncolumns" id="' + id + '-ncolumns"  mt:watch-change="1"><option value="2">2 columns</option><option value="3">3 columns</option><option value="4">4 columns</option></select></div>');
            if (data.ncolumns) {
                self.select_header.find('select').val(data.ncolumns);
            }

            $columns = self.edit_field.find('.col');
            $columns.append(self.select_header);
            $columns.append('<p>Column Container Start</p>');
            return self.edit_field;
        },
        get_data: function () {
            var self = this;
            return {
                'ncolumns': self.select_header.find('select').val(),
                'html': self.get_html(),
            };
        },
        get_html: function () {
            var self = this;
            var nColumns = self.select_header.find('select').val();
            return '<div class="layoutColumn layoutColumn--col-' + nColumns + '">';
        }
    });

    MT.BlockEditorFieldManager.register('column_container_start', BEF.ColumnContainerStart);

})(jQuery);
