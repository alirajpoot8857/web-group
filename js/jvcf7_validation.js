jQuery(document).ready(function(){jQuery(".wpcf7-validates-as-required").addClass("required"),jQuery(".wpcf7-email").addClass("email"),jQuery(".wpcf7-checkbox.wpcf7-validates-as-required input").addClass("required"),jQuery(".wpcf7-radio input").addClass("required"),jQuery("form.wpcf7-form").each(function(){jQuery(this).addClass(scriptData.jvcf7_default_settings.jvcf7_invalid_field_design),jQuery(this).addClass(scriptData.jvcf7_default_settings.jvcf7_show_label_error),jQuery(this).validate({ignore:":hidden input, :hidden textarea, :hidden select",onfocusout:function(e){this.element(e)},onfocusout:function(e){this.element(e)},errorPlacement:function(e,t){t.is(":checkbox")||t.is(":radio")?e.insertAfter(jQuery(t).parent().parent().parent()):e.insertAfter(t)}})}),jQuery(".wpcf7-form-control.wpcf7-submit").click(function(e){$jvcfpValidation=jQuery(this).parents("form"),jQuery($jvcfpValidation).valid()||(e.preventDefault(),$topErrorPosition=parseInt($topErrorPosition=jQuery(".wpcf7-form-control.error").offset().top)-100,jQuery("body, html").animate({scrollTop:$topErrorPosition},"normal"))})}),jQuery.validator.addMethod("email",function(e,t){return this.optional(t)||/^[+\w-\.]+@([\w-]+\.)+[\w-]{2,10}$/i.test(e)},"Email invalide"),jQuery.validator.addMethod("letters_space",function(e,t){return this.optional(t)||/^[a-zA-Z ]*$/.test(e)},"Letters and space only");