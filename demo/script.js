var aLi = document.querySelectorAll("li");
var aSpan = document.querySelectorAll("span");
var oImgbox = document.querySelector(".imgBox");
var aName = [];
var index = 0;
setColor();
for (var item of aLi) {
    aName.push(item.classList[0]);
}

function nextPic() {
    aName.unshift(aName[5]);
    aName.pop();
    len = aLi.length;
    for (var i = 0; i < len; i++) {
        aLi[i].setAttribute("class", aName[i]); //重新设置新名字
    }
    index++;
    if (index > 5) index = 0;
    setColor();
}

function prePic() {
    aName.push(aName[0]);
    aName.shift();
    len = aLi.length;
    for (var i = 0; i < len; i++) {
        aLi[i].setAttribute("class", aName[i]); //重新设置新名字
    }
    index--;
    if (index < 0) index = 5;
    setColor();
}

function setColor() {
    for (var item of aSpan) {
        item.style.backgroundColor = "#ccc";
    }
    aSpan[index].style.backgroundColor = "#45c17c";
}

var eleList = ["list1", "list3"];
var eleAct = ["prePic", "nextPic"];

oImgbox.addEventListener("click", function (ev) {
    ev = ev || window.event; //兼容处理
    var ele = ev.target.parentNode;
    var eleName = ele.classList[0];

    if (eleList.indexOf(eleName) === -1) {
        return;
    }

    // switch(ele.getAttribute("class")) {
    //     case "list1":
    //         prePic();
    //         break;
    //     case "list3":
    //         nextPic();
    //         break;
    // }

    window[eleAct[eleList.indexOf(eleName)]]();

})