// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(() => {
    $(".devour").on("click", () => {
        let id = $(this).data("id");
        let newDevouredState = {
            devoured: 1
        };
        console.log(id);
        console.log(newDevouredState);

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            () => {
                console.log("changed burger boolean to ", devoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", event => {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        let newBurger = {
            burger_name: $("#burg").val().trim(),
        };
        console.log(newBurger);
        console.log("test new burger");
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            () => {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});