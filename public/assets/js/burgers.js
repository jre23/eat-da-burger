// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(() => {
    $(".devour").on("click", event => {
        let id = event.target.getAttribute("data-id");
        let newDevouredState = {
            devoured: 1
        };
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            () => {
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