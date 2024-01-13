var openWeatherAPI = 'https://api.openweathermap.org/data/2.5/weather?appid=f98e648c60dee9415bd3b65e176b86ca&units=metric&lang=kr&q=seoul'

$.ajax({
   type: 'GET',
   url: openWeatherAPI,
   dataType: 'json',
   success: function (data) {
      console.log(data)
      //코드를 작성하세요
   },
   error: function (request, status, error) {
      //응답 에러시 처리 작업
      console.log('code:' + request.status)
      console.log('message:' + request.responseText)
      console.log('error:' + error)
   },
})
