function init() {
	document.siteName = $('title').html();
	var html = `<header>
   <div id="nav">
   </div>
</header>
<div class="loading" id="spinner" style="display:none;">Loading&#8230;</div>
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

const folder_icon = `<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48" preserveAspectRatio="xMidYMid meet"><g clip-path="url(#__lottie_element_11)"><g transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,24,24)"><path fill="rgb(255,159,0)" fill-opacity="1" d=" M16,-12 C16,-12 -2,-12 -2,-12 C-2,-12 -6,-16 -6,-16 C-6,-16 -16,-16 -16,-16 C-18.200000762939453,-16 -20,-14.199999809265137 -20,-12 C-20,-12 -20,12 -20,12 C-20,14.208999633789062 -18.208999633789062,16 -16,16 C-16,16 13.682000160217285,16 13.682000160217285,16 C13.682000160217285,16 20,5 20,5 C20,5 20,-8 20,-8 C20,-10.199999809265137 18.200000762939453,-12 16,-12z"></path></g></g><g transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,24,26)"><path fill="rgb(255,201,40)" fill-opacity="1" d=" M16,-14 C16,-14 -16,-14 -16,-14 C-18.200000762939453,-14 -20,-12.199999809265137 -20,-10 C-20,-10 -20,10 -20,10 C-20,12.199999809265137 -18.200000762939453,14 -16,14 C-16,14 16,14 16,14 C18.200000762939453,14 20,12.199999809265137 20,10 C20,10 20,-10 20,-10 C20,-12.199999809265137 18.200000762939453,-14 16,-14z"></path></g></g></g></svg>`
const video_icon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><g fill="mediumseagreen"><path d="M200 72v112a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8Z" opacity=".2"/><path d="M251.77 73a8 8 0 0 0-8.21.39L208 97.05V72a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-25l35.56 23.71A8 8 0 0 0 248 184a8 8 0 0 0 8-8V80a8 8 0 0 0-4.23-7ZM192 184H32V72h160v112Zm48-22.95l-32-21.33v-23.44L240 95Z"/></g></svg>`
const code_icon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="lightskyblue" stroke-linejoin="round" stroke-width="2"><path stroke-linecap="round" d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2Zm5 9h6m-6 4h3"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></g></svg>`
const zip_icon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><g fill="darkturquoise"><path d="M208 88h-56V32Z" opacity=".2"/><path d="M184 144h-16a8 8 0 0 0-8 8v56a8 8 0 0 0 16 0v-8h8a28 28 0 0 0 0-56Zm0 40h-8v-24h8a12 12 0 0 1 0 24Zm-48-32v56a8 8 0 0 1-16 0v-56a8 8 0 0 1 16 0Zm-40 56a8 8 0 0 1-8 8H56a8 8 0 0 1-7-12l25.16-44H56a8 8 0 0 1 0-16h32a8 8 0 0 1 7 12l-25.21 44H88a8 8 0 0 1 8 8ZM213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v16a8 8 0 0 0 16 0V88a8 8 0 0 0-2.34-5.66ZM160 80V51.31L188.69 80Z"/></g></svg>`
const image_icon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><g fill="lightsalmon"><path d="M224 56v122.06l-39.72-39.72a8 8 0 0 0-11.31 0L147.31 164l-49.65-49.66a8 8 0 0 0-11.32 0L32 168.69V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8Z" opacity=".2"/><path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm0 16v102.75l-26.07-26.06a16 16 0 0 0-22.63 0l-20 20l-44-44a16 16 0 0 0-22.62 0L40 149.37V56ZM40 172l52-52l80 80H40Zm176 28h-21.37l-36-36l20-20L216 181.38V200Zm-72-100a12 12 0 1 1 12 12a12 12 0 0 1-12-12Z"/></g></svg>`
const audio_icon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><g fill="lemonchiffon"><path d="m72 160l24-24v88l-24-24H48v-40Zm80-128v56h56Z" opacity=".2"/><path d="M99.06 128.61a8 8 0 0 0-8.72 1.73L68.69 152H48a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h20.69l21.65 21.66A8 8 0 0 0 104 224v-88a8 8 0 0 0-4.94-7.39ZM88 204.69l-10.34-10.35A8 8 0 0 0 72 192H56v-24h16a8 8 0 0 0 5.66-2.34L88 155.31ZM152 180a40.55 40.55 0 0 1-20 34.91a8 8 0 0 1-8-13.82a24.49 24.49 0 0 0 0-42.18a8 8 0 0 1 8-13.82A40.55 40.55 0 0 1 152 180Zm61.66-97.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v80a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-32a8 8 0 0 0 0 16h32a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66ZM160 51.31L188.69 80H160Z"/></g></svg>`
const markdown_icon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="mediumorchid" d="m16 15l3-3l-1.05-1.075l-1.2 1.2V9h-1.5v3.125l-1.2-1.2L13 12l3 3ZM4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm0-2h16V6H4v12Zm0 0V6v12Zm1.5-3H7v-4.5h1v3h1.5v-3h1V15H12v-5q0-.425-.288-.713T11 9H6.5q-.425 0-.713.288T5.5 10v5Z"/></svg>`
const pdf_icon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="maroon" fill-rule="evenodd" d="m13.85 4.44l-3.28-3.3l-.35-.14H2.5l-.5.5V7h1V2h6v3.5l.5.5H13v1h1V4.8l-.15-.36zM10 5V2l3 3h-3zM2.5 8l-.5.5v6l.5.5h11l.5-.5v-6l-.5-.5h-11zM13 13v1H3V9h10v4zm-8-1h-.32v1H4v-3h1.06c.75 0 1.13.36 1.13 1a.94.94 0 0 1-.32.72A1.33 1.33 0 0 1 5 12zm-.06-1.45h-.26v.93h.26c.36 0 .54-.16.54-.47c0-.31-.18-.46-.54-.46zM9 12.58a1.48 1.48 0 0 0 .44-1.12c0-1-.53-1.46-1.6-1.46H6.78v3h1.06A1.6 1.6 0 0 0 9 12.58zm-1.55-.13v-1.9h.33a.94.94 0 0 1 .7.25a.91.91 0 0 1 .25.67a1 1 0 0 1-.25.72a.94.94 0 0 1-.69.26h-.34zm4.45-.61h-.97V13h-.68v-3h1.74v.55h-1.06v.74h.97v.55z" clip-rule="evenodd"/></svg>`
const file_icon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fill="darkturquoise" fill-opacity=".15" d="M344 630h32v2h-32z"/><path fill="darkturquoise" fill-opacity=".15" d="M534 352V136H360v64h64v64h-64v64h64v64h-64v64h64v64h-64v62h64v160H296V520h64v-64h-64v-64h64v-64h-64v-64h64v-64h-64v-64h-64v752h560V394H576a42 42 0 0 1-42-42z"/><path fill="darkturquoise" d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h64v64h64v-64h174v216a42 42 0 0 0 42 42h216v494z"/><path fill="darkturquoise" d="M296 392h64v64h-64zm0-128h64v64h-64zm0 318v160h128V582h-64v-62h-64v62zm48 50v-2h32v64h-32v-62zm16-432h64v64h-64zm0 256h64v64h-64zm0-128h64v64h-64z"/></svg>`

// Don't know new OS thing, so I just copied it from the original source code and edited something.
const Os = {
	isWindows: navigator.userAgent.toUpperCase().indexOf('WIN') > -1, // .includes
	isMac: navigator.userAgent.toUpperCase().indexOf('MAC') > -1,
	isMacLike: /(Mac|iPhone|iPod|iPad)/i.test(navigator.userAgent),
	isIos: /(iPhone|iPod|iPad)/i.test(navigator.userAgent),
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

// get search params
function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split('&');
	var pair;
	for (var i = 0; i < vars.length; i++) {
		pair = vars[i].split('=');
		if (pair[0] == variable) {
			return pair[1];
		}
	}
	return (false);
}

function render(path) {
	if (path.indexOf("?") > 0) {
		path = path.substr(0, path.indexOf("?"));
	}
	title(path);
	nav(path);
	// .../0: This
	var reg = /\/\d+:$/g;
	if (path.includes("/fallback")) {
		// Used to store the state of some scroll events
		window.scroll_status = {
			// Whether the scroll event is bound
			event_bound: false,
			// "Scroll to the bottom, loading more data" event lock
			loading_lock: false
		};
		const can_preview = getQueryVariable('a');
		const id = getQueryVariable('id');
		if (can_preview) {
			return fallback(id, true)
		} else {
			return list(null, id, true);
		}
	} else if (window.MODEL.is_search_page) {
		// Used to store the state of some scroll events
		window.scroll_status = {
			// Whether the scroll event is bound
			event_bound: false,
			// "Scroll to the bottom, loading more data" event lock
			loading_lock: false
		};
		render_search_result_list()
	} else if (path.match(reg) || path.slice(-1) == '/') {
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


	html += `<li class="nav-item">
    <a class="nav-link" href="${UI.contact_link}" target="_blank">${UI.nav_link_4}</a>
  </li>${UI.show_logout_button ?'<li class="nav-item"><a class="nav-link" href="/logout">Logout</a></li>': ''}`;

	var search_text = model.is_search_page ? (model.q || '') : '';
	var search_bar = `
</ul>
<form class="d-flex" method="get" action="/${cur}:search">
<input class="form-control me-2" name="q" type="search" placeholder="Search..." aria-label="Search" value="${search_text}" required>
<button class="btn ${UI.search_button_class}" onclick="if($('#search_bar_form>input').val()) $('#search_bar_form').submit();" type="submit"><span class="iconify" data-icon="line-md:search" data-width="24" data-height="24"></span></button>
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
function requestListPath(path, params, resultCallback, authErrorCallback, retries = 3, fallback = false) {
	var requestData = {
		id: params['id'] || '',
		type: 'folder',
		password: params['password'] || '',
		page_token: params['page_token'] || '',
		page_index: params['page_index'] || 0
	};
	$('#update').show();
	document.getElementById('update').innerHTML = `<div class='alert alert-info' role='alert'> Connecting...</div></div></div>`;
	if (fallback) {
		path = "/0:fallback"
	}

	function performRequest() {
		fetch(fallback ? "/0:fallback" : path, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(requestData)
			})
			.then(function(response) {
				if (!response.ok) {
					throw new Error('Request failed');
				}
				return response.json();
			})
			.then(function(res) {
				if (res && res.error && res.error.code === 401) {
					// Password verification failed
					askPassword(path);
				} else if (res && res.data === null) {
					document.getElementById('spinner').remove();
					document.getElementById('list').innerHTML = `<div class='alert alert-danger' role='alert'> Server didn't send any data.</div></div></div>`;
					$('#update').hide();
				} else if (res && res.data) {
					resultCallback(res, path, requestData);
					$('#update').hide();
				}
			})
			.catch(function(error) {
				if (retries > 0) {
					sleep(2000);
					document.getElementById('update').innerHTML = `<div class='alert alert-info' role='alert'> Retrying...</div></div></div>`;
					performRequest(path, requestData, resultCallback, authErrorCallback, retries - 1);
				} else {
					document.getElementById('update').innerHTML = `<div class='alert alert-danger' role='alert'> Unable to get data from the server. Something went wrong.</div></div></div>`;
					document.getElementById('list').innerHTML = `<div class='alert alert-danger' role='alert'> We were unable to get data from the server. ` + error + `</div></div></div>`;
					$('#update').hide();
				}
			});
	}
	console.log("Performing Request again")
	performRequest();
}




/**
 * Search POST request
 * @param params Form params
 * @param resultCallback Success callback
 */
function requestSearch(params, resultCallback, retries = 3) {
	var p = {
		q: params['q'] || null,
		page_token: params['page_token'] || null,
		page_index: params['page_index'] || 0
	};

	function performRequest(retries) {
		fetch(`/${window.current_drive_order}:search`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(p)
			})
			.then(function(response) {
				if (!response.ok) {
					throw new Error('Request failed');
				}
				return response.json();
			})
			.then(function(res) {
				if (res && res.data === null) {
					$('#spinner').remove();
					$('#list').html(`<div class='alert alert-danger' role='alert'> Server didn't send any data.</div></div></div>`);
					$('#update').remove();
				}
				if (res && res.data) {
					if (resultCallback) resultCallback(res, p);
					$('#update').remove();
				}
			})
			.catch(function(error) {
				if (retries > 0) {
					sleep(2000);
					$('#update').html(`<div class='alert alert-info' role='alert'> Retrying...</div></div></div>`);
					performRequest(retries - 1);
				} else {
					$('#update').html(`<div class='alert alert-danger' role='alert'> Unable to get data from the server. Something went wrong. 3 Failures</div></div></div>`);
					$('#list').html(`<div class='alert alert-danger' role='alert'> We were unable to get data from the server.</div></div></div>`);
					$('#spinner').remove();
				}
			});
	}

	$('#update').html(`<div class='alert alert-info' role='alert'> Connecting...</div></div></div>`);
	performRequest(retries);
}


// Render file list
function list(path, id = '', fallback = false) {
	console.log(id);
	var containerContent = `<div class="container">${UI.fixed_header ?'<br>': ''}
    <div id="update"></div>
    <div id="head_md" style="display:none; padding: 20px 20px;"></div>
    <div class="container" id="select_items" style="padding: 0px 50px 10px; display:none;">
      <div class="d-flex align-items-center justify-content-between">
        <div class="form-check mr-3">
          <input class="form-check-input" style="margin-top: 0.3em;margin-right: 0.5em;" type="checkbox" id="select-all-checkboxes">
          <label class="form-check-label" for="select-all-checkboxes">Select all</label>
        </div>
        <button id="handle-multiple-items-copy" style="padding: 5px 10px; font-size: 12px;" class="btn btn-success">Copy</button>
      </div>
    </div>
    <div class="${UI.path_nav_alert_class} d-flex align-items-center" role="alert" style="margin-bottom: 0; padding-bottom: 0rem;">
      <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
        <ol class="breadcrumb" id="folderne">
          <li class="breadcrumb-item"><a href="/">Home</a></li>`;

	var navfulllink = window.location.pathname;
	var navarray = navfulllink.trim('/').split('/');
	var currentPath = '/';

	if (navarray.length > 1) {
		for (var i in navarray) {
			var pathPart = navarray[i];
			var decodedPathPart = decodeURIComponent(pathPart).replace(/\//g, '%2F');
			var trimmedPathPart = decodedPathPart.replace(/\?.+/g, "$'");

			var displayedPathPart = trimmedPathPart.length > 15 ? trimmedPathPart.slice(0, 5) + '...' : trimmedPathPart.slice(0, 15);

			currentPath += pathPart + '/';

			if (displayedPathPart === '') {
				break;
			}

			containerContent += `<li class="breadcrumb-item"><a href="${currentPath}">${displayedPathPart}</a></li>`;
		}
	}

	containerContent += `</ol>
    </nav>
  </div>
  <div id="list" class="list-group text-break"></div>
  <div class="${UI.file_count_alert_class} text-center d-none" role="alert" id="count"><span class="number text-center"></span> | <span class="totalsize text-center"></span></div>
  <div id="readme_md" style="display:none; padding: 20px 20px;"></div>
</div>`;

	$('#content').html(containerContent);

	var password = localStorage.getItem('password' + path);

	$('#list').html(`<div class="d-flex justify-content-center"><div class="spinner-border ${UI.loading_spinner_class} m-5" role="status" id="spinner"><span class="sr-only"></span></div></div>`);
	$('#readme_md').hide().html('');
	$('#head_md').hide().html('');

	function handleSuccessResult(res, path, prevReqParams) {
		console.log(res, path, prevReqParams);
		$('#list')
			.data('nextPageToken', res['nextPageToken'])
			.data('curPageIndex', res['curPageIndex']);

		$('#spinner').remove();

		if (res['nextPageToken'] === null) {
			$(window).off('scroll');
			window.scroll_status.event_bound = false;
			window.scroll_status.loading_lock = false;
			if (fallback) {
				append_files_to_fallback_list(path, res['data']['files']);
			} else {
				append_files_to_list(path, res['data']['files']);
			}
		} else {
			console.log('doing something...')
			if (fallback) {
				append_files_to_fallback_list(path, res['data']['files']);
			} else {
				append_files_to_list(path, res['data']['files']);
			}
			if (window.scroll_status.event_bound !== true) {
				$(window).on('scroll', function() {
					var scrollTop = $(this).scrollTop();
					var scrollHeight = getDocumentHeight();
					var windowHeight = $(this).height();

					if (scrollTop + windowHeight > scrollHeight - (Os.isMobile ? 130 : 80)) {
						if (window.scroll_status.loading_lock === true) {
							return;
						}

						window.scroll_status.loading_lock = true;

						$(`<div id="spinner" class="d-flex justify-content-center"><div class="spinner-border ${UI.loading_spinner_class} m-5" role="status" id="spinner"><span class="sr-only"></span></div></div>`)
							.insertBefore('#readme_md');

						let $list = $('#list');
						if (fallback) {
							console.log('fallback inside handleSuccessResult');
							requestListPath(path, {
									id: id,
									password: prevReqParams['password'],
									page_token: $list.data('nextPageToken'),
									page_index: $list.data('curPageIndex') + 1
								},
								handleSuccessResult,
								null, 5, id, fallback = true);
						} else {
							requestListPath(path, {
									password: prevReqParams['password'],
									page_token: $list.data('nextPageToken'),
									page_index: $list.data('curPageIndex') + 1
								},
								handleSuccessResult,
								null);
						}
					}
				});

				window.scroll_status.event_bound = true;
			}
		}

		if (window.scroll_status.loading_lock === true) {
			window.scroll_status.loading_lock = false;
		}
	}

	if (fallback) {
		console.log('fallback inside list');
		requestListPath(path, {
				id: id,
				password: password
			},
			handleSuccessResult,
			null, null, fallback = true);
	} else {
		console.log("handling this")
		requestListPath(path, {
				password: password
			},
			handleSuccessResult,
			null);
	}


	const copyBtn = document.getElementById("handle-multiple-items-copy");

	// Add a click event listener to the copy button
	copyBtn.addEventListener("click", () => {
		// Get all the checked checkboxes
		const checkedItems = document.querySelectorAll('input[type="checkbox"]:checked');

		// Create an array to store the selected items' data
		const selectedItemsData = [];

		// Loop through each checked checkbox
    if (checkedItems.length === 0) {
      alert("No items selected!");
      return;
    }
		checkedItems.forEach((item) => {
			// Get the value of the checkbox (in this case, the URL)
			const itemData = item.value;
			// Push the value to the array
			selectedItemsData.push(itemData);
		});

		// Join the selected items' data with a newline character
		const dataToCopy = selectedItemsData.join("\n");

		// Create a temporary input element
		const tempInput = document.createElement("textarea");
		tempInput.value = dataToCopy;

		// Add the temporary input element to the document
		document.body.appendChild(tempInput);

		// Select the text inside the temporary input element
		tempInput.select();

		// Copy the selected text to the clipboard
		document.execCommand("copy");

		// Remove the temporary input element from the document
		document.body.removeChild(tempInput);

		// Alert the user that the data has been copied
		alert("Selected items copied to clipboard!");
	});
}

function askPassword(path) {
	$('#spinner').remove();
	var passwordInput = prompt("Directory encryption, please enter the password", "");
	localStorage.setItem('password' + path, passwordInput);

	if (passwordInput != null && passwordInput != "") {
		list(path);
	} else {
		history.go(-1);
	}
}

/**
 * Append the data of the requested new page to the list
 * @param path
 * @param files request result
 */
function append_files_to_fallback_list(path, files) {
	try {
		console.log('append_files_to_fallback_list');
		var $list = $('#list');
		// Is it the last page of data?
		var is_lastpage_loaded = null === $list.data('nextPageToken');
		var is_firstpage = '0' == $list.data('curPageIndex');

		html = "";
		let targetFiles = [];
		var totalsize = 0;
		var is_file = false
		for (i in files) {
			var item = files[i];
			var p = "/fallback?id=" + item.id
			item['modifiedTime'] = utc2delhi(item['modifiedTime']);
			// replace / with %2F
			if (item['mimeType'] == 'application/vnd.google-apps.folder') {
				html += `<a href="${p}" style="color: ${UI.folder_text_color};" class="countitems list-group-item list-group-item-action"> ${folder_icon} ${item.name} ${UI.display_time ? `<span class="badge bg-info float-end"> ` + item['modifiedTime'] + ` </span>` : ``}</a>`;
			} else {
				var totalsize = totalsize + Number(item.size);
				item['size'] = formatFileSize(item['size']);
				var is_file = true
				var epn = item.name;
				var link = UI.second_domain_for_dl ? UI.downloaddomain + item.link : window.location.origin + item.link;
				var pn = path + epn.replace(new RegExp('#', 'g'), '%23').replace(new RegExp('\\?', 'g'), '%3F');
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
				var ext = item.fileExtension
				//if ("|html|php|css|go|java|js|json|txt|sh|md|mp4|webm|avi|bmp|jpg|jpeg|png|gif|m4a|mp3|flac|wav|ogg|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|pdf|".indexOf(`|${ext}|`) >= 0) {
				//targetFiles.push(filepath);
				pn += "?a=view";
				c += " view";
				//}
				html += `<div class="list-group-item list-group-item-action">${UI.allow_selecting_files ? '<input class="form-check-input" style="margin-top: 0.3em;margin-right: 0.5em;" type="checkbox" value="'+link+'" id="flexCheckDefault">' : ''}`

				if ("|mp4|webm|avi|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf(`|${ext}|`) >= 0) {
					html += video_icon
				} else if ("|html|php|css|go|java|js|json|txt|sh|".indexOf(`|${ext}|`) >= 0) {
					html += code_icon
				} else if ("|zip|rar|tar|.7z|.gz|".indexOf(`|${ext}|`) >= 0) {
					html += zip_icon
				} else if ("|bmp|jpg|jpeg|png|gif|".indexOf(`|${ext}|`) >= 0) {
					html += image_icon
				} else if ("|m4a|mp3|flac|wav|ogg|".indexOf(`|${ext}|`) >= 0) {
					html += audio_icon
				} else if ("|md|".indexOf(`|${ext}|`) >= 0) {
					html += markdown_icon
				} else if ("|pdf|".indexOf(`|${ext}|`) >= 0) {
					html += pdf_icon
				} else {
					html += file_icon
				}

				html += ` <a class="countitems size_items list-group-item-action" style="text-decoration: none; color: ${UI.css_a_tag_color};" href="${p}&a=view">${item.name}</a>${UI.display_download ? `<a href="${link}" title"Download"><svg class="float-end ms-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="darkturquoise" d="M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71zM5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1z"/></svg></a>` : ``}${UI.display_size ? `<span class="badge bg-primary float-end fw-normal"> ` + item['size'] + ` </span>` : ``}${UI.display_time ? ` <span class="badge bg-info float-end fw-normal"> ` + item['modifiedTime'] + ` </span>` : ``}</div>`;
			}
		}
		if (is_file && UI.allow_selecting_files) {
			document.getElementById('select_items').style.display = 'block';
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
			total_size = formatFileSize(totalsize) || '0 Bytes';
			total_items = $list.find('.countitems').length;
			total_files = $list.find('.size_items').length;
			if (total_items == 0) {
				$('#count').removeClass('d-none').find('.number').text("Empty Folder");
			} else if (total_items == 1) {
				$('#count').removeClass('d-none').find('.number').text(total_items + " item");
			} else {
				$('#count').removeClass('d-none').find('.number').text(total_items + " items");
			}
			if (total_files == 0) {
				$('#count').removeClass('d-none').find('.totalsize').text("Zero Files");
			} else if (total_files == 1) {
				$('#count').removeClass('d-none').find('.totalsize').text(total_files + " File with Size " + total_size);
			} else {
				$('#count').removeClass('d-none').find('.totalsize').text(total_files + " Files with Size " + total_size);
			}
		}
	} catch (e) {
		console.log(e);
	}
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
	var totalsize = 0;
	var is_file = false
	for (i in files) {
		var item = files[i];
		var ep = encodeURIComponent(item.name).replace(/\//g, '%2F') + '/';
		var p = path + ep.replace(new RegExp('#', 'g'), '%23').replace(new RegExp('\\?', 'g'), '%3F');
		item['modifiedTime'] = utc2delhi(item['modifiedTime']);
		// replace / with %2F
		if (item['mimeType'] == 'application/vnd.google-apps.folder') {
			html += `<a href="${p}" style="color: ${UI.folder_text_color};" class="countitems list-group-item list-group-item-action"> ${folder_icon} ${item.name} ${UI.display_time ? `<span class="badge bg-info float-end"> ` + item['modifiedTime'] + ` </span>` : ``}</a>`;
		} else {
			var totalsize = totalsize + Number(item.size);
			item['size'] = formatFileSize(item['size']);
			var is_file = true
			var epn = item.name;
			var link = UI.second_domain_for_dl ? UI.downloaddomain + item.link : window.location.origin + item.link;
			var pn = path + epn.replace(new RegExp('#', 'g'), '%23').replace(new RegExp('\\?', 'g'), '%3F');
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
			var ext = item.fileExtension
      console.log(ext)
			//if ("|html|php|css|go|java|js|json|txt|sh|md|mp4|webm|avi|bmp|jpg|jpeg|png|gif|m4a|mp3|flac|wav|ogg|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|pdf|".indexOf(`|${ext}|`) >= 0) {
			//targetFiles.push(filepath);
			pn += "?a=view";
			c += " view";
			//}
			html += `<div class="list-group-item list-group-item-action">${UI.allow_selecting_files ? '<input class="form-check-input" style="margin-top: 0.3em;margin-right: 0.5em;" type="checkbox" value="'+link+'" id="flexCheckDefault">' : ''}`

      if ("|mp4|webm|avi|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf(`|${ext}|`) >= 0) {
        html += video_icon
      } else if ("|html|php|css|go|java|js|json|txt|sh|".indexOf(`|${ext}|`) >= 0) {
        html += code_icon
      } else if ("|zip|rar|tar|.7z|.gz|".indexOf(`|${ext}|`) >= 0) {
        html += zip_icon
      } else if ("|bmp|jpg|jpeg|png|gif|".indexOf(`|${ext}|`) >= 0) {
        html += image_icon
      } else if ("|m4a|mp3|flac|wav|ogg|".indexOf(`|${ext}|`) >= 0) {
        html += audio_icon
      } else if ("|md|".indexOf(`|${ext}|`) >= 0) {
        html += markdown_icon
      } else if ("|pdf|".indexOf(`|${ext}|`) >= 0) {
        html += pdf_icon
      } else {
        html += file_icon
      }

			html += ` <a class="countitems size_items list-group-item-action" style="text-decoration: none; color: ${UI.css_a_tag_color};" href="${pn}">${item.name}</a>${UI.display_download ? `<a href="${link}" title="Download"><svg class="float-end ms-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="darkturquoise" d="M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71zM5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1z"/></svg></a>` : ``}${UI.display_size ? `<span class="badge bg-primary float-end fw-normal"> ` + item['size'] + ` </span>` : ``}${UI.display_time ? ` <span class="badge bg-info float-end"> ` + item['modifiedTime'] + ` </span>` : ``}</div>`;
		}
	}
	if (is_file && UI.allow_selecting_files) {
		document.getElementById('select_items').style.display = 'block';
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
		total_size = formatFileSize(totalsize) || '0 Bytes';
		total_items = $list.find('.countitems').length;
		total_files = $list.find('.size_items').length;
		if (total_items == 0) {
			$('#count').removeClass('d-none').find('.number').text("Empty Folder");
		} else if (total_items == 1) {
			$('#count').removeClass('d-none').find('.number').text(total_items + " item");
		} else {
			$('#count').removeClass('d-none').find('.number').text(total_items + " items");
		}
		if (total_files == 0) {
			$('#count').removeClass('d-none').find('.totalsize').text("Zero Files");
		} else if (total_files == 1) {
			$('#count').removeClass('d-none').find('.totalsize').text(total_files + " File with Size " + total_size);
		} else {
			$('#count').removeClass('d-none').find('.totalsize').text(total_files + " Files with Size " + total_size);
		}
	}
}

/**
 * Render the search results list. There is a lot of repetitive code, but there are different logics in it.
 */
function render_search_result_list() {
	var content = `
  <div class="container"><br>
  <div id="update"></div>
  <div class="container" id="select_items" style="padding: 0px 50px 10px; display:none;">
  <div class="d-flex align-items-center justify-content-between">
    <div class="form-check mr-3">
      <input class="form-check-input" style="margin-top: 0.3em;margin-right: 0.5em;" type="checkbox" id="select-all-checkboxes">
      <label class="form-check-label" for="select-all-checkboxes">Select all</label>
    </div>
    <button id="handle-multiple-items-copy" style="padding: 5px 10px; font-size: 12px;" class="btn btn-success">Copy</button>
  </div>
  </div>
  <div class="card">
  <div class="${UI.path_nav_alert_class} d-flex align-items-center" role="alert" style="margin-bottom: 0;">Search Results</div>
  <div id="list" class="list-group text-break">
  </div>
  </div>
  <div class="${UI.file_count_alert_class} text-center d-none" role="alert" id="count"><span class="number text-center"></span> | <span class="totalsize text-center"></span></div>
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

	const copyBtn = document.getElementById("handle-multiple-items-copy");

	// Add a click event listener to the copy button
	copyBtn.addEventListener("click", () => {
		// Get all the checked checkboxes
		const checkedItems = document.querySelectorAll('input[type="checkbox"]:checked');

		// Create an array to store the selected items' data
		const selectedItemsData = [];
    if (checkedItems.length === 0) {
      alert("No items selected!");
      return;
    }
		// Loop through each checked checkbox
		checkedItems.forEach((item) => {
			// Get the value of the checkbox (in this case, the URL)
			const itemData = item.value;
			// Push the value to the array
			selectedItemsData.push(itemData);
		});

		// Join the selected items' data with a newline character
		const dataToCopy = selectedItemsData.join("\n");

		// Create a temporary input element
		const tempInput = document.createElement("textarea");
		tempInput.value = dataToCopy;

		// Add the temporary input element to the document
		document.body.appendChild(tempInput);

		// Select the text inside the temporary input element
		tempInput.select();

		// Copy the selected text to the clipboard
		document.execCommand("copy");

		// Remove the temporary input element from the document
		document.body.removeChild(tempInput);

		// Alert the user that the data has been copied
		alert("Selected items copied to clipboard!");
	});
}

/**
 * Append a new page of search results
 * @param files
 */
function append_search_result_to_list(files) {
	try {
		var cur = window.current_drive_order || 0;
		var $list = $('#list');
		// Is it the last page of data?
		var is_lastpage_loaded = null === $list.data('nextPageToken');
		// var is_firstpage = '0' == $list.data('curPageIndex');

		html = "";
		var totalsize = 0;
		var is_file = false;
		for (i in files) {
			var item = files[i];
			if (item['size'] == undefined) {
				item['size'] = "";
			}

			item['modifiedTime'] = utc2delhi(item['modifiedTime']);
			if (item['mimeType'] == 'application/vnd.google-apps.folder') {
				html += `<a style="color: ${UI.folder_text_color};" onclick="onSearchResultItemClick('${item['id']}', false)" data-bs-toggle="modal" data-bs-target="#SearchModel" class="countitems list-group-item list-group-item-action"> ${folder_icon} ${item.name} ${UI.display_time ? `<span class="badge bg-info float-end"> ` + item['modifiedTime'] + ` </span>` : ``}</a>`;
			} else {
				var is_file = true;
				var totalsize = totalsize + Number(item.size);
				item['size'] = formatFileSize(item['size']);
				var ext = item.fileExtension
				var link = UI.second_domain_for_dl ? UI.downloaddomain + item.link : window.location.origin + item.link;
				html += `<div style="color: ${UI.css_a_tag_color};" gd-type="$item['mimeType']}" class="countitems size_items list-group-item list-group-item-action">${UI.allow_selecting_files ? '<input class="form-check-input" style="margin-top: 0.3em;margin-right: 0.5em;" type="checkbox" value="'+link+'" id="flexCheckDefault">' : ''}`

				if ("|mp4|webm|avi|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf(`|${ext}|`) >= 0) {
					html += video_icon
				} else if ("|html|php|css|go|java|js|json|txt|sh|".indexOf(`|${ext}|`) >= 0) {
					html += code_icon
				} else if ("|zip|rar|tar|.7z|.gz|".indexOf(`|${ext}|`) >= 0) {
					html += zip_icon
				} else if ("|bmp|jpg|jpeg|png|gif|".indexOf(`|${ext}|`) >= 0) {
					html += image_icon
				} else if ("|m4a|mp3|flac|wav|ogg|".indexOf(`|${ext}|`) >= 0) {
					html += audio_icon
				} else if ("|md|".indexOf(`|${ext}|`) >= 0) {
					html += markdown_icon
				} else if ("|pdf|".indexOf(`|${ext}|`) >= 0) {
					html += pdf_icon
				} else {
					html += file_icon
				}

				html += ` <span onclick="onSearchResultItemClick('${item['id']}', true)" data-bs-toggle="modal" data-bs-target="#SearchModel">${item.name}</span>${UI.display_download ? `<a href="${link}" title="Download"><svg class="float-end ms-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="darkturquoise" d="M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71zM5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1z"/></svg></a>` : ``}<span class="badge float-end csize"> ${UI.display_size ? `<span class="badge bg-primary float-end fw-normal"> ` + item['size'] + ` </span>` : ``}${UI.display_time ? ` <span class="badge bg-info float-end"> ` + item['modifiedTime'] + ` </span>` : ``}</div>`;

			}
		}
		if (is_file && UI.allow_selecting_files) {
			document.getElementById('select_items').style.display = 'block';
		}
		// When it is page 1, remove the horizontal loading bar
		$list.html(($list.data('curPageIndex') == '0' ? '' : $list.html()) + html);
		// When it is the last page, count and display the total number of items
		if (is_lastpage_loaded) {
			total_size = formatFileSize(totalsize) || '0 Bytes';
			total_items = $list.find('.countitems').length;
			total_files = $list.find('.size_items').length;
			if (total_items == 0) {
				$('#count').removeClass('d-none').find('.number').text("No Results");
			} else if (total_items == 1) {
				$('#count').removeClass('d-none').find('.number').text(total_items + " item");
			} else {
				$('#count').removeClass('d-none').find('.number').text(total_items + " items");
			}
			if (total_files == 0) {
				$('#count').removeClass('d-none').find('.totalsize').text("Found Nothing");
			} else if (total_files == 1) {
				$('#count').removeClass('d-none').find('.totalsize').text(total_files + " File with Size " + total_size);
			} else {
				$('#count').removeClass('d-none').find('.totalsize').text(total_files + " Files with Size " + total_size);
			}
		}
	} catch (e) {
		console.log(e);
	}
}

/**
 * Search result item click event
 * @param a_ele Clicked element
 */
function onSearchResultItemClick(file_id, can_preview) {
	var cur = window.current_drive_order;
	var title = `Loading...`;
	$('#SearchModelLabel').html(title);
	var content = `<div class="d-flex justify-content-center"><div class="spinner-border ${UI.loading_spinner_class} m-5" role="status" id="spinner"><span class="sr-only"></span></div>`;
	$('#modal-body-space').html(content);
	var p = {
		id: file_id
	};
	// Request a path
	fetch(`/${cur}:id2path`, {
			method: 'POST',
			body: JSON.stringify(p),
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		})
		.then(function(response) {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error('Request failed.');
			}
		})
		.then(function(obj) {
			var href = `${obj.path}`;
			var encodedUrl = href.replace(new RegExp('#', 'g'), '%23').replace(new RegExp('\\?', 'g'), '%3F')
			title = `Result`;
			$('#SearchModelLabel').html(title);
			content = `<a class="btn btn-info" href="${encodedUrl}${can_preview ? '?a=view' : ''}">Open</a> <a class="btn btn-secondary" href="${encodedUrl}${can_preview ? '?a=view' : ''}" target="_blank">Open in New Tab</a>`;
			$('#modal-body-space').html(content);
		})
		.catch(function(error) {
			console.log(error);
			var link = ""
			title = `Fallback Method`;
			$('#SearchModelLabel').html(title);
			content = `<a class="btn btn-info" href="/fallback?id=${file_id}&${can_preview ? 'a=view' : ''}">Open</a> <a class="btn btn-secondary" href="/fallback?id=${file_id}&${can_preview ? 'a=view' : ''}" target="_blank">Open in New Tab</a>`;
			$('#modal-body-space').html(content);
		});
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

async function fallback(id, type) {
	if (type) { // is a file id
		var cookie_folder_id = await getCookie("root_id") || '';
		$('#content').html(`<div class="d-flex justify-content-center" style="height: 150px"><div class="spinner-border ${UI.loading_spinner_class} m-5" role="status" id="spinner"><span class="sr-only"></span></div></div>`);
		fetch("/0:fallback", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					id
				}),
			})
			.then(function(response) {
				if (!response.ok) {
					throw new Error("Request failed");
				}
				return response.json();
			})
			.then(function(obj) {
				console.log(obj);
				var mimeType = obj.mimeType;
				var fileExtension = obj.fileExtension
				const code = ["php", "css", "go", "java", "js", "json", "txt", "sh", "md", "html", "xml", "py", "rb", "c", "cpp", "h", "hpp"];
				const video = ["mp4", "webm", "avi", "mpg", "mpeg", "mkv", "rm", "rmvb", "mov", "wmv", "asf", "ts", "flv", "3gp", "m4v"];
				const audio = ["mp3", "flac", "wav", "ogg", "m4a", "aac", "wma", "alac"];
				const image = ["bmp", "jpg", "jpeg", "png", "gif", "svg", "tiff", "ico"];
				const pdf = ["pdf"];
				if (mimeType === "application/vnd.google-apps.folder") {
					window.location.href = window.location.pathname + "/";
				} else if (fileExtension) {
					const name = obj.name;
					const encoded_name = encodeURIComponent(name);
					const size = formatFileSize(obj.size);
					const url = UI.second_domain_for_dl ? UI.downloaddomain + obj.link : window.location.origin + obj.link;
					const file_id = obj.id;
					if (mimeType.includes("video") || video.includes(fileExtension)) {
						const poster = obj.thumbnailLink ? obj.thumbnailLink.replace("s220", "s0") : UI.poster;
						file_video(name, encoded_name, size, poster, url, mimeType, file_id, cookie_folder_id);
					} else if (mimeType.includes("audio") || audio.includes(fileExtension)) {
						file_audio(name, encoded_name, size, url, file_id, cookie_folder_id);
					} else if (mimeType.includes("image") || image.includes(fileExtension)) {
						file_image(name, encoded_name, size, url, file_id, cookie_folder_id);
					} else if (mimeType.includes("pdf") || pdf.includes(fileExtension)) {
						file_pdf(name, encoded_name, size, url, file_id, cookie_folder_id);
					} else if (code.includes(fileExtension)) {
						file_code(name, encoded_name, size, url, file_id, cookie_folder_id);
					} else {
						file_others(name, encoded_name, size, url, file_id, cookie_folder_id);
					}
				}
			})
			.catch(function(error) {
				var content = `
          <div class="container"><br>
          <div class="card text-center">
            <div class="card-body text-center">
              <div class="${UI.file_view_alert_class}" id="file_details" role="alert"><b>404.</b> That’s an error. ` + error + `</div>
            </div>
            <p>The requested URL was not found on this server. That’s all we know.</p>
            <div class="card-text text-center">
              <div class="btn-group text-center">
                <a href="/" type="button" class="btn btn-primary">Homepage</a>
              </div>
            </div><br>
          </div>
        </div>`;
				$("#content").html(content);
			});
	} else { // is a folder id
		return list(id, true);
	}
}

// File display ?a=view
async function file(path) {
	var cookie_folder_id = await getCookie("root_id") || '';
	var name = path.split('/').pop();
	$('#content').html(`<div class="d-flex justify-content-center" style="height: 150px"><div class="spinner-border ${UI.loading_spinner_class} m-5" role="status" id="spinner"><span class="sr-only"></span></div></div>`);
	fetch("", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				path: path
			}),
		})
		.then(function(response) {
			if (!response.ok) {
				throw new Error("Request failed");
			}
			return response.json();
		})
		.then(function(obj) {
			console.log(obj);
			var mimeType = obj.mimeType;
			var fileExtension = obj.fileExtension
			const code = ["php", "css", "go", "java", "js", "json", "txt", "sh", "md", "html", "xml", "py", "rb", "c", "cpp", "h", "hpp"];
			const video = ["mp4", "webm", "avi", "mpg", "mpeg", "mkv", "rm", "rmvb", "mov", "wmv", "asf", "ts", "flv", "3gp", "m4v"];
			const audio = ["mp3", "flac", "wav", "ogg", "m4a", "aac", "wma", "alac"];
			const image = ["bmp", "jpg", "jpeg", "png", "gif", "svg", "tiff", "ico"];
			const pdf = ["pdf"];
			if (mimeType === "application/vnd.google-apps.folder") {
				window.location.href = window.location.pathname + "/";
			} else if (fileExtension) {
				const name = obj.name;
				const encoded_name = encodeURIComponent(name);
				const size = formatFileSize(obj.size);
				const url = UI.second_domain_for_dl ? UI.downloaddomain + obj.link : window.location.origin + obj.link;
				const file_id = obj.id;
				if (mimeType.includes("video") || video.includes(fileExtension)) {
					const poster = obj.thumbnailLink ? obj.thumbnailLink.replace("s220", "s0") : UI.poster;
					file_video(name, encoded_name, size, poster, url, mimeType, file_id, cookie_folder_id);
				} else if (mimeType.includes("audio") || audio.includes(fileExtension)) {
					file_audio(name, encoded_name, size, url, file_id, cookie_folder_id);
				} else if (mimeType.includes("image") || image.includes(fileExtension)) {
					file_image(name, encoded_name, size, url, file_id, cookie_folder_id);
				} else if (mimeType.includes("pdf") || pdf.includes(fileExtension)) {
					file_pdf(name, encoded_name, size, url, file_id, cookie_folder_id);
				} else if (code.includes(fileExtension)) {
					file_code(name, encoded_name, size, url, file_id, cookie_folder_id);
				} else {
					file_others(name, encoded_name, size, url, file_id, cookie_folder_id);
				}
			}
		})
		.catch(function(error) {
			var content = `
          <div class="container"><br>
          <div class="card text-center">
            <div class="card-body text-center">
              <div class="${UI.file_view_alert_class}" id="file_details" role="alert"><b>404.</b> That’s an error. ` + error + `</div>
            </div>
            <p>The requested URL was not found on this server. That’s all we know.</p>
            <div class="card-text text-center">
              <div class="btn-group text-center">
                <a href="/" type="button" class="btn btn-primary">Homepage</a>
              </div>
            </div><br>
          </div>
        </div>`;
			$("#content").html(content);
		});
}

const copyButton = `<button onclick="copyFunction()" onmouseout="outFunc()" class="btn btn-success"> <span class="tooltiptext" id="myTooltip">Copy</span> </button>`

function generateCopyFileBox(file_id, cookie_folder_id) {
	const copyFileBox = `<div class="row justify-content-center mt-3" id="copyresult">
  <div class="col-12 col-md-8" id="copystatus"><div class='alert alert-secondary' role='alert'> Send Request to Copy File </div></div>
  <div class="col-12 col-md-8"> <input id="user_folder_id" type="text" class="form-control" placeholder="Enter Your Folder ID to Copy this File" value="${cookie_folder_id}" required></div>
  <div class="col-12 col-md-8 mt-2"> <button id="copy_file" onclick="copyFile('${file_id}')" style="margin-top: 5px;" class="btn btn-danger btn-block">Copy File to Own Drive</button></div>
  </div>`;

	return copyFileBox;
}

// Document display |zip|.exe/others direct downloads
function file_others(name, encoded_name, size, url, file_id, cookie_folder_id) {
	// Split the file path into parts
	var path = window.location.pathname;
	var pathParts = path.split('/');
	const copyFileBox = UI.allow_file_copy ? generateCopyFileBox(file_id, cookie_folder_id) : '';
	// Generate the navigation based on path parts
	var navigation = '';
	var new_path = '';
	for (var i = 0; i < pathParts.length; i++) {
		var part = pathParts[i];
		if (i == pathParts.length - 1) {
			new_path += part + '?a=view'
		} else {
			new_path += part + '/'
		}
		if (part.length > 15) {
			part = decodeURIComponent(part);
			part = part.substring(0, 10) + '...';
		}
		if (part == '') {
			part = 'Home'
		}
		navigation += '<a href="' + new_path + '" class="breadcrumb-item">' + part + '</a>';
	}

	// Add the container and card elements
	var content = `
    <div class="container"><br>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          ${navigation}
        </ol>
      </nav>
            <div class="card text-center">
            <div class="card-body text-center">
              <div class="${UI.file_view_alert_class}" id="file_details" role="alert">${name}<br>${size}</div>
            </div>
            <div class="card-body">
            <div class="input-group mb-4">
              <input type="text" class="form-control" id="dlurl" value="${url}" readonly>
            </div>
            <div class="card-text text-center">
            <div class="btn-group text-center">
                <a href="${url}" type="button" class="btn btn-primary">Download</a>
                <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span class="sr-only"></span>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager/idm.internet.download.manager.Downloader;S.title=${encoded_name};end">1DM (Free)</a>
                  <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager.adm.lite/idm.internet.download.manager.Downloader;S.title=${encoded_name};end">1DM (Lite)</a>
                  <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager.plus/idm.internet.download.manager.Downloader;S.title=${encoded_name};end">1DM+ (Plus)</a>
                </div>
            </div>
            ` + copyButton + copyFileBox+`
            </div>
            <br></div>`;
	$("#content").html(content);
}

function file_code(name, encoded_name, size, bytes, url, ext, file_id, cookie_folder_id) {
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

	// Split the file path into parts
	var path = window.location.pathname;
	var pathParts = path.split('/');
	const copyFileBox = UI.allow_file_copy ? generateCopyFileBox(file_id, cookie_folder_id) : '';
	// Generate the navigation based on path parts
	var navigation = '';
	var new_path = '';
	for (var i = 0; i < pathParts.length; i++) {
		var part = pathParts[i];
		if (i == pathParts.length - 1) {
			new_path += part + '?a=view'
		} else {
			new_path += part + '/'
		}
		if (part.length > 15) {
			part = decodeURIComponent(part);
			part = part.substring(0, 10) + '...';
		}
		if (part == '') {
			part = 'Home'
		}
		navigation += '<a href="' + new_path + '" class="breadcrumb-item">' + part + '</a>';
	}

	// Add the container and card elements
	var content = `
    <div class="container"><br>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          ${navigation}
        </ol>
      </nav>
      <div class="card text-center">
        <div class="card-body text-center">
          <div class="${UI.file_view_alert_class}" id="file_details" role="alert">${name}<br>${size}</div>
        </div>
        <div id="code_spinner"></div>` +
		(UI.second_domain_for_dl ? `` : `<pre class="line-numbers language-markup" data-src="plugins/line-numbers/index.html" data-start="-5" style="white-space: pre-wrap; counter-reset: linenumber -6;" data-src-status="loaded" tabindex="0"><code id="editor"></code></pre>`) +
		`<div class="card-body">
          <div class="input-group mb-4">
            <input type="text" class="form-control" id="dlurl" value="${url}" readonly>
          </div>
          <div class="card-text text-center">
            <div class="btn-group text-center">
              <a href="${url}" type="button" class="btn btn-primary">Download</a>
              <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only"></span>
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager/idm.internet.download.manager.Downloader;S.title=${encoded_name};end">1DM (Free)</a>
                <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager.adm.lite/idm.internet.download.manager.Downloader;S.title=${encoded_name};end">1DM (Lite)</a>
                <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager.plus/idm.internet.download.manager.Downloader;S.title=${encoded_name};end">1DM+ (Plus)</a>
              </div>
            </div>
            ` + copyButton + copyFileBox + `
          </div>
          <br>
        </div>
      </div>
    </div>`;

	$('#content').html(content);
	var spinner = '<div class="d-flex justify-content-center"><div class="spinner-border m-5" role="status"><span class="sr-only"></span></div></div>';
	$("#code_spinner").html(spinner);
	if (bytes <= 1024 * 1024 * 2) {
		$.get(url, function(data) {
			$('#editor').html($('<div/>').text(data).html());
			$("#code_spinner").html("");
			var code_type = "Text";
			if (type[ext] != undefined) {
				code_type = type[ext];
			}
		});
	} else {
		$("#code_spinner").html("");
		$('#editor').html(`<div class="${UI.file_view_alert_class}" id="file_details" role="alert">File size is too large to preview, Max Limit is 2 MB</div>`);
	}
}



// Document display video |mp4|webm|avi|
function file_video(name, encoded_name, size, poster, url, mimeType, file_id, cookie_folder_id) {
	var url_base64 = btoa(url);
	// Split the file path into parts
	var path = window.location.pathname;
	var pathParts = path.split('/');
	const copyFileBox = UI.allow_file_copy ? generateCopyFileBox(file_id, cookie_folder_id) : '';
	// Generate the navigation based on path parts
	var navigation = '';
	var new_path = '';
	for (var i = 0; i < pathParts.length; i++) {
		var part = pathParts[i];
		if (i == pathParts.length - 1) {
			new_path += part + '?a=view'
		} else {
			new_path += part + '/'
		}
		if (part.length > 15) {
			part = decodeURIComponent(part);
			part = part.substring(0, 10) + '...';
		}
		if (part == '') {
			part = 'Home'
		}
		navigation += '<a href="' + new_path + '" class="breadcrumb-item">' + part + '</a>';
	}
	let player
	if (!UI.disable_player) {
		if (player_config.player == "plyr") {
			player = `<video id="player" playsinline controls data-poster="${poster}">
      <source src="${url}" type="video/mp4" />
      <source src="${url}" type="video/webm" />
        </video>`
			player_js = 'https://cdn.plyr.io/' + player_config.plyr_io_version + '/plyr.polyfilled.js'
			player_css = 'https://cdn.plyr.io/' + player_config.plyr_io_version + '/plyr.css'
		} else if (player_config.player == "videojs") {
			player = `<video id="vplayer" poster="${poster}" muted=true class="video-js vjs-default-skin" controls preload="auto" width="100%" height="100%" data-setup='{"fluid": true}' style="--plyr-captions-text-color: #ffffff;--plyr-captions-background: #000000;">
      <source src="${url}" type="video/mp4" />
      <source src="${url}" type="video/webm" />
      <source src="${url}" type="video/avi" />
    </video>`
			player_js = 'https://vjs.zencdn.net/' + player_config.videojs_version + '/video.js'
			player_css = 'https://vjs.zencdn.net/' + player_config.videojs_version + '/video-js.css'
		} else if (player_config.player == "dplayer") {
			player = `<div id="player-container"></div>`
			player_js = 'https://cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.js'
			player_css = 'https://cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.css'
		} else if (player_config.player == "jwplayer") {
			player = `<div id="player"></div>`
			player_js = 'https://content.jwplatform.com/libraries/IDzF9Zmk.js'
			player_css = ''
		}
	}
	// Add the container and card elements
	var content = `
    <div class="container text-center"><br>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          ${navigation}
        </ol>
      </nav>
      <div class="card text-center">
        <div class="text-center">
          <div class="${UI.file_view_alert_class}" id="file_details" role="alert">${name}<br>${size}</div>${player}</div>
        </br>
        ${UI.disable_video_download ? `` : `
          <div class="card-body">
          <div class="input-group mb-4">
          <input type="text" class="form-control" id="dlurl" value="${url}" readonly>
          </div>
          <div class="btn-group text-center">
              <a href="${url}" type="button" class="btn btn-primary">Download</a>
              <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span class="sr-only"></span>
              </button>
              <div class="dropdown-menu">
              <a class="dropdown-item" href="iina://weblink?url=${url}">IINA</a>
              <a class="dropdown-item" href="potplayer://${url}">PotPlayer</a>
              <a class="dropdown-item" href="vlc://${url}">VLC Mobile</a>
              <a class="dropdown-item" href="${url}">VLC Desktop</a>
              <a class="dropdown-item" href="nplayer-${url}">nPlayer</a>
              <a class="dropdown-item" href="intent://${url}#Intent;type=video/any;package=is.xyz.mpv;scheme=https;end;">mpv-android</a>
              <a class="dropdown-item" href="mpv://${url_base64}">mpv x64</a>
              <a class="dropdown-item" href="intent:${url}#Intent;package=com.mxtech.videoplayer.ad;S.title=${encoded_name};end">MX Player (Free)</a>
              <a class="dropdown-item" href="intent:${url}#Intent;package=com.mxtech.videoplayer.pro;S.title=${encoded_name};end">MX Player (Pro)</a>
              <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager/idm.internet.download.manager.Downloader;S.title=${encoded_name};end">1DM (Free)</a>
              <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager.adm.lite/idm.internet.download.manager.Downloader;S.title=${encoded_name};end">1DM (Lite)</a>
              <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager.plus/idm.internet.download.manager.Downloader;S.title=${encoded_name};end">1DM+ (Plus)</a>
              </div>
          </div>
          `+copyButton+copyFileBox+`
          
          </div>
          </div>
          `}
      </div>
    </div>
  `;
	$("#content").html(content);

	// Load Video.js and initialize the player
	var videoJsScript = document.createElement('script');
	videoJsScript.src = player_js;
	videoJsScript.onload = function() {
		// Video.js is loaded, initialize the player
		if (player_config.player == "plyr") {
			const player = new Plyr('#player');
		} else if (player_config.player == "videojs") {
			const player = new videojs('vplayer');
		} else if (player_config.player == "dplayer") {
			const dp = new DPlayer({
				container: document.getElementById('player-container'),
				screenshot: true,
				video: {
					url: url,
					pic: poster,
					thumbnails: poster,
				},
			});
		} else if (player_config.player == "jwplayer") {
			jwplayer("player").setup({
				file: url,
				type: mimeType,
				autostart: false,
				image: poster,
				width: "100%",
				aspectratio: "16:9",
				title: name,
				description: "Powered by Google Drive Index",
				tracks: [{
					file: url,
					kind: "captions",
					label: "Default",
					"default": true,
				}],
				captions: {
					color: "#f3f378",
					fontSize: 14,
					backgroundOpacity: 50,
					edgeStyle: "raised",
				},
			});
		}

	};
	document.head.appendChild(videoJsScript);

	var videoJsStylesheet = document.createElement('link');
	videoJsStylesheet.href = player_css;
	videoJsStylesheet.rel = 'stylesheet';
	document.head.appendChild(videoJsStylesheet);
}


// File display Audio |mp3|flac|m4a|wav|ogg|
function file_audio(name, encoded_name, size, url, file_id, cookie_folder_id) {
	var url_base64 = btoa(url);
	// Split the file path into parts
	var path = window.location.pathname;
	var pathParts = path.split('/');
	const copyFileBox = UI.allow_file_copy ? generateCopyFileBox(file_id, cookie_folder_id) : '';
	// Generate the navigation based on path parts
	var navigation = '';
	var new_path = '';
	for (var i = 0; i < pathParts.length; i++) {
		var part = pathParts[i];
		if (i == pathParts.length - 1) {
			new_path += part + '?a=view'
		} else {
			new_path += part + '/'
		}
		if (part.length > 15) {
			part = decodeURIComponent(part);
			part = part.substring(0, 10) + '...';
		}
		if (part == '') {
			part = 'Home'
		}
		navigation += '<a href="' + new_path + '" class="breadcrumb-item">' + part + '</a>';
	}

	// Add the container and card elements
	var content = `
    <div class="container text-center"><br>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          ${navigation}
        </ol>
      </nav>
      <div class="card text-center">
        <div class="text-center">
          <div class="${UI.file_view_alert_class}" id="file_details" role="alert">${name}<br>${size}</div>
          ${UI.disable_player ? `` : `
          <video id="aplayer" poster="${UI.audioposter}" muted=true class="video-js vjs-default-skin" controls preload="auto" width="100%" height="100%" data-setup='{"fluid": true}' style="--plyr-captions-text-color: #ffffff;--plyr-captions-background: #000000;">
            <source src="${url}" type="audio/mpeg" />
            <source src="${url}" type="audio/ogg" />
            <source src="${url}" type="audio/wav" />
          </video>`}
        </div>
        </br>
        ${UI.disable_audio_download ? `` : `
          <div class="card-body">
          <div class="input-group mb-4">
          <input type="text" class="form-control" id="dlurl" value="${url}" readonly>
          </div>
          <div class="btn-group text-center">
              <a href="${url}" type="button" class="btn btn-primary">Download</a>
              <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span class="sr-only"></span>
              </button>
              <div class="dropdown-menu">
              <a class="dropdown-item" href="iina://weblink?url=${url}">IINA</a>
              <a class="dropdown-item" href="potplayer://${url}">PotPlayer</a>
              <a class="dropdown-item" href="vlc://${url}">VLC Mobile</a>
              <a class="dropdown-item" href="${url}">VLC Desktop</a>
              <a class="dropdown-item" href="nplayer-${url}">nPlayer</a>
              <a class="dropdown-item" href="intent://${url}#Intent;type=audio/any;package=is.xyz.mpv;scheme=https;end;">mpv-android</a>
              <a class="dropdown-item" href="mpv://${url_base64}">mpv x64</a>
              <a class="dropdown-item" href="intent:${url}#Intent;package=com.mxtech.videoplayer.ad;S.title=${encoded_name};end">MX Player (Free)</a>
              <a class="dropdown-item" href="intent:${url}#Intent;package=com.mxtech.videoplayer.pro;S.title=${encoded_name};end">MX Player (Pro)</a>
              <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager/idm.internet.download.manager.Downloader;S.title=${encoded_name};end">1DM (Free)</a>
              <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager.adm.lite/idm.internet.download.manager.Downloader;S.title=${encoded_name};end">1DM (Lite)</a>
              <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager.plus/idm.internet.download.manager.Downloader;S.title=${encoded_name};end">1DM+ (Plus)</a>
              </div>
          </div>
          `+copyButton+copyFileBox+`
          <br>
          </div>
          </div>
          `}
      </div>
    </div>
  `;
	$("#content").html(content);

	// Load Video.js and initialize the player
	var videoJsScript = document.createElement('script');
	videoJsScript.src = 'https://vjs.zencdn.net/' + UI.videojs_version + '/video.min.js';
	videoJsScript.onload = function() {
		// Video.js is loaded, initialize the player
		const player = videojs('aplayer');
	};
	document.head.appendChild(videoJsScript);

	var videoJsStylesheet = document.createElement('link');
	videoJsStylesheet.href = 'https://vjs.zencdn.net/' + UI.videojs_version + '/video-js.css';
	videoJsStylesheet.rel = 'stylesheet';
	document.head.appendChild(videoJsStylesheet);
}



// Document display pdf
function file_pdf(name, encoded_name, size, url, file_id, cookie_folder_id) {
	// Split the file path into parts
	var path = window.location.pathname;
	var pathParts = path.split('/');
	const copyFileBox = UI.allow_file_copy ? generateCopyFileBox(file_id, cookie_folder_id) : '';
	// Generate the navigation based on path parts
	var navigation = '';
	var new_path = '';
	for (var i = 0; i < pathParts.length; i++) {
		var part = pathParts[i];
		if (i == pathParts.length - 1) {
			new_path += part + '?a=view'
		} else {
			new_path += part + '/'
		}
		if (part.length > 15) {
			part = decodeURIComponent(part);
			part = part.substring(0, 10) + '...';
		}
		if (part == '') {
			part = 'Home'
		}
		navigation += '<a href="' + new_path + '" class="breadcrumb-item">' + part + '</a>';
	}

	// Add the container and card elements
	var content = `
    <div class="container text-center"><br>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          ${navigation}
        </ol>
      </nav>
    <div class="card">
    <div class="card-body text-center">
    <div class="${UI.file_view_alert_class}" id="file_details" role="alert">${name}<br>${size}</div>
    <div>
    </div><br>
    <iframe src="https://docs.google.com/gview?url=${encodeURIComponent(url)}&embedded=true" style="width:100%; height:500px;" frameborder="0"></iframe>
    </div>
    <div class="card-body">
    <div class="input-group mb-4">
    <input type="text" class="form-control" id="dlurl" value="${url}" readonly>
    </div>
    <div class="card-text text-center">
    <div class="btn-group text-center">
        <a href="${url}" type="button" class="btn btn-primary">Download</a>
        <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only"></span>
        </button>
        <div class="dropdown-menu">
            <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager/idm.internet.download.manager.Downloader;S.title=${encoded_name};end">1DM (Free)</a>
            <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager.adm.lite/idm.internet.download.manager.Downloader;S.title=${encoded_name};end">1DM (Lite)</a>
            <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager.plus/idm.internet.download.manager.Downloader;S.title=${encoded_name};end">1DM+ (Plus)</a>
        </div>
    </div>
    ` + copyButton + `
    </div>
    <br>
    
    </div>
    </div>
    </div>  
  `;
	$("#content").html(content);
}

// image display
function file_image(name, encoded_name, size, url, file_id, cookie_folder_id) {
	// Split the file path into parts
	var path = window.location.pathname;
	var pathParts = path.split('/');
	const copyFileBox = UI.allow_file_copy ? generateCopyFileBox(file_id, cookie_folder_id) : '';
	// Generate the navigation based on path parts
	var navigation = '';
	var new_path = '';
	for (var i = 0; i < pathParts.length; i++) {
		var part = pathParts[i];
		if (i == pathParts.length - 1) {
			new_path += part + '?a=view'
		} else {
			new_path += part + '/'
		}
		if (part.length > 15) {
			part = decodeURIComponent(part);
			part = part.substring(0, 10) + '...';
		}
		if (part == '') {
			part = 'Home'
		}
		navigation += '<a href="' + new_path + '" class="breadcrumb-item">' + part + '</a>';
	}

	// Add the container and card elements // wait until image is loaded and then hide spinner
	var content = `
    <div class="container text-center"><br>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          ${navigation}
        </ol>
      </nav>
      <div class="card">
        <div class="card-body text-center">
          <div class="${UI.file_view_alert_class}" id="file_details" role="alert">${name}<br>${size}</div>
          <img src="${url}" id="load_image" width="100%">
        </div>
        <div class="card-body">
          <div class="input-group mb-4">
            <div class="input-group-prepend">
              <span class="input-group-text" id="">Full URL</span>
            </div>
            <input type="text" class="form-control" id="dlurl" value="${url}" readonly>
          </div>
          <div class="card-text text-center">
            <div class="btn-group text-center">
              <a href="${url}" type="button" class="btn btn-primary">Download</a>
              <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="sr-only"></span>
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager/idm.internet.download.manager.Downloader;S.title=${encoded_name};end">1DM (Free)</a>
                <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager.adm.lite/idm.internet.download.manager.Downloader;S.title=${encoded_name};end">1DM (Lite)</a>
                <a class="dropdown-item" href="intent:${url}#Intent;component=idm.internet.download.manager.plus/idm.internet.download.manager.Downloader;S.title=${encoded_name};end">1DM+ (Plus)</a>
              </div>
            </div>
            ` + copyButton + copyFileBox + `
          </div>
          <br>
        </div>
      </div>
    </div>
  `;
	$('#content').html(content);
}

// Time conversion
function utc2delhi(utc_datetime) {
	// Convert UTC datetime to local Delhi time
	var utcDate = new Date(utc_datetime);
	var delhiDate = new Date(utcDate.getTime() + 5.5 * 60 * 60 * 1000);

	// Format the Delhi date and time
	var year = delhiDate.getFullYear();
	var month = ('0' + (delhiDate.getMonth() + 1)).slice(-2);
	var date = ('0' + delhiDate.getDate()).slice(-2);
	var hour = ('0' + delhiDate.getHours()).slice(-2);
	var minute = ('0' + delhiDate.getMinutes()).slice(-2);
	var second = ('0' + delhiDate.getSeconds()).slice(-2);

	return `${date}-${month}-${year} ${hour}:${minute}:${second}`;
}


// bytes adaptive conversion to KB, MB, GB
function formatFileSize(bytes) {
	if (bytes >= 1099511627776) {
		bytes = (bytes / 1099511627776).toFixed(2) + ' TB';
	} else if (bytes >= 1073741824) {
		bytes = (bytes / 1073741824).toFixed(2) + ' GB';
	} else if (bytes >= 1048576) {
		bytes = (bytes / 1048576).toFixed(2) + ' MB';
	} else if (bytes >= 1024) {
		bytes = (bytes / 1024).toFixed(2) + ' KB';
	} else if (bytes > 1) {
		bytes = bytes + ' bytes';
	} else if (bytes === 1) {
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

	navigator.clipboard.writeText(copyText.value)
		.then(function() {
			var tooltip = document.getElementById("myTooltip");
			tooltip.innerHTML = "Copied";
		})
		.catch(function(error) {
			console.error("Failed to copy text: ", error);
		});
}

function outFunc() {
	var tooltip = document.getElementById("myTooltip");
	tooltip.innerHTML = "Copy";
}

// function to update the list of checkboxes
function updateCheckboxes() {
	const checkboxes = document.querySelectorAll('input[type="checkbox"]');
	const selectAllCheckbox = document.getElementById('select-all-checkboxes');

	if (checkboxes.length > 0 && selectAllCheckbox) { // Check if checkboxes and selectAllCheckbox exist
		selectAllCheckbox.addEventListener('click', () => {
			checkboxes.forEach((checkbox) => {
				checkbox.checked = selectAllCheckbox.checked;
			});
		});
	}
}

async function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

// Copy File to User Drive
async function copyFile(driveid) {
	try {
		const copystatus = document.getElementById('copystatus');
		copystatus.innerHTML = `<div class='alert alert-danger' role='alert'> Processing... </div>`;

		const user_folder_id = document.getElementById('user_folder_id').value;
		if (user_folder_id === '') {
			copystatus.innerHTML = `<div class='alert alert-danger' role='alert'> Empty ID </div>`;
			return null;
		}

		document.getElementById('spinner').style.display = 'block';
		document.cookie = `root_id=${user_folder_id}; expires=Thu, 18 Dec 2050 12:00:00 UTC`;
		const time = Math.floor(Date.now() / 1000);
		const response = await fetch('/copy', {
			method: 'POST',
			cache: 'no-cache',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: `id=${encodeURIComponent(driveid)}&root_id=${user_folder_id}&resourcekey=null&time=${time}`
		});

		if (response.status === 500) {
			copystatus.innerHTML = `<div class='alert alert-danger' role='alert'> Unable to Copy File, Make Sure you've added system@zindex.eu.org to your Destination Folder </div>`;
		} else if (response.status === 401) {
			copystatus.innerHTML = `<div class='alert alert-danger' role='alert'> Unauthorized </div>`;
		} else if (response.ok) {
			const data = await response.json();
			if (data && data.name) {
				const link = `https://drive.google.com/file/d/${data.id}/view?usp=share_link`;
				const copyresult = document.getElementById('copyresult');
				copyresult.innerHTML = `<div class="col-12 col-md-12"> <input type="text" id="usercopiedfile" class="form-control" placeholder="Enter Your Folder ID to Copy this File" value="${link}" readonly></div> <div class="col-12 col-md-12"> <a href="${link}" target="_blank" style="margin-top: 5px;" class="btn btn-danger btn-block">Open Copied File</a></div>`;
			} else if (data && data.error && data.error.message) {
				copystatus.innerHTML = `<div class='alert alert-danger' role='alert'> ` + data.error.message + ` </div>`;
			} else {
				copystatus.innerHTML = `<div class='alert alert-danger' role='alert'> Unable to Copy File </div>`;
			}
		} else {
			copystatus.innerHTML = `<div class='alert alert-danger' role='alert'> Unable to Copy File </div>`;
		}

		document.getElementById('spinner').style.display = 'none';
	} catch (error) {
		const copystatus = document.getElementById('copystatus');
		copystatus.innerHTML = `<div class='alert alert-danger' role='alert'> An error occurred ` + error + `</div>`;
		document.getElementById('spinner').style.display = 'none';
	}
}


// create a MutationObserver to listen for changes to the DOM
const observer = new MutationObserver(() => {
	updateCheckboxes();
});

// define the options for the observer (listen for changes to child elements)
const options = {
	childList: true,
	subtree: true
};

// observe changes to the body element
observer.observe(document.documentElement, options);
