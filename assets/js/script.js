/*class Scroll {

    constructor(hauteur, top_vieperso, top_viepro, top_galerie, top_footer) {
        this.scrollDistance = $(document).scrollTop();
        this.top_vieperso = $("header").height();
        this.top_viepro = top_vieperso + $("article#vieperso").height();
        this.top_galerie = top_viepro + $("article#viepro").height();
        this.top_footer = top_galerie + $("#galerie").height()
        
    }



    toggleMenu(step) {

        $(".active").removeClass("active");


        switch (step) {
            case 0: {
                $(".acceuil").addClass("active");
                break;
            }
            case 1:
                $(".vieperso").addClass("active");
                break;

            case 2:
                $(".viepro").addClass("active");
                break;

            case 3:
                $(".galerie").addClass("active");
                break;
        }
    }


    action() {
        if (sc >= top_vieperso && sc <= top_viepro) {
            toggleMenu(1);
        }

        if (sc >= top_viepro && sc <= top_galerie) {
            toggleMenu(2);
        }

        if (sc >= top_galerie && sc <= top_footer) {
            toggleMenu(3);
        }

        if (sc < top_vieperso) {
            toggleMenu(0);
        }
    }



}

$(document).scroll((event) => {
    let scroll = new Scroll();
})

/*

/** ON GARDE CA */
var top_vieperso = $("header").height();
var top_viepro = top_vieperso + $("article#vieperso").height();
var top_galerie = top_viepro + $("article#viepro").height();
var top_footer = top_galerie + $("#galerie").height()

function toggleMenu(step) {

    $(".active").removeClass("active");

    switch (step) {
        case 0: {
            $(".acceuil").addClass("active");
            break;
        }
        case 1:
            $(".vieperso").addClass("active");
            break;

        case 2:
            $(".viepro").addClass("active");
            break;

        case 3:
            $(".galerie").addClass("active");
            break;
    }

}

$(document).scroll((event) => {
    var sc = $(document).scrollTop();

    if (sc >= top_vieperso && sc <= top_viepro) {
        toggleMenu(1);
    }

    if (sc >= top_viepro && sc <= top_galerie) {
        toggleMenu(2);
    }

    if (sc >= top_galerie && sc <= top_footer) {
        toggleMenu(3);
    }

    if (sc < top_vieperso) {
        toggleMenu(0);
    }
})



$("#hamburger").click(function () {
    $('nav ul').fadeToggle();
})
