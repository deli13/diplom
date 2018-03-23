/**
 * Удаление всех дочерних элементов
 * Расширяем прототип
 */
Element.prototype.empty=function () {
   while(this.firstChild){
       this.removeChild(this.firstChild);
   }
};

var table=document.querySelector("table tbody");
var button=document.querySelectorAll("button[data-col]");

/**
 * Обработка нажатия кнопки выбора элемента
 */
for(var i=0; i<button.length; i++){
    button[i].addEventListener("click",function () {
        var col=this.dataset.col;
        var data=document.querySelector("input[name=text]").value;
        table.empty();
        for (var k=1; k<=col;k++){
            table.appendChild(create_row(k,data));
        }
        eventInput();
    })
}

/**
 * Вызов ввода текста
 */
function eventInput(){
    var input=document.querySelectorAll("input[name=text]");
    for (var j=0;j<input.length;j++){
        input[j].addEventListener("input",function () {
            var val=this.value;
            for (var z=0;z<input.length;z++){
                input[z].value=val;
            }
        })
    }
}

/**
 * Добавление строки
 * @param i Номер элемента
 * @param data Значение для input
 * @returns {HTMLTableRowElement}
 */
function create_row(i,data) {
    var tr=document.createElement("tr");
    var td_1=document.createElement("td");
    var td_2=document.createElement("td");
    var input=document.createElement("input");
    td_1.innerHTML=i;
    input.setAttribute("type","text");
    input.setAttribute("name","text");
    input.setAttribute("class","form-control");
    input.setAttribute("value","text");
    input.value=data;
    td_2.appendChild(input);
    tr.appendChild(td_1);
    tr.appendChild(td_2);
    return tr;
}
