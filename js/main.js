
$(document).ready(function () {

    //MODAL

    function closeModal() {
        $(".modal").removeClass("show")
    }

    var $modalTrigger = $(".open-modal"),
        $modalClose = $(".close-modal");
    $(document).on("click", ".open-modal", function (e) {
        e.stopPropagation();
        var t = $(this).attr("target");
        $(t).addClass("show")
    }), $(document).on("click", ".close-modal", function (e) {
        closeModal()
    }), $(document).on("click", ".modal-content", function (e) {
        e.stopPropagation()
    }), $(document).on("click", ".modal", function (e) {
        closeModal()
    });


});