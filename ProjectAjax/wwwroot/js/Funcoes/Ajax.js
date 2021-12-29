let Ajax = function (_type, _url, _async, _data, _dataType, _contentType, _success, _beforeSend, _complete) {
    return $.ajax({
        type: _type,
        url: _url,
        async: _async,
        data: JSON.stringify(_data),
        dataType: _dataType,
        contentType: _contentType,
        success: _success,
        beforeSend: _beforeSend,
        complete: _complete
    });
}

let AjaxSync = function (_type, _url, _data, _dataType, _contentType, _success, _beforeSend, _complete) {
    return Ajax(_type, _url, true, _data, _dataType, _contentType, _success, _beforeSend, _complete);
}

let AjaxAsync = function (_type, _url, _data, _dataType, _contentType) {

    return Ajax(_type, _url, false, _data, _dataType, _contentType, function (data) { }, null, null);
}

let AjaxSyncGet = function (_url, _dataType, _contentType, _success, _beforeSend, _complete) {
    return AjaxSync("GET", _url, null, _dataType, _contentType, _success, _beforeSend, _complete);
}

let AjaxAsyncGet = function (_url, _dataType, _contentType) {
    return AjaxAsync("GET", _url, null, _dataType, _contentType);
}

let AjaxSyncPost = function (_url, _data, _dataType, _contentType, _success, _beforeSend, _complete) {
    return AjaxSync("POST", _url, _data, _dataType, _contentType, _success, _beforeSend, _complete);
}

let AjaxAsyncPost = function (_url, _data, _dataType, _contentType) {
    return AjaxAsync("POST", _url, _data, _dataType, _contentType);
}

let AjaxSyncGetJson = function (_url, _success, _beforeSend, _complete) {
    return AjaxSyncGet(_url, "json", "application/json; charset=UTF-8", _success, _beforeSend, _complete);
}

let AjaxAsyncGetJson = function (_url) {

    let response = AjaxAsyncGet(_url, "json", "application/json; charset=UTF-8");

    return response.responseJSON;
}

let AjaxSyncPostJson = function (_url, _data, _success, _beforeSend, _complete) {
    return AjaxSyncPost(_url, _data, "json", "application/json; charset=UTF-8", _success, _beforeSend, _complete);
}

let AjaxAsyncPostJson = function (_url, _data) {
    return AjaxAsyncPost(_url, _data, "json", "application/json; charset=UTF-8");
}

export {
    Ajax,
    AjaxSync,
    AjaxAsync,
    AjaxSyncGet,
    AjaxAsyncGet,
    AjaxSyncPost,
    AjaxAsyncPost,
    AjaxSyncGetJson,
    AjaxAsyncGetJson,
    AjaxSyncPostJson,
    AjaxAsyncPostJson
}