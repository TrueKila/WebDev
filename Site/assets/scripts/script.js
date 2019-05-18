var app = new Vue({
    el: '#app',
    data: {
        message: 'Привет Vue'
    }
});
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString(),
        
    }

})
app.message = 'I have changed the data!'
app2.message = 'новое сообщение'