var modal = document.getElementById('myModal');

// 获取图片插入到弹窗 ，使用 "alt" 属性作为文本部分的内容
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function() {
   
   
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// 获取 <span>标签里面的元素，也就是那个叉号，设置关闭按钮，数组形式的元素，第一个就是[0]
var span = document.getElementsByClassName("close")[0];

// 当点击叉号的时候, 关闭弹窗
span.onclick = function() {
   
   
    modal.style.display = "none";
}
