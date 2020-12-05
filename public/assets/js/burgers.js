// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(() => {
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
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            () => {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    // this handler is so the user can press enter instead of just clicking the Add Burger button. reference: https://stackoverflow.com/questions/699065/submitting-a-form-on-enter-with-jquery
    $(".create-form").keypress(enter => {
        if (enter.which === 13) {
            $(".create-form").submit();
            return false;
        }
    })
});