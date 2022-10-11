$(document).ready(function(){
  $('.Hide').on('click', function() {
    location.reload();
  });
    $('.Click').one(('click'),function(){
      feet = $("#feet").val();
        cm = $('#cm').val();
      mile= $('#miles').val();
        km= $('#km').val();
        meter = $('#meter').val();
        if(mile === "" && km === ""&& cm === ""&& feet === ""){
          $('#miles').val(  meter * 0.00062137 )
          $('#km').val(  meter /1000 )
          $('#cm').val( meter * 100  )
          $('#feet').val( meter* 3.2808  )
         }
          else if(mile === "" && km === ""&& cm === ""&& meter === ""){
          $('#miles').val( feet * 0.62137 )
          $('#km').val( feet / 3280.8)
          $('#cm').val( feet * 100000 )
          $('#meter').val( feet /3.2808 )}
          else if(mile === "" && meter === ""&& cm === ""&& feet === ""){
          $('#miles').val( km * 0.62137 )
          $('#meter').val( km *1000  )
          $('#cm').val( km * 10000  )
          $('#feet').val(km * 3280.8  )}
          else if(mile === "" && meter === ""&& km === ""&& feet === ""){
            $('#miles').val( cm * 0.0000062137   )
            $('#meter').val( cm/100 )
            $('#km').val(  cm / 100000  )
            $('#feet').val(  cm* 0.32808  )
          }
          else if(feet === "" && meter === ""&& km === ""&& cm === ""){
            $('#feet').val( mile/ 0.62137   )
            $('#meter').val( mile/0.00062137 )
            $('#km').val(  mile/ 0.62137  )
            $('#cm').val(  mile/ 0.32808  )
          }
         



        

});
})



