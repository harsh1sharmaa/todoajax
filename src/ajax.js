$(document).ready(function () {

    // jQuery methods go here...
    // console.log("hello");
    // let i=0;
    // if(i==0){

    $.ajax({
        method: "POST",
        url: "ajax.php",
        data: { name: $("#tskid").val(), action: "start" },
        dataType: "JSON"
    }).done(function (data) {
        console.log(data);
        disply(data)
        disply2(data)
    });
    //     i=1;

    // }

    $("#btn").show();
    $("#updatebtn").hide();

    // $("#btn").click(function (e) {
    //     e.preventDefault();


    //     $.ajax({
    //         method: "POST",
    //         url: "ajax.php",
    //         data: { name: $("#tskid").val(), action: "add" },
    //         dataType: "JSON"
    //     }).done(function (data) {
    //         console.log(data);
    //         disply(data)
    //     });

    // })
    // $("#updatebtn").click(function (e) {
    //     e.preventDefault();




    //     $.ajax({
    //         method: "POST",
    //         url: "ajax.php",
    //         data: { name: $("#tskid").val(), action: "update" ,id:$("#hidenid").val() },
    //         dataType: "JSON"
    //     }).done(function (data) {
    //         console.log(data);
    //         disply(data)

    //     $("#btn").show();
    //     $("#updatebtn").hide();
    //     });

    // })

    // $("#alllist").on("click", ".editbtn", function () {

    //     $("#btn").hide();
    //     $("#updatebtn").show();


    //     let id = $(this).data('pid');
    //     let txt = $(this).data('text');
    //     $("#tskid").val(txt);
    //     $("#hidenid").val(id);

    //     // $.ajax({
    //     //     method: "POST",
    //     //     url: "ajax.php",
    //     //     data: { name: txt, action: "edit" },
    //     //     dataType: "JSON"
    //     // }).done(function (data) {
    //     //     console.log(data.todo);
    //     //     disply(data.todo)
    //     // });
    //     // console.log(id);
    // })


    // $("#alllist").on("click",".delbtn" , function(){

    //     let pid = $(this).data('pid');
    //     let txt=$(this).data('text');
    //     // $("#tskid").val(txt);

    //     $.ajax({
    //         method: "POST",
    //         url: "ajax.php",
    //         data: { id:pid, action: "delete" },
    //         dataType: "JSON"
    //     }).done(function (data) {
    //         console.log("after delete"+data);
    //         console.log(data);
    //         disply(data)
    //         console.log(pid);
    //     });

    // })

    // function disply(data) {
    //     // $("#alllist").val("hello");
    //     // var arrItems = [];
    //     // arrItems = JSON.parse(data);
    //     console.log("in dis")



    //     let list = "<ul>";
    //     for (let i = 0; i < data.length; i++) {
    //         let obj = data[i];
    //         console.log(i);

    //         if (obj['check'] == "f") {


    //             list+= "<li>"+ obj['name']+ "<a href=# data-pid=" + obj['id'] + " data-text=" + obj['name'] + " class=editbtn >edit</a><a href=# data-pid=" + obj['id'] + " data-text=" + obj['name'] +"  class=delbtn >delete</a></li>"


    //         }
    //     }
    //     // console.log(list)
    //     list += "</ul>";
    //     // console.log(list)
    //     $("#alllist").html(list);
    //     $("#tskid").val("");




    // }

});

$("#btn").click(function (e) {
    e.preventDefault();


    $.ajax({
        method: "POST",
        url: "ajax.php",
        data: { name: $("#tskid").val(), action: "add" },
        dataType: "JSON"
    }).done(function (data) {
        console.log(data);
        disply(data)
    });

})
$("#updatebtn").click(function (e) {
    e.preventDefault();




    $.ajax({
        method: "POST",
        url: "ajax.php",
        data: { name: $("#tskid").val(), action: "update", id: $("#hidenid").val() },
        dataType: "JSON"
    }).done(function (data) {
        console.log(data);
        disply(data)

        $("#btn").show();
        $("#updatebtn").hide();
    });

})

$("#alllist").on("click", ".editbtn", function () {

    $("#btn").hide();
    $("#updatebtn").show();


    let id = $(this).data('pid');
    let txt = $(this).data('text');
    $("#tskid").val(txt);
    $("#hidenid").val(id);

    // $.ajax({
    //     method: "POST",
    //     url: "ajax.php",
    //     data: { name: txt, action: "edit" },
    //     dataType: "JSON"
    // }).done(function (data) {
    //     console.log(data.todo);
    //     disply(data.todo)
    // });
    // console.log(id);
})


$("#alllist").on("click", ".check", function () {

    let pid = $(this).val();
    // let txt = $(this).data('text');
    // // $("#tskid").val(txt);

    $.ajax({
        method: "POST",
        url: "ajax.php",
        data: { id: pid, action: "check" },
        dataType: "JSON"
    }).done(function (data) {
        console.log("after delete" + data);
        console.log(data);
        disply(data)
        disply2(data)
        console.log(pid);
    });
    console.log(pid);

})


$("#alllist").on("click", ".delbtn", function () {

    let pid = $(this).data('pid');
    let txt = $(this).data('text');
    // $("#tskid").val(txt);

    $.ajax({
        method: "POST",
        url: "ajax.php",
        data: { id: pid, action: "delete" },
        dataType: "JSON"
    }).done(function (data) {
        console.log("after delete" + data);
        console.log(data);
        disply(data)
        console.log(pid);
    });

})

function disply(data) {
    // $("#alllist").val("hello");
    // var arrItems = [];
    // arrItems = JSON.parse(data);
    console.log("in dis")



    let list = "<ul>";
    for (let i = 0; i < data.length; i++) {
        let obj = data[i];
        console.log(i);

        if (obj['check'] == "f") {


            list += "<li><input class=check value=" + obj['id'] + " type=checkbox >" + obj['name'] + "<a href=# data-pid=" + obj['id'] + " data-text=" + obj['name'] + " class=editbtn >edit</a><a href=# data-pid=" + obj['id'] + " data-text=" + obj['name'] + "  class=delbtn >delete</a></li>"


        }
    }
    // console.log(list)
    list += "</ul>";
    // console.log(list)
    $("#alllist").html(list);
    $("#tskid").val("");




}

function disply2(data) {
    // $("#alllist").val("hello");
    // var arrItems = [];
    // arrItems = JSON.parse(data);
    console.log("in dis")



    let list = "<ul>";
    for (let i = 0; i < data.length; i++) {
        let obj = data[i];
        console.log(i);

        if (obj['check'] == "t") {


            list += "<li><input class=check value=" + obj['id'] + " type=checkbox >" + obj['name'] + "<a href=# data-pid=" + obj['id'] + " data-text=" + obj['name'] + " class=editbtn >edit</a><a href=# data-pid=" + obj['id'] + " data-text=" + obj['name'] + "  class=delbtn >delete</a></li>"


        }
    }
    // console.log(list)
    list += "</ul>";
    // console.log(list)
    $("#completed").html(list);
    $("#tskid").val("");




}