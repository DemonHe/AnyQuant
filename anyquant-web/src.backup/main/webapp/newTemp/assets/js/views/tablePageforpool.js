/**
 * Created by demon on 2016/6/16.
 */
function pageFunc(page){

    $.getJSON('page_content.jsp',{name:page},function(data){


        document.getElementById("1").className = "page-item";
        document.getElementById("2").className = "page-item";
        document.getElementById("3").className = "page-item";
        document.getElementById("4").className = "page-item";
        document.getElementById("5").className = "page-item";
        document.getElementById("6").className = "page-item";
//		document.getElementById("7").className = "page-item";
//		document.getElementById("8").className = "page-item";
        document.getElementById(page).className = "page-item active";
        var up="<i class=\"fa fa-arrow-up\" style=\"color: red;\"></i>";
        var down="<i class=\"fa fa-arrow-down\" style=\"color: green;\"></i>";
        var add = "<i class=\"fa fa-plus-square-o\"></i>";
        var i=1;
        var row=17;
        //alert(row);
        //alert(data.length/4);
        for (i=1;i<=100;i++){
            var id=1000+i+"";
            if ((i-1)*4<data.length){
                if (data[3+(i-1)*4]>=0){
                    document.getElementById(id).innerHTML="<td>"+
                        data[0+(i-1)*4]+"</td>"+"<td>"+data[1+(i-1)*4]+"</td>"+"<td>"+data[2+(i-1)*4]+"</td>"
                        +"<td>"+up+"</td>";

                }
                else {
                    document.getElementById(id).innerHTML="<td>"+
                        data[0+(i-1)*4]+"</td>"+"<td>"+data[1+(i-1)*4]+"</td>"+"<td>"+data[2+(i-1)*4]+"</td>"
                        +"<td>"+down+"</td>";
                    //alert("bb");
                }
                if(data[0+(i-1)*4]!='sh000300'){
                    document.getElementById(id).innerHTML+="<td>"+add+"</td>";
                    var addfun = "addstock('"+data[0+(i-1)*4]+"','"+data[1+(i-1)*4]+"')";
                    document.getElementById(id).children[4].setAttribute("onclick",addfun);
                    document.getElementById(id).draggable = true;
                    document.getElementById(id).setAttribute("ondragstart","drag(event)");
                }
                //alert(0+(i-1)*4);
                document.getElementById(id).style.display="table-row";

                var jqu="tablefunc('"+data[0+(i-1)*4]+"')";
                var jquid="#"+id;

                $(jquid).attr({

                    "onclick" : jqu

                });

            }else {
                document.getElementById(id).innerHTML="<td>"+
                    " "+"</td>"+"<td>"+" "+"</td>"+"<td>"+" "+"</td>"+"<td>"+" "+"</td>";
                document.getElementById(id).style.display="none";
            }


        }
    });
}




function returnFirst(){
    $("#input1-group2").val("");
    $("#ul").show();
    pageFunc(1);
}
