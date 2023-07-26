function save() {
                /*var container = document.getElementById("image-wrap");*/ /*specific element on page*/
                var container = document.getElementById("saveDoll");; /* full page */
				const div = document.getElementById("myCanvas");
                html2canvas(container, { scale:1.96136701337, allowTaint: true }).then(function (canvas) {
					div.appendChild(canvas);
				});
            }