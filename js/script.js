$(document).ready(function () {

    let cartCount = 0;

    function updateCount() {
        $("#count").text(cartCount);
    }
    const deleteBtn = "<span class='del'>Remove</span>";

    $(".add").click(function () {
        
        updateCount();
        cartCount++;
        updateCount();

        if (cartCount > 0) {
            $("#empty").hide();
        }

        let itemName = $(this).attr("name");
        let itemID = $(this).attr("id");

        let cartItem = "<li class='cartItem' name='" + itemID + "'>"
            + itemName + " " + deleteBtn + "</li>";

        $("#cart ul").append(cartItem);
        $(this).hide();
    });

    $("#cart").on("click", ".del", function () {
        let parent = $(this).parent();
        let itemID = parent.attr("name");

        parent.remove();
        cartCount--;
        updateCount();

        if (cartCount === 0) {
            $("#empty").show();
        }

        $("#" + itemID).show();
    });

    $(".rating img").click(function () {
        $(this).siblings("img").attr("src", "images/staroff.gif");
        $(this).attr("src", "images/staron.gif");
        $(this).prevAll("img").attr("src", "images/staron.gif");
    });

});