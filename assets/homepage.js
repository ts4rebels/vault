let len = window.drive_names.length;
let html = "";
for (var i = 0; i < len; i++) {
html += `<a href="/`+i+`:/" style="color: ${UI.folder_text_color};" class="list-group-item list-group-item-action"><span class="iconify" data-icon="ph:folder-notch-open-duotone" style="color: #ffe69c;" data-width="24" data-height="24"></span>`+`<span class="ms-2 align-middle">`+window.drive_names[i]+`</span>`+`</a>`;
}
$('#n_drives').html(len);
$('#list').html(html);
