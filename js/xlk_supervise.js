var xlk_a1 = document.getElementById('xlk_a1');
var xlk_a2 = document.getElementById('xlk_a2');
var lb1 = document.getElementById('lb1')
var inp1 = document.getElementById('inp1')
var lb2 = document.getElementById('lb2')
var inp2 = document.getElementById('inp2')
var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var kh_p = document.getElementById('kh_p');
var inquire_form1 = document.getElementById('inquire_form1');
var inquire_form2 = document.getElementById('inquire_form2');


xlk_a2.onclick = function() {
    xlk_a1.style.background = '#fff';
    xlk_a1.style.color = '#00a862';
    xlk_a2.style.background = '#00a862';
    xlk_a2.style.color = '#fff';
    kh_p.innerHTML = '请输入你的星礼卡卡号和激活小票上的销售单号查询星礼卡余额以及交易记录';
    lb1.innerHTML = '卡号';
    lb2.innerHTML = '销售单号';
    p2.innerHTML = '<span> × </span>此栏不可为空'
    p1.style.display = 'none';
    p2.style.display = 'none';
    lb1.style.color = '#9E9E9E';
    lb2.style.color = '#9E9E9E';
    inp1.value = '';
    inp2.value = '';
}
xlk_a1.onclick = function() {
    xlk_a1.style.background = '#00a862';
    xlk_a1.style.color = '#fff';
    xlk_a2.style.background = '#fff';
    xlk_a2.style.color = '#00a862';
    kh_p.innerHTML = '请输入你的星礼卡卡号和密码查询星礼卡余额以及交易记录';
    lb2.innerHTML = '输入密码';
    p2.innerHTML = '<span> × </span>请输入6位PIN密码。您可以在卡片背面刮开涂层获得密码'
    p1.style.display = 'none';
    p2.style.display = 'none';
    lb1.style.color = '#9E9E9E';
    lb2.style.color = '#9E9E9E';
    inp1.value = '';
    inp2.value = '';
}


var inp1Reg = /^(\d{16}|\d{19})$/;

function checkInp1() {
    var i1Val = inp1.value;
    return inp1Reg.test(i1Val);
}

inp1.onfocus = function() {
    animate(lb1, -10 + 'px', 10);
    lb1.style.color = '#9E9E9E';
    inp1.style.borderBottom = '1px solid #00A862';

}

inp1.onblur = function() {
    inp1.style.borderBottom = '1px solid #E0E0E0';
    if (checkInp1()) {
        p1.style.display = 'none';
        lb1.style.color = '#00A862';
        lb1.style.top = -10 + 'px';
    } else if (inp1.value == '') {
        animate(lb1, 10 + 'px', 10)
        p1.style.display = 'block';
        lb1.style.color = '#E75D54';

    } else {
        p1.style.display = 'block';
        lb1.style.color = '#E75D54';

    }
}



var inp2Reg = /^\d{6}$/;

function checkInp2() {
    var i1Va2 = inp2.value;
    return inp2Reg.test(i1Va2);
}

inp2.onfocus = function() {
    animate(lb2, -10 + 'px', 10);
    lb2.style.color = '#9E9E9E';
    inp2.style.borderBottom = '1px solid #00A862';

}

inp2.onblur = function() {
    inp2.style.borderBottom = '1px solid #E0E0E0';
    if (checkInp2()) {
        p2.style.display = 'none';
        lb2.style.color = '#00A862';
        lb2.style.top = -10 + 'px';

    } else if (inp2.value == '') {
        animate(lb2, 10 + 'px', 10)
        p2.style.display = 'block';
        lb2.style.color = '#E75D54';

    } else {
        p2.style.display = 'block';
        lb2.style.color = '#E75D54';
    }

}




var timer = null;

function animate(ele, target, speedTime) {
    clearInterval(timer);
    timer = setInterval(function() {
        var speed = 1;
        if (ele.style.top = target) {
            clearInterval(timer);
        } else {
            ele.style.top = offsetTop + speed + 'px';
        }
    }, speedTime);
}