document.getElementById("myHead").innerHTML =
    "<span id='headerText'>Mine prosjekter</span>"
	+ "<span id='headerSubtext'>Subtitle</span>";
    
document.getElementById("myNav").innerHTML =
	"<ul id='navLinks'>"
	+ "<li><a class='active' ref='index.html'>Startsiden</a></li>"
	+ "<li><a href='samleside.html'>Samleside læring</a>"
	+ "<li><a href='hjemmeside.html'>Moodboard</a>"
	+ "<li><a href='hjemmeside.html'>Aktiv Læring hjemmeside</a>"
	+ "<li><a href='matbit.html'>MAT B-I-T prosjekt</a>"
	+ "<li><a href='api.html'>Javascript API</a></li>"
	+ "<li style='float:right'><a href='about.html'>Om</a></li>"
	+ "</ul>";

document.getElementById("myFooter").innerHTML =
	"<p id='copyright'>Copyright &copy; " + new Date().getFullYear() + " All"
	+ " rights reserved.</p>"
	+ "<p id='credits'>Layout by You</p>"
	+ "<p id='contact'><a href='mailto:t.ronning@gmail.comm'>Kontakt meg</a></p>"


// identify active 
    var a = document.querySelectorAll(".navLinks a");
    for (var i = 0, length = a.length; i < length; i++) {
      a[i].onclick = function() {
        var b = document.querySelector(".navLinks li.active");
        if (b) b.classList.remove("active");
        this.parentNode.classList.add('active');
      };
    }
     