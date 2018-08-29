$(document).ready(function(){
    var count = 0; 
    var cont;
    $(".input").change(function(){
         var one = document.createElement("p");
         one.className = "li";
         var two = document.createElement("label");
        two.className = "check_box";
         var three = document.createElement("p");
        var delet = document.createElement("input");
        delet.type= "checkbox";
        delet.className = "check";
        delet.id = "gdRows_ctl02_chkDelete";
         var forf = document.createElement("span");
         $(forf).text("X");
         forf.className = "hvr-bounce-in";
         three.className = "the";
         $(one).append(two, three, forf);
         var asi = $(".input").val();
         $(three).append(asi);
         $(one).appendTo("#per");
         $(".del").css({display:"block"});
         $(two).append(delet);
         $(".input").val("");
         
         $(".count").text(++count + " list Item");
         $(".hvr-bounce-in").click(function(){
           
            
                $(".count").text($(".li").length-1 + " list Item");
               $(this).parent().slideUp(1000, function(){
                $(this).remove();
                 if($(".li").length == 0){
                     setTimeout(function(){
                        window.location.reload(); 
                     }, 1);
                 }
                });
        });  
        
        $('#per').find('input:checkbox[id$="chkDelete"]').click(function() {
            var isChecked = $(this).prop("checked");
            var $selectedRow = $(this).parent(".check_box").parent(".li");
            var selectedIndex = $selectedRow[0].rowIndex;
            if (isChecked) {
                $(".jnjel").show(); $(this).parent().parent().css({opacity:"0.4"});
            }
            else {
                $(this).parent().parent().css({opacity:"1"});
            }
        });
        
        
        $(".jnjel").click(function(){
            $("#selectall").removeAttr("checked", "checked");
            
            if ($(".check").is(":checked")) {       $(":checked").parent().parent().slideUp(1000, function(){
                $(this).remove();
               var count_del = $(this).length;
                 $(".count").text($(".li").length-count_del+1 + " list Item");
                 if($(".li").length == 0){
                     setTimeout(function(){
                        window.location.reload(); 
                     }, 1);
                 }
                });
            }    
        });
        
        
        $(".check_box").click(function(){
           $(this).children(".check").show();
            if($(this).children(".check").is(":checked")){
             $(this).children(".check").attr("checked", "checked");
            
            }
        });
        
         $("#selectall").click(function() {
             
             $(".check").css({display:"block"});
             $(".check").prop("checked", $("#selectall").prop("checked"));
             if($(".check").is(":checked")){
                $(".li").css({opacity:"0.4"});
                $(".jnjel").show();
             }
             else{
                $(".li").css({opacity:"1"});
             }
        })
        
        
        $(".commpact").click(function(){
            $("#per").slideUp(1000); 
        });
        $(".active").click(function(){
            $("#per").slideDown(1000); 
        });
    }); 
     
    
 });

