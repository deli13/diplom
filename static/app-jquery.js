/**
 * Добавление через innerHTML
 * @param count
 * @returns {string}
 */
function appendString(count){
    var str="";
    for (var i=1; i<=count;i++){
        str=str+"<tr><td>"+i+"</td><td><input type=\"text\" name=\"text\" class=\"form-control\" value=\"text\"/></td></tr>";
    }
    return $(str);
}
var $table=$("#app table tbody");
/**
 * Событие клика на кнопку
 */
$("button[data-col]").on("click",function () {
    var data=$(this).data("col");
    $table.empty();
    $table.append(appendString(data));
})
$("body").on("input","input[name=text]",function () {
    var $edit=$(this).val();;
    $("input[name=text]").val($edit);
})