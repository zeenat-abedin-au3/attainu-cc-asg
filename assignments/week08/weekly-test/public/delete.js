$(".delete").on("click", function () {
    var id=$(this).attr("value");
    console.log(id);

    $.ajax({
        url: "/students/student/"+ id,
        type: "delete",
        dataType:"json",
        success: function (data) {
        console.log("success");
        id.hide();
        }
    });
});