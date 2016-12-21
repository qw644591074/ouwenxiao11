$(document).ready(function(){
$.ajax({
				dataType:"jsonp",
				method:"post",
				url:'http://wthrcdn.etouch.cn/weather_mini?city=%e5%b9%bf%e5%b7%9e',
				success:function(result){
				var html="";
				html=result.data.city+"---"+result.data.forecast[0].low+"~"+result.data.forecast[0].high+"---"+result.data.forecast[0].type;
				$("#weather").append(html);
				}
});
});