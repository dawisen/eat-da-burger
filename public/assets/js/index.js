// url: /burger/ + id
$(document).ready(() => {
  $(".create-form").submit((event) => {
    console.log("hello world");
    event.preventDefault();
    var newBurger = {
      burger_name: $("#burger").val().trim(),
      devoured: $("[name=burgState]:checked").val().trim(),
    };
    console.log(newBurger);

    $.post("/api/burgers", newBurger).done(() => {
      location.reload();
    });
  });

  $(".delete-burger").click((event) => {
    var burgerName = $(event.target).parent().attr("class");
    var burgerId = $(event.target).parent().attr("id");
    event.preventDefault();
    console.log("deleting " + `${burgerName}` + `${burgerId}`);
    $.ajax({
      type: "DELETE",
      url: `/api/burgers/${burgerId}`,
      // On successful call
      success: function (response) {
        //reload the page with updated data
        console.log("BURGER DELETED!");
        location.reload();
      },
    });
  });

  $(".delete-burger").click((event) => {
    var burgerName = $(event.target).parent().attr("class");
    var burgerId = $(event.target).parent().attr("id");
    event.preventDefault();
    console.log("deleting " + `${burgerName}` + `${burgerId}`);
    $.ajax({
      type: "DELETE",
      url: `/api/burgers/${burgerId}`,
      // On successful call
      success: function (response) {
        //reload the page with updated data
        console.log("BURGER DELETED!");
        location.reload();
      },
    });
  });
});
