$(document).ready(function() { 

    
    $(".colortoswap").change(function(){
        if($(".redcts").val() != "" && $(".greencts").val() != "" && $(".bluects").val() != ""){
            $( "*" ).each(function( index ) {
            //check each element
              bg = $( this ).css( "background-color" );
              rgba = bg.substring(0,4);
                
              if(rgba == 'rgba'){
              str = "rgba(" + $(".redcts").val() + ", " + $(".greencts").val() + ", " + $(".bluects").val() + ", 1)";
              } else { //rgba rgb split
              str = "rgb(" + $(".redcts").val() + ", " + $(".greencts").val() + ", " + $(".bluects").val() + ")";                   }
                
                if(bg == str){
                    $(this).data("colorswap", 1);
                } else {
                    $(this).data("colorswap", 0);
                }

              //color
              color = $( this ).css( "color" );
              rgba = color.substring(0,4);
                
              if(rgba == 'rgba'){
              str = "rgba(" + $(".redcts").val() + ", " + $(".greencts").val() + ", " + $(".bluects").val() + ", 1)";
              } else { //rgba rgb split
              str = "rgb(" + $(".redcts").val() + ", " + $(".greencts").val() + ", " + $(".bluects").val() + ")";                   }
                
                if(color == str){
                    $(this).data("colorswap_color", 1);
                } else {
                    $(this).data("colorswap_color", 0);
                }
                
            });
        }
        
    });
    
    $(".colortoswapto").change(function(){
        if($(".redctst").val() != "" && $(".greenctst").val() != "" && $(".bluectst").val() != ""){
            $( "*" ).each(function( index ) {
                if($(this).data("colorswap") == 1){
                    newcolor = "rgba(" + $(".redctst").val() + ", " + $(".greenctst").val() + ", " + $(".bluectst").val() + ", 1)";
                    $(this).css("background-color", newcolor);
                    console.log(newcolor);
                }
                
                if($(this).data("colorswap_color") == 1){
                    newcolor = "rgba(" + $(".redctst").val() + ", " + $(".greenctst").val() + ", " + $(".bluectst").val() + ", 1)";
                    $(this).css("color", newcolor);
                    console.log(newcolor);
                }
            });
        }
        
    });

});