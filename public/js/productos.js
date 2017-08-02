"use strict"
$(document).ready(function(){
  $(".img-ati").each(function(index,val) {
    let url = "url(../public/"
    url += $(val).attr("data-src") + ")"
    $(val).css("background-image",url);
 });
})
