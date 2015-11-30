$(document).ready(function() { 

    $(".rgb").click(function(){
        $(".rgb").addClass("chosen");
        $(".hex").removeClass("chosen");
        $(".rgbfield").show();
        $(".hexfield").hide();
    })
                    
    $(".hex").click(function(){
        $(".hex").addClass("chosen");
        $(".rgb").removeClass("chosen");
        $(".rgbfield").hide();
        $(".hexfield").show();
    })

    
    $(".colortoswap").change(function(){
        if($(this).hasClass("hexfield")){
            hex = $(this).val().replace('#','');
            redval = parseInt(hex.substring(0,2), 16);
            greenval = parseInt(hex.substring(2,4), 16);
            blueval = parseInt(hex.substring(4,6), 16);  
            console.log(redval);
        } else {
            redval = $(".redcts").val();
            greenval = $(".greencts").val();
            blueval = $(".bluects").val();
        }

        if(redval != "" && greenval != "" && blueval != ""){
            $( "*" ).each(function( index ) {
            //check each element
              bg = $( this ).css( "background-color" );
              rgba = bg.substring(0,4);
                
              if(rgba == 'rgba'){
              str = "rgba(" + redval + ", " + greenval + ", " + blueval + ", 1)";
              } else { //rgba rgb split
              str = "rgb(" + redval + ", " + greenval + ", " + blueval + ")";                   }
                
                if(bg == str){
                    $(this).data("colorswap", 1);
                } else {
                    $(this).data("colorswap", 0);
                }

              //color
              color = $( this ).css( "color" );
              rgba = color.substring(0,4);
                
              if(rgba == 'rgba'){
              str = "rgba(" + redval + ", " + greenval + ", " + blueval + ", 1)";
              } else { //rgba rgb split
              str = "rgb(" + redval + ", " + greenval + ", " + blueval + ")";                   }
                
                if(color == str){
                    $(this).data("colorswap_color", 1);
                } else {
                    $(this).data("colorswap_color", 0);
                }
                
              //topborder-color
              border = $( this ).css( "border-top-color" );
              rgba = border.substring(0,4);
                
              if(rgba == 'rgba'){
              str = "rgba(" + redval + ", " + greenval + ", " + blueval + ", 1)";
              } else { //rgba rgb split
              str = "rgb(" + redval + ", " + greenval + ", " + blueval + ")";                   }
                
                if(border == str){
                    $(this).data("colorswap_border_top", 1);
                } else {
                    $(this).data("colorswap_border_top", 0);
                }
                
              border = $( this ).css( "border-bottom-color" );
              rgba = border.substring(0,4);
                
              if(rgba == 'rgba'){
              str = "rgba(" + redval + ", " + greenval + ", " + blueval + ", 1)";
              } else { //rgba rgb split
              str = "rgb(" + redval + ", " + greenval + ", " + blueval + ")";                   }
                
                if(border == str){
                    $(this).data("colorswap_border_bottom", 1);
                } else {
                    $(this).data("colorswap_border_bottom", 0);
                }
                
              border = $( this ).css( "border-right-color" );
              rgba = border.substring(0,4);
                
              if(rgba == 'rgba'){
              str = "rgba(" + redval + ", " + greenval + ", " + blueval + ", 1)";
              } else { //rgba rgb split
              str = "rgb(" + redval + ", " + greenval + ", " + blueval + ")";                   }
                
                if(border == str){
                    $(this).data("colorswap_border_right", 1);
                } else {
                    $(this).data("colorswap_border_right", 0);
                }
                
              border = $( this ).css( "border-left-color" );
              rgba = border.substring(0,4);
                
              if(rgba == 'rgba'){
              str = "rgba(" + redval + ", " + greenval + ", " + blueval + ", 1)";
              } else { //rgba rgb split
              str = "rgb(" + redval + ", " + greenval + ", " + blueval + ")";                   }

                
                if(border == str){
                    $(this).data("colorswap_border_left", 1);
                } else {
                    $(this).data("colorswap_border_left", 0);
                }
                
            });
        }
        
    });
    
    $(".colortoswapto").change(function(){
        if($(this).hasClass("hexfield")){
            hex = $(this).val().replace('#','');
            redvalt = parseInt(hex.substring(0,2), 16);
            greenvalt = parseInt(hex.substring(2,4), 16);
            bluevalt = parseInt(hex.substring(4,6), 16);            
        } else {
            redvalt = $(".redctst").val();
            greenvalt = $(".greenctst").val();
            bluevalt = $(".bluectst").val();
        }

        if(redvalt != "" && greenvalt != "" && bluevalt != ""){
            $( "*" ).each(function( index ) {
                
                newcolor = "rgba(" + redvalt + ", " + greenvalt + ", " + bluevalt + ", 1)";
                
                if($(this).data("colorswap") == 1){
                    $(this).css("background-color", newcolor);
                }
                
                if($(this).data("colorswap_color") == 1){
                    $(this).css("color", newcolor);
                }
                
                if($(this).data("colorswap_border_top") == 1){
                    $(this).css("border-top-color", newcolor);
                }
                
                if($(this).data("colorswap_border_bottom") == 1){
                    $(this).css("border-bottom-color", newcolor);
                }
                
                if($(this).data("colorswap_border_left") == 1){
                    $(this).css("border-left-color", newcolor);
                }
                
                if($(this).data("colorswap_border_right") == 1){
                    $(this).css("border-right-color", newcolor);
                }
            });
        }
        
    });

});