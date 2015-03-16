/* Generated by Opal 0.6.3 */
(function ($opal) {
    var $a, self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice, $klass = $opal.klass, $hash2 = $opal.hash2;

    if ($scope.RUBY_ENGINE['$==']("opal")) {
    }
    ;
    self.$include((($a = $opal.Object._scope.Asciidoctor) == null ? $opal.cm('Asciidoctor') : $a));
    return (function ($base, $super) {
        function $MathBlock() {
        };
        var self = $MathBlock = $klass($base, $super, 'MathBlock', $MathBlock);

        var def = self._proto, $scope = self._scope;

        self.$use_dsl();

        self.$named("math");

        self.$on_context("open");

        self.$parse_content_as("simple");

        return (def.$process = function (parent, reader, attrs) {
                var self = this, content = nil, title = nil, filename = nil, alt = nil, caption = nil, width = nil, height = nil, scale = nil, align = nil, cache = nil;

                title = "" + (attrs['$[]']("title"));
                alt = "" + (attrs['$[]']("alt"));
                caption = "" + (attrs['$[]']("caption"));
                width = "" + (attrs['$[]']("width"));
                height = "" + (attrs['$[]']("height"));
                scale = "" + (attrs['$[]']("scale"));
                align = "" + (attrs['$[]']("align"));
                filename = "" + (attrs['$[]']("file"));
                cache = "" + (attrs['$[]']("cache"));

                if (cache != "enabled") {
                    app.appendFormula(filename, reader.$read());
                }
                content = "images/" + filename;

                var attributesHash = {
                    "target": content,
                    "title": title,
                    "alt": alt,
                    "caption": caption,
                    "width": width,
                    "height": height,
                    "scale": scale,
                    "align": align
                };

                var keys = Object.keys(attributesHash);

                keys.forEach(function (key) {
                    if (attributesHash[key] == "")
                        delete attributesHash[key];
                });

                return self.$create_image_block(parent, $hash2(Object.keys(attributesHash), attributesHash));
            }, nil) && 'process';
    })(self, ($scope.Extensions)._scope.BlockProcessor);
})(Opal);
/* Generated by Opal 0.6.3 */
(function ($opal) {
    var $a, $b, TMP_1, self = $opal.top, $scope = $opal, nil = $opal.nil, $breaker = $opal.breaker, $slice = $opal.slice;

    if ($scope.RUBY_ENGINE['$==']("opal")) {
    }
    ;
    return ($a = ($b = $scope.Extensions).$register, $a
    .
    _p = (TMP_1 = function () {
        var self = TMP_1._s || this;

        return self.$block($scope.MathBlock)
    }, TMP_1
    .
    _s = self, TMP_1
    ),
    $a
    ).
    call($b);
})(Opal);
