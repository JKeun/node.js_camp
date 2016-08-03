npm init
npm install --save express
npm install --save pug
==> npm install --save express pug

npm install _____ --save
npm install _____ --save-dev

npm install -g (global) nodemon

npm install --save body-parser


SMS
1. API Endpoint ( URL )
2. HTTP Method ( "POST" )
3. Headers ( Content-Type, Content-Length, ... 인증정보 (x-waple-authorization)
4. HTTP Body ( send_phone, dest_phone, msg_body )

1. GET => request.query
2. POST, PATCH, PUT, DELETE ... => request.body ( body-parser )

app.use => 이말 자체는  Middleware 구나,
=====> function(request, response, next) {
    .....
    request.body = {...}
    response

    next()
}



