(function($) {
    $.fn.extend({
        autosuggest: function(options)
        {
            var defaults =
                {
                    searchUrl: "Please set a searchUrl",
                    minLength: 2
                };

            options = $.extend(defaults, options);

            function callSearchEndpoint(url, id) {
                $.get(url, function (e) {
                    displaySearchResults(e, id)
                });
            }

            function displaySearchResults(data, id) {
                var results = $('#' + id + '-search-results');
                if (data.length === 0) {
                    results.html('<a class="dropdown-item text-muted" href="#">No results found.</a>');
                } else {
                    results.html('');
                    $(data).each(function (e, data) {
                        let link = $('<a class="dropdown-item search-result text-muted"href="' + data.href + '">' + data.text + '</a>');
                        results.append(link);
                    });
                    $('.search-result').click(function (e) {
                        window.location.href = $(this).prop('href');
                    });
                }
                results.dropdown('show');
            }

            this.each(function() {
                let id = $(this).prop('id');
                $(this).after('<div id="' + id + '-search-results" class="dropdown-menu" data-toggle="dropdown"></div>');
                $(this).on('keyup',function(e){
                    let searchTerm = $(this).val();

                    if (searchTerm.length >= options.minLength) {
                        callSearchEndpoint(options.searchUrl + searchTerm, id);
                    }
                });
            });
        }
    });
})(jQuery);
