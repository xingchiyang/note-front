function doPost(url, data, successCallback, errorCallback){
	$.ajax({
		  type: 'POST',
		  url: url,
		  data: JSON.stringify(data),
		  success: function(data){
			if(successCallback != null)
				successCallback(data);
		  },
		  error: function (XMLHttpRequest, textStatus, errorThrown){
			if(XMLHttpRequest.responseJSON.status != 200 && XMLHttpRequest.responseJSON.message == "请先登录"){
				window.top.location.href = "/login.html";
			}
			if(errorCallback != null)
				errorCallback(XMLHttpRequest, textStatus, errorThrown);
		  },
		  contentType: "application/json;charset=utf-8"
	});
}

function doGet(url, successCallback, errorCallback){
	$.ajax({
		  type: 'GET',
		  url: url,
		  success: function(data){
			if(successCallback != null)
				successCallback(data);
		  },
		  error: function (XMLHttpRequest, textStatus, errorThrown){
			if(XMLHttpRequest.responseJSON.status != 200 && XMLHttpRequest.responseJSON.message == "请先登录"){
				window.top.location.href = "/login.html";
			}
			if(errorCallback != null)
				errorCallback(XMLHttpRequest, textStatus, errorThrown);
		  },
		  contentType: "application/json;charset=utf-8"
	});
}