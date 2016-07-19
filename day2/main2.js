// 채팅 || 댓글 작동하기

$(document).ready(function() {
    alert("Ready to Chat!");

    var MessagesElement = $("#messages");

    $("form").submit(function() {
        var inputElement = $("form input[name='message']");
        var data = inputElement.val();
        $(MessagesElement).append("<li>" + data + "</li>")

        inputElement.val("");
        
        return false;
    });
});
