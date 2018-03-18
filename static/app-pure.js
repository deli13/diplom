function appendString(count){
    var str="";
    for (var i=1; i<=count;i++){
        str=str+"<tr><td>"+i+"</td><td><input type=\"text\" name=\"text\" class=\"form-control\" value=\"text\"/></td></tr>";
    }
    return str;
}

/**
 * Удаление всех дочерних элементов
 */
Element.prototype.empty=function () {
    this.innerHTML="";
}
var table=document.querySelector("table tbody");
var button=document.querySelectorAll("button[data-col]");
console.log(button);
for(var i=0; i<button.length; i++){
    button[i].addEventListener("click",function () {
        var col=this.dataset.col;
        table.empty();

    })
}