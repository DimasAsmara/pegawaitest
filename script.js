$(document).ready(function () {
    // Tampilkan data saat halaman dimuat
    fetchData();

    // Tangani penambahan data
    $("#addForm").submit(function (event) {
        event.preventDefault();
        addData($("#name").val());
    });

    // Fungsi untuk menampilkan data
    function fetchData() {
        $.ajax({
            type: "GET",
            url: "action.php",
            success: function (response) {
                $("#dataContainer").html(response);
            }
        });
    }

    // Fungsi untuk menambah data
    function addData(name) {
        $.ajax({
            type: "POST",
            url: "action.php",
            data: { name: name },
            success: function () {
                $("#name").val("");
                fetchData();
            }
        });
    }
});
