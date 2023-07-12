$(document).ready(function(){


    $('.translation__droppable>a').on('click' ,function(e){
        e.preventDefault();
        $(this).closest('.translation__droppable').find('.dropdown__translate').fadeIn(300);
    });

    $('.dropdown__translate ul li a').on('click' ,function(e){
        e.preventDefault();
        if ($(this).find(".check__input input").prop('checked') == true) {
            $(this).closest("li").removeClass("active__check");
            $(this).find(".check__input input").prop('checked' ,false);
        } else {
            $(this).closest("li").addClass("active__check");
            $(this).find(".check__input input").prop('checked' ,true);
        }
    });


    $(".el__glossary").on('click' ,function(e){
        e.preventDefault();
        $(this).closest('.content__glossary').find(".el__glossary").removeClass("glossary__client");
        $(this).addClass("glossary__client");
    });
    $(".elem__memory").on("click" ,function(e){
        e.preventDefault();
        $(this).closest('.memories__list').find(".elem__memory").removeClass("memory__chosen");
        $(this).addClass("memory__chosen");
    });

    $('.switcher__advanced input').on("change" ,function(e){
        e.preventDefault();
        if ($(this).prop("checked") == false) {
            $(".advanced__tab--switcher").css("display" , "none");
            $('.advanced__settings .head__advanced').css("margin-bottom" , "0px");
            $(".advanced__settings .content__advanced").css('display' , 'none');
        } else{
            $(".advanced__tab--switcher").fadeIn(300);
            $(".advanced__settings .head__advanced").css("margin-bottom" , "15px");
            $(".advanced__settings .content__advanced").fadeIn(300);
        }
    });


	$(".add__glossary>a").on("click" ,function(e){
		e.preventDefault();
		$(this).closest('.add__glossary').find(".drop__add").fadeIn(300);
	});
	$(".add__memories>a").on("click" ,function(e){
		e.preventDefault();
		$(this).closest('.add__memories').find(".drop__add").fadeIn(300);
	});
    $('.advanced__tab--switcher ul li a').on('click' ,function(e){
        e.preventDefault();
        $('.elem__advanced').css("display" , "none");
        $('.advanced__tab--switcher').closest(".advanced__tab--switcher").find(".active__advanced").removeClass('active__advanced');
        $(this).closest("li").addClass('active__advanced');
        $(".elem__advanced[data-advanced="+ $(this).attr("data-advanced") +"]").fadeIn(300);
    });

    $('.quality__el .quality__events>a').on('click' ,function(e){
        e.preventDefault();
        $(this).closest(".quality__events").find(".quality__drop").fadeIn(300);
    });

    $(".quality__drop ul li a").on('click' ,function(e){
        e.preventDefault();
         $(this).closest(".quality__el").removeClass("notify__quality");
        $(this).closest(".quality__el").removeClass("ignore__quality");
        $(this).closest(".quality__el").removeClass("error__quality");
        if ($(this).hasClass("ignore__pick")) {
            $(this).closest(".quality__el").addClass("ignore__quality");
        }
        if ($(this).hasClass("notify__pick")) {
            $(this).closest(".quality__el").addClass("notify__quality");
        }
        if ($(this).hasClass("require__pick")) {
            $(this).closest(".quality__el").addClass("error__quality");
        }
         $(this).closest(".quality__events").find("a>p").text($(this).text());
         $(this).closest(".quality__drop").fadeOut(300);
    });


    $('.burger__float').each(function(index,elem){
        if ($(this).attr("data-burger")) {
            $(".float__table--content").append($(this).closest(".menu__burger--float").find(".dropdown__box"));
        }
    });
    $(".burger__float").on("click" ,function(e){
        e.preventDefault();
        if ($(this).attr("data-burger")) {
            // alert( $(".float__table--content").find(".dropdown__box[data-burger="+ $(this).attr("data-burger") +"]").length);
            $(".float__table--content").find(".dropdown__box[data-burger="+ $(this).attr("data-burger") +"]").fadeIn(300);
            $(".float__table--content").find(".dropdown__box[data-burger="+ $(this).attr("data-burger") +"]").css({"top"  : $(this).offset().top + "px" , "left" : $(this).offset().left + "px"});
            $(".float__table--content").find(".dropdown__box[data-burger="+ $(this).attr("data-burger") +"]").css({"top"  : $(this).offset().top + "px" , "left" : $(this).offset().left + "px"});
        }
    });

    $(".elem__droppable--translation .progress__words>p>a").on("click" ,function(e){
        e.preventDefault();
        $(this).closest(".translation__droppable--content").slideUp(300);
        $(this).closest('.translation__progress--container').find(".translation__words--counter").slideDown(300);
    });
    $(".progress__words--select .progress__drop>a").on("click" ,function(e){
        e.preventDefault();
        $(this).closest(".translation__words--counter").css("display" , "none");
        $(this).closest('.translation__progress--container').find(".translation__droppable--content").slideDown(300);
    });

    // $('.small__file--name').each(function(index,elem){
    //     console.log($(elem).closest(".file__table").closest("table").find("tr:first-child").css('width'));
    //     $(elem).css("width" , $(elem).closest(".file__table").closest("table").find("tr:nth-child(1)").find("td:nth-child(1)").css('width'));
    // });


    $(".switcher__service ul li a").on('click' ,function(e){
        e.preventDefault();
        if (!$(this).closest("li").hasClass('curr__service')) {
            $(this).closest("ul").find('.curr__service').removeClass("curr__service");
            $(this).closest("li").addClass("curr__service");
            $(".service__wrp").css("display" ,'none');
            $(".units__container").css("display" , 'none');
            $("." + $(this).attr("data-container")).fadeIn(300);
        }
    });

    $(".selector__matt input").on("change" ,function(){
        if ($(this).prop("checked") == true) {
            $(this).closest('.matt__group').find('.default__matt').fadeIn(300);
            $(this).closest('.matt__group').find('.unit__group').fadeIn(300);
        } else{
            $(this).closest('.matt__group').find('.default__matt').fadeOut(300);
            $(this).closest('.matt__group').find('.unit__group').fadeOut(300);
        }
    });

    $(".table__common .edit__button.edit__roles>a").on('click' ,function(e){
        e.preventDefault();
        $(".modal__wrapper.role__main").fadeIn(300);
        $("body,html").css("overflow-y" , "hidden");
        setTimeout(function(){
            $(".placeholder__modal").fadeOut(300);
        }, 450);
        setTimeout(function(){
            $(".modal__wrapper.role__main>a").css("opacity" , "1");
        }, 200);
        $(".modal__wrapper.role__main").find(".role__inner").css("right" , "0px");
    });





    $(".service__file--picker>a").on("click" ,function(e){
        $(".service__file--picker>input").click();
    });
     $(".service__file--picker>input").on("change" ,function(){
        $(this).closest(".service__file").find('.service__file--loaded').fadeIn(300);
        $(this).closest(".service__file").find(".service__file--loaded .image__loaded>img").attr("src" , window.URL.createObjectURL(this.files[0]));
     });
     $(".service__file--loaded .inner__loaded>a").on("click" ,function(e){
        e.preventDefault();
        $(this).closest(".service__file--loaded").fadeOut(300);
     });
    $('.lang__picker input.checkbox__input').on("change" ,function(e){
        if ($(this).prop("checked") == true) {
            $(this).closest(".lang__picker").find('.elem__advanced--picker').fadeIn(300);
        } else {
            $(this).closest(".lang__picker").find('.elem__advanced--picker').fadeOut(300);            
        }
    });

    $('.future__link a').on("click" ,function(e){
        e.preventDefault();
        $(this).closest(".upload-content__drag-drop__old").css("display" , 'none');
        $(this).closest(".file__row").find(".finish__files").fadeIn(300);
    });

    $(".order__create--element .head__create--controls  .check__input input").on("change" ,function(e){
        e.preventDefault();
        if ($(this).prop("checked") == true) {
            $(this).closest(".order__create--element").find('.future__link').find(".btn-disabled__link").removeClass("btn-disabled__link");
        } else {
             $(this).closest(".order__create--element").find('.future__link').find(".btn-add__link ").removeClass("btn-disabled__link");
        }
    });

         $(".droppable__link>a").on("click" ,function(e){
            e.preventDefault();
            $(this).closest(".droppable__link").toggleClass("current__menu");
            $(this).closest(".droppable__link").find("ul").slideToggle(400);
            $(this).closest(".droppable__link").toggleClass("droppable__active");
        });

      $('.checkbox__number input').on('change' ,function(e){
        if ($(this).prop("checked") == true) {
            $(this).closest(".hover__checkbox--number").addClass("active__job");
        } else {
            $(this).closest(".hover__checkbox--number").removeClass("active__job");
        }
        // var checkCounter = $(this).closest("tr").find(".hover__checkbox--number.active__job").length;
        // if ($(this).closest(".jobs__table").hasClass("projects__table")) {
        //     $(this).closest(".catalog__content-item").find(".controls__projects>p>span").text(checkCounter);
        // }
    });


    if ($(".table__common .status__table--dropdown .status__drop").length) {
        $(".table__common .status__table--dropdown .status__drop").each(function(index,elem){
            $(".float__table--content").append(elem);
        });
    }


    if ($(".table__common .comment__dropdown").length) {
        $(".table__common .comment__dropdown .comment__inner").each(function(index,elem){
            $(".float__table--content").append(elem);
        });
    }


    $(".deadline__table.droppable__hover>p").on("mouseenter" ,function(e){
        e.preventDefault();
        $(".droppable__small[data-drop-small="+ $(this).parent().attr("data-drop-small") +"]").fadeIn(200);
        $(".droppable__small[data-drop-small="+ $(this).parent().attr("data-drop-small") +"]").css({"top"  : $(this).offset().top + "px" , "left" : $(this).offset().left + "px"});
    });

    if ($(window).width() < 1200) {
         $(".deadline__table.droppable__hover>p").on("click" ,function(e){
            e.preventDefault();
            $(".droppable__small[data-drop-small="+ $(this).parent().attr("data-drop-small") +"]").fadeIn(200);
            $(".droppable__small[data-drop-small="+ $(this).parent().attr("data-drop-small") +"]").css({"top"  : $(this).offset().top + "px" , "left" : $(this).offset().left + "px"});
        });   
    }
    $(".deadline__table.droppable__hover>p").on("mouseleave" ,function(e){
        e.preventDefault();
        $(".droppable__small[data-drop-small="+ $(this).parent().attr("data-drop-small") +"]").fadeOut(200);
        $(".droppable__small[data-drop-small="+ $(this).parent().attr("data-drop-small") +"]").css({"top"  : $(this).offset().top + "px" , "left" : $(this).offset().left + "px"});
    });


     if ($(".table__common .deadline__table.droppable__hover").length) {
        $(".table__common .deadline__table.droppable__hover .droppable__small").each(function(index,elem){
            $(".float__table--content").append(elem);
        });
    }




    $('.comment__dropdown>.comment__button').on('click' ,function(e){
        e.preventDefault();
        if (!$(".comment__inner[data-comment="+ $(this).attr("data-comment") +"]").is(":visible")) {
            $(".comment__inner").fadeOut(150);
            $(".comment__button").removeClass("comment__active");
            $(".comment__inner[data-comment="+ $(this).attr("data-comment") +"]").fadeIn(150);
            $(this).addClass("comment__active");
            $(".comment__inner[data-comment="+ $(this).attr("data-comment") +"]").css({"top"  : $(this).offset().top + "px" , "left" : $(this).offset().left + "px"});
        } else{
            $(this).removeClass("comment__active");
            $(".comment__inner[data-comment="+ $(this).attr("data-comment") +"]").fadeOut(150);
        }
        // if ($(this).closest(".comment__dropdown").find(".comment__inner:visible").length == 0) {
        //     $('.comment__dropdown>.comment__button').removeClass("comment__active");
        //     $(".comment__dropdown .comment__inner").fadeOut(150);
        //     $(this).addClass("comment__active");
        //     $(this).closest(".comment__dropdown").find(".comment__inner").fadeIn(150);
        // } else {
        //      $(this).removeClass("comment__active");
        //     $(this).closest(".comment__dropdown").find(".comment__inner").fadeOut(150);
        // }
    });

    $(".comment__inner .reply__comment>input").on('input' ,function(e){
            if ($(this).val().length != 0) {
                $(this).closest(".comment__inner").find(".comment__buttons").css("display" , "grid");
            } else{
                $(this).closest(".comment__inner").find(".comment__buttons").css("display" , "none");
            }
    });


    $(".table__common .status__table--dropdown .main__status--table").on('click' , function(e){
        e.preventDefault();
        if (!$(this).hasClass("filled__status")) {
            if (!$(this).hasClass("active__status")) {
                $(this).addClass("active__status");
                if ($(".status__drop[data-status="+ $(this).attr("data-status")  +"]").is(":visible")) {
                    $(".status__drop[data-status="+ $(this).attr("data-status") +"]").fadeOut(150);
                } else {
                    $(".status__drop[data-status="+ $(this).attr("data-status") +"]").fadeIn(150);
                    $(".status__drop[data-status="+ $(this).attr("data-status") +"]").css({"top"  : $(this).offset().top + "px" , "left" : $(this).offset().left + "px"});
                }
            } else{
                $(this).removeClass("active__status");
                $(".status__drop[data-status="+ $(this).attr("data-status") +"]").fadeOut(150);
            }
    } else {
        if ($(this).hasClass("registrations__status")) {
            $(".registrations__modal").fadeIn(300);
            $('body,html').css("overflow-y" , "hidden");
            setTimeout(function(){
                $(".registrations__modal>a").css("opacity" , "1");
            }, 200);
            $(".registrations__modal .inner__registrations").css("right" , "0px");
            setTimeout(function(){
                $(".placeholder__modal").fadeOut(300);
            }, 450);
        }
    }
    });


    $(".status__picker .elem__status .row-group__item").on("click" ,function(e){
        e.preventDefault();
        $(this).closest(".status__picker").find(".elem__status").removeClass("current__status");
        $(this).closest('.status__picker').find(".elem__status input").prop("checked" ,false);
        $(this).find('input').prop("checked" ,true);
        $(this).closest(".elem__status").addClass("current__status");
        $(this).closest(".status__drop").fadeOut(300);
        var currentText = $(this).find("p").clone();

        $(".main__status--table[data-status="+ $(this).closest(".status__drop").attr("data-status") +"]").removeClass("processing__status , planed__status , registrations__status , finished__status , completed__status");
        $(".main__status--table[data-status="+ $(this).closest(".status__drop").attr("data-status") +"]").addClass($(this).closest('.elem__status').attr("data-status"));
        $(".main__status--table[data-status="+ $(this).closest(".status__drop").attr("data-status") +"]").find("p").remove();
        $(".main__status--table[data-status="+ $(this).closest(".status__drop").attr("data-status") +"]").append(currentText); 
        $(".main__status--table").removeClass("active__status");
    });


    // $('.status__table .main__status--table , .droppable__status .main__status--table').on('click' ,function(e){
    //     e.preventDefault();
    //     if (!$(this).hasClass("filled__status")) {
    //         if (!$(this).hasClass("active__status")) {
    //         $(this).addClass("active__status");
    //         if ($(this).closest(".status__table--dropdown").find(".status__drop:visible").length == 0) {
    //             $(".status__drop").fadeOut(150);
    //         }
    //         $(this).closest(".status__table--dropdown").find(".status__drop").fadeIn(150);
    //     } else{
    //         $(this).removeClass("active__status");
    //         $(this).closest(".status__table--dropdown").find(".status__drop").fadeOut(150);
    //     }
    // } else {
    //     if ($(this).hasClass("registrations__status")) {
    //         $(".registrations__modal").fadeIn(300);
    //         $('body,html').css("overflow-y" , "hidden");
    //         setTimeout(function(){
    //             $(".registrations__modal>a").css("opacity" , "1");
    //         }, 200);
    //         $(".registrations__modal .inner__registrations").css("right" , "0px");
    //         setTimeout(function(){
    //             $(".placeholder__modal").fadeOut(300);
    //         }, 450);
    //     }
    // }
    // });



    

     $(".table__common .time__job--info.due__time").on("click" ,function(e){
        e.preventDefault();
        $(".due__time").removeClass("active__due");
        $(this).addClass("active__due");
        $(".time__job--dropdown[data-time-dropdown="+ $(this).attr("data-time-dropdown") +"]").fadeIn(200);
        $(".time__job--dropdown[data-time-dropdown="+ $(this).attr("data-time-dropdown") +"]").css({"top"  : $(this).offset().top + "px" , "left" : $(this).offset().left + "px"});
    });

    $(".small__drop--dropdown  .select__option").on('click' ,function(e){
        e.preventDefault();
        $(this).closest(".small__drop--dropdown").find(".is-selected").removeClass("is-selected");
        $(this).addClass("is-selected");
        $(this).closest(".select__dropdown").fadeOut(300);
        $("button[data-drop-info="+ $(this).closest(".small__drop--dropdown").attr("data-drop-info") +"]").find("span").text($(this).text());
         $("button[data-drop-info="+ $(this).closest(".small__drop--dropdown").attr("data-drop-info") +"]").parent().find("input").val($(this).attr("data-option"));
    });

    $('.table__common .show__main').on("click" ,function(e){
        e.preventDefault();
        var current = $(this);
        if ($(this).hasClass("active__expandable")) {
            $(this).removeClass("active__expandable");
            if ($(this).find("p").text() == "Hide") {
                $(this).find("p").text("Show");
            }
            $("tr[data-expand="+ $(this).attr("data-expand") +"]").fadeOut(300);
            setTimeout(function(){
                    $("tr[data-expand="+ $(current).attr("data-expand") +"]").find(".placeholder__droppable").fadeIn(300);
            }, 300);
        } else {
            if ($(this).find("p").text() == "Show") {
                $(this).find("p").text("Hide");
            }
            $("tr[data-expand="+ $(this).attr("data-expand") +"]").fadeIn(300);
            setTimeout(function(){
                    $("tr[data-expand="+ $(current).attr("data-expand") +"]").find(".placeholder__droppable").fadeOut(300);
            }, 300);
                $(this).addClass("active__expandable");
        }
    });

    if ($(".table__common .time__job--dropdown").length) {
        $(".table__common .time__job--dropdown").each(function(index,elem){
            $(".float__table--content").append(elem);
        });
    }

    if ($(".table__common .small__drop").length) {
        $(".table__common .small__drop .select__dropdown").each(function(index,elem){
            $(".float__table--content").append(elem);
        });
    }
    $('.table__common .small__drop .select>button').on("click" ,function(e){
        e.preventDefault();
        $(".select__dropdown[data-drop-info="+ $(this).attr("data-drop-info") +"]").fadeIn(200);
        $(".select__dropdown[data-drop-info="+ $(this).attr("data-drop-info") +"]").css({"top"  : $(this).closest('.source__picker').offset().top + "px" , "left" : $(this).closest('.source__picker').offset().left + "px"});
        $(".select__dropdown[data-drop-info="+ $(this).attr("data-drop-info") +"]").css({"top"  : $(this).closest('.source__picker').offset().top + "px" , "left" : $(this).closest('.source__picker').offset().left + "px"});
        $(".select__dropdown[data-drop-info="+ $(this).attr("data-drop-info") +"]").css("width" , $(this).closest('.source__picker').css("width"));
    });

    $(window).on('resize' ,function(){
         if ($(".group__line").length) {
            $('.group__line').each(function(index,elem){
                if ($(".group__tr[data-group="+ $(elem).attr('data-group')+"]").is(":visible")) {
                    $(elem).fadeIn(200);
                    var groupParent = $(".group__tr[data-group="+ $(elem).attr('data-group')+"]");
                    var counterGroup = $(".group__tr[data-group="+ $(elem).attr('data-group')+"]").attr("data-group-counter");
                    var groupHeight = +$(groupParent).css("height").slice(0, -2);
                    var groupChilds = $(groupParent).nextAll().slice(0, counterGroup);
                    var childsHeight = 0;
                    $(groupChilds).each(function(index,elem){
                        childsHeight += +$(elem).css("height").slice(0 , - 2);
                    });
                    groupHeight += +childsHeight;
                    $(elem).css("height" , groupHeight + "px");
                    $(elem).css({"top"  :  $(".group__tr[data-group="+ $(elem).attr('data-group')+"]").offset().top + "px" , "left" :  $(".group__tr[data-group="+ $(elem).attr('data-group')+"]").offset().left + "px"});
                }
                
            });
        }
    });
    if ($(".group__line").length) {
        $('.group__line').each(function(index,elem){
            if ($(".group__tr[data-group="+ $(elem).attr('data-group')+"]").is(":visible")) {
                $(elem).fadeIn(200);
                var groupParent = $(".group__tr[data-group="+ $(elem).attr('data-group')+"]");
                var counterGroup = $(".group__tr[data-group="+ $(elem).attr('data-group')+"]").attr("data-group-counter");
                var groupHeight = +$(groupParent).css("height").slice(0, -2);
                var groupChilds = $(groupParent).nextAll().slice(0, counterGroup);
                var childsHeight = 0;
                $(groupChilds).each(function(index,elem){
                    childsHeight += +$(elem).css("height").slice(0 , - 2);
                });
                groupHeight += +childsHeight;
                $(elem).css("height" , groupHeight + "px");
                $(elem).css({"top"  :  $(".group__tr[data-group="+ $(elem).attr('data-group')+"]").offset().top + "px" , "left" :  $(".group__tr[data-group="+ $(elem).attr('data-group')+"]").offset().left + "px"});
            }
        });
    }

    $(".table__common .opps__status--main").on("mouseenter" ,function(e){
        e.preventDefault();
        $(".status__hint").fadeOut(150);
        $(".status__hint[data-hint="+ $(this).attr("data-hint") +"]").fadeIn(200);
        $(".status__hint[data-hint="+ $(this).attr("data-hint") +"]").css({"top"  : $(this).offset().top + "px" , "left" : $(this).offset().left + "px"});
    });

    $(".table__common .opps__status--main").on("click" ,function(e){
        e.preventDefault();
        $(".status__hint").fadeOut(150);
        $(".status__hint[data-hint="+ $(this).attr("data-hint") +"]").fadeIn(200);
        $(".status__hint[data-hint="+ $(this).attr("data-hint") +"]").css({"top"  : $(this).offset().top + "px" , "left" : $(this).offset().left + "px"});
    });


    $(".table__common .opps__status--main").on("mouseleave" ,function(e){
        e.preventDefault();
        $(".status__hint").fadeOut(150);
    });


    if ($(".table__common .opps__status--main .status__hint").length) {
        $(".table__common .opps__status--main .status__hint").each(function(index,elem){
            $(".float__table--content").append(elem);
        });
    }


    if ($(".table__dropdown .select__dropdown").length) {
        $(".table__dropdown .select__dropdown").each(function(index,elem){
            $(".float__table--content").append(elem);
        });
    }


    $(".float__table--dropdown .select__option").on('click' ,function(e){
        e.preventDefault();
        $(this).closest(".float__table--dropdown").fadeOut(300);
        $(".table__dropdown .select button[data-drop-info="+ $(this).closest(".float__table--dropdown").attr("data-drop-info") +"]").find("span").text($(this).text());
        $(".table__dropdown .select button[data-drop-info="+ $(this).closest(".float__table--dropdown").attr("data-drop-info") +"]").closest(".table__dropdown").find("input").val($(this).attr("data-option"));
    });

     $('.table__dropdown .select>button').on("click" ,function(e){
        e.preventDefault();
        $(".select__dropdown[data-drop-info="+ $(this).attr("data-drop-info") +"]").fadeIn(200);
        $(".select__dropdown[data-drop-info="+ $(this).attr("data-drop-info") +"]").css({"top"  : $(this).offset().top + "px" , "left" : $(this).offset().left + "px"});
        $(".select__dropdown[data-drop-info="+ $(this).attr("data-drop-info") +"]").css({"top"  : $(this).offset().top + "px" , "left" : $(this).offset().left + "px"});
        $(".select__dropdown[data-drop-info="+ $(this).attr("data-drop-info") +"]").css("width" , $(this).css('width'));
    });

    if ($(".table__common .action__drop").length) {
        $(".table__common .action__drop .dropdown__box").each(function(index,elem){
            $(".float__table--content").append(elem);
        });
    }
    if ($(".table__common .notification__table--dropdown").length) {
        $(".table__common .notification__table--dropdown .dropdown__box").each(function(index,elem){
            $(".float__table--content").append(elem);
        });
    }


    $('.action__drop .dropdown__toggle').on("click" ,function(e){
        e.preventDefault();
        $(".dropdown__box[data-drop-action="+ $(this).closest(".action__drop").attr("data-drop-action") +"]").css({"top"  : $(this).closest(".action__drop").find(".dropdown__toggle").offset().top + "px" , "left" : $(this).closest(".action__drop").find(".dropdown__toggle").offset().left + "px"});
        $(".dropdown__box[data-drop-action="+ $(this).closest(".action__drop").attr("data-drop-action") +"]").css({"top"  : $(this).closest(".action__drop").find(".dropdown__toggle").offset().top + "px" , "left" : $(this).closest(".action__drop").find(".dropdown__toggle").offset().left + "px"});
    });

    $('.notification__table--dropdown>.dropdown__toggle').on("click" ,function(e){
        e.preventDefault();
        $(".dropdown__box[data-notification-drop="+ $(this).closest(".notification__table--dropdown").attr("data-notification-drop") +"]").css({"top"  : $(this).closest(".notification__table--dropdown").find(".dropdown__toggle").offset().top + "px" , "left" : $(this).closest(".notification__table--dropdown").find(".dropdown__toggle").offset().left + "px"});
        $(".dropdown__box[data-notification-drop="+ $(this).closest(".notification__table--dropdown").attr("data-notification-drop") +"]").css({"top"  : $(this).closest(".notification__table--dropdown").find(".dropdown__toggle").offset().top + "px" , "left" : $(this).closest(".notification__table--dropdown").find(".dropdown__toggle").offset().left + "px"});
    });


    if ($(".table__common .custom__worker .custom__drop").length) {
        $(".table__common .custom__worker .custom__drop").each(function(index,elem){
            $(".float__table--content").append(elem);
        });
    }

    $(".custom__drop>form").on("submit" ,function(e){
        e.preventDefault();
        $(this).closest(".custom__drop").fadeOut(200);
        $(".custom__worker[data-customer="+$(this).closest(".custom__drop").attr("data-customer") +"]").find("p").text($(this).find("input[type='text']").val());
    });
    $('.custom__worker>a').on("click" ,function(e){
        e.preventDefault();
        var newCustom = $(this).closest(".custom__worker");
        $(this).addClass("active__worker");
        $(".custom__drop[data-customer="+ $(this).closest(".custom__worker").attr("data-customer") +"]").fadeIn(150);
        $(".custom__drop[data-customer="+ $(this).closest(".custom__worker").attr("data-customer") +"]").css({"top"  : $(this).closest(".custom__worker").offset().top + "px" , "left" : $(this).closest(".custom__worker").offset().left + "px"});
    });

    $('.check__main--parent input').on('change' ,function(e){
        e.preventDefault();
        if ($(this).prop("checked") == true) {
            $(this).closest(".table__common").find(".check__main--child").each(function(index,elem){
                $(elem).find("input").prop("checked" , true);
                $(elem).closest("td").addClass("active--check");
            });
        } else {
            $(this).closest(".table__common").find(".check__main--child").each(function(index,elem){
               $(elem).find("input").prop("checked" , false);
               $(elem).closest("td").removeClass("active--check");
            });
        }
    });

    $(".check__input.invisible__check input").on('change' ,function(e){
        e.preventDefault();
        if ($(this).prop("checked") == true) {
            $(this).closest('td').addClass("active--check");
        } else{
            $(this).closest('td').removeClass("active--check");
        }
    });

    //  Assign button create-order-v3.html
    $(".workflow__table .check__main--child.check__input input").on("change" ,function(e){
        if ($(".workflow__table .check__main--child.check__input input:checked").length == 1) {
            $(".assignation__controls>.assign__button").removeClass("disabled__assign");
        } else {
            $(".assignation__controls>.assign__button").addClass("disabled__assign");
        }
        if ($(".workflow__table .check__main--child.check__input input:checked").length >= 1) {
            $(".assignation__controls>.play__style").removeClass("plan__disabled");
        } else {
            $(".assignation__controls>.play__style").addClass("plan__disabled");
        }
        if ($(this).prop("checked") == true) {
            $(this).closest("td").addClass("active--check");
        } else {
            $(this).closest("tr").find(".registration__check.check__input input").prop("checked" ,false);
            $(this).closest("td").removeClass("active--check");
        }
    });


    $(".registration__check.check__input input").on("change" ,function(){
        if ($(this).prop("checked") == true) {
            $(this).closest("tr").find(".check__main--child").find("input").prop("checked" ,true);
             $(this).closest("tr").find(".check__main--child").closest("td").addClass("active--check");
        }
    });

    $('.table__common .registration__dropdown .registration__button .select__all').on('click' ,function(e){
        e.preventDefault();
        if ($(window).width() < 1200) {
            $(".table__common .registration__dropdown>.registration__button+h5").css({"top" : "-40px" , "opacity" : "0" });
        }
        $(this).closest('.table__common').find('.registration__check').each(function(index,elem){
            $(elem).find("input").prop('checked', true);
        });
        var currentButton = $(this);
        setTimeout(function(){
            $(currentButton).closest('.btn-add__dropdown').css("display" , "none");
        }, 100);
    });
    $('.table__common .registration__dropdown .registration__button .deselect__all').on('click' ,function(e){
        e.preventDefault();
        if ($(window).width() < 1200) {
            $(".table__common .registration__dropdown>.registration__button+h5").css({"top" : "-40px" , "opacity" : "0" });
        }
        
        $(this).closest('.table__common').find('.registration__check').each(function(index,elem){
            $(elem).find("input").prop('checked', false);
        });
        var currentButton = $(this);
        setTimeout(function(){
            $(currentButton).closest('.btn-add__dropdown').css("display" , "none");
        }, 100);
    });

    $(".table__common .registration__dropdown").on("click" ,function(e){
        e.preventDefault();
        if ($(window).width() < 1200) {
            $(".registration__dropdown > .registration__button + h5").css({"top" : "-30px" , "opacity" : "1" });
        }
        $(this).find(".btn-add__dropdown").fadeIn(150);
    });

    $(".service__drop--wrapper .btn-add__input-label").on("click" ,function(e){
        e.preventDefault();
        var currButton = $(this);
        $(this).closest(".service__drop--wrapper").find(".service__dropdown").fadeIn(300);
        // $('html').animate({ 
        //     scrollTop: $(currButton).closest(".service__drop--wrapper").find(".service__dropdown").offset().top
        // }, 500 
        // );
    });
    // REWORKED


    // Responsible persons field projects-page
        $(".responsible__field>input").on("focus" ,function(e){
            e.preventDefault();
            $(this).closest(".form-group.responsible__field").addClass("current__group");
            $(this).closest(".form-group.responsible__field").find(".responsible__dropdown").fadeIn(300);
        });

        $("body").on("click" , ".responsible__field .person__response .person__button>a" ,  function(e){
            e.preventDefault();
            $(this).closest(".responsible__field").find(".responsible__dropdown>.list__responsible--person>.elem__responsible--dropdown[data-responeperson="+ $(this).closest(".person__response").attr("data-responsefield") +"]").removeClass("active__responsible--");
            $(this).closest(".person__response").remove();
        });

        $(".responsible__field .responsible__dropdown .elem__responsible--dropdown .response__button>a").on("click" ,function(e){
            e.preventDefault();
            if ($(this).closest(".elem__responsible--dropdown").hasClass("active__responsible--")) {
                $(this).closest(".elem__responsible--dropdown").removeClass("active__responsible--");
               $(this).closest(".form-group.responsible__field").find(".person__response[data-responsefield="+ $(this).closest(".elem__responsible--dropdown").attr("data-responeperson") +"]").remove();
            } else{
                $(this).closest(".elem__responsible--dropdown").addClass("active__responsible--");
                var clonedElemed = $(this).closest(".form-group.responsible__field").find(".responsible__person>.example__response").clone();
                $(clonedElemed).removeClass("example__response");
                $(clonedElemed).attr("data-responsefield" , $(this).closest(".elem__responsible--dropdown").attr("data-responeperson"));
                $(clonedElemed).find(".person__image>img").attr("src" , $(this).closest(".elem__responsible--dropdown").find(".response__person>.response__image>img").attr('src'));
                $(clonedElemed).find(".person__info>p").text($(this).closest(".elem__responsible--dropdown").find(".response__person>.response__text>a").text());
                $(this).closest(".form-group.responsible__field").find(".responsible__field").before(clonedElemed);
            }
        });
    // 


    // Tag field projects-page
    $("body").on("click" , ".tag__group .tag__dropdown .elem__tag .tag__text" ,function(e){
        e.preventDefault();
        $(this).closest(".tag__group").find(".tag__input>input").val("");
        $(this).closest(".tag__group").find(".tag__input>input").focus();
        $(this).closest(".tag__group").find(".tag__dropdown>.tag__search>.elem__tag").each(function(index,elem){
            $(elem).css("display" , 'flex');
        });
        if (!$(this).closest(".elem__tag").hasClass("active__tag")) {
            $(this).closest(".elem__tag").addClass("active__tag");
            $(this).closest(".tag__group").find(".tag__field").find(".tag__input").before("<div class='elem__tag' data-elemtag="+ $(this).closest(".elem__tag").attr("data-tag") +"><p>"+ $(this).find("p").text() +"</p>\
                      <a href='#'><img src='images/closegrey.svg' alt='closegrey'></a>\
                    </div>");
            if ($(this).closest(".tag__dropdown").find(".active__tag").length == 10) {
                $(this).closest(".tag__dropdown").find(".elem__tag").addClass("disabled__tag");
            }
        }
    });
    $("body").on("click" , '.tag__group .tag__dropdown .elem__tag>a:nth-child(2)' , function(e){
        e.preventDefault();
        $(this).closest(".tag__group").find(".tag__field>.elem__tag[data-elemtag="+ $(this).closest(".elem__tag").attr("data-tag") +"]").remove();
        $(this).closest(".elem__tag").removeClass("active__tag");
        $(this).closest(".tag__group").find(".tag__dropdown").find(".elem__tag").removeClass("disabled__tag");
    });

    $("body").on("click" , '.tag__group .tag__field>.elem__tag>a' , function(e){
        e.preventDefault();
        $(this).closest(".tag__group").find(".tag__dropdown>.tag__search>.elem__tag[data-tag="+ $(this).closest(".elem__tag").attr("data-elemtag") +"]").removeClass("active__tag");
        $(this).closest(".elem__tag").remove();
        $(this).closest(".tag__group").find(".tag__dropdown").find(".elem__tag").removeClass("disabled__tag");
    });
    $(".tag__group .tag__field .tag__input>input").on("input" ,function(e){
        e.preventDefault();
        if ($(this).val().length > 0) {
            var currentVal = $(this).val().toLowerCase();
            $(this).closest(".tag__group").find(".tag__dropdown>.tag__search>.elem__tag").each(function(index,elem){
                var elText = $(elem).find("a.tag__text").text().toLowerCase();
                if (elText.indexOf(currentVal) >= 0) {
                    $(elem).css("display" , "flex");
                } else {        
                    $(elem).css("display" , "none");
                }
            });
        } else {
            $(this).closest(".tag__group").find(".tag__dropdown>.tag__search>.elem__tag").each(function(index,elem){
                $(elem).css("display" , 'flex');
            });
        }
    });
    $(".tag__group .tag__field .tag__input>input").on("focus" ,function(e){
        e.preventDefault();
        $(this).closest(".tag__group").addClass("current__group");
        $(this).closest(".tag__group").find(".tag__dropdown").fadeIn(200);
    });
    // 


    // projects-page.html client field
    $(".client__dropdown>.js-input-animation").on("click" ,function(e){
        e.preventDefault();
        $(this).closest(".client__dropdown").find(".client__box").fadeIn(200);
        $(this).closest(".client__dropdown").find(".client__box>.client__search>input").focus();
        $(this).closest(".client__dropdown").addClass('current__group');
    });
    $(".client__box .client__search>input").on("input" ,function(e){
        e.preventDefault();
         if ($(this).val().length > 0) {
            var currentVal = $(this).val().toLowerCase();
            $(this).closest(".client__box").find(".client__list>.elem__client").each(function(index,elem){
                var elText = $(elem).find("a").text().toLowerCase();
                if (elText.indexOf(currentVal) >= 0) {
                    $(elem).css("display" , "flex");
                } else {        
                    $(elem).css("display" , "none");
                }
            });
        } else {
            $(this).closest(".client__box").find(".client__list>.elem__client").each(function(index,elem){
                $(elem).css('display' ,"flex");
            });
        }
    });
    $(".client__box .client__search>a").on("click" ,function(e){
        e.preventDefault();
        var currentTrigger = $(this);
        var newElem = "<div class='elem__client'><a href='#'>"+ $(this).prev("input").val()  +"</a></div>";
        $(this).closest(".client__box").find(".client__list>.elem__client:nth-child(1)").before(newElem);
        $(this).closest(".client__box").fadeOut(200);
        setTimeout(function(){
            $(currentTrigger).closest(".client__box").find(".elem__client").css("display" , 'flex');
        },200);
        $(this).closest(".client__dropdown").find(".input").val($(this).prev("input").val());
        $(this).prev("input").val("");
    });
    $("body").on("click" , ".client__dropdown .client__list .elem__client a" ,function(e){
        e.preventDefault();
        var currentTrigger = $(this);
        $(this).closest(".client__box").fadeOut(200);
        setTimeout(function(){
            $(currentTrigger).closest(".client__box").find(".elem__client").css("display" , 'flex');
        },200);
        $(this).closest(".client__dropdown").find(".input").val($(this).text());
    });
    // 


    $(".role__main>a , .role__main .role__controls>a").on('click' ,function(e){
        e.preventDefault();
        $(this).closest(".modal__wrapper").fadeOut(300);
        var closestButton = $(this).closest(".permissions__modal").find("a:nth-child(1)");
        setTimeout(function(){
            $(closestButton).css("opacity" , "0");
        }, 200);
        $(this).closest(".modal__wrapper").find(".role__inner").css("right" , "-670px");
        $('body,html').css("overflow-y" , "auto");
        setTimeout(function(){
            $(".placeholder__modal").css("display" , "block");
        }, 300);
    });

    $(".table__common .edit__button.edit__roles>a").on('click' ,function(e){
        e.preventDefault();
        $(".modal__wrapper.role__main").fadeIn(300);
        $("body,html").css("overflow-y" , "hidden");
        setTimeout(function(){
            $(".placeholder__modal").fadeOut(300);
        }, 450);
        setTimeout(function(){
            $(".modal__wrapper.role__main>a").css("opacity" , "1");
        }, 200);
        $(".modal__wrapper.role__main").find(".role__inner").css("right" , "0px");
    });



    $(".permissions__dropdown ul li a").on("click" ,function(e){
        e.preventDefault();
        var newPermissions = $(this).closest('.permissions__field').find(".example__permissions").clone();
        $(newPermissions).removeClass("example__permissions");
        $(newPermissions).find("p").text($(this).text());
        $(this).closest(".permissions__field").find(".new__permissions").before($(newPermissions));
        $(this).closest(".permissions__dropdown").fadeOut(300);
        $(this).closest(".permissions__field").find(".new__permissions>input").val("");
    });
    $(".new__permissions>input").on("input" ,function(){
        if ($(this).val().length > 0) {
            $(this).closest(".permissions__field").find(".permissions__dropdown").fadeIn(200);
            var currentVal = $(this).val().toLowerCase();
            $(this).closest(".permissions__field").find(".permissions__dropdown>ul>li").each(function(index,elem){
                var elText = $(elem).find("a").text().toLowerCase();
                if (elText.indexOf(currentVal) >= 0) {
                    $(elem).css("display" , "flex");
                } else {        
                    $(elem).css("display" , "none");
                }
            });
        } else {
            $(this).closest(".permissions__field").find(".permissions__dropdown").fadeOut(200);
        }
    });
    $(".permissions__field .new__permissions>input").on("input" ,function(e){
        e.preventDefault();
    });

    $("body").on("click" , ".el__field--permissions a" ,function(e){
        e.preventDefault();
        $(this).closest(".el__field--permissions").remove();
    });

    $(".table__common .remove__button>a").on("click" ,function(e){
        e.preventDefault();
        $(this).closest("tr").remove();
    });

    $(".permissions__table .el__permissions--table .remove__button a").on('click' ,function(e){
        e.preventDefault();
        $(this).closest(".row__permissions--table").remove();
    });

    $(".edit__button.permission__button>a").on('click' ,function(e){
        e.preventDefault();
        $(".modal__wrapper.permissions__modal").fadeIn(300);
        $("body,html").css("overflow-y" , "hidden");
        setTimeout(function(){
            $(".placeholder__modal").fadeOut(300);
        }, 450);
        setTimeout(function(){
            $(".modal__wrapper.permissions__modal>a").css("opacity" , "1");
        }, 200);
        $(".modal__wrapper.permissions__modal").find(".role__inner").css("right" , "0px");
    });


    $(".permissions__modal>a , .permissions__modal .role__controls>a").on('click' ,function(e){
        e.preventDefault();
        $(this).closest(".modal__wrapper").fadeOut(300);
        var closestButton = $(this).closest(".permissions__modal").find("a:nth-child(1)");
        setTimeout(function(){
            $(closestButton).css("opacity" , "0");
        }, 200);
        $(this).closest(".modal__wrapper").find(".role__inner").css("right" , "-670px");
        $('body,html').css("overflow-y" , "auto");
        setTimeout(function(){
            $(".placeholder__modal").css("display" , "block");
        }, 300);
    });



    $(".droppable__deadline>input").on("change" ,function(e){
        e.preventDefault();
        $(this).closest(".droppable__deadline").find(".today__deadline ").removeClass("today__deadline");
        $(this).closest(".droppable__deadline").find(".set__deadline").removeClass("set__deadline");
        $(this).closest(".droppable__deadline").find(".deadline__droppable").addClass("empty__deadline");
        $(this).closest(".droppable__deadline").find(".droppable__text--time>span:nth-child(1)").text($(this).val().slice(0 , -5));
        $(this).closest(".droppable__deadline").find(".droppable__text--time>span:nth-child(2)").text($(this).val().slice($(this).val().length - 5));
    });

    if ($(".modal__wrapper:visible").length) {
        setTimeout(function(){
            $(".placeholder__modal").fadeOut(300);
        }, 200);
    }

    $(".close__filter").on("click" ,function(e){
        e.preventDefault();
        $(".catalog__filters").fadeOut(300);
    });

    $("body").on("click" , ".remove__invoice" , function(e){
        e.preventDefault();
        $(this).closest(".info-list").remove();
    });
    $("body").on("click" , ".info__remove a" ,function(e){
        e.preventDefault();
        $(this).closest(".info-list.list__education").remove();
    });


    $(".input-animation>label").on("click" ,function(e){
        e.preventDefault();
        $(this).closest('.input-animation').find(".input").focus();
    });

    $("body").on("click" , ".tag__modal .tag__list>.elem__tag a" , function(e){
        e.preventDefault();
        $(this).closest(".elem__tag").remove();
    });

    $("body").on("click" , ".tag__inner--modal .tag__search .search__dropdown ul li a" ,function(e){
        e.preventDefault();
        var newElem = $(this).closest(".tag__inner--modal").find(".tag__list .duplicate__tag").clone();
        $(newElem).removeClass('duplicate__tag');
        $(newElem).find('p').text($(this).text());
        $(this).val("");
        $(this).closest(".tag__search").find(".search__dropdown").fadeOut(300);
        $(this).closest(".tag__inner--modal").find(".tag__list").append(newElem);
        $(this).closest(".tag__inner--modal").find(".tag__search>input").val("");
    });

    $(".tag__search>input").on("keypress" ,function(e){
        if(e.which == 13) {
            e.preventDefault();
            var newElem = $(this).closest(".tag__inner--modal").find(".tag__list .duplicate__tag").clone();
            $(newElem).removeClass('duplicate__tag');
            $(newElem).find('p').text($(this).val());
            $(this).val("");
            $(this).closest(".tag__search").find(".search__dropdown").fadeOut(300);
            $(this).closest(".tag__inner--modal").find(".tag__list").append(newElem);
        }
    });

    $(".tag__search>input").on("focus" ,function(){
        if ($(this).val().length > 0) {
            $(this).closest(".tag__search").find(".search__dropdown").fadeIn(200);
            var currentVal = $(this).val().toLowerCase();
            $(this).closest(".tag__search").find(".search__dropdown>ul>li").each(function(index,elem){
                var elText = $(elem).find("a").text().toLowerCase();
                if (elText.indexOf(currentVal) >= 0) {
                    $(elem).css("display" , "flex");
                } else {        
                    $(elem).css("display" , "none");
                }
            });
        } else {
            $(this).closest(".tag__search").find(".search__dropdown").fadeOut(200);
        }
    });


    $(".tag__search>input").on("input" ,function(){
        if ($(this).val().length > 0) {
            $(this).closest(".tag__search").find(".search__dropdown").fadeIn(200);
            var currentVal = $(this).val().toLowerCase();
            $(this).closest(".tag__search").find(".search__dropdown>ul>li").each(function(index,elem){
                var elText = $(elem).find("a").text().toLowerCase();
                if (elText.indexOf(currentVal) >= 0) {
                    $(elem).css("display" , "flex");
                } else {        
                    $(elem).css("display" , "none");
                }
            });
        } else {
            $(this).closest(".tag__search").find(".search__dropdown").fadeOut(200);
        }
    });

    $(".tag__modal>a , .tag__modal .cancel__skill").on("click" , function(e){
        e.preventDefault();
        $(".opened__dropdown--style").removeClass("opened__dropdown--style");
        $(this).closest(".modal__wrapper").fadeOut(300);
        var closestButton = $(this).closest(".modal__wrapper").find("a");
        setTimeout(function(){
            $(closestButton).css("opacity" , "0");
        }, 200);
        $(this).closest(".modal__wrapper").find(".tag__inner--modal").css("right" , "-670px");
        $('body,html').css("overflow-y" , "auto");
        setTimeout(function(){
            $(".placeholder__modal").css("display" , "block");
        }, 300);
    });

    $(".tag__dropdown").on("click" ,function(e){
        e.preventDefault();
        if ($(this).closest(".tag__group").length == 0) {
            $(".modal__wrapper." + $(this).attr("data-tag")).fadeIn(300);
            $("body,html").css("overflow-y" , "hidden");
            var closestButton = $(".modal__wrapper." + $(this).attr("data-tag")).find("a");
            setTimeout(function(){
                $(".placeholder__modal").fadeOut(300);
            }, 450);
            setTimeout(function(){
                $(closestButton).css("opacity" , "1");
            }, 200);
           $(".modal__wrapper." + $(this).attr("data-tag")).find(".tag__inner--modal").css("right" , "0px");
            $(this).find("button").addClass("opened__dropdown--style");
        }
    });

    $(".dropdown__toggle.tax__modal").on("click" ,function(e){
        e.preventDefault();
        $(this).find("button").addClass("opened__dropdown--style");
        $(".modal__wrapper.tax__modal").fadeIn(300);
        $("body,html").css("overflow-y" , "hidden");
        setTimeout(function(){
            $(".placeholder__modal").fadeOut(300);
        }, 450);
        setTimeout(function(){
            $(".modal__wrapper.tax__modal>a").css("opacity" , "1");
        }, 200);
        $(".modal__wrapper.tax__modal").find(".tax__inner--modal").css("right" , "0px");
    });

    $(".education__drop").on("click" ,function(e){
        $(this).find("button").addClass("opened__dropdown--style");
        e.preventDefault();
        $(".education__modal").fadeIn(300);
        setTimeout(function(){
            $(".placeholder__modal").fadeOut(300);
        }, 450);
        setTimeout(function(){
            $(".education__modal>a").css("opacity" , "1");
        }, 200);
        $(".modal__wrapper.education__modal").find(".education__inner--modal").css("right" , "0px");
        $("body,html").css("overflow-y" , "hidden");
    });

    $(".modal__wrapper.tax__modal>a , .modal__wrapper.tax__modal .cancel__tax ").on("click" ,function(e){
        e.preventDefault();
        $('.modal__wrapper.tax__modal').fadeOut(300);
        setTimeout(function(){
            $(".placeholder__modal").css("display" , "block");
        }, 300);
        $(".opened__dropdown--style").removeClass("opened__dropdown--style");
         $("body,html").css("overflow-y" , "auto");
         $(".modal__wrapper.tax__modal .input-animation.js-input-animation").removeClass("is-active");
         $(".modal__wrapper.tax__modal .group__education input.input").val("");
         $(".modal__wrapper.education__modal>a").css("opacity" , "0");
         $(".modal__wrapper.tax__modal").find(".tax__inner--modal").css("right" , "-670px");
    });



    $(".modal__wrapper.education__modal>a , .modal__wrapper.education__modal .cancel__education ").on("click" ,function(e){
        e.preventDefault();
        $('.modal__wrapper.education__modal').fadeOut(300);
        setTimeout(function(){
            $(".placeholder__modal").css("display" , "block");
        }, 300);
        $(".opened__dropdown--style").removeClass("opened__dropdown--style");
         $("body,html").css("overflow-y" , "auto");
         $(".modal__wrapper.education__modal .input-animation.js-input-animation").removeClass("is-active");
         $(".modal__wrapper.education__modal .group__education input.input").val("");
         $(".modal__wrapper.education__modal>a").css("opacity" , "0");
         $(".modal__wrapper.education__modal").find(".education__inner--modal").css("right" , "-670px");
    });

    $(".education__inner--modal #file-uploadmodal , .education__inner--modal #file-uploadmodal-2").on("change" ,function(e){
        e.preventDefault();
        $(".education__inner--modal .upload-content__drag-drop").css("display" , "none");
        $(".education__inner--modal .upload-content__files").fadeIn(200);
    });

    $("body").on("click" , ".trash__education" ,function(e){
        e.preventDefault();
        $(this).closest(".column-group__item").remove();
    });

    // $(".button__faq .create__faq").on("click" ,function(e){
    //     e.preventDefault();
    //     if ($(this).closest('.inner__new--req').find("input").val().length != 0) {
    //         var newEl = $(".duplicate__elem--used").clone();
    //         $(newEl).find(".req__span").text($(this).closest(".inner__new--req").find("input").val());
    //         var counterElems = 0
    //         $(".elem__used").each(function(index,elem){
    //             if (!$(elem).hasClass("duplicate__elem--used")) {
    //                 counterElems++;
    //             }
    //         });
    //         $(newEl).attr("data-req" , counterElems);
    //         $(newEl).removeClass("duplicate__elem--used");
    //         $(this).closest('.inner__new--req').find("input").val("");
    //         $(this).closest(".requirement__dropdown").find(".list__inner>.elem__used:nth-child(1)").before(newEl);
    //     }
    // });

    $("body").on("click" , ".remove__req a" , function(e){
        e.preventDefault();
        $(this).closest(".elem__used").removeClass('current__req');
        $(".elem__selected[req__link="+ $(this).closest(".elem__used").attr("data-req") +"]").remove();
        if ($(".elem__selected").length == 0) {
            $(".counter__req").removeClass("active__req");
        }
        $(".counter__req").text($(".elem__selected").length + " selected");
    });


    $("body").on('click' , ".elem__selected p a" , function(e){
        e.preventDefault();
        $(this).closest(".elem__selected").remove();
        $(".elem__used[data-req="+ $(this).closest(".elem__selected").attr("req__link") +"]").removeClass("current__req");
        if ($(".elem__selected").length == 0) {
            $(".counter__req").removeClass("active__req");
        }
        $(".counter__req").text($(".elem__selected").length + " selected");
    });

    $("body").on("click" , ".elem__used>a" ,function(e){
        e.preventDefault();
        if ($(this).parent().hasClass("current__req")) {
            // $(this).parent().removeClass("current__req");
        } else {
            $(this).parent().addClass("current__req");
            var counterReq = $(".selected__req>.elem__selected").length;
            var newReq = $(".selected__req>.duplicate__elem").clone();
            $(newReq).removeClass("duplicate__elem");
            $(newReq).addClass("elem__selected");
            $(newReq).find("p>span").text(counterReq + 1);
            $(newReq).attr("req__link" , $(this).closest(".elem__used").attr("data-req"));
            $(".settings__requirement .selected__req").append(newReq);
            $(".counter__req").addClass("active__req");
            $(".counter__req").text((counterReq+1) + " selected");
        }
    });

     $(".requirement__search .search__requirement--field>input").on("input" ,function(e){
        e.preventDefault();
        if ($(this).val().length == 0) {
             $(this).closest(".requirement__dropdown").find(".list__inner>.elem__used").css("display" , "block");
        } else {
            var currentVal = $(this).val().toLowerCase();
            $(this).closest(".requirement__dropdown").find(".list__inner>.elem__used").each(function(index,elem){
                var elText = $(elem).find("a").text().toLowerCase();
                if (elText.indexOf(currentVal) >= 0) {
                    $(elem).css("display" , "flex");
                } else {        
                    $(elem).css("display" , "none");
                }
            });
        }
    });




    $(".requirement__search>a").on('click' ,function(e){
        e.preventDefault();
         e.preventDefault();
        if ($(this).closest('.requirement__search').find(".search__requirement--field>input").val().length != 0) {
            var newEl = $(".duplicate__elem--used").clone();
            $(newEl).find(".req__span").text($(this).closest(".requirement__search").find(".search__requirement--field>input").val());
            var counterElems = 0
            $(".elem__used").each(function(index,elem){
                if (!$(elem).hasClass("duplicate__elem--used")) {
                    counterElems++;
                }
            });
            $(newEl).attr("data-req" , counterElems);
            $(newEl).removeClass("duplicate__elem--used");
            $(this).closest('.requirement__search').find(".search__requirement--field>input").val("");
            $(this).closest(".requirement__dropdown").find(".list__inner>.elem__used:nth-child(1)").before(newEl);
            $(".elem__used").css("display" , "flex");
        }
    });


    $(".new__req .cancel__faq").on("click" ,function(e){
        e.preventDefault();
        $(this).closest(".new__req").fadeOut(200);
    });

    $('.currency__picker .currency__dropdown ul li a').on("click" ,function(e){
        e.preventDefault();
        $(this).closest(".currency__picker").find(".select").removeClass("is-expanded");
        $(this).closest(".select__dropdown").fadeOut(150);
        $(this).closest(".currency__picker").find(".select>button>span").text($(this).find("span").text());
    });


    $(".search__in--table").on("click" ,function(e){
        e.preventDefault();
        $(this).closest("th").find(".search__employee").fadeIn(200);
    });

    $(".search__employee a").on("click" ,function(e){
        e.preventDefault();
        $(this).closest(".search__employee").find("input[type='text']").val("");
        $(this).closest('.search__employee').fadeOut(150);
    });


    $(".find__client--default .elem__client--list a").on("click" ,function(e){
        e.preventDefault();
        $(this).closest(".select").addClass("chosen__select");
        $(this).closest('.select').find(".select__label>span").text($(this).text());
        $(this).closest(".select__dropdown").css("display" , 'none');
        $(this).closest(".find__client--default").find(".client__input>input").val("");
        $(this).closest(".find__client--default").find(".client__list>.elem__client--list").css("display" , "flex");
    });

    $(".find__client--default .client__input input").on("input" ,function(e){
        e.preventDefault();
        if ($(this).val().length == 0) {
             $(this).closest(".find__client--default").find(".client__list>.elem__client--list").css("display" , "flex");
        } else {
            var currentVal = $(this).val().toLowerCase();
            $(this).closest(".find__client--default").find(".client__list>.elem__client--list").each(function(index,elem){
                console.log($(elem).find("a").text().toLowerCase());
                var elText = $(elem).find("a").text().toLowerCase();
                if (elText.indexOf(currentVal) >= 0) {
                    $(elem).css("display" , "flex");
                } else {        
                    $(elem).css("display" , "none");
                }
            });
        }
    });








    $(".select__responsible .responsible__search input").on("input" ,function(e){
        e.preventDefault();
        if ($(this).val().length == 0) {
             $(this).closest(".select__responsible").find(".responsible__list>.el__responsible--list").css("display" , "flex");
        } else {
            var currentVal = $(this).val().toLowerCase();
            $(this).closest(".select__responsible").find(".responsible__list>.el__responsible--list").each(function(index,elem){
                var elText = $(elem).find(".response__name a").text().toLowerCase();
                if (elText.indexOf(currentVal) > 0) {
                    $(elem).css("display" , "flex");
                } else {        
                    $(elem).css("display" , "none");
                }
            });
        }
    });




    $('.el__responsible--list .response__controls .add__controls').on('click' ,function(e){
        e.preventDefault();
        if ($(this).closest(".el__responsible--list").hasClass("active__responsible--picked")) {
            $(this).closest(".el__responsible--list").removeClass("active__responsible--picked");
        } else {
            $(this).closest(".el__responsible--list").addClass("active__responsible--picked");
        }
    });

    if ($(window).width() > 1200) {
        $('.size__freelance .approx__info').on("mouseenter" ,function(e){
            e.preventDefault();
            $(".table__common h4 .approx__info").css("opacity" ,1);
        });

         $('.size__freelance .approx__info').on("mouseleave" ,function(e){
            e.preventDefault();
            $(".table__common h4 .approx__info").css("opacity" ,0);
        });
    } else {
        $('size__freelance .approx__info').on("click" ,function(e){
            e.preventDefault();
            $(".table__common h4 .approx__info").css("opacity" ,1);
        });
    }


    $('.what__corrections--button').on("click" ,function(e){
        e.preventDefault();
        $('.modal__freelance--corrections').fadeIn(150);
        setTimeout(function(){
            $(".placeholder__modal").fadeOut(300)
        }, 450);
        setTimeout(function(){
            $(".modal__freelance--corrections>a").css("opacity" , "1");
        }, 200);
        $(".modal__freelance--corrections>.inner__freelance--corrections").css("right" , "0px");
        $('body,html').css("overflow-y" , "hidden");
    });

    $('.close__resubmit , .modal__freelance--corrections>a').on("click" ,function(e){
        e.preventDefault();
        $(this).closest('.modal__freelance--corrections').fadeOut(150);
        $("body,html").css("overflow-y" , "auto");
        setTimeout(function(){
            $(".placeholder__modal").css("display" , "block");
        }, 300);
        setTimeout(function(){
            $(".modal__freelance--corrections>a").css("opacity" , "0");
        }, 200);
        $(".modal__freelance--corrections>.inner__freelance--corrections").css("right" , "-625px");
    });

    $(".cancel__freelance--task>a , .freelance__modal--controls>a").on("click" ,function(e){
        e.preventDefault();
        var currentModal = $(this).closest(".cancel__freelance--task");
        $(this).closest(".cancel__freelance--task").fadeOut(300);
        setTimeout(function(){
            $(".placeholder__modal").css("display" , "block");
        }, 300);
        setTimeout(function(){
            $(currentModal).closest(".cancel__freelance--task").find("a").css("opacity" , "0")
        }, 200);
        $(this).closest(".cancel__freelance--task").find(".inner__freelance--task").css("right" , "-615px");
    });


    $(".cancel__freelance--task>a").on("click" ,function(e){
        e.preventDefault();
        $(this).closest('.cancel__freelance--task').fadeOut(300);
        $("body,html").css("overflow-y" , "auto");
        setTimeout(function(){
            $(".placeholder__modal").css("display" , "block");
        }, 300);
    });

    $(".cancelation__success>a").on("click" ,function(e){
        e.preventDefault();
        $(".cancelation__success").fadeOut(300);
        setTimeout(function(){
            $(".placeholder__modal").css("display" , "block");
        }, 300);
    });


    $('.submitted__files--list .head__submitted--files .show__main').on("click" ,function(e){
        e.preventDefault();
        if ($(this).hasClass("active__submitted--files")) {
            $(this).closest(".submitted__files--list").find(".submitted__files--table").fadeOut(300);
            $(this).removeClass("active__submitted--files");
            $(this).find("p").text("Show");
        } else {
            $(this).closest(".submitted__files--list").find(".submitted__files--table").fadeIn(300);
            $(this).addClass("active__submitted--files");
            $(this).find("p").text("Hide");
        }
    });

    $(".freelance__order--element .controls__freelance .show__main").on('click' ,function(e){
        e.preventDefault();
        if ($(this).hasClass("active__freelance")) {
            $(this).removeClass("active__freelance");
            $(this).find(".show__text").text("Show");
            $(this).closest(".freelance__order--element").find(".droppable__part").slideUp(300);
        } else {
            $(this).addClass('active__freelance');
            $(this).find(".show__text").text("Hide");
            $(this).closest(".freelance__order--element").find(".droppable__part").slideDown(300);
        }
    });


    if ($('.new__opportunities').length) {
        $(".opps__table").css('display' , "block");
        $(".table__wrapper").each(function(index,elem){
            var currentBox = $(elem);
            $(elem).find("table.table__common tr").each(function(index,elem){
                if ($(elem).hasClass("opps__new")) {
                    var currElementHeight = ($(elem).css("height").slice(0,-2) / 2) - 15;
                    $(elem).closest(".opps__table").find(".new__opportunities." + $(elem).attr("data-opps")).css("top" , ($(elem).offset().top - $(currentBox).offset().top + currElementHeight) + "px");
                }
            });
        });
        $('.opps__table').css("display" , "none");
        $(".opps__table.is-active").css('display' , "block");
    }




    $(".add__plan>a").on('click' ,function(e){
        e.preventDefault();
        $(this).closest('.add__plan').find(".add__plan--dropdown").fadeIn(150);
    });


    $(".advanced__drop .advanced__main").on("click" ,function(e){
        e.preventDefault();
        $(this).closest(".advanced__drop").find(".advanced__drop--box").fadeIn(150);
    });


    $(".switch__adv--elem input").on("change" , function(e){
        if ($(this).prop("checked") == true) {
            $(this).closest('.switch__adv--elem').find(".active__switch--adv").removeClass("active__switch--adv");
            $(this).closest(".switch__adv--elem").find(".switch__right").addClass("active__switch--adv")
        } else {
            $(this).closest('.switch__adv--elem').find(".active__switch--adv").removeClass("active__switch--adv");
            $(this).closest(".switch__adv--elem").find(".switch__left").addClass("active__switch--adv")
        }
    });

    $(".advanced__controls>a").on("click" ,function(e){
        e.preventDefault();
        $(this).toggleClass("active__advanced");
    });

    

    $("body").on("click" ,".elem__url a" ,function(){
        $(this).closest('.elem__url').remove();
    });

    $('.url__modal .url__form .url__box>a').on("click" ,function(e){
        e.preventDefault();
        var cloneElem = $(".url__modal .hidden__clone .elem__url").clone();
        $(".url__inner .url__list").append(cloneElem);
    });


    


    $(".quick__assign--button").on("click" ,function(e){
        e.preventDefault();
        $(this).closest(".job__creation--button").find(".quick__assign").fadeIn(150);
        $(this).closest('.job__creation--button').removeClass("btn-add_opened");
        $(this).closest(".btn-add__dropdown").css("display" , "none");
    });


    $(".file__from--text").on("click" ,function(e){
        e.preventDefault();
        $('.note__modal').fadeIn(150);
        setTimeout(function(){
            $(".placeholder__modal").fadeOut(300);
        }, 450);
        $("body,html").css("overflow-y" , "hidden");
    });
    $(".file__from--url").on("click" ,function(e){
        e.preventDefault();
        $('.url__modal').fadeIn(150);
        setTimeout(function(){
            $(".placeholder__modal").fadeOut(300);
        }, 450);
        $("body,html").css("overflow-y" , "hidden");
    });
    $(".controls__url>a").on('click' ,function(e){
        e.preventDefault();
        $(this).closest('.url__modal').fadeOut(150);
        setTimeout(function(){
            $(".placeholder__modal").fadeOut(300);
        }, 450);
        $("body,html").css("overflow-y" , "inherit");
    });


    $(".controls__note>a").on("click" ,function(e){
        e.preventDefault();
        $(this).closest(".note__modal").fadeOut(150);
        setTimeout(function(){
            $(".placeholder__modal").fadeOut(300);
        }, 450);
        $("body,html").css("overflow-y" , "inherit");
    });


    $(".service__drop--wrapper .service__list ul li a").on('click', function(e){
        e.preventDefault();
        $(this).closest(".service__dropdown").fadeOut(150);
        $('.service__elem.service__drop--wrapper>.serv__info--text p').remove();
        var currentLink = $(this).clone();
        $(this).closest('.service__main').addClass("service__chosen");
        $(".service__elem.service__drop--wrapper>.serv__info--text").append(currentLink);
    });


    $(".services__dropdown>.service__main").on('click' ,function(e){
        e.preventDefault();
        if ($(this).closest('.services__dropdown').find('.service__dropdown:visible').length == 0) {
            $(this).closest('.services__dropdown').find(".service__dropdown").fadeIn(150);            
        }
    });

    $(".projects__dropdown--container .search__projects form input[type='text']").on("input" ,function(e){
        e.preventDefault();
        if ($(this).val().length == 0) {
             $(this).closest(".projects__dropdown--container").find("ul>li").css("display" , "block");
        } else {
            var currentVal = $(this).val().toLowerCase();
            $(this).closest(".projects__dropdown--container").find("ul>li").each(function(index,elem){
                var elText = $(this).find("a").text().toLowerCase();
                if (elText.indexOf(currentVal) > 0) {
                    $(elem).css("display" , "block");
                } else {        
                    $(elem).css("display" , "none");
                }
            });
        }
    });


    $(".services__dropdown .service__dropdown .search__drop--fields>input[type='text']").on("input" ,function(e){
        e.preventDefault();
        if ($(this).val().length == 0) {
             $(this).closest(".service__dropdown").find("ul>li").css("display" , "block");
        } else {
            var currentVal = $(this).val().toLowerCase();
            $(this).closest(".service__dropdown").find("ul>li").each(function(index,elem){
                var elText = $(this).find("a").text().toLowerCase();
                if (elText.indexOf(currentVal) > 0) {
                    $(elem).css("display" , "block");
                } else {        
                    $(elem).css("display" , "none");
                }
            });
        }
    });

   

    $(".jobs__table--element .joins__table--ordinary .check__input input").on("change" ,function(e){
        if ($(this).prop("checked") == true) {
            $(this).closest(".jobs__table--element").addClass("active__table--element");
        } else {
            $(this).closest(".jobs__table--element").removeClass("active__table--element");
        }
    });

    $(".jobs__table--box .show__files--job .show__main").on("click" ,function(e){
        $(this).toggleClass("active__show--main");
        $(this).closest('.jobs__table--wrapper').find('.files__order--wrapper').slideToggle(300);

    });

    $(".elem__order--table .files__col .show__main").on("click" ,function(e){
        $(this).toggleClass("active__show--main");
        $(this).closest('.order__wrapper--element').find('.files__order--wrapper').slideToggle(300);
    });
    $(".elem__order--table .checkbox__col .check__input input").on("change" ,function(e){
        if ($(this).prop("checked") == true) {
            $(this).closest(".elem__order--table").addClass("active__order--table");
        } else {
            $(this).closest(".elem__order--table").removeClass("active__order--table");
        }
    });

    $(".elem__cancelation").on("click" ,function(e){
        $(this).closest(".reason__cancelation").find(".elem__cancelation").removeClass("active__cancelation");
        $(this).addClass('active__cancelation');
        $(".cancelation__box>.cancelation__container").css("display" , "none");
        $(".cancelation__box>.cancelation__container." + $(this).attr("data-reason")).fadeIn(150);
    });


    $(".modal__cancelation>a , .modal__cancelation .corrections__controls>a").on("click" ,function(e){
        e.preventDefault();
        var currModal = $(this).closest(".modal__cancelation");
        setTimeout(function(){
            $(currModal).find("a").css("opacity" , "0");
        }, 200);
        $(this).closest(".modal__cancelation").find(".inner__modal--cancelation").css("right" , "-625px");
        $(this).closest(".modal__cancelation").fadeOut(300);
        setTimeout(function(){
            $(".placeholder__modal").css("display" , "block");
        }, 300);
        $("body,html").css("overflow-y" , "auto");
    });


    $(".correction__modal>a , .correction__modal .corrections__controls>a").on("click" ,function(e){
        e.preventDefault();
        var currModal = $(this).closest(".correction__modal");
        setTimeout(function(){
            $(currModal).find("a").css("opacity" , "0");
        }, 200);
        $(this).closest(".correction__modal").find(".inner__modal--correction").css("right" , "-625px");
        $(this).closest(".correction__modal").fadeOut(300);
        setTimeout(function(){
            $(".placeholder__modal").css("display" , "block");
        }, 300);
        $("body,html").css("overflow-y" , "auto");
    });


    // Remove source row from Submitted files/Source files tables tables
    $('.remove__source>a').on("click" ,function(e){
        e.preventDefault();
        $(this).closest('.content__source').remove();
    });

    // Remove tag element on "X" click
    $(".elem__tag>a").on("click" ,function(e){
        e.preventDefault();
        if ($(this).closest(".tag__group").length == 0) {
            $(this).closest(".elem__tag").remove();
        }
    });


    // Remove comment on "X" click
    $(".comment__task .elem__comment .head__comment>a").on("click" , function(e){
        e.preventDefault();
        $(this).closest('.elem__comment').remove();
    });

    // Slide up and down comments section to (button toggle from "Less" to "More")
    $('.comment__task .comment__controls>a').on('click' ,function(e){
        e.preventDefault();
        if ($(this).closest('.comment__controls').hasClass("active__comment")) {
            $(this).closest('.elem__comment').find(".comment__text").slideUp(300);
            $(this).closest(".comment__controls").removeClass("active__comment");
            $(this).find(".comment__status").text("More");
        } else {
            $(this).closest('.elem__comment').find(".comment__text").slideDown(300);
            $(this).closest(".comment__controls").addClass("active__comment");
            $(this).find(".comment__status").text("Less");
        }
    });

    // Check all checkboxes inside of Submitted files/Source files tables
    $('.source__table .head__source .source__main .check__input input').on("change" ,function(e){
            e.preventDefault();
            if ($(this).prop("checked") == true) {
                $(this).closest(".source__table").find(".content__source").each(function(index,elem){
                    $(elem).find('.check__input input').prop('checked' ,true);
                });
            } else {
                $(this).closest(".source__table").find(".content__source").each(function(index,elem){
                    $(elem).find('.check__input input').prop('checked' ,false);
                });
            }
    });

    // If at least one checkbox inside of SUbmitted files/ Source files tables is changed - it will remove checkbox from "All checkboxes"
    $('.source__table .content__source .check__input input').on("change" ,function(e){
        e.preventDefault();
        $(this).closest(".source__table").find(".head__source .source__main .check__input input").prop("checked" , false);
    });


    $('.projects__dropdown--container ul li a').on("click" , function(e){
        e.preventDefault();
        $(this).closest(".projects__dropdown").find(".projects__main>p").text($(this).text());
        $(this).closest('.projects__dropdown--container').fadeOut(150);
    });

    $(".heading__my--projects>.projects__dropdown>.projects__main").on("click" ,function(e){
        e.preventDefault();
        $(this).closest(".projects__dropdown").find(".projects__dropdown--container").fadeIn(150);
    });


    $(".switch__height>a").on("click" ,function(e){
        e.preventDefault();
        $(this).closest(".order__create--element").find('.advanced__settings').slideToggle(300);
        $(this).closest('.order__create--element').find(".create__settings--inner").slideToggle(300);
        $(this).closest('.order__create--element').find(".switch__height").slideToggle(300);
        $(".collapse__order").toggleClass("active__collapse");

    });
    $('.collapse__order').on("click" ,function(e){
        e.preventDefault();
        $(this).toggleClass("active__collapse");
        $(this).closest(".order__create--element").find('.advanced__settings').slideToggle(300);
        $(this).closest('.order__create--element').find(".create__settings--inner").slideToggle(300);
        $(this).closest('.order__create--element').find(".switch__height").slideToggle(300);
        $(this).closest('.order__wrapper').toggleClass("hidden__order");
    });

    $(".content__order--settings .select .select__option.js-select-option").on("click" ,function(e){
        $(this).closest(".select").addClass("chosen__select");
    });
    $(".registrations__modal>a , .registrations__close>a").on("click" ,function(e){
        e.preventDefault();
        $(this).closest('.registrations__modal').fadeOut(300);
        setTimeout(function(){
            $(currModal).find("a").css("opacity" , "0");
        }, 200);
        $(this).closest(".registrations__modal").find(".inner__registrations").css("right" , "-875px");
        $(this).closest(".registrations__modal").fadeOut(300);
        setTimeout(function(){
            $(".placeholder__modal").css("display" , "block");
        }, 300);
        $("body,html").css("overflow-y" , "initial");
    });

    

   


    



  
    
    $(".show__table>.show__main").on("click" ,function(e){
        e.preventDefault();
        if ($(this).hasClass('active__show--main')) {
            $(this).removeClass("active__show--main");
            $(this).find("p").text("Show");
            $(this).closest(".elem__job").find(".elem__job--droppable").slideUp(300);
            $(".catalog__box>.catalog__content>.catalog__content-item").css('height' , "auto");
             var  closestShow = $(this).closest(".elem__job").find(".placeholder__droppable");
            setTimeout(function(){
                $(closestShow).css("display" , "block");
            }, 300);
        } else {
             var  closestShow = $(this).closest(".elem__job").find(".placeholder__droppable");
            $(this).closest("elem__job").find(".placeholder__droppable").css("display" , "block");
            setTimeout(function(){
                $(closestShow).fadeOut(300);
            }, 450);
            $(this).addClass("active__show--main");
            $(this).find("p").text("Hide");
            $(this).closest(".elem__job").find(".elem__job--droppable").slideDown(300);
            $(this).closest(".catalog__content-item").css("height" , "auto");
            $(".catalog__box>.catalog__content>.catalog__content-item").css('height' , "auto");
        }
    });

    $('.droppable__content .droppable__counter input').on('change' ,function(e){
        if ($(this).prop("checked") == true) {
            $(this).closest(".droppable__content").addClass("active__droppable");
        } else {
            $(this).closest(".droppable__content").removeClass("active__droppable");
        }
    });
    $('.create__project').on("click" ,function(e){
        e.preventDefault();
        $('.create__project--modal').fadeIn(300);
        setTimeout(function(){
            $(".placeholder__modal").fadeOut(300);
        }, 450);
        setTimeout(function(){
            $(".create__project--modal>a").css("opacity" , "1");
        }, 200);
        $(".create__project--modal .inner__modal--project").css("right" , "0px");
        $('body,html').css("overflow-y" , "hidden");
    });
    $(".settings__dropdown .settings__button").on("click" ,function(e){
        e.preventDefault();
        $(this).closest(".settings__dropdown").find('.settings__dropdown--wrapper').fadeIn(150);
    });
    $(".create__project--modal>a").on('click' ,function(e){
        e.preventDefault();
        $('body,html').css("overflow-y" , 'auto');
        $(this).closest('.create__project--modal').fadeOut(300);
        setTimeout(function(){
            $(".placeholder__modal").css("display" , "block");
        }, 300);
        $(".create__project--modal>a").css("opacity" , "0");
        $(".create__project--modal .inner__modal--project").css("right" , "-600px");
    });
    $('.modal__client>a , .modal__client .controls__create>button , .create__project--modal .controls__create>button').on("click" ,function(e){
        e.preventDefault();
        $("body,html").css("overflow-y" , "auto");
        if ($(this).closest(".modal__client").length != 0) {
            $(this).closest(".modal__client").fadeOut(300);
            $(".modal__client>a").css("opacity" ,"0");
             $(".modal__client>.inner__modal--client").css('right' ,"-670px");
        }
        if ($(this).closest(".create__project--modal").length != 0) {
            $(this).closest('.create__project--modal').fadeOut(300);
            $(".create__project--modal>a").css("opacity" , "0");
            $(".create__project--modal .inner__modal--project").css("right" , "-600px");
        }
        setTimeout(function(){
            $(".placeholder__modal").css("display" , "block");
        }, 300);
    });



    $('.new__service.modal__wrapper>a , .new__service.modal__wrapper .service__buttons>a').on("click" ,function(e){
        e.preventDefault();
        $("body,html").css("overflow-y" , "auto");
        if ($(this).closest(".new__service").length != 0) {
            $(this).closest(".new__service").fadeOut(300);
            $(".new__service>a").css("opacity" ,"0");
             $(".new__service>.inner__service--create").css('right' ,"-670px");
        }
        if ($(this).closest(".create__project--modal").length != 0) {
            $(this).closest('.create__project--modal').fadeOut(300);
            $(".create__project--modal>a").css("opacity" , "0");
            $(".create__project--modal .inner__modal--project").css("right" , "-600px");
        }
        setTimeout(function(){
            $(".placeholder__modal").css("display" , "block");
        }, 300);
    });
    $("").on("click" ,function(e){
        e.preventDefault();
        $('.new__service.modal__wrapper').fadeIn(300);
        setTimeout(function(){
            $(".placeholder__modal").fadeOut(300);
        }, 500);
        setTimeout(function(){
            $(".new__service.modal__wrapper>a").css("opacity" , "1");
        }, 200);
        $(".new__service>.inner__service--create").css('right' ,"0px");
        $('body,html').css("overflow-y" , "hidden");
    });

    $(".modal__client>a").on("click" ,function(e){
        e.preventDefault();
        $("body,html").css("overflow-y" , "auto");
        $(".modal__client").fadeOut(300);
        setTimeout(function(){
            $(".placeholder__modal").css("display" , "block");
        }, 300);
    });

    $(".client__heading>a").on("click" ,function(e){
        e.preventDefault();
        $('.modal__client').fadeIn(300);
        setTimeout(function(){
            $(".placeholder__modal").fadeOut(300);
        }, 500);
        setTimeout(function(){
            $(".modal__client>a").css("opacity" , "1");
        }, 200);
        $(".modal__client>.inner__modal--client").css('right' ,"0px");
        $('body,html').css("overflow-y" , "hidden");
    });

    var arrayHeight = [];
    $(".catalog__box>.catalog__content>.catalog__content-item").each(function(index,elem){
        if ($(elem).find(".jobs__table").length == 0) {
           arrayHeight.push($(elem).css("height").slice(0, -2));
           $('.catalog__box>.catalog__content>.catalog__content-item').css("height" , (biggestArray) + "px");
        }
         else {
            arrayHeight.push($(elem).css("height").slice(0, -2));
            $('.catalog__box>.catalog__content>.catalog__content-item').css("height" , (biggestArray - 340) + "px");
        }
    });
    var biggestArray = Math.max.apply( null, arrayHeight );
    

    $(".controls__permissions .btn-add__input_add").on("click" ,function(e){
        e.preventDefault();
        $(this).find('.create__position').fadeIn(150);
    });
    $(".wrap__another--drop>.btn-add__icon").on("click" ,function(e){
        e.preventDefault();
        $(this).parent().find(".btn-add__dropdown").fadeIn(150);
    });
    $(document).click(function(event) { 
      var $target = $(event.target);
      if (!$target.closest(".translation__droppable").length) {
        $('.translation__droppable .dropdown__translate').fadeOut(300);
      }
      if (!$target.closest('.add__glossary').length) {
      	$('.add__glossary>.drop__add').fadeOut(300);
      }
      if (!$target.closest('.add__memories').length) {
      	$('.add__memories>.drop__add').fadeOut(300);
      }
      if (!$target.closest(".quality__el").length) {
        $(".quality__drop").fadeOut(300);
      }
      if (!$target.closest('.menu__burger--float').length && !$target.closest(".dropdown__box").length) {
        $(".dropdown__box").fadeOut(200);
      }
      if (!$target.closest(".select__dropdown ").length && !$target.closest(".select>button").length) {
        $(".select__dropdown").fadeOut(200);
      } 
      if (!$target.closest(".responsible__field").length && !$target.closest(".elem__tag").length) {
        $(".responsible__field .responsible__dropdown").fadeOut(200);
        $(".current__group.responsible__field").removeClass("current__group");
      }
      if (!$target.closest(".float__table--dropdown").length && !$target.closest(".table__dropdown").length) {
        $(".float__table--dropdown").fadeOut(200);
      } 
      if (!$target.closest(".tag__group").length) {
        $(".tag__group .tag__dropdown").fadeOut(200);
        $(".tag__group.tag__group").removeClass("current__group");
      } 
      if (!$target.closest(".client__dropdown").length) {
        $(".client__dropdown .client__box").fadeOut(200);
        $(".client__dropdown").removeClass("current__group");
      }
       if (!$target.closest(".opps__status--main").length && !$target.closest(".status__hint").length) {
        $('.status__hint').css("display" , 'none');
      }

      if (!$target.closest(".select__response--picker").length) {
        setTimeout(function(){
            $(".select__response--picker .responsible__search input").val("");
            $(".select__response--picker .responsible__list .el__responsible--list").css("display" , "flex");
        } , 250);
      }

      if (!$target.closest(".freelance__order--element .approx__info").length) {
        $(".freelance__order--head .approx__info").css("opacity" , 0);
      }
      if (!$target.closest(".add__plan").length) {
        $(".add__plan--dropdown").fadeOut(150);
      }
      if (!$target.closest(".advanced__drop").length) {
        $(".advanced__drop--box").fadeOut(150);
      }
      if (!$target.closest(".registration__dropdown").length) {
        if ($(window).width() < 1200) {
            $(".registration__dropdown>.registration__button+h5").css({"top" : "-40px" , "opacity" : "0" });
        }
        $(".registration__dropdown .btn-add__dropdown").fadeOut(150);
      }
      if (!$target.closest(".quick__assign").length && !$target.closest(".quick__assign--button").length) {
        $(".job__creation--button").find(".quick__assign").fadeOut(150);
      }
      if (!$target.closest(".service__drop--wrapper").length) {
        $(".service__dropdown").fadeOut(150);
      }
      if (!$target.closest(".time__job--info.due__time").length && !$target.closest(".time__job--dropdown").length) {
        $(".time__job--dropdown").fadeOut(150);
        $(".due__time").removeClass("active__due");
      }
      if (!$target.closest(".projects__dropdown").length) {
        $(".projects__dropdown--container").fadeOut(150);
      }
       if(!$target.closest('.custom__worker').length && !$target.closest('.custom__drop').length) {
        $('.custom__worker>a').removeClass("active__worker");
        $(".custom__drop").fadeOut(150);
      }
      if(!$target.closest('.comment__button ').length && !$target.closest(".comment__inner").length) {
        $('.comment__inner').fadeOut(150);
        $('.comment__button').removeClass("comment__active");
        $(".comment__dropdown .comment__inner .reply__comment>input").val("");
        $(".comment__dropdown .comment__inner .comment__buttons").css("display" ,"none");
      }  
      if(!$target.closest('.main__status--table').length && !$target.closest(".status__drop").length) {
        $('.status__drop').fadeOut(150);
        $(".main__status--table").removeClass("active__status");
      }
      if(!$target.closest('.settings__dropdown').length) {
        $('.settings__dropdown--wrapper').fadeOut(150);
      }    
      if(!$target.closest('.btn-add__input_add').length) {
        $('.btn-add__input_add>.create__position').fadeOut(150);
      }       
      if(!$target.closest('.wrap__another--drop').length) {
        $('.wrap__another--drop>.btn-add__dropdown').fadeOut(150);
      }        
    });

    $(".modal__service>a , .modal__service .service__controls>a.cancel__service").on('click' ,function(e){
        e.preventDefault();
        $(this).closest(".modal__wrapper").fadeOut(300);
        var closestButton = $(this).closest(".modal__service>a").find("a:nth-child(1)");
        setTimeout(function(){
            $(closestButton).css("opacity" , "0");
        }, 200);
        $(this).closest(".modal__wrapper").find(".inner__modal--service").css("right" , "-670px");
        $('body,html').css("overflow-y" , "auto");
        setTimeout(function(){
            $(".placeholder__modal").css("display" , "block");
        }, 300);
    });

    $(".create__service .btn-add__input").on('click' ,function(e){
        e.preventDefault();
        $(".modal__wrapper.modal__service").fadeIn(300);
        $("body,html").css("overflow-y" , "hidden");
        setTimeout(function(){
            $(".placeholder__modal").fadeOut(300);
        }, 450);
        setTimeout(function(){
            $(".modal__wrapper.modal__service>a").css("opacity" , "1");
        }, 200);
        $(".modal__wrapper.modal__service").find(".inner__modal--service").css("right" , "0px");
    });

    


    $('.modal__create>a , .modal__create .controls__create>button').on("click" ,function(e){
        e.preventDefault();
        $("body,html").css("overflow-y" , "auto");
        setTimeout(function(){
            $(".placeholder__modal").css("display" , "block");
        }, 300);
        $(this).closest(".modal__create").fadeOut(300);
    });
    $(".catalog__tab").on("click" ,function(e){
        e.preventDefault();
        $(".group__line").css("display" , "none");
        setTimeout(function(){
            if ($(".group__line").length) {
                $('.group__line').each(function(index,elem){
                    if ($(".group__tr[data-group="+ $(elem).attr('data-group')+"]").is(":visible")) {
                        $(elem).fadeIn(200);
                        var groupParent = $(".group__tr[data-group="+ $(elem).attr('data-group')+"]");
                        var counterGroup = $(".group__tr[data-group="+ $(elem).attr('data-group')+"]").attr("data-group-counter");
                        var groupHeight = +$(groupParent).css("height").slice(0, -2);
                        var groupChilds = $(groupParent).nextAll().slice(0, counterGroup);
                        var childsHeight = 0;
                        $(groupChilds).each(function(index,elem){
                            childsHeight += +$(elem).css("height").slice(0 , - 2);
                        });
                        groupHeight += +childsHeight;
                        $(elem).css("height" , groupHeight + "px");
                        $(elem).css({"top"  :  $(".group__tr[data-group="+ $(elem).attr('data-group')+"]").offset().top + "px" , "left" :  $(".group__tr[data-group="+ $(elem).attr('data-group')+"]").offset().left + "px"});
                    }
                });
            }
        },300);
        if ($(this).attr('data-tab') == "services") {
            $('.settings-page__heading-status').css("display" , "none");
            $(".upload__block.service__creation").fadeIn(150)
        } else {
            $(".upload__block.service__creation").css("display" , "none");
            $(".settings-page__heading-status").fadeIn(150);
        }
    });
    $("#file-uploadc1 , #file-uploadc2").on("change" ,function(e){
        e.preventDefault();
        if ($(this).closest(".freelance__task--load").length != 0) {
            $(".upload__files--buttons").fadeIn(200);
            $(".content__upload--table").fadeIn(200);
            $(".upload__head.upload__block").fadeIn(200);
            $(this).closest(".freelance__task--load").find(".table__wrapper").fadeIn(200);
            $(this).closest(".freelance__task--load").find(".upload-content__drag-drop.upload-content__drag-drop__old.upload__block").css("display" , 'none');
        }

    });
    $("#file-upload").on("change" ,function(e){
        e.preventDefault();
        if ($(this).closest(".right__controls--files").length == 0) {
        	if (!$(this).closest('.file__row').length) {
        		$(".upload-content__drag-drop__old.upload__block").css("display" , "none");
	            $(".upload-content__files.upload__block").fadeIn(200)
        	}
        }
    });

    $(".documents__files .upload__block .btn-add__input_add input").on('change' , function(e){
		e.preventDefault();
		$(this).closest('.upload__block').css("display" , "none");
		$(this).closest('.upload__block').next().fadeIn(300);
    });

        $(".dropdown__toggle.notifications-dropdown__toggle").on("click" ,function(e){
                if ($(window).width() < 767) {
                    if ($(".dropdown__box.notifications-dropdown__box:visible").length) {
                        $(".menu__button--header").fadeOut(150);
                    }
                }
        });
        $(".dropdown__box.notifications-dropdown__box .content-header__close>.close").on("click" ,function(e){
                e.preventDefault();
                $(".menu__button--header").fadeIn(150);
        });
$(".btn-preview-toggle").hover(function(){
    $('.upload-manual-review').show();
},function(){
    $('.upload-manual-review').hide();
});

$('.upload-content__files-upload__button .has-dropdown').on('click', function(e) {
    $('.upload-content__files-upload__button .dropdown, .upload-content__files-upload__button .has-dropdown').toggleClass("active"); //you can list several class names
    e.preventDefault();
});

$(document).ready(function() {
    'use strict';

    ;( function ( document, window, index )
    {
        // feature detection for drag&drop upload
        var isAdvancedUpload = function()
        {
            var div = document.createElement( 'div' );
            return ( ( 'draggable' in div ) || ( 'ondragstart' in div && 'ondrop' in div ) ) && 'FormData' in window && 'FileReader' in window;
        }();


        // applying the effect for every form
        var forms = document.querySelectorAll( '.box' );
        Array.prototype.forEach.call( forms, function( form )
        {
            var input    = form.querySelector( 'input[type="file"]' ),
                label    = form.querySelector( 'label' ),
                errorMsg   = form.querySelector( '.box__error span' ),
                restart    = form.querySelectorAll( '.box__restart' ),
                droppedFiles = false,
                showFiles  = function( files )
                {
                    label.textContent = files.length > 1 ? ( input.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', files.length ) : files[ 0 ].name;
                },
                triggerFormSubmit = function()
                {
                    var event = document.createEvent( 'HTMLEvents' );
                    event.initEvent( 'submit', true, false );
                    form.dispatchEvent( event );
                };

            // letting the server side to know we are going to make an Ajax request
            var ajaxFlag = document.createElement( 'input' );
            ajaxFlag.setAttribute( 'type', 'hidden' );
            ajaxFlag.setAttribute( 'name', 'ajax' );
            ajaxFlag.setAttribute( 'value', 1 );
            form.appendChild( ajaxFlag );

            // automatically submit the form on file select
            input.addEventListener( 'change', function( e )
            {
                showFiles( e.target.files );


                triggerFormSubmit();


            });

            // drag&drop files if the feature is available
            if( isAdvancedUpload )
            {
                form.classList.add( 'has-advanced-upload' ); // letting the CSS part to know drag&drop is supported by the browser

                [ 'drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop' ].forEach( function( event )
                {
                    form.addEventListener( event, function( e )
                    {
                        // preventing the unwanted behaviours
                        e.preventDefault();
                        e.stopPropagation();
                    });
                });
                [ 'dragover', 'dragenter' ].forEach( function( event )
                {
                    form.addEventListener( event, function()
                    {
                        form.classList.add( 'is-dragover' );
                    });
                });
                [ 'dragleave', 'dragend', 'drop' ].forEach( function( event )
                {
                    form.addEventListener( event, function()
                    {
                        form.classList.remove( 'is-dragover' );
                    });
                });
                form.addEventListener( 'drop', function( e )
                {
                    droppedFiles = e.dataTransfer.files; // the files that were dropped
                    showFiles( droppedFiles );


                    triggerFormSubmit();

                });
            }


            // if the form was submitted
            form.addEventListener( 'submit', function( e )
            {
                // preventing the duplicate submissions if the current one is in progress
                if( form.classList.contains( 'is-uploading' ) ) return false;

                form.classList.add( 'is-uploading' );
                form.classList.remove( 'is-error' );

                if( isAdvancedUpload ) // ajax file upload for modern browsers
                {
                    e.preventDefault();

                    // gathering the form data
                    var ajaxData = new FormData( form );
                    if( droppedFiles )
                    {
                        Array.prototype.forEach.call( droppedFiles, function( file )
                        {
                            ajaxData.append( input.getAttribute( 'name' ), file );
                        });
                    }

                    // ajax request
                    var ajax = new XMLHttpRequest();
                    ajax.open( form.getAttribute( 'method' ), form.getAttribute( 'action' ), true );

                    ajax.onload = function()
                    {
                        form.classList.remove( 'is-uploading' );
                        if( ajax.status >= 200 && ajax.status < 400 )
                        {
                            var data = JSON.parse( ajax.responseText );
                            form.classList.add( data.success == true ? 'is-success' : 'is-error' );
                            if( !data.success ) errorMsg.textContent = data.error;
                        }
                        else alert( 'Error. Please, contact the webmaster!' );
                    };

                    ajax.onerror = function()
                    {
                        form.classList.remove( 'is-uploading' );
                        // alert( 'Error. Please, try again!' );
                    };

                    ajax.send( ajaxData );
                }
                else // fallback Ajax solution upload for older browsers
                {
                    var iframeName  = 'uploadiframe' + new Date().getTime(),
                        iframe    = document.createElement( 'iframe' );

                    $iframe   = $( '<iframe name="' + iframeName + '" style="display: none;"></iframe>' );

                    iframe.setAttribute( 'name', iframeName );
                    iframe.style.display = 'none';

                    document.body.appendChild( iframe );
                    form.setAttribute( 'target', iframeName );

                    iframe.addEventListener( 'load', function()
                    {
                        var data = JSON.parse( iframe.contentDocument.body.innerHTML );
                        form.classList.remove( 'is-uploading' )
                        form.classList.add( data.success == true ? 'is-success' : 'is-error' )
                        form.removeAttribute( 'target' );
                        if( !data.success ) errorMsg.textContent = data.error;
                        iframe.parentNode.removeChild( iframe );
                    });
                }
            });


            // restart the form if has a state of error/success
            Array.prototype.forEach.call( restart, function( entry )
            {
                entry.addEventListener( 'click', function( e )
                {
                    e.preventDefault();
                    form.classList.remove( 'is-error', 'is-success' );
                    input.click();
                });
            });

            // Firefox focus bug fix for file input
            input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
            input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });

        });
    }( document, window, 0 ));

    // click on btn-add
    $('.btn-add__icon').click(function(){
        $(this).parents('.btn-add').toggleClass('btn-add_opened');
    });

    $(document).mouseup(function(e) {
        let div = $(".btn-add");
        if (!div.is(e.target) &&
            div.has(e.target).length === 0) {
            div.removeClass('btn-add_opened');
        }
    });

});












    $(".menu__button--header>a").on("click" ,function(e){
    e.preventDefault();
    if ($(this).hasClass("active__menu")) {
      $(this).removeClass("active__menu");
      $("header .right__header").css("top" , "-100%");
      $("body,html").css("overflow-y"  ,"auto");
    } else {
      $(this).addClass("active__menu");
      $("body,html").css("overflow-y"  ,"hidden");
      $("header .right__header").css("top" , "0px");
    }
  });
  if ($(window).width() < 991) {
    $(".overlay").on("click" , function(e){
      e.preventDefault();
      $(".overlay").fadeOut(300);
      $("body,html").css("overflow-y" , "auto");
      $(".side__menu").css('left' , "-200px");
    });
    $(".content__main .menu__small>a").on("click" ,function(e){
      e.preventDefault();
      $(".overlay").fadeIn(300);
      $("body,html").css("overflow-y" , "hidden");
      $(".side__menu").css('left' , "0px");
    });
  }
});