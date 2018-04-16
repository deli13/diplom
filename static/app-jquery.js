/**
 * Добавление через innerHTML
 * @param count
 * @returns {string}
 */
function appendString(count){
    var $tr=$("<tr></tr>");
    var $td1=$("<td></td>");
    $td1.text(count);
    var $input=$("<input class='form-control' name='text' value='text'/>");
    $td2=$("<td></td>");
    $tr.append($td1);
    $tr.append($td2);
    $td2.append($input);
    return $tr;
}
var $table=$("#app table tbody");
/**
 * Событие клика на кнопку
 */
$("button[data-col]").on("click",function () {
    var data=$(this).data("col");
    $table.empty();
    for (var k=1; k<=data;k++){
        $table.append(appendString(k));
    }
    // $table.append(appendString(data));
})
$("body").on("input","input[name=text]",function () {
    var $edit=$(this).val();;
    $("input[name=text]").val($edit);
})