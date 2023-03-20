// Redesigned by telegram.dog/TheFirstSpeedster at https://www.npmjs.com/package/@googledrive/index which was written by someone else, credits are given on Source Page.
// v2.2.3
// Initialize the page
function init() {
    document.siteName = $('title').html();
    var html = `<header>
   <div id="nav">
   </div>
</header>
<div>
<div id="content" style="padding-top: ${UI.header_padding}px;${UI.fixed_footer ?' padding-bottom: clamp(170px, 100%, 300px);': ''}">
</div>
<div class="modal fade" id="SearchModel" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="SearchModelLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="SearchModelLabel"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div class="modal-body" id="modal-body-space">
      </div>
      <div class="modal-footer" id="modal-body-space-buttons">
      </div>
    </div>
  </div>
</div>
<br>
<footer class="footer mt-auto py-3 text-muted ${UI.footer_style_class}" style="${UI.fixed_footer ?'position: fixed; ': ''}left: 0; bottom: 0; width: 100%; color: white; z-index: 9999;${UI.hide_footer ? ' display:none;': ' display:block;'}"> <div class="container" style="width: auto; padding: 0 10px;"> <p class="float-end"> <a href="#">Back to top</a> </p> ${UI.credit ? '<p>Redesigned with <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="red" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" /> </svg> by <a href="https://www.npmjs.com/package/@googledrive/index" target="_blank">TheFirstSpeedster</a>, based on Open Source Softwares.</p>' : ''} <p>© ${UI.copyright_year} - <a href=" ${UI.company_link}" target="_blank"> ${UI.company_name}</a>, All Rights Reserved.</p> </div> </footer>
  `;
    $('body').html(html);
}

const Os = {
    isWindows: navigator.platform.toUpperCase().indexOf('WIN') > -1, // .includes
    isMac: navigator.platform.toUpperCase().indexOf('MAC') > -1,
    isMacLike: /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),
    isIos: /(iPhone|iPod|iPad)/i.test(navigator.platform),
    isMobile: /Android|webOS|iPhone|iPad|iPod|iOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
};

function getDocumentHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}

// Function to Decode Encoded JSON Data
function gdidecode(str) {
    var gdijsorg_0x5579 = ['join', 'toString', '114773LJlqPi', 'charCodeAt', '1evaKJu', '128429mQiVMM', '179727icrnig', '1276161MsgKkV', 'map', '111987FmCZVm', '6IEPbgT', '1924817UdCjIN', '328673bHHLnC', '14sGLkvR'];
    var gdijsorg_0x22bf03 = gdijsorg_0x47d3;
    (function(_0x2015a9, _0x2d2e6f) {
        var _0x194131 = gdijsorg_0x47d3;
        while (!![]) {
            try {
                var _0x50490c = parseInt(_0x194131(0x167)) * -parseInt(_0x194131(0x165)) + parseInt(_0x194131(0x160)) + parseInt(_0x194131(0x15e)) + -parseInt(_0x194131(0x161)) * -parseInt(_0x194131(0x15f)) + parseInt(_0x194131(0x162)) * -parseInt(_0x194131(0x168)) + -parseInt(_0x194131(0x16a)) + parseInt(_0x194131(0x169));
                if (_0x50490c === _0x2d2e6f) break;
                else _0x2015a9['push'](_0x2015a9['shift']());
            } catch (_0x157d6c) {
                _0x2015a9['push'](_0x2015a9['shift']());
            }
        }
    }(gdijsorg_0x5579, 0xf40cd));

    function gdijsorg_0x47d3(_0x4aefd5, _0x2d1551) {
        _0x4aefd5 = _0x4aefd5 - 0x15e;
        var _0x557938 = gdijsorg_0x5579[_0x4aefd5];
        return _0x557938;
    }
    return decodeURIComponent(atob(str)['split']('')[gdijsorg_0x22bf03(0x16b)](function(_0x1cdc7a) {
        var _0x416153 = gdijsorg_0x22bf03;
        return '%' + ('00' + _0x1cdc7a[_0x416153(0x166)](0x0)[_0x416153(0x164)](0x10))['slice'](-0x2);
    })[gdijsorg_0x22bf03(0x163)](''));
}

function render(path) {
    if (path.indexOf("?") > 0) {
        path = path.substr(0, path.indexOf("?"));
    }
    title(path);
    nav(path);
    // .../0: This
    var reg = /\/\d+:$/g;
    if (window.MODEL.is_search_page) {
        // Used to store the state of some scroll events
        window.scroll_status = {
            // Whether the scroll event is bound
            event_bound: false,
            // "Scroll to the bottom, loading more data" event lock
            loading_lock: false
        };
        render_search_result_list()
    } else if (path.match(reg) || path.substr(-1) == '/') {
        // Used to store the state of some scroll events
        window.scroll_status = {
            // Whether the scroll event is bound
            event_bound: false,
            // "Scroll to the bottom, loading more data" event lock
            loading_lock: false
        };
        list(path);
    } else {
        file(path);
    }
}


// Render title
function title(path) {
    path = decodeURI(path);
    var cur = window.current_drive_order || 0;
    var drive_name = window.drive_names[cur];
    path = path.replace(`/${cur}:`, '');
    // $('title').html(document.siteName + ' - ' + path);
    var model = window.MODEL;
    if (model.is_search_page)
        $('title').html(`${drive_name} - Search results for ${model.q} `);
    else
        $('title').html(`${drive_name} - ${path}`);
}

// Render the navigation bar
function nav(path) {
    var model = window.MODEL;
    var html = "";
    var cur = window.current_drive_order || 0;
    html += `<nav class="navbar navbar-expand-lg${UI.fixed_header ?' fixed-top': ''} ${UI.header_style_class}">
    <div class="container-fluid">
  <a class="navbar-brand" href="/">${UI.logo_image ? '<img border="0" alt="'+UI.company_name+'" src="'+UI.logo_link_name+'" height="'+UI.logo_height+'" width="'+UI.logo_width+'">' : UI.logo_link_name}</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link" href="/${cur}:/">${UI.nav_link_1}</a>
      </li>`;
    var names = window.drive_names;
    var drive_name = window.drive_names[cur];

    // Dropdown to select different drive roots.
    html += `<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">${drive_name}</a><div class="dropdown-menu" aria-labelledby="navbarDropdown">`;
    names.forEach((name, idx) => {
        html += `<a class="dropdown-item"  href="/${idx}:/">${name}</a>`;
    });
    html += `</div></li>`;

    html += `<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">${UI.nav_link_3}</a><div class="dropdown-menu" aria-labelledby="navbarDropdown"><a class="dropdown-item"  href="/">> Home</a>`;

    if (!model.is_search_page) {
        var arr = path.trim('/').split('/');
        var p = '/';
        if (arr.length > 1) {
            for (var i in arr) {
                var an = arr[i];
                n1 = decodeURIComponent(an);
                n2 = n1.replace(/\?.+/g, "$'")
                if (n2.length > 15) {
                    n = n2.slice(0, 5) + '...';
                } else {
                    n = n2.slice(0, 15);
                }
                p += an + '/';
                var ext = p.split('.').pop().toLowerCase();
                if ("|mp3/|aac/|wma/|wpl/|aif/|cda/|mpa/|wav/|ogg/|mp4/|mkv/|mov/|flac/|m4a/|pdf/|jpg/|png/|jpeg/|gif/|md/|zip/|rar/|exe/|tar/|txt/|html/|7z/|arj/|deb/|pkg/|rpm/|tar.gz/|z/|bin/|dmg/|iso/|toast/|vcd/|csv/|dat/|db/|dbf/|log/|mdv/|sav/|sql/|xml/|email/|vcf/|apk/|bat/|bin/|cgi/|jar/|py/|msi/|wsf/|fnt/|fon/|otf/|ttf/|ai/|bmp/|ico/|ps/|psd/|svg/|tif/|tiff/|asp/|aspx/|cer/|cfm/|cgi/|pl/|css/|htm/|html/|js/|jsp/|part/|php/|rss/|xhtml/|key/|odp/|pps/|ppt/|pptx/|pem/|ppk/|java/|sh/|vb/|ods/|xls/|xlsm/|xlsx/|3gp/|flv/|m4v/|mpg/|mpeg/|avi/|doc/|docx/|rtf/|".indexOf(`|${ext}|`) >= 0) {
                    p = p.slice(0, -1);
                }
                if (n === '') {
                    break;
                }
                html += `<a class="dropdown-item"  href="${p}">> ${n}</a>`;
            }
        }
    }

    html += `</div></li><li class="nav-item">
    <a class="nav-link" href="${UI.contact_link}" target="_blank">${UI.nav_link_4}</a>
  </li>${UI.show_logout_button ?'<li class="nav-item"><a class="nav-link" href="/logout">Logout</a></li>': ''}`;

    var search_text = model.is_search_page ? (model.q || '') : '';
    const isMobile = Os.isMobile;
    var search_bar = `
</ul>
<form class="d-flex" method="get" action="/${cur}:search">
<input class="form-control me-2" name="q" type="search" placeholder="Search doesn't work..." aria-label="Search" value="${search_text}" required disabled>
<button class="btn ${UI.search_button_class}" onclick="if($('#search_bar_form>input').val()) $('#search_bar_form').submit();" type="submit" disabled><span class="iconify" data-icon="line-md:close-circle" data-width="24" data-height="24"></button>
</form>
</div>
</div>
</nav>
`;

    // Personal or team
    if (model.root_type < 2) {
        // Show search box
        html += search_bar;
    }

    $('#nav').html(html);
}

// Sleep Function to Retry API Calls
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

/**
 * Initiate POST request for listing
 * @param path Path
 * @param params Form params
 * @param resultCallback Success Result Callback
 * @param authErrorCallback Pass Error Callback
 */
function requestListPath(path, params, resultCallback, authErrorCallback) {
    var p = {
        password: params['password'] || null,
        page_token: params['page_token'] || null,
        page_index: params['page_index'] || 0
    };
    $('#update').html(`<div class='alert alert-info' role='alert'> Connecting...</div></div></div>`);
    $.post(path, p, function(data, status) {
        var res = jQuery.parseJSON(gdidecode(read(data)));
        if (res && res.error && res.error.code == '401') {
            // Password verification failed
            if (authErrorCallback) authErrorCallback(path)
        } else if (res && res.data === null) {
            $('#spinner').remove();
            $('#list').html(`<div class='alert alert-danger' role='alert'> Server didn't sent any data. </div></div></div>`);
            $('#update').remove();
        } else if (res && res.data) {
            if (resultCallback) resultCallback(res, path, p)
            $('#update').remove();
        }
    }).fail(function(response) {
        sleep(2000);
        $('#update').html(`<div class='alert alert-info' role='alert'> Retrying...</div></div></div>`);
        $.post(path, p, function(data, status) {
            var res = jQuery.parseJSON(gdidecode(read(data)));
            if (res && res.error && res.error.code == '401') {
                // Password verification failed
                if (authErrorCallback) authErrorCallback(path)
            } else if (res && res.data === null) {
                $('#spinner').remove();
                $('#list').html(`<div class='alert alert-danger' role='alert'> Server didn't sent any data. </div></div></div>`);
                $('#update').remove();
            } else if (res && res.data) {
                if (resultCallback) resultCallback(res, path, p)
                $('#update').remove();
            }
        }).fail(function(response) {
            sleep(2000);
            $('#update').html(`<div class='alert alert-info' role='alert'> Retrying...</div></div></div>`);
            $.post(path, p, function(data, status) {
                var res = jQuery.parseJSON(gdidecode(read(data)));
                if (res && res.error && res.error.code == '401') {
                    // Password verification failed
                    if (authErrorCallback) authErrorCallback(path)
                } else if (res && res.data === null) {
                    $('#spinner').remove();
                    $('#list').html(`<div class='alert alert-danger' role='alert'> Server didn't sent any data. </div></div></div>`);
                    $('#update').remove();
                } else if (res && res.data) {
                    if (resultCallback) resultCallback(res, path, p)
                    $('#update').remove();
                }
            }).fail(function(response) {
                $('#update').html(`<div class='alert alert-danger' role='alert'> Unable to get data from the server, Something went wrong.</div></div></div>`);
                $('#list').html(`<div class='alert alert-danger' role='alert'> We were unable to get data from the server.</div></div></div>`);
                $('#spinner').remove();
            });
        });
    });
}


/**
 * Search POST request
 * @param params Form params
 * @param resultCallback Success callback
 */
function requestSearch(params, resultCallback) {
    var p = {
        q: params['q'] || null,
        page_token: params['page_token'] || null,
        page_index: params['page_index'] || 0
    };
    $('#update').html(`<div class='alert alert-info' role='alert'> Connecting...</div></div></div>`);
    $.post(`/${window.current_drive_order}:search`, p, function(data, status) {
        var res = jQuery.parseJSON(gdidecode(read(data)));
        if (res && res.data === null) {
            $('#spinner').remove();
            $('#list').html(`<div class='alert alert-danger' role='alert'> Server didn't sent any data.</div></div></div>`);
            $('#update').remove();
        }
        if (res && res.data) {
            if (resultCallback) resultCallback(res, p)
            $('#update').remove();
        }
    }).fail(function(response) {
        sleep(2000);
        $('#update').html(`<div class='alert alert-info' role='alert'> Retrying...</div></div></div>`);
        $.post(`/${window.current_drive_order}:search`, p, function(data, status) {
            var res = jQuery.parseJSON(gdidecode(read(data)));
            if (res && res.data === null) {
                $('#spinner').remove();
                $('#list').html(`<div class='alert alert-danger' role='alert'> Server didn't sent any data. </div></div></div>`);
                $('#update').remove();
            }
            if (res && res.data) {
                if (resultCallback) resultCallback(res, p)
                $('#update').remove();
            }
        }).fail(function(response) {
            sleep(2000);
            $('#update').html(`<div class='alert alert-info' role='alert'> Retrying...</div></div></div>`);
            $.post(`/${window.current_drive_order}:search`, p, function(data, status) {
                var res = jQuery.parseJSON(gdidecode(read(data)));
                if (res && res.data === null) {
                    $('#spinner').remove();
                    $('#list').html(`<div class='alert alert-danger' role='alert'> Server didn't sent any data. </div></div></div>`);
                    $('#update').remove();
                }
                if (res && res.data) {
                    if (resultCallback) resultCallback(res, p)
                    $('#update').remove();
                }
            }).fail(function(response) {
                $('#update').html(`<div class='alert alert-danger' role='alert'> Unable to get data from the server, Something went wrong. 3 Failures</div></div></div>`);
                $('#list').html(`<div class='alert alert-danger' role='alert'> We were unable to get data from the server.</div></div></div>`);
                $('#spinner').remove();
            });
        });
    });
}

// Render file list
function list(path) {
    var content = `<div class="container">${UI.fixed_header ?'<br>': ''}
  <div id="update"></div>
    <div id="head_md" style="display:none; padding: 20px 20px;"></div>
    <div class="${UI.path_nav_alert_class} d-flex align-items-center" role="alert" style="margin-bottom: 0; padding-bottom: 0rem;">
  <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
    <ol class="breadcrumb" id="folderne"><li class="breadcrumb-item"><a href="/">Home</a></li>`;
    var navlink = '';
    var navfulllink = window.location.pathname;
    var breadbar = '';
    var navarrayde = decodeURIComponent(navfulllink).split('/');
    // <li class="breadcrumb-item"><a href="${item}">${navnamecr}</a></li>
    var navarray = navfulllink.trim('/').split('/');
    var p = '/';
    if (navarray.length > 1) {
        for (var i in navarray) {
            var an = navarray[i];
            n1 = decodeURIComponent(an);
            n2 = n1.replace(/\?.+/g, "$'")
            if (n2.length > 15) {
                n = n2.slice(0, 5) + '...';
            } else {
                n = n2.slice(0, 15);
            }
            p += an + '/';
            var ext = p.split('.').pop().toLowerCase();
            if (n === '') {
                break;
            }
            content += `<li class="breadcrumb-item"><a href="${p}">${n}</a></li>`;
        }
    }
    content += `</ol>
  </nav>
  </div>
    <div id="list" class="list-group text-break">
    </div>
    <div class="${UI.file_count_alert_class} text-center d-none" role="alert" id="count">Total <span class="number text-center"></span> items</div>
    <div id="readme_md" style="display:none; padding: 20px 20px;"></div>
    </div>
    `;
    $('#content').html(content);

    var password = localStorage.getItem('password' + path);
    $('#list').html(`<div class="d-flex justify-content-center"><div class="spinner-border ${UI.loading_spinner_class} m-5" role="status" id="spinner"><span class="sr-only"></span></div></div>`);
    $('#readme_md').hide().html('');
    $('#head_md').hide().html('');

    /**
     * Callback after the column list request successfully returns data
     * The result returned by @param res (object)
     * @param path the requested path
     * @param prevReqParams parameters used in request
     */
    function successResultCallback(res, path, prevReqParams) {

        // Temporarily store nextPageToken and currentPageIndex in the list element
        $('#list')
            .data('nextPageToken', res['nextPageToken'])
            .data('curPageIndex', res['curPageIndex']);

        // Remove loading spinner
        $('#spinner').remove();

        if (res['nextPageToken'] === null) {
            // If it is the last page, unbind the scroll event, reset scroll_status, and append the data
            $(window).off('scroll');
            window.scroll_status.event_bound = false;
            window.scroll_status.loading_lock = false;
            append_files_to_list(path, res['data']['files']);
        } else {
            // If it is not the last page, append data and bind the scroll event (if not already bound), update scroll_status
            append_files_to_list(path, res['data']['files']);
            if (window.scroll_status.event_bound !== true) {
                // Bind event, if not yet bound
                $(window).on('scroll', function() {
                    var scrollTop = $(this).scrollTop();
                    var scrollHeight = getDocumentHeight();
                    var windowHeight = $(this).height();
                    // Roll to the bottom
                    if (scrollTop + windowHeight > scrollHeight - (Os.isMobile ? 130 : 80)) {
                        /*
                            When the event of scrolling to the bottom is triggered, if it is already loading at this time, the event is ignored;
                            Otherwise, go to loading and occupy the loading lock, indicating that loading is in progress
                         */
                        if (window.scroll_status.loading_lock === true) {
                            return;
                        }
                        window.scroll_status.loading_lock = true;

                        // Show a loading spinner
                        $(`<div id="spinner" class="d-flex justify-content-center"><div class="spinner-border ${UI.loading_spinner_class} m-5" role="status" id="spinner"><span class="sr-only"></span></div></div>`)
                            .insertBefore('#readme_md');

                        let $list = $('#list');
                        requestListPath(path, {
                                password: prevReqParams['password'],
                                page_token: $list.data('nextPageToken'),
                                // Request next page
                                page_index: $list.data('curPageIndex') + 1
                            },
                            successResultCallback,
                            // The password is the same as before. No authError
                            null
                        )
                    }
                });
                window.scroll_status.event_bound = true
            }
        }

        // After loading successfully and rendering new data successfully, release the loading lock so that you can continue to process the "scroll to bottom" event
        if (window.scroll_status.loading_lock === true) {
            window.scroll_status.loading_lock = false
        }
    }

    // Start requesting data from page 1
    requestListPath(path, {
            password: password
        },
        successResultCallback,
        function(path) {
            $('#spinner').remove();
            var pass = prompt("Directory encryption, please enter the password", "");
            localStorage.setItem('password' + path, pass);
            if (pass != null && pass != "") {
                list(path);
            } else {
                history.go(-1);
            }
        });
}

/**
 * Append the data of the requested new page to the list
 * @param path
 * @param files request result
 */
function append_files_to_list(path, files) {
    var $list = $('#list');
    // Is it the last page of data?
    var is_lastpage_loaded = null === $list.data('nextPageToken');
    var is_firstpage = '0' == $list.data('curPageIndex');

    html = "";
    let targetFiles = [];
    for (i in files) {
        var item = files[i];
        var ep = item.name + '/';
        var name = item.name.replace(/\s+/g, '');
        var p = path + ep.replace(new RegExp('#', 'g'), '%23').replace(new RegExp('\\?', 'g'), '%3F');
        if (item['size'] == undefined) {
            item['size'] = "";
        }

        item['modifiedTime'] = utc2delhi(item['modifiedTime']);
        item['size'] = formatFileSize(item['size']);
        if (item['mimeType'] == 'application/vnd.google-apps.folder') {
            html += `<a href="${p}" style="color: ${UI.folder_text_color};" id="${name}" class="list-group-item list-group-item-action folder-list">${item.name} ${UI.display_time ? `<span class="badge bg-info float-end"> ` + item['modifiedTime'] + ` </span>` : ``}</a>`;
        } else {
            var epn = item.name;
            var p = UI.second_domain_for_dl ? UI.downloaddomain + path + epn.replace(new RegExp('#', 'g'), '%23').replace(new RegExp('\\?', 'g'), '%3F') : window.location.origin + path + epn.replace(new RegExp('#', 'g'), '%23').replace(new RegExp('\\?', 'g'), '%3F');
            var pn = path + epn.replace(new RegExp('#', 'g'), '%23').replace(new RegExp('\\?', 'g'), '%3F');
            var filepath = path + item.name;
            var c = "file";
            // README is displayed after the last page is loaded, otherwise it will affect the scroll event
            if (is_lastpage_loaded && item.name == "README.md" && UI.render_readme_md) {
                get_file(p, item, function(data) {
                    markdown("#readme_md", data);
                    $("img").addClass("img-fluid")
                });
            }
            if (item.name == "HEAD.md" && UI.render_head_md) {
                get_file(p, item, function(data) {
                    markdown("#head_md", data);
                    $("img").addClass("img-fluid")
                });
            }
            var ext = p.split('.').pop().toLowerCase();
            //if ("|html|php|css|go|java|js|json|txt|sh|md|mp4|webm|avi|bmp|jpg|jpeg|png|gif|m4a|mp3|flac|wav|ogg|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|pdf|".indexOf(`|${ext}|`) >= 0) {
            //targetFiles.push(filepath);
            pn += "?a=view";
            c += " view";
            //}
            html += `<div class="list-group-item list-group-item-action">`

            if ("|mp4|webm|avi|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf(`|${ext}|`) >= 0) {
                html += `<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g transform="translate(0 -1028.362)"><path d="m 12,1028.3622 c -6.62589,0 -12.00002,5.3741 -12.00002,12 0,6.6259 5.37413,12 12.00002,12 6.62589,0 12.00002,-5.3741 12.00002,-12 0,-6.6259 -5.37413,-12 -12.00002,-12 z" style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;white-space:normal;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" fill="#50b748" color="#000" enable-background="accumulate" font-family="sans-serif" font-weight="400" overflow="visible"/><path d="m 13,1035.162 a 2.5,2.5 0 0 0 -2.5,2.5 2.5,2.5 0 0 0 0.87695,1.9004 l -2.45117,0 A 2,2 0 0 0 9.5,1038.162 a 2,2 0 0 0 -2,-2 2,2 0 0 0 -2,2 2,2 0 0 0 0.64843,1.4707 C 5.77,1039.775 5.5,1040.133 5.5,1040.5624 l 0,4 c 0,0.554 0.44599,1 1,1 l 8,0 c 0.55401,0 1,-0.446 1,-1 l 0,-0.8008 3,1.8008 0,-6 -3,1.8008 0,-0.8008 c 0,-0.5194 -0.39686,-0.9294 -0.90235,-0.9805 a 2.5,2.5 0 0 0 0.90235,-1.9199 2.5,2.5 0 0 0 -2.5,-2.5 z m 0,1 a 1.5,1.5 0 0 1 1.5,1.5 1.5,1.5 0 0 1 -1.5,1.5 1.5,1.5 0 0 1 -1.5,-1.5 1.5,1.5 0 0 1 1.5,-1.5 z m -5.5,1 a 1,1 0 0 1 1,1 1,1 0 0 1 -1,1 1,1 0 0 1 -1,-1 1,1 0 0 1 1,-1 z m 2,6.4004 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z" style="isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" fill="#fff" color="#000" enable-background="accumulate" overflow="visible"/></g></svg>`
            } else if ("|html|php|css|go|java|js|json|txt|sh|".indexOf(`|${ext}|`) >= 0) {
                html += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="orange" fill-opacity=".15" d="M534 352V136H232v752h560V394H576a42 42 0 0 1-42-42zm-22 322c0 4.4-3.6 8-8 8H320c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48zm200-184v48c0 4.4-3.6 8-8 8H320c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h384c4.4 0 8 3.6 8 8z"/><path fill="orange" d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0 0 42 42h216v494z"/><path fill="orange" d="M312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8zm192 128H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"/></svg>`
            } else if ("|zip|".indexOf(`|${ext}|`) >= 0) {
                html += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="#44d9e8" d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM296 136v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm0 64v160h128V584H296zm48 48h32v64h-32v-64z"/></svg>`
            } else if ("|rar|".indexOf(`|${ext}|`) >= 0) {
                html += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="#44d9e8" d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM296 136v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm0 64v160h128V584H296zm48 48h32v64h-32v-64z"/></svg>`
            } else if ("|package|".indexOf(`|${ext}|`) >= 0) {
                html += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="#44d9e8" d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM296 136v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm0 64v160h128V584H296zm48 48h32v64h-32v-64z"/></svg>`
            } else if ("|tar|7z|gz|".indexOf(`|${ext}|`) >= 0) {
                html += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="#44d9e8" d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM296 136v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm0 64v160h128V584H296zm48 48h32v64h-32v-64z"/></svg>`
            } else if ("|bmp|jpg|jpeg|png|gif|".indexOf(`|${ext}|`) >= 0) {
                html += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="crimson" fill-opacity=".15" d="M534 352V136H232v752h560V394H576a42 42 0 0 1-42-42zm-134 50c22.1 0 40 17.9 40 40s-17.9 40-40 40s-40-17.9-40-40s17.9-40 40-40zm296 294H328.1c-6.7 0-10.4-7.7-6.3-12.9l99.8-127.2a8 8 0 0 1 12.6 0l41.1 52.4l77.8-99.2a8.1 8.1 0 0 1 12.7 0l136.5 174c4.1 5.2.4 12.9-6.3 12.9z"/><path fill="crimson" d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0 0 42 42h216v494z"/><path fill="crimson" d="m553.1 509.1l-77.8 99.2l-41.1-52.4a8 8 0 0 0-12.6 0l-99.8 127.2a7.98 7.98 0 0 0 6.3 12.9H696c6.7 0 10.4-7.7 6.3-12.9l-136.5-174a8.1 8.1 0 0 0-12.7 0zM360 442a40 40 0 1 0 80 0a40 40 0 1 0-80 0z"/></svg>`
            } else if ("|m4a|mp3|flac|wav|ogg|".indexOf(`|${ext}|`) >= 0) {
                html += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="darkorchid" d="m12 2l4 4v12H4V2h8zm0 4h3l-3-3v3zm-1 8v-3c0-.27-.1-.51-.29-.71c-.2-.19-.44-.29-.71-.29H7c-.27 0-.51.1-.71.29c-.19.2-.29.44-.29.71v3c0 .27.1.51.29.71c.2.19.44.29.71.29h3c.27 0 .51-.1.71-.29c.19-.2.29-.44.29-.71zm3 1v-5l-2 2v1z"/></svg>`
            } else if ("|md|".indexOf(`|${ext}|`) >= 0) {
                html += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="limegreen" fill-opacity=".15" d="M534 352V136H232v752h560V394H576a42 42 0 0 1-42-42zm72.3 122H641c6.6 0 12 5.4 12 12v272c0 6.6-5.4 12-12 12h-27.2c-6.6 0-12-5.4-12-12V581.7L535 732.3c-2 4.3-6.3 7.1-11 7.1h-24.1a12 12 0 0 1-11-7.1l-66.8-150.2V758c0 6.6-5.4 12-12 12H383c-6.6 0-12-5.4-12-12V486c0-6.6 5.4-12 12-12h35c4.8 0 9.1 2.8 11 7.2l83.2 191l83.1-191c1.9-4.4 6.2-7.2 11-7.2z"/><path fill="limegreen" d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0 0 42 42h216v494z"/><path fill="limegreen" d="M429 481.2c-1.9-4.4-6.2-7.2-11-7.2h-35c-6.6 0-12 5.4-12 12v272c0 6.6 5.4 12 12 12h27.1c6.6 0 12-5.4 12-12V582.1l66.8 150.2a12 12 0 0 0 11 7.1H524c4.7 0 9-2.8 11-7.1l66.8-150.6V758c0 6.6 5.4 12 12 12H641c6.6 0 12-5.4 12-12V486c0-6.6-5.4-12-12-12h-34.7c-4.8 0-9.1 2.8-11 7.2l-83.1 191l-83.2-191z"/></svg>`
            } else if ("|pdf|".indexOf(`|${ext}|`) >= 0) {
                html += `<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32"><g transform="translate(0 -1020.362)"><path fill="#e9eded" fill-rule="evenodd" stroke="#f05542" stroke-linecap="round" stroke-linejoin="round" d="m 26.49644,1027.8658 0,21.5 c 0,0.831 -0.66899,1.5 -1.49998,1.5 l -18.00004,0 c -0.83099,0 -1.49998,-0.669 -1.49998,-1.5 l 0,-26 c 0,-0.831 0.66899,-1.5 1.49998,-1.5 l 13.50002,0 z"/><path fill="#f05542" d="m 5,1044.3658 0,2 0,2 0,1 c 0,1.108 0.89198,2 2,2 l 18,0 c 1.10802,0 2,-0.892 2,-2 l 0,-1 0,-2 0,-2 -2,0 -18,0 -2,0 z"/><path fill="#4bbfeb" stroke="#4bbfeb" stroke-linecap="round" stroke-linejoin="round" d="m 26.49644,1027.8658 -4.49997,0 c -0.83099,0 -1.49998,-0.6691 -1.49998,-1.5 l 0,-4.5"/><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" fill="#f05542" fill-rule="evenodd" d="M 7.5 3 A 0.50005 0.50005 0 0 0 7 3.5 L 7 7.5 A 0.50005 0.50005 0 0 0 7.5 8 L 12.5 8 A 0.50005 0.50005 0 0 0 13 7.5 L 13 3.5 A 0.50005 0.50005 0 0 0 12.5 3 L 7.5 3 z M 14.457031 3 A 0.50005 0.50005 0 0 0 14.507812 4 L 18.5 4 A 0.50005 0.50005 0 1 0 18.5 3 L 14.507812 3 A 0.50005 0.50005 0 0 0 14.457031 3 z M 8 4 L 12 4 L 12 7 L 8 7 L 8 4 z M 14.457031 5 A 0.50005 0.50005 0 0 0 14.507812 6 L 18.5 6 A 0.50005 0.50005 0 1 0 18.5 5 L 14.507812 5 A 0.50005 0.50005 0 0 0 14.457031 5 z M 14.457031 7 A 0.50005 0.50005 0 0 0 14.507812 8 L 18.5 8 A 0.50005 0.50005 0 1 0 18.5 7 L 14.507812 7 A 0.50005 0.50005 0 0 0 14.457031 7 z M 7.4570312 9 A 0.50005 0.50005 0 0 0 7.5078125 10 L 11.507812 10 A 0.50005 0.50005 0 1 0 11.507812 9 L 7.5078125 9 A 0.50005 0.50005 0 0 0 7.4570312 9 z M 13.457031 9 A 0.50005 0.50005 0 0 0 13.507812 10 L 14.507812 10 A 0.50005 0.50005 0 1 0 14.507812 9 L 13.507812 9 A 0.50005 0.50005 0 0 0 13.457031 9 z M 16.457031 9 A 0.50005 0.50005 0 0 0 16.507812 10 L 24.5 10 A 0.50005 0.50005 0 1 0 24.5 9 L 16.507812 9 A 0.50005 0.50005 0 0 0 16.457031 9 z M 7.4570312 11 A 0.50005 0.50005 0 0 0 7.5078125 12 L 13.507812 12 A 0.50005 0.50005 0 1 0 13.507812 11 L 7.5078125 11 A 0.50005 0.50005 0 0 0 7.4570312 11 z M 15.457031 11 A 0.50005 0.50005 0 0 0 15.507812 12 L 16.507812 12 A 0.50005 0.50005 0 1 0 16.507812 11 L 15.507812 11 A 0.50005 0.50005 0 0 0 15.457031 11 z M 18.457031 11 A 0.50005 0.50005 0 0 0 18.507812 12 L 24.5 12 A 0.50005 0.50005 0 1 0 24.5 11 L 18.507812 11 A 0.50005 0.50005 0 0 0 18.457031 11 z M 7.4570312 13 A 0.50005 0.50005 0 0 0 7.5078125 14 L 15.507812 14 A 0.50005 0.50005 0 1 0 15.507812 13 L 7.5078125 13 A 0.50005 0.50005 0 0 0 7.4570312 13 z M 17.457031 13 A 0.50005 0.50005 0 0 0 17.507812 14 L 18.507812 14 A 0.50005 0.50005 0 1 0 18.507812 13 L 17.507812 13 A 0.50005 0.50005 0 0 0 17.457031 13 z M 20.457031 13 A 0.50005 0.50005 0 0 0 20.507812 14 L 24.5 14 A 0.50005 0.50005 0 1 0 24.5 13 L 20.507812 13 A 0.50005 0.50005 0 0 0 20.457031 13 z M 7.4570312 15 A 0.50005 0.50005 0 0 0 7.5078125 16 L 11.507812 16 A 0.50005 0.50005 0 1 0 11.507812 15 L 7.5078125 15 A 0.50005 0.50005 0 0 0 7.4570312 15 z M 13.457031 15 A 0.50005 0.50005 0 0 0 13.507812 16 L 14.507812 16 A 0.50005 0.50005 0 1 0 14.507812 15 L 13.507812 15 A 0.50005 0.50005 0 0 0 13.457031 15 z M 16.457031 15 A 0.50005 0.50005 0 0 0 16.507812 16 L 21.039062 16 L 24.5 16 A 0.50005 0.50005 0 0 0 24.5 15 L 21.074219 15 L 16.507812 15 A 0.50005 0.50005 0 0 0 16.457031 15 z " color="#000" font-family="sans-serif" font-weight="400" overflow="visible" transform="translate(0 1020.362)"/><path fill="#f05542" stroke="#f05542" stroke-linecap="round" stroke-linejoin="round" d="m 26.49644,1027.8658 -4.49997,0 c -0.83099,0 -1.49998,-0.6691 -1.49998,-1.5 l 0,-4.5"/><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" fill="#e9eded" fill-rule="evenodd" d="M 12.474609 24.990234 A 0.50005 0.50005 0 0 0 11.982422 25.498047 L 11.982422 29.460938 A 0.50005 0.50005 0 0 0 12.001953 29.642578 A 0.50005 0.50005 0 0 0 12.001953 29.644531 A 0.50005 0.50005 0 0 0 12.005859 29.658203 A 0.50005 0.50005 0 0 0 12.019531 29.693359 A 0.50005 0.50005 0 0 0 12.046875 29.75 A 0.50005 0.50005 0 0 0 12.066406 29.78125 A 0.50005 0.50005 0 0 0 12.072266 29.791016 A 0.50005 0.50005 0 0 0 12.095703 29.820312 A 0.50005 0.50005 0 0 0 12.121094 29.847656 A 0.50005 0.50005 0 0 0 12.132812 29.861328 A 0.50005 0.50005 0 0 0 12.158203 29.882812 A 0.50005 0.50005 0 0 0 12.171875 29.894531 A 0.50005 0.50005 0 0 0 12.183594 29.904297 A 0.50005 0.50005 0 0 0 12.21875 29.927734 A 0.50005 0.50005 0 0 0 12.294922 29.966797 A 0.50005 0.50005 0 0 0 12.322266 29.976562 A 0.50005 0.50005 0 0 0 12.490234 30.003906 L 13.488281 30.003906 A 0.50005 0.50005 0 0 0 13.636719 29.982422 C 14.945213 29.873741 15.996094 28.817721 15.996094 27.503906 C 15.996094 26.193182 14.950387 25.138556 13.646484 25.025391 A 0.50005 0.50005 0 0 0 13.496094 25.003906 L 13.419922 25.003906 L 13.369141 25.003906 L 12.597656 25.003906 A 0.50005 0.50005 0 0 0 12.474609 24.990234 z M 9.4960938 25 C 8.7183219 25 8.0779613 25.607777 8.0097656 26.369141 A 0.50005 0.50005 0 0 0 7.9960938 26.494141 C 7.9960859 26.49612 7.9960937 26.498019 7.9960938 26.5 L 7.9960938 29.494141 A 0.50005 0.50005 0 1 0 8.9960938 29.494141 L 8.9960938 27.90625 C 9.1533422 27.962868 9.3204293 28 9.4960938 28 C 10.318599 28 10.996094 27.3225 10.996094 26.5 C 10.996094 25.6775 10.318599 25 9.4960938 25 z M 18.5625 25 C 17.699259 25 16.990234 25.711019 16.990234 26.574219 L 16.990234 27.457031 A 0.50005 0.50005 0 0 0 16.990234 27.53125 L 16.990234 29.5 A 0.50005 0.50005 0 1 0 17.990234 29.5 L 17.990234 28 L 18.990234 28 A 0.50005 0.50005 0 1 0 18.990234 27 L 17.990234 27 L 17.990234 26.574219 C 17.990234 26.247719 18.235925 26 18.5625 26 L 19.490234 26 A 0.50005 0.50005 0 1 0 19.490234 25 L 18.5625 25 z M 9.4960938 26 C 9.7781584 26 9.9960938 26.218 9.9960938 26.5 C 9.9960938 26.7821 9.7781584 27 9.4960938 27 C 9.2140291 27 8.9960937 26.7821 8.9960938 26.5 L 8.9960938 26.494141 C 8.9991782 26.215072 9.2160446 26 9.4960938 26 z M 12.982422 26.003906 L 13.419922 26.003906 C 14.312157 26.003906 14.996094 26.674206 14.996094 27.503906 C 14.996094 28.333306 14.312128 29.003906 13.419922 29.003906 L 12.982422 29.003906 L 12.982422 26.003906 z " color="#000" font-family="sans-serif" font-weight="400" overflow="visible" transform="translate(0 1020.362)"/></g></svg>`
            } else {
                html += `<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32"><g transform="translate(0 -1020.362)"><g transform="translate(-.5)"><g transform="translate(.5)"><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;white-space:normal;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" fill="#4989b8" d="M 4,2 4,31 27,31 27,7.9941406 21.007812,2 20.800781,2 4,2 Z M 5,3 6,3 6,4 5,4 5,3 Z M 7,3 8,3 8,4 7,4 7,3 Z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z M 5,5 6,5 6,6 5,6 5,5 Z M 5,7 6,7 6,8 5,8 5,7 Z m 0,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z" color="#000" enable-background="accumulate" font-family="sans-serif" font-weight="400" overflow="visible" transform="translate(0 1020.362)"/><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;white-space:normal;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" fill="#4e4e4e" fill-rule="evenodd" d="m 27.000003,1028.3562 -5.992006,-5.9941 -0.0019,5.9941 z" color="#000" enable-background="accumulate" font-family="sans-serif" font-weight="400" overflow="visible"/></g><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;white-space:normal;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" fill="#4e4e4e" d="m 9.5000015,1023.3622 0,20 2.4999985,-4 2.499999,4 0,-20 0,-1 -4.9999975,0 z" color="#000" enable-background="accumulate" font-family="sans-serif" font-weight="400" overflow="visible"/></g></g></svg>`
            }

            html += ` <a class="list-group-item-action" style="text-decoration: none; color: ${UI.css_a_tag_color};" href="${pn}">${item.name}</a>${UI.display_download ? `<a href="${p}"><svg class="float-end"width="25px" style="margin-left: 8px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path> <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path> </svg></a>` : ``}${UI.display_size ? `<span class="badge bg-primary float-end"> ` + item['size'] + ` </span>` : ``}${UI.display_time ? ` <span class="badge bg-info float-end"> ` + item['modifiedTime'] + ` </span>` : ``}</div>`;
        }
    }

    /*let targetObj = {};
    targetFiles.forEach((myFilepath, myIndex) => {
        if (!targetObj[myFilepath]) {
            targetObj[myFilepath] = {
                filepath: myFilepath,
                prev: myIndex === 0 ? null : targetFiles[myIndex - 1],
                next: myIndex === targetFiles.length - 1 ? null : targetFiles[myIndex + 1],
            }
        }
    })
    // console.log(targetObj)
    if (Object.keys(targetObj).length) {
        localStorage.setItem(path, JSON.stringify(targetObj));
        // console.log(path)
    }*/

    if (targetFiles.length > 0) {
        let old = localStorage.getItem(path);
        let new_children = targetFiles;
        // Reset on page 1; otherwise append
        if (!is_firstpage && old) {
            let old_children;
            try {
                old_children = JSON.parse(old);
                if (!Array.isArray(old_children)) {
                    old_children = []
                }
            } catch (e) {
                old_children = [];
            }
            new_children = old_children.concat(targetFiles)
        }

        localStorage.setItem(path, JSON.stringify(new_children))
    }

    // When it is page 1, remove the horizontal loading bar
    $list.html(($list.data('curPageIndex') == '0' ? '' : $list.html()) + html);
    // When it is the last page, count and display the total number of items
    if (is_lastpage_loaded) {
        $('#count').removeClass('d-none').find('.number').text($list.find('a.list-group-item-action').length);
    }
}

/**
 * Render the search results list. There is a lot of repetitive code, but there are different logics in it.
 */
function render_search_result_list() {
    var content = `
  <div class="container"><br>
  <div id="update"></div>
  <div class="card">
  <div class="${UI.path_nav_alert_class} d-flex align-items-center" role="alert" style="margin-bottom: 0;">Search Results</div>
  <div id="list" class="list-group text-break">
  </div>
  </div>
  <div class="${UI.file_count_alert_class} text-center d-none" role="alert" id="count">Total <span class="number text-center"></span> items</div>
  <div id="readme_md" style="display:none; padding: 20px 20px;"></div>
  </div>
  `;
    $('#content').html(content);

    $('#list').html(`<div class="d-flex justify-content-center"><div class="spinner-border ${UI.loading_spinner_class} m-5" role="status" id="spinner"><span class="sr-only"></span></div></div>`);
    $('#readme_md').hide().html('');
    $('#head_md').hide().html('');

    /**
     * Callback after successful search request returns data
     * The result returned by @param res (object)
     * @param path the requested path
     * @param prevReqParams parameters used in request
     */
    function searchSuccessCallback(res, prevReqParams) {

        // Temporarily store nextPageToken and currentPageIndex in the list element
        $('#list')
            .data('nextPageToken', res['nextPageToken'])
            .data('curPageIndex', res['curPageIndex']);

        // Remove loading spinner
        $('#spinner').remove();

        if (res['nextPageToken'] === null) {
            // If it is the last page, unbind the scroll event, reset scroll_status, and append the data
            $(window).off('scroll');
            window.scroll_status.event_bound = false;
            window.scroll_status.loading_lock = false;
            append_search_result_to_list(res['data']['files']);
        } else {
            // If it is not the last page, append data and bind the scroll event (if not already bound), update scroll_status
            append_search_result_to_list(res['data']['files']);
            if (window.scroll_status.event_bound !== true) {
                // Bind event, if not yet bound
                $(window).on('scroll', function() {
                    var scrollTop = $(this).scrollTop();
                    var scrollHeight = getDocumentHeight();
                    var windowHeight = $(this).height();
                    // Roll to the bottom
                    if (scrollTop + windowHeight > scrollHeight - (Os.isMobile ? 130 : 80)) {
                        /*
     When the event of scrolling to the bottom is triggered, if it is already loading at this time, the event is ignored;
                 Otherwise, go to loading and occupy the loading lock, indicating that loading is in progress
             */
                        if (window.scroll_status.loading_lock === true) {
                            return;
                        }
                        window.scroll_status.loading_lock = true;

                        // Show a loading spinner
                        $(`<div id="spinner" class="d-flex justify-content-center"><div class="spinner-border ${UI.loading_spinner_class} m-5" role="status" id="spinner"><span class="sr-only"></span></div></div>`)
                            .insertBefore('#readme_md');

                        let $list = $('#list');
                        requestSearch({
                                q: window.MODEL.q,
                                page_token: $list.data('nextPageToken'),
                                // Request next page
                                page_index: $list.data('curPageIndex') + 1
                            },
                            searchSuccessCallback
                        )
                    }
                });
                window.scroll_status.event_bound = true
            }
        }

        // After loading successfully and rendering new data successfully, release the loading lock so that you can continue to process the "scroll to bottom" event
        if (window.scroll_status.loading_lock === true) {
            window.scroll_status.loading_lock = false
        }
    }

    // Start requesting data from page 1
    requestSearch({
        q: window.MODEL.q
    }, searchSuccessCallback);
}

/**
 * Append a new page of search results
 * @param files
 */
function append_search_result_to_list(files) {
    var cur = window.current_drive_order || 0;
    var $list = $('#list');
    // Is it the last page of data?
    var is_lastpage_loaded = null === $list.data('nextPageToken');
    // var is_firstpage = '0' == $list.data('curPageIndex');

    html = "";

    for (i in files) {
        var item = files[i];
        var p = '/' + cur + ':/' + item.name + '/';
        if (item['size'] == undefined) {
            item['size'] = "";
        }

        item['modifiedTime'] = utc2delhi(item['modifiedTime']);
        item['size'] = formatFileSize(item['size']);
        if (item['mimeType'] == 'application/vnd.google-apps.folder') {
            html += `<a style="color: ${UI.folder_text_color};" ${UI.search_all_drives ? `href="https://drive.google.com/drive/folders/` + item['id'] + `" target="_blank"` : `onclick="onSearchResultItemClick(this)" data-bs-toggle="modal" data-bs-target="#SearchModel" id="` + item['id'] + `"`} class="list-group-item list-group-item-action folder-list">${item.name} ${UI.display_time ? `<span class="badge bg-info float-end"> ` + item['modifiedTime'] + ` </span>` : ``}</a>`;
        } else {
            var p = '/' + cur + ':/' + item.name;
            var c = "file";
            var ext = item.name.split('.').pop().toLowerCase();
            if ("|html|php|css|go|java|js|json|txt|sh|md|mp4|webm|avi|bmp|jpg|jpeg|png|gif|m4a|mp3|flac|wav|ogg|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf(`|${ext}|`) >= 0) {
                p += "?a=view";
                c += " view";
            }
            html += `<a style="color: ${UI.css_a_tag_color};" ${UI.search_all_drives ? `href="https://drive.google.com/file/d/` + item['id'] + `/view" target="_blank"` : `onclick="onSearchResultItemClick(this)" data-bs-toggle="modal" data-bs-target="#SearchModel" id="` + item['id'] + `"`} gd-type="${item.mimeType}" class="list-group-item list-group-item-action">`

            if ("|mp4|webm|avi|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf(`|${ext}|`) >= 0) {
                html += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="darkorchid" d="m12 2l4 4v12H4V2h8zm0 4h3l-3-3v3zm-1 8v-3c0-.27-.1-.51-.29-.71c-.2-.19-.44-.29-.71-.29H7c-.27 0-.51.1-.71.29c-.19.2-.29.44-.29.71v3c0 .27.1.51.29.71c.2.19.44.29.71.29h3c.27 0 .51-.1.71-.29c.19-.2.29-.44.29-.71zm3 1v-5l-2 2v1z"/></svg>`
            } else if ("|html|php|css|go|java|js|json|txt|sh|".indexOf(`|${ext}|`) >= 0) {
                html += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="orange" fill-opacity=".15" d="M534 352V136H232v752h560V394H576a42 42 0 0 1-42-42zm-22 322c0 4.4-3.6 8-8 8H320c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48zm200-184v48c0 4.4-3.6 8-8 8H320c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h384c4.4 0 8 3.6 8 8z"/><path fill="orange" d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0 0 42 42h216v494z"/><path fill="orange" d="M312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8zm192 128H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"/></svg>`
            } else if ("|zip|".indexOf(`|${ext}|`) >= 0) {
                html += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="#44d9e8" d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM296 136v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm0 64v160h128V584H296zm48 48h32v64h-32v-64z"/></svg>`
            } else if ("|rar|".indexOf(`|${ext}|`) >= 0) {
                html += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="#44d9e8" d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM296 136v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm0 64v160h128V584H296zm48 48h32v64h-32v-64z"/></svg>`
            } else if ("|package|".indexOf(`|${ext}|`) >= 0) {
                html += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="#44d9e8" d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM296 136v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm0 64v160h128V584H296zm48 48h32v64h-32v-64z"/></svg>`
            } else if ("|tar|7z|gz|".indexOf(`|${ext}|`) >= 0) {
                html += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="#44d9e8" d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM296 136v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm64 64v64h64v-64h-64zm-64 64v64h64v-64h-64zm0 64v160h128V584H296zm48 48h32v64h-32v-64z"/></svg>`
            } else if ("|bmp|jpg|jpeg|png|gif|".indexOf(`|${ext}|`) >= 0) {
                html += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="crimson" fill-opacity=".15" d="M534 352V136H232v752h560V394H576a42 42 0 0 1-42-42zm-134 50c22.1 0 40 17.9 40 40s-17.9 40-40 40s-40-17.9-40-40s17.9-40 40-40zm296 294H328.1c-6.7 0-10.4-7.7-6.3-12.9l99.8-127.2a8 8 0 0 1 12.6 0l41.1 52.4l77.8-99.2a8.1 8.1 0 0 1 12.7 0l136.5 174c4.1 5.2.4 12.9-6.3 12.9z"/><path fill="crimson" d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0 0 42 42h216v494z"/><path fill="crimson" d="m553.1 509.1l-77.8 99.2l-41.1-52.4a8 8 0 0 0-12.6 0l-99.8 127.2a7.98 7.98 0 0 0 6.3 12.9H696c6.7 0 10.4-7.7 6.3-12.9l-136.5-174a8.1 8.1 0 0 0-12.7 0zM360 442a40 40 0 1 0 80 0a40 40 0 1 0-80 0z"/></svg>`
            } else if ("|m4a|mp3|flac|wav|ogg|".indexOf(`|${ext}|`) >= 0) {
                html += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 384 512"><path fill="azure" d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm-64 268c0 10.7-12.9 16-20.5 8.5L104 376H76c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h28l35.5-36.5c7.6-7.6 20.5-2.2 20.5 8.5v136zm33.2-47.6c9.1-9.3 9.1-24.1 0-33.4c-22.1-22.8 12.2-56.2 34.4-33.5c27.2 27.9 27.2 72.4 0 100.4c-21.8 22.3-56.9-10.4-34.4-33.5zm86-117.1c54.4 55.9 54.4 144.8 0 200.8c-21.8 22.4-57-10.3-34.4-33.5c36.2-37.2 36.3-96.5 0-133.8c-22.1-22.8 12.3-56.3 34.4-33.5zM384 121.9v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"/></svg>`
            } else if ("|md|".indexOf(`|${ext}|`) >= 0) {
                html += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="limegreen" fill-opacity=".15" d="M534 352V136H232v752h560V394H576a42 42 0 0 1-42-42zm72.3 122H641c6.6 0 12 5.4 12 12v272c0 6.6-5.4 12-12 12h-27.2c-6.6 0-12-5.4-12-12V581.7L535 732.3c-2 4.3-6.3 7.1-11 7.1h-24.1a12 12 0 0 1-11-7.1l-66.8-150.2V758c0 6.6-5.4 12-12 12H383c-6.6 0-12-5.4-12-12V486c0-6.6 5.4-12 12-12h35c4.8 0 9.1 2.8 11 7.2l83.2 191l83.1-191c1.9-4.4 6.2-7.2 11-7.2z"/><path fill="limegreen" d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0 0 42 42h216v494z"/><path fill="limegreen" d="M429 481.2c-1.9-4.4-6.2-7.2-11-7.2h-35c-6.6 0-12 5.4-12 12v272c0 6.6 5.4 12 12 12h27.1c6.6 0 12-5.4 12-12V582.1l66.8 150.2a12 12 0 0 0 11 7.1H524c4.7 0 9-2.8 11-7.1l66.8-150.6V758c0 6.6 5.4 12 12 12H641c6.6 0 12-5.4 12-12V486c0-6.6-5.4-12-12-12h-34.7c-4.8 0-9.1 2.8-11 7.2l-83.1 191l-83.2-191z"/></svg>`
            } else if ("|pdf|".indexOf(`|${ext}|`) >= 0) {
                html += `<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32"><g transform="translate(0 -1020.362)"><path fill="#e9eded" fill-rule="evenodd" stroke="#f05542" stroke-linecap="round" stroke-linejoin="round" d="m 26.49644,1027.8658 0,21.5 c 0,0.831 -0.66899,1.5 -1.49998,1.5 l -18.00004,0 c -0.83099,0 -1.49998,-0.669 -1.49998,-1.5 l 0,-26 c 0,-0.831 0.66899,-1.5 1.49998,-1.5 l 13.50002,0 z"/><path fill="#f05542" d="m 5,1044.3658 0,2 0,2 0,1 c 0,1.108 0.89198,2 2,2 l 18,0 c 1.10802,0 2,-0.892 2,-2 l 0,-1 0,-2 0,-2 -2,0 -18,0 -2,0 z"/><path fill="#4bbfeb" stroke="#4bbfeb" stroke-linecap="round" stroke-linejoin="round" d="m 26.49644,1027.8658 -4.49997,0 c -0.83099,0 -1.49998,-0.6691 -1.49998,-1.5 l 0,-4.5"/><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" fill="#f05542" fill-rule="evenodd" d="M 7.5 3 A 0.50005 0.50005 0 0 0 7 3.5 L 7 7.5 A 0.50005 0.50005 0 0 0 7.5 8 L 12.5 8 A 0.50005 0.50005 0 0 0 13 7.5 L 13 3.5 A 0.50005 0.50005 0 0 0 12.5 3 L 7.5 3 z M 14.457031 3 A 0.50005 0.50005 0 0 0 14.507812 4 L 18.5 4 A 0.50005 0.50005 0 1 0 18.5 3 L 14.507812 3 A 0.50005 0.50005 0 0 0 14.457031 3 z M 8 4 L 12 4 L 12 7 L 8 7 L 8 4 z M 14.457031 5 A 0.50005 0.50005 0 0 0 14.507812 6 L 18.5 6 A 0.50005 0.50005 0 1 0 18.5 5 L 14.507812 5 A 0.50005 0.50005 0 0 0 14.457031 5 z M 14.457031 7 A 0.50005 0.50005 0 0 0 14.507812 8 L 18.5 8 A 0.50005 0.50005 0 1 0 18.5 7 L 14.507812 7 A 0.50005 0.50005 0 0 0 14.457031 7 z M 7.4570312 9 A 0.50005 0.50005 0 0 0 7.5078125 10 L 11.507812 10 A 0.50005 0.50005 0 1 0 11.507812 9 L 7.5078125 9 A 0.50005 0.50005 0 0 0 7.4570312 9 z M 13.457031 9 A 0.50005 0.50005 0 0 0 13.507812 10 L 14.507812 10 A 0.50005 0.50005 0 1 0 14.507812 9 L 13.507812 9 A 0.50005 0.50005 0 0 0 13.457031 9 z M 16.457031 9 A 0.50005 0.50005 0 0 0 16.507812 10 L 24.5 10 A 0.50005 0.50005 0 1 0 24.5 9 L 16.507812 9 A 0.50005 0.50005 0 0 0 16.457031 9 z M 7.4570312 11 A 0.50005 0.50005 0 0 0 7.5078125 12 L 13.507812 12 A 0.50005 0.50005 0 1 0 13.507812 11 L 7.5078125 11 A 0.50005 0.50005 0 0 0 7.4570312 11 z M 15.457031 11 A 0.50005 0.50005 0 0 0 15.507812 12 L 16.507812 12 A 0.50005 0.50005 0 1 0 16.507812 11 L 15.507812 11 A 0.50005 0.50005 0 0 0 15.457031 11 z M 18.457031 11 A 0.50005 0.50005 0 0 0 18.507812 12 L 24.5 12 A 0.50005 0.50005 0 1 0 24.5 11 L 18.507812 11 A 0.50005 0.50005 0 0 0 18.457031 11 z M 7.4570312 13 A 0.50005 0.50005 0 0 0 7.5078125 14 L 15.507812 14 A 0.50005 0.50005 0 1 0 15.507812 13 L 7.5078125 13 A 0.50005 0.50005 0 0 0 7.4570312 13 z M 17.457031 13 A 0.50005 0.50005 0 0 0 17.507812 14 L 18.507812 14 A 0.50005 0.50005 0 1 0 18.507812 13 L 17.507812 13 A 0.50005 0.50005 0 0 0 17.457031 13 z M 20.457031 13 A 0.50005 0.50005 0 0 0 20.507812 14 L 24.5 14 A 0.50005 0.50005 0 1 0 24.5 13 L 20.507812 13 A 0.50005 0.50005 0 0 0 20.457031 13 z M 7.4570312 15 A 0.50005 0.50005 0 0 0 7.5078125 16 L 11.507812 16 A 0.50005 0.50005 0 1 0 11.507812 15 L 7.5078125 15 A 0.50005 0.50005 0 0 0 7.4570312 15 z M 13.457031 15 A 0.50005 0.50005 0 0 0 13.507812 16 L 14.507812 16 A 0.50005 0.50005 0 1 0 14.507812 15 L 13.507812 15 A 0.50005 0.50005 0 0 0 13.457031 15 z M 16.457031 15 A 0.50005 0.50005 0 0 0 16.507812 16 L 21.039062 16 L 24.5 16 A 0.50005 0.50005 0 0 0 24.5 15 L 21.074219 15 L 16.507812 15 A 0.50005 0.50005 0 0 0 16.457031 15 z " color="#000" font-family="sans-serif" font-weight="400" overflow="visible" transform="translate(0 1020.362)"/><path fill="#f05542" stroke="#f05542" stroke-linecap="round" stroke-linejoin="round" d="m 26.49644,1027.8658 -4.49997,0 c -0.83099,0 -1.49998,-0.6691 -1.49998,-1.5 l 0,-4.5"/><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" fill="#e9eded" fill-rule="evenodd" d="M 12.474609 24.990234 A 0.50005 0.50005 0 0 0 11.982422 25.498047 L 11.982422 29.460938 A 0.50005 0.50005 0 0 0 12.001953 29.642578 A 0.50005 0.50005 0 0 0 12.001953 29.644531 A 0.50005 0.50005 0 0 0 12.005859 29.658203 A 0.50005 0.50005 0 0 0 12.019531 29.693359 A 0.50005 0.50005 0 0 0 12.046875 29.75 A 0.50005 0.50005 0 0 0 12.066406 29.78125 A 0.50005 0.50005 0 0 0 12.072266 29.791016 A 0.50005 0.50005 0 0 0 12.095703 29.820312 A 0.50005 0.50005 0 0 0 12.121094 29.847656 A 0.50005 0.50005 0 0 0 12.132812 29.861328 A 0.50005 0.50005 0 0 0 12.158203 29.882812 A 0.50005 0.50005 0 0 0 12.171875 29.894531 A 0.50005 0.50005 0 0 0 12.183594 29.904297 A 0.50005 0.50005 0 0 0 12.21875 29.927734 A 0.50005 0.50005 0 0 0 12.294922 29.966797 A 0.50005 0.50005 0 0 0 12.322266 29.976562 A 0.50005 0.50005 0 0 0 12.490234 30.003906 L 13.488281 30.003906 A 0.50005 0.50005 0 0 0 13.636719 29.982422 C 14.945213 29.873741 15.996094 28.817721 15.996094 27.503906 C 15.996094 26.193182 14.950387 25.138556 13.646484 25.025391 A 0.50005 0.50005 0 0 0 13.496094 25.003906 L 13.419922 25.003906 L 13.369141 25.003906 L 12.597656 25.003906 A 0.50005 0.50005 0 0 0 12.474609 24.990234 z M 9.4960938 25 C 8.7183219 25 8.0779613 25.607777 8.0097656 26.369141 A 0.50005 0.50005 0 0 0 7.9960938 26.494141 C 7.9960859 26.49612 7.9960937 26.498019 7.9960938 26.5 L 7.9960938 29.494141 A 0.50005 0.50005 0 1 0 8.9960938 29.494141 L 8.9960938 27.90625 C 9.1533422 27.962868 9.3204293 28 9.4960938 28 C 10.318599 28 10.996094 27.3225 10.996094 26.5 C 10.996094 25.6775 10.318599 25 9.4960938 25 z M 18.5625 25 C 17.699259 25 16.990234 25.711019 16.990234 26.574219 L 16.990234 27.457031 A 0.50005 0.50005 0 0 0 16.990234 27.53125 L 16.990234 29.5 A 0.50005 0.50005 0 1 0 17.990234 29.5 L 17.990234 28 L 18.990234 28 A 0.50005 0.50005 0 1 0 18.990234 27 L 17.990234 27 L 17.990234 26.574219 C 17.990234 26.247719 18.235925 26 18.5625 26 L 19.490234 26 A 0.50005 0.50005 0 1 0 19.490234 25 L 18.5625 25 z M 9.4960938 26 C 9.7781584 26 9.9960938 26.218 9.9960938 26.5 C 9.9960938 26.7821 9.7781584 27 9.4960938 27 C 9.2140291 27 8.9960937 26.7821 8.9960938 26.5 L 8.9960938 26.494141 C 8.9991782 26.215072 9.2160446 26 9.4960938 26 z M 12.982422 26.003906 L 13.419922 26.003906 C 14.312157 26.003906 14.996094 26.674206 14.996094 27.503906 C 14.996094 28.333306 14.312128 29.003906 13.419922 29.003906 L 12.982422 29.003906 L 12.982422 26.003906 z " color="#000" font-family="sans-serif" font-weight="400" overflow="visible" transform="translate(0 1020.362)"/></g></svg>`
            } else {
                html += `<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32"><g transform="translate(0 -1020.362)"><g transform="translate(-.5)"><g transform="translate(.5)"><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;white-space:normal;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" fill="#4989b8" d="M 4,2 4,31 27,31 27,7.9941406 21.007812,2 20.800781,2 4,2 Z M 5,3 6,3 6,4 5,4 5,3 Z M 7,3 8,3 8,4 7,4 7,3 Z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z M 5,5 6,5 6,6 5,6 5,5 Z M 5,7 6,7 6,8 5,8 5,7 Z m 0,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 20,0 1,0 0,1 -1,0 0,-1 z m -20,2 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z m 2,0 1,0 0,1 -1,0 0,-1 z" color="#000" enable-background="accumulate" font-family="sans-serif" font-weight="400" overflow="visible" transform="translate(0 1020.362)"/><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;white-space:normal;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" fill="#4e4e4e" fill-rule="evenodd" d="m 27.000003,1028.3562 -5.992006,-5.9941 -0.0019,5.9941 z" color="#000" enable-background="accumulate" font-family="sans-serif" font-weight="400" overflow="visible"/></g><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;white-space:normal;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" fill="#4e4e4e" d="m 9.5000015,1023.3622 0,20 2.4999985,-4 2.499999,4 0,-20 0,-1 -4.9999975,0 z" color="#000" enable-background="accumulate" font-family="sans-serif" font-weight="400" overflow="visible"/></g></g></svg>`
            }

            html += ` ${item.name}<span class="badge float-end csize"> ${UI.display_size ? `<span class="badge bg-primary float-end"> ` + item['size'] + ` </span>` : ``}${UI.display_time ? ` <span class="badge bg-info float-end"> ` + item['modifiedTime'] + ` </span>` : ``}</a>`;
        }
    }

    // When it is page 1, remove the horizontal loading bar
    $list.html(($list.data('curPageIndex') == '0' ? '' : $list.html()) + html);
    // When it is the last page, count and display the total number of items
    if (is_lastpage_loaded) {
        $('#count').removeClass('d-none').find('.number').text($list.find('a.list-group-item').length);
    }
}

/**
 * Search result item click event
 * @param a_ele Clicked element
 */
function onSearchResultItemClick(a_ele) {
    var me = $(a_ele);
    var can_preview = me.hasClass('view');
    var cur = window.current_drive_order;
    var title = `Loading...`;
    $('#SearchModelLabel').html(title);
    var content = `<div class="d-flex justify-content-center"><div class="spinner-border ${UI.loading_spinner_class} m-5" role="status" id="spinner"><span class="sr-only"></span></div>`;
    $('#modal-body-space').html(content);

    // Request a path
    $.post(`/${cur}:id2path`, {
        id: a_ele.id
    }, function(data) {
        if (data) {
            var href = `/${cur}:${data}${can_preview ? '?a=view' : ''}`;
            if (href.endsWith("/")) {
                var ehrefurl = href.replace(new RegExp('#', 'g'), '%23').replace(new RegExp('\\?', 'g'), '%3F');
            } else {
                var ehrefurl = href.replace(new RegExp('#', 'g'), '%23').replace(new RegExp('\\?', 'g'), '%3F') + '?a=view';
            }
            title = `Result`;
            $('#SearchModelLabel').html(title);
            content = `<a class="btn btn-info" href="${ehrefurl}">Open</a> <a class="btn btn-secondary" href="${ehrefurl}" target="_blank">Open in New Tab</a>`;
            $('#modal-body-space').html(content);
            return;
        }
        title = `Failed`;
        $('#SearchModelLabel').html(title);
        content = `System Failed to Fetch the File/Folder Link, Please close and try again.`;
        $('#modal-body-space').html(content);
    })
}

function get_file(path, file, callback) {
    var key = "file_path_" + path + file['modifiedTime'];
    var data = localStorage.getItem(key);
    if (data != undefined) {
        return callback(data);
    } else {
        $.get(path, function(d) {
            localStorage.setItem(key, d);
            callback(d);
        });
    }
}

// File display ?a=view
function file(path) {
    var name = path.split('/').pop();
    var ext = name.split('.').pop().toLowerCase().replace(`?a=view`, "").toLowerCase();
    $('#content').html(`<div class="d-flex justify-content-center" style="height: 150px"><div class="spinner-border ${UI.loading_spinner_class} m-5" role="status" id="spinner"><span class="sr-only"></span></div></div>`);
    if ("|html|php|css|go|java|js|json|txt|sh|md|".indexOf(`|${ext}|`) >= 0) {
        return file_code(path);
    }

    if ("|mp4|webm|avi|".indexOf(`|${ext}|`) >= 0) {
        return file_video(path);
    }

    if ("|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf(`|${ext}|`) >= 0) {
        return file_video(path);
    }

    if ("|mp3|flac|wav|ogg|m4a|aac|".indexOf(`|${ext}|`) >= 0) {
        return file_audio(path);
    }

    if ("|bmp|jpg|jpeg|png|gif|".indexOf(`|${ext}|`) >= 0) {
        return file_image(path);
    }

    if ('pdf' === ext) {
        return file_pdf(path);
    } else {
        return file_others(path);
    }
}

// Document display |zip|.exe/others direct downloads
function file_others(path) {
    var type = {
        "zip": "zip",
        "exe": "exe",
        "rar": "rar",
    };
    var name = path.split('/').pop();
    var decodename = unescape(name);
    var ext = name.split('.').pop().toLowerCase();
    var path = path;
    var url = UI.second_domain_for_dl ? UI.downloaddomain + path : window.location.origin + path;
    $.post("",
        function(data) {
            try {
                var obj = jQuery.parseJSON(gdidecode(read(data)));
                var size = formatFileSize(obj.size);
                var mimeType = obj.mimeType;
                if (mimeType == "application/vnd.google-apps.folder") {
                    var content = `
                  <div class="container"><br>
                  <div class="card text-center">
                  <div class="card-body text-center">
                  <div class="${UI.file_view_alert_class}" id="file_details" role="alert"><b>${obj.name}</b> is a folder.</div>
                  </div><p>The Requested Link contains a folder not a file.</p>
                  <div class="card-text text-center">
                  <div class="btn-group text-center">
                  <a href="` + window.location.pathname + `/" type="button" class="btn btn-primary">Open as Folder</a>
                  </div>
                  </div><br>
                  </div>
                  </div>`;
                } else {
                    var content = `
<div class="container"><br>
<div class="card text-center">
<div class="card-body text-center">
  <div class="${UI.file_view_alert_class}" id="file_details" role="alert">${obj.name}<br>${size}</div>
</div>
<div class="card-body">
<div class="input-group mb-4">
  <div class="input-group-prepend">
    <span class="input-group-text" id="">Full URL</span>
  </div>
  <input type="text" class="form-control" id="dlurl" value="${url}">
</div>
  <div class="card-text text-center">
  ${UI.display_drive_link ? '<a type="button" class="btn btn-info" href="https://drive.google.com/file/d/'+ obj.id +'/view" id ="file_drive_link" target="_blank">GD Link</a>': ''}
  <div class="btn-group text-center">
      <a href="${url}" type="button" class="btn btn-primary">Download</a>
  </div>
  <button onclick="copyFunction()" onmouseout="outFunc()" class="btn btn-success"> <span class="tooltiptext" id="myTooltip">Copy</span> </button>
  </div>
  <br></div>`;
                }
            } catch (err) {
                var content = `
<div class="container"><br>
<div class="card text-center">
    <div class="card-body text-center">
      <div class="${UI.file_view_alert_class}" id="file_details" role="alert"><b>404.</b> That’s an error.</div>
    </div><p>The requested URL was not found on this server. That’s all we know.</p>
      <div class="card-text text-center">
      <div class="btn-group text-center">
        <a href="/" type="button" class="btn btn-primary">Homepage</a>
      </div>
        </div><br>
</div>
</div>`
            }
            $('#content').html(content);
        });
}

// Document display |html|php|css|go|java|js|json|txt|sh|md|
function file_code(path) {
    var type = {
        "html": "html",
        "php": "php",
        "css": "css",
        "go": "golang",
        "java": "java",
        "js": "javascript",
        "json": "json",
        "txt": "Text",
        "sh": "sh",
        "md": "Markdown",
    };
    var name = path.split('/').pop();
    var decodename = unescape(name);
    var ext = name.split('.').pop().toLowerCase();
    var path = path;
    var url = UI.second_domain_for_dl ? UI.downloaddomain + path : window.location.origin + path;
    $.post("",
        function(data) {
            try {
                var obj = jQuery.parseJSON(gdidecode(read(data)));
                var size = formatFileSize(obj.size);
                var content = `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.23.0/themes/prism-twilight.css" integrity="sha256-Rl83wx+fN2p2ioYpdvpWxuhAbxj+/7IwaZrKQBu/KQE=" crossorigin="anonymous">
<div class="container"><br>
<div class="card text-center">
<div class="card-body text-center">
  <div class="${UI.file_view_alert_class}" id="file_details" role="alert">${obj.name}<br>${size}</div>
<div>
<pre ${UI.second_domain_for_dl ? 'style="display:none;"': 'style="display:block;"'} class="line-numbers language-markup" data-src="plugins/line-numbers/index.html" data-start="-5" style="white-space: pre-wrap; counter-reset: linenumber -6;" data-src-status="loaded" tabindex="0"><code id="editor"></code></pre>
</div>
</div>
<div class="card-body">
<div class="input-group mb-4">
  <div class="input-group-prepend">
    <span class="input-group-text" id="">Full URL</span>
  </div>
  <input type="text" class="form-control" id="dlurl" value="${url}">
</div>
  <div class="card-text text-center">
  ${UI.display_drive_link ? '<a type="button" class="btn btn-info" href="https://drive.google.com/file/d/'+ obj.id +'/view" id ="file_drive_link" target="_blank">GD Link</a>': ''}
  <div class="btn-group text-center">
      <a href="${url}" type="button" class="btn btn-primary">Download</a>
      <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="sr-only"></span>
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager/idm.internet.download.manager.Downloader;S.title=${decodename};end">1DM (Free)</a>
        <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager.adm.lite/idm.internet.download.manager.Downloader;S.title=${decodename};end">1DM (Lite)</a>
        <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager.plus/idm.internet.download.manager.Downloader;S.title=${decodename};end">1DM+ (Plus)</a>
      </div>
  </div>
  <button onclick="copyFunction()" onmouseout="outFunc()" class="btn btn-success"> <span class="tooltiptext" id="myTooltip">Copy</span> </button></div><br></div>
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.23.0/prism.js" integrity="sha256-fZOd7N/oofoKcO92RzxvC0wMm+EvsKyRT4nmcmQbgzU=" crossorigin="anonymous"></script>
`;
            } catch (err) {
                var content = `
<div class="container"><br>
<div class="card text-center">
    <div class="card-body text-center">
      <div class="${UI.file_view_alert_class}" id="file_details" role="alert"><b>404.</b> That’s an error.</div>
    </div><p>The requested URL was not found on this server. That’s all we know.</p>
      <div class="card-text text-center">
      <div class="btn-group text-center">
        <a href="/" type="button" class="btn btn-primary">Homepage</a>
      </div>
        </div><br>
</div>
</div>`
            }
            $('#content').html(content);
        });

    $.get(path, function(data) {
        $('#editor').html($('<div/><div/><div/>').text(data).html());
        var code_type = "Text";
        if (type[ext] != undefined) {
            code_type = type[ext];
        }
    });
}

// Document display video |mp4|webm|avi|
function file_video(path) {
    var name = path.split('/').pop();
    var decodename = unescape(name);
    var caption = name.slice(0, name.lastIndexOf('.'))
    var path = path;
    var url = UI.second_domain_for_dl ? UI.videodomain + path : window.location.origin + path;
    var urlvlc = url.replace(new RegExp('\\[', 'g'), '%5B').replace(new RegExp('\\]', 'g'), '%5D').replace(new RegExp('\\!', 'g'), '%25');
    var url_without_https = url.replace(/^(https?:|)\/\//, '')
    var url_base64 = btoa(url)
    $.post("",
        function(data) {
            try {
                var obj = jQuery.parseJSON(gdidecode(read(data)));
                var size = formatFileSize(obj.size);
                if (obj.thumbnailLink != null) {
                    var poster = obj.thumbnailLink.slice(0, -5);
                } else {
                    var poster = UI.poster;
                }
                var content = `
  <div class="container text-center"><br>
  <div class="card text-center">
  <div class="text-center">
  <div class="${UI.file_view_alert_class}" id="file_details" role="alert">${obj.name}<br>${size}</div>
  <video id="vplayer" width="100%" height="100%" playsinline controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen']; data-plyr-config="{ "title": "${decodename}"}" data-poster="${poster}" style="--plyr-captions-text-color: #ffffff;--plyr-captions-background: #000000;">
    <source src="${url}" type="video/mp4" />
    <source src="${url}" type="video/webm" />
    <track kind="captions" label="Default" src="${caption}.vtt" srclang="en" />
    <track kind="captions" label="English" src="${caption}.en.vtt" srclang="en" default />
    <track kind="captions" label="Hindi" src="${caption}.hi.vtt" srclang="hi" />
    <track kind="captions" label="Russian" src="${caption}.ru.vtt" srclang="ru" />
    <track kind="captions" label="Malayalam" src="${caption}.ml.vtt" srclang="ml" />
    <track kind="captions" label="Korean" src="${caption}.ko.vtt" srclang="ko" />
    <track kind="captions" label="Japanese" src="${caption}.ja.vtt" srclang="ja" />
    <track kind="captions" label="Indonesian" src="${caption}.id.vtt" srclang="id" />
    <track kind="captions" label="German" src="${caption}.de.vtt" srclang="de" />
    <track kind="captions" label="French" src="${caption}.fr.vtt" srclang="fr" />
    <track kind="captions" label="Chinese" src="${caption}.zh.vtt" srclang="zh" />
    <track kind="captions" label="Arabic" src="${caption}.ar.vtt" srclang="ar" />
  <track kind="captions" label="${UI.custom_srt_lang}" src="${caption}.${UI.custom_srt_lang}.vtt" srclang="${UI.custom_srt_lang}" />
  </video>
  </div>
  ${UI.disable_player ? '<style>.plyr{display:none;}</style>' : ''}
  <script>
   const player = new Plyr('#vplayer',{ratio: "${UI.plyr_io_video_resolution}"});
  </script></br>
${UI.disable_video_download ? `` : `
<div class="card-body">
<div class="input-group mb-4">
  <div class="input-group-prepend">
    <span class="input-group-text" id="">Full URL</span>
  </div>
  <input type="text" class="form-control" id="dlurl" value="${url}">
</div>
${UI.display_drive_link ? '<a type="button" class="btn btn-info" href="https://drive.google.com/file/d/'+ obj.id +'/view" id ="file_drive_link" target="_blank">GD Link</a>': ''}
<div class="btn-group text-center">
    <a href="${url}" type="button" class="btn btn-primary">Download</a>
    <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span class="sr-only"></span>
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="iina://weblink?url=${url}">IINA</a>
      <a class="dropdown-item" href="potplayer://${url}">PotPlayer</a>
      <a class="dropdown-item" href="vlc://${urlvlc}">VLC Mobile</a>
      <a class="dropdown-item" href="${urlvlc}">VLC Desktop</a>
      <a class="dropdown-item" href="nplayer-${url}">nPlayer</a>
      <a class="dropdown-item" href="intent://${url_without_https}#Intent;type=video/any;package=is.xyz.mpv;scheme=https;end;">mpv-android</a>
      <a class="dropdown-item" href="mpv://${url_base64}">mpv x64</a>
      <a class="dropdown-item" href="intent:${url}#Intent;package=com.mxtech.videoplayer.ad;S.title=${decodename};end">MX Player (Free)</a>
      <a class="dropdown-item" href="intent:${url}#Intent;package=com.mxtech.videoplayer.pro;S.title=${decodename};end">MX Player (Pro)</a>
      <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager/idm.internet.download.manager.Downloader;S.title=${decodename};end">1DM (Free)</a>
      <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager.adm.lite/idm.internet.download.manager.Downloader;S.title=${decodename};end">1DM (Lite)</a>
      <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager.plus/idm.internet.download.manager.Downloader;S.title=${decodename};end">1DM+ (Plus)</a>
    </div>
</div>
<button onclick="copyFunction()" onmouseout="outFunc()" class="btn btn-success"> <span class="tooltiptext" id="myTooltip">Copy</span> </button>
<br>
  </div>
  </div>
  `}
  </div>
  `;
            } catch (err) {
                var content = `
<div class="container"><br>
<div class="card text-center">
    <div class="card-body text-center">
      <div class="${UI.file_view_alert_class}" id="file_details" role="alert"><b>404.</b> That’s an error.</div>
    </div><p>The requested URL was not found on this server. That’s all we know.</p>
      <div class="card-text text-center">
      <div class="btn-group text-center">
        <a href="/" type="button" class="btn btn-primary">Homepage</a>
      </div>
        </div><br>
</div>
</div>`
            }
            $('#content').html(content);
        });
}

// File display Audio |mp3|flac|m4a|wav|ogg|
function file_audio(path) {
    var name = path.split('/').pop();
    var decodename = unescape(name);
    var path = path;
    var url = UI.second_domain_for_dl ? UI.downloaddomain + path : window.location.origin + path;
    $.post("",
        function(data) {
            try {
                var obj = jQuery.parseJSON(gdidecode(read(data)));
                var size = formatFileSize(obj.size);
                var content = `
  <div class="container"><br>
  <div class="card" style="background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);">
  <div class="card-body text-center">
  <div class="${UI.file_view_alert_class}" id="file_details" role="alert">${obj.name}<br>${size}</div>
  <br><img draggable="false" src="${UI.audioposter}" width="100%" /><br>
  <audio id="vplayer" width="100%" playsinline controls>
    <source src="${url}" type="audio/ogg">
    <source src="${url}" type="audio/mpeg">
  Your browser does not support the audio element.
  </audio>
  </div>
  ${UI.disable_player ? '<style>.plyr{display:none;}</style>' : ''}
  <script>
   const player = new Plyr('#vplayer');
  </script></br>
  <div class="card-body">
<div class="input-group mb-4">
  <div class="input-group-prepend">
    <span class="input-group-text" id="">Full URL</span>
  </div>
  <input type="text" class="form-control" id="dlurl" value="${url}">
</div>
  <div class="card-text text-center">
  ${UI.display_drive_link ? '<a type="button" class="btn btn-info" href="https://drive.google.com/file/d/'+ obj.id +'/view" id ="file_drive_link" target="_blank">GD Link</a>': ''}
  <div class="btn-group text-center">
      <a href="${url}" type="button" class="btn btn-primary">Download</a>
      <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="sr-only"></span>
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager/idm.internet.download.manager.Downloader;S.title=${decodename};end">1DM (Free)</a>
        <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager.adm.lite/idm.internet.download.manager.Downloader;S.title=${decodename};end">1DM (Lite)</a>
        <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager.plus/idm.internet.download.manager.Downloader;S.title=${decodename};end">1DM+ (Plus)</a>
      </div>
  </div>
  <button onclick="copyFunction()" onmouseout="outFunc()" class="btn btn-success"> <span class="tooltiptext" id="myTooltip">Copy</span> </button></div><br>
  </div>
  </div>
  </div>
  `;
            } catch (err) {
                var content = `
<div class="container"><br>
<div class="card text-center">
    <div class="card-body text-center">
      <div class="${UI.file_view_alert_class}" id="file_details" role="alert"><b>404.</b> That’s an error.</div>
    </div><p>The requested URL was not found on this server. That’s all we know.</p>
      <div class="card-text text-center">
      <div class="btn-group text-center">
        <a href="/" type="button" class="btn btn-primary">Homepage</a>
      </div>
        </div><br>
</div>
</div>`
            }
            $('#content').html(content);
        });
}

// Document display pdf
function file_pdf(path) {
    var name = path.split('/').pop();
    var decodename = unescape(name);
    var path = path;
    var url = UI.second_domain_for_dl ? UI.downloaddomain + path : window.location.origin + path;
    var inline_url = `${url}?inline=true`
    $.post("",
        function(data) {
            try {
                var obj = jQuery.parseJSON(gdidecode(read(data)));
                var size = formatFileSize(obj.size);
                var content = `
  <script>
  var url = "https://" + window.location.hostname + window.location.pathname;
  var pdfjsLib = window['pdfjs-dist/build/pdf'];
  pdfjsLib.GlobalWorkerOptions.workerSrc = '//cdn.jsdelivr.net/npm/pdfjs-dist@2.12.313/build/pdf.worker.js';
  var pdfDoc = null,
      pageNum = 1,
      pageRendering = false,
      pageNumPending = null,
      scale = 0.8,
      canvas = document.getElementById('the-canvas'),
      ctx = canvas.getContext('2d');
  function renderPage(num) {
    pageRendering = true;
    pdfDoc.getPage(num).then(function(page) {
      var viewport = page.getViewport({scale: scale});
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      var renderContext = {
        canvasContext: ctx,
        viewport: viewport
      };
      var renderTask = page.render(renderContext);
      renderTask.promise.then(function() {
        pageRendering = false;
        if (pageNumPending !== null) {
          renderPage(pageNumPending);
          pageNumPending = null;
        }
      });
    });
    document.getElementById('page_num').textContent = num;
  }
  function queueRenderPage(num) {
    if (pageRendering) {
      pageNumPending = num;
    } else {
      renderPage(num);
    }
  }
  function onPrevPage() {
    if (pageNum <= 1) {
      return;
    }
    pageNum--;
    queueRenderPage(pageNum);
  }
  document.getElementById('prev').addEventListener('click', onPrevPage);
  function onNextPage() {
    if (pageNum >= pdfDoc.numPages) {
      return;
    }
    pageNum++;
    queueRenderPage(pageNum);
  }
  document.getElementById('next').addEventListener('click', onNextPage);
  pdfjsLib.getDocument(url).promise.then(function(pdfDoc_) {
    pdfDoc = pdfDoc_;
    document.getElementById('page_count').textContent = pdfDoc.numPages;
    renderPage(pageNum);
  });
  </script>
  <div class="container"><br>
  <div class="card">
  <div class="card-body text-center">
  <div class="${UI.file_view_alert_class}" id="file_details" role="alert">${obj.name}<br>${size}</div>
  <div>
  <button id="prev" class="btn btn-info">Previous</button>
  <button id="next" class="btn btn-info">Next</button>
  &nbsp; &nbsp;
  <span>Page: <span id="page_num"></span> / <span id="page_count"></span></span>
  </div><br>
  <canvas id="the-canvas" style="max-width: 100%;"></canvas>
  </div>
  <div class="card-body">
<div class="input-group mb-4">
  <div class="input-group-prepend">
    <span class="input-group-text" id="">Full URL</span>
  </div>
  <input type="text" class="form-control" id="dlurl" value="${url}">
</div>
  <div class="card-text text-center">
  ${UI.display_drive_link ? '<a type="button" class="btn btn-info" href="https://drive.google.com/file/d/'+ obj.id +'/view" id ="file_drive_link" target="_blank">GD Link</a>': ''}
  <div class="btn-group text-center">
      <a href="${url}" type="button" class="btn btn-primary">Download</a>
      <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="sr-only"></span>
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager/idm.internet.download.manager.Downloader;S.title=${decodename};end">1DM (Free)</a>
        <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager.adm.lite/idm.internet.download.manager.Downloader;S.title=${decodename};end">1DM (Lite)</a>
        <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager.plus/idm.internet.download.manager.Downloader;S.title=${decodename};end">1DM+ (Plus)</a>
      </div>
  </div>
  <button onclick="copyFunction()" onmouseout="outFunc()" class="btn btn-success"> <span class="tooltiptext" id="myTooltip">Copy</span> </button></div><br>
  </div>
  </div>
  </div>
  `;
            } catch (err) {
                var content = `
<div class="container"><br>
<div class="card text-center">
    <div class="card-body text-center">
      <div class="${UI.file_view_alert_class}" id="file_details" role="alert"><b>404.</b> That’s an error.</div>
    </div><p>The requested URL was not found on this server. That’s all we know.</p>
      <div class="card-text text-center">
      <div class="btn-group text-center">
        <a href="/" type="button" class="btn btn-primary">Homepage</a>
      </div>
        </div><br>
</div>
</div>`
            }
            $('#content').html(content);
        });
}

// image display
function file_image(path) {
    var name = path.split('/').pop();
    var decodename = unescape(name);
    var path = path;
    var url = UI.second_domain_for_dl ? UI.downloaddomain + path : window.location.origin + path;
    // console.log(window.location.pathname)
    const currentPathname = window.location.pathname
    const lastIndex = currentPathname.lastIndexOf('/');
    const fatherPathname = currentPathname.slice(0, lastIndex + 1);
    // console.log(fatherPathname)
    let target_children = localStorage.getItem(fatherPathname);
    // console.log(`fatherPathname: ${fatherPathname}`);
    // console.log(target_children)
    let targetText = '';
    if (target_children) {
        try {
            target_children = JSON.parse(target_children);
            if (!Array.isArray(target_children)) {
                target_children = []
            }
        } catch (e) {
            console.error(e);
            target_children = [];
        }
        if (target_children.length > 0 && target_children.includes(path)) {
            let len = target_children.length;
            let cur = target_children.indexOf(path);
            // console.log(`len = ${len}`)
            // console.log(`cur = ${cur}`)
            let prev_child = (cur - 1 > -1) ? target_children[cur - 1] : null;
            let next_child = (cur + 1 < len) ? target_children[cur + 1] : null;
            if (prev_child == null) {
                var prevchild = false;
            } else if (prev_child.endsWith(".jpg") == true || prev_child.endsWith(".png") || prev_child.endsWith(".jpeg") || prev_child.endsWith(".gif")) {
                var prevchild = true;
            }
            if (next_child == null) {
                var nextchild = false;
            } else if (next_child.endsWith(".jpg") == true || next_child.endsWith(".png") || next_child.endsWith(".jpeg") || next_child.endsWith(".gif")) {
                var nextchild = true;
            }
            targetText = `

                              ${prevchild ? `<a class="btn btn-primary" href="${prev_child}?a=view" role="button">Previous</a>` : ``}

                              ${nextchild ? `<a class="btn btn-primary" href="${next_child}?a=view" role="button">Next</a>` : ``}

                  `;
        }
    }
    $.post("",
        function(data) {
            try {
                var obj = jQuery.parseJSON(gdidecode(read(data)));
                var size = formatFileSize(obj.size);
                var content = `
  <div class="container"><br>
  <div class="card">
  <div class="card-body text-center">
  <div class="${UI.file_view_alert_class}" id="file_details" role="alert">${obj.name}<br>${size}</div>
  <div>${targetText}</div><br>
  <img src="${url}" width="50%">
  </div>
  <div class="card-body">
<div class="input-group mb-4">
  <div class="input-group-prepend">
    <span class="input-group-text" id="">Full URL</span>
  </div>
  <input type="text" class="form-control" id="dlurl" value="${url}">
</div>
  <div class="card-text text-center">
  ${UI.display_drive_link ? '<a type="button" class="btn btn-info" href="https://drive.google.com/file/d/'+ obj.id +'/view" id ="file_drive_link" target="_blank">GD Link</a>': ''}
  <div class="btn-group text-center">
      <a href="${url}" type="button" class="btn btn-primary">Download</a>
      <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="sr-only"></span>
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager/idm.internet.download.manager.Downloader;S.title=${decodename};end">1DM (Free)</a>
        <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager.adm.lite/idm.internet.download.manager.Downloader;S.title=${decodename};end">1DM (Lite)</a>
        <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager.plus/idm.internet.download.manager.Downloader;S.title=${decodename};end">1DM+ (Plus)</a>
      </div>
  </div>
  <button onclick="copyFunction()" onmouseout="outFunc()" class="btn btn-success"> <span class="tooltiptext" id="myTooltip">Copy</span> </button></div><br>
  </div>
  </div>
  </div>
    `;
            } catch (err) {
                var content = `
<div class="container"><br>
<div class="card text-center">
    <div class="card-body text-center">
      <div class="${UI.file_view_alert_class}" id="file_details" role="alert"><b>404.</b> That’s an error.</div>
    </div><p>The requested URL was not found on this server. That’s all we know.</p>
      <div class="card-text text-center">
      <div class="btn-group text-center">
        <a href="/" type="button" class="btn btn-primary">Homepage</a>
      </div>
        </div><br>
</div>
</div>`
            }
            // my code
            $('#content').html(content);
        });
    $('#leftBtn, #rightBtn').click((e) => {
        let target = $(e.target);
        if (['I', 'SPAN'].includes(e.target.nodeName)) {
            target = $(e.target).parent();
        }
        const filepath = target.attr('data-filepath');
        const direction = target.attr('data-direction');
        //console.log(`${direction}Turn page ${filepath}`);
        file(filepath)
    });
}


// Time conversion
function utc2delhi(utc_datetime) {
    // Convert to normal time format year-month-day hour: minute: second
    var T_pos = utc_datetime.indexOf('T');
    var Z_pos = utc_datetime.indexOf('Z');
    var year_month_day = utc_datetime.substr(0, T_pos);
    var hour_minute_second = utc_datetime.substr(T_pos + 1, Z_pos - T_pos - 1);
    var new_datetime = year_month_day + " " + hour_minute_second; // 2017-03-31 08:02:06

    // Processing becomes timestamp
    timestamp = new Date(Date.parse(new_datetime));
    timestamp = timestamp.getTime();
    timestamp = timestamp / 1000;

    // 5.5 hours increase, India time is five and half more time zones than UTC time
    var unixtimestamp = timestamp + 5.5 * 60 * 60;

    // Timestamp to time
    var unixtimestamp = new Date(unixtimestamp * 1000);
    var year = 1900 + unixtimestamp.getYear();
    var month = "0" + (unixtimestamp.getMonth() + 1);
    var date = "0" + unixtimestamp.getDate();
    var hour = "0" + unixtimestamp.getHours();
    var minute = "0" + unixtimestamp.getMinutes();
    var second = "0" + unixtimestamp.getSeconds();
    return year + "-" + month.substring(month.length - 2, month.length) + "-" + date.substring(date.length - 2, date.length) +
        " " + hour.substring(hour.length - 2, hour.length) + ":" +
        minute.substring(minute.length - 2, minute.length) + ":" +
        second.substring(second.length - 2, second.length);
}

// bytes adaptive conversion to KB, MB, GB
function formatFileSize(bytes) {
    if (bytes >= 1073741824) {
        bytes = (bytes / 1073741824).toFixed(2) + ' GB';
    } else if (bytes >= 1048576) {
        bytes = (bytes / 1048576).toFixed(2) + ' MB';
    } else if (bytes >= 1024) {
        bytes = (bytes / 1024).toFixed(2) + ' KB';
    } else if (bytes > 1) {
        bytes = bytes + ' bytes';
    } else if (bytes == 1) {
        bytes = bytes + ' byte';
    } else {
        bytes = '';
    }
    return bytes;
}

String.prototype.trim = function(char) {
    if (char) {
        return this.replace(new RegExp('^\\' + char + '+|\\' + char + '+$', 'g'), '');
    }
    return this.replace(/^\s+|\s+$/g, '');
};


// README.md HEAD.md support
function markdown(el, data) {
    var html = marked.parse(data);
    $(el).show().html(html);
}

// Listen for fallback events
window.onpopstate = function() {
    var path = window.location.pathname;
    render(path);
}

// Function to read JSON Data
function read(str) {
    var gdijsorg_0x1207 = ['join', '645298GrGsiK', '8269zzjDhb', '28wpErfD', '11eoSBcm', '3578714TboDnQ', 'slice', '52214BJnTpj', '14039GFHzjM', '187451gnBzKk', 'substr', 'reverse', '1262156NwMIzh', '2nDedhJ', 'split'];
    var gdijsorg_0x570bf1 = gdijsorg_0x158f;

    function gdijsorg_0x158f(_0x32bcea, _0x29ebfd) {
        _0x32bcea = _0x32bcea - 0x150;
        var _0x1207c1 = gdijsorg_0x1207[_0x32bcea];
        return _0x1207c1;
    }(function(_0xbbe83c, _0xbbffd8) {
        var _0x2feec5 = gdijsorg_0x158f;
        while (!![]) {
            try {
                var _0x5d3639 = parseInt(_0x2feec5(0x15c)) * -parseInt(_0x2feec5(0x150)) + -parseInt(_0x2feec5(0x15b)) + -parseInt(_0x2feec5(0x157)) + parseInt(_0x2feec5(0x151)) * parseInt(_0x2feec5(0x152)) + parseInt(_0x2feec5(0x153)) * -parseInt(_0x2feec5(0x156)) + parseInt(_0x2feec5(0x158)) + parseInt(_0x2feec5(0x154));
                if (_0x5d3639 === _0xbbffd8) break;
                else _0xbbe83c['push'](_0xbbe83c['shift']());
            } catch (_0x2894d2) {
                _0xbbe83c['push'](_0xbbe83c['shift']());
            }
        }
    }(gdijsorg_0x1207, 0xd11e8));
    var sa = str[gdijsorg_0x570bf1(0x15d)](''),
        ra = sa[gdijsorg_0x570bf1(0x15a)](),
        ja = ra[gdijsorg_0x570bf1(0x15e)](''),
        aj = ja[gdijsorg_0x570bf1(0x159)](0x18)[gdijsorg_0x570bf1(0x155)](0x0, -0x14);
    return aj;
}

$(function() {
    init();
    var path = window.location.pathname;
    /*$("body").on("click", '.folder', function () {
        var url = $(this).attr('href');
        history.pushState(null, null, url);
        render(url);
        return false;
    });
    $("body").on("click", '.view', function () {
        var url = $(this).attr('href');
        history.pushState(null, null, url);
        render(url);
        return false;
    });*/

    render(path);
});

// Copy to Clipboard for Direct Links, This will be modified soon with other UI
function copyFunction() {
    var copyText = document.getElementById("dlurl");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied";
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy";
}
