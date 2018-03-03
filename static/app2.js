function appendString(count){
    var str="";
    for (var i=1; i<=count;i++){
        str=str+"<tr><td>"+i+"</td><td>text</td></tr>";
    }
    return str;
}
var $table=$("#app table tbody");
$("#append10").on("click",function(){
    $table.empty();
    $table.append(appendString(10));
});
$("#append50").on("click",function(){
    $table.empty();
    $table.append(appendString(50));
});
$("#append100").on("click",function(){
    $table.empty();
    $table.append(appendString(100));
});
$("#append500").on("click",function(){
    $table.empty();
    $table.append(appendString(500));
});
$("#append1000").on("click",function(){
    $table.empty();
    $table.append(appendString(1000));
});