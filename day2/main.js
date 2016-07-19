// green 이라는 하나의 li를 추가하기 위해서 한 작업

var colorsNode = document.getElementById("colors");

// 서버에서 데이터를 받아온 상태라면
var colors = []

colors.forEach(function(color) {
    var newListNode = document.createElement("li");
    var newTextNode = document.createTextNode(color);
    newListNode.appendChild(newTextNode);
    colorsNode.appnedChild(newListNode);
});

