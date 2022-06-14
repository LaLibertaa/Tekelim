 <link rel="stylesheet" href="../assets/css/bootstrap.min.css">

    <script src="../assets/js/bootstrap.bundle.min.js"></script>


    <script>
$('.openBtn').on('click',function(){
    $('.modal-body').load('content.html',function(){
        $('#myModal').modal({show:true});
    });
});
</script>