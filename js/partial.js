jQuery(document).ready(function($){$('form').on('change',function(event){var data=$(this).serialize();$.ajax({url:'partial.php',type:'post',data:data,success:function(response){console.log(response);}}).done(function(){console.log("success");}).fail(function(){console.log("error");}).always(function(){console.log("complete");});});});