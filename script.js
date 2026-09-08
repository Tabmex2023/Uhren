document.addEventListener("DOMContentLoaded", function () {

    const header = document.getElementById("site-header");

    if (header) {

        fetch("header.html")
            .then(response => {

                if (!response.ok) {
                    throw new Error("Could not load header.html");
                }

                return response.text();

            })
            .then(data => {

                header.innerHTML = data;

            })
            .catch(error => {

                console.error("Header loading error:", error);

            });

    }


    const footer = document.getElementById("site-footer");

    if (footer) {

        fetch("footer.html")
            .then(response => {

                if (!response.ok) {
                    throw new Error("Could not load footer.html");
                }

                return response.text();

            })
            .then(data => {

                footer.innerHTML = data;

            })
            .catch(error => {

                console.error("Footer loading error:", error);

            });

    }

});
