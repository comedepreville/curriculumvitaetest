// Fonction pour récupérer les données à partir de l'API
function getDataFromAPI(url, sectionId) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const section = document.querySelector(`#${sectionId}`);
            data.forEach(item => {
                const div = document.createElement("div");
                div.classList.add("education-experience-item");

                const logoImg = document.createElement("img");
                logoImg.src = item.logo;
                logoImg.style.width = "30px";

                const titleH3 = document.createElement("h3");
                titleH3.textContent = item.titre;

                const infoSpan = document.createElement("span");
                infoSpan.textContent = item.info;

                const descriptionP = document.createElement("p");
                descriptionP.textContent = item.description;

                div.appendChild(logoImg);
                div.appendChild(titleH3);
                div.appendChild(infoSpan);
                div.appendChild(descriptionP);

                section.appendChild(div);
            });
        })
        .catch(error => {
            console.error("Erreur lors de la récupération des données :", error);
        });
}

// Appeler la fonction pour récupérer les données des formations
getDataFromAPI("https://script.google.com/macros/s/AKfycbygenUO1OP1nxH7OFCMe2-R6BivxpJ9FyAcg-oANu1OPABqZiaD-vi92Q-YzD6THqTmGQ/exec", "education-section");

// Appeler la fonction pour récupérer les données des expériences
getDataFromAPI("https://script.google.com/macros/s/AKfycbwo1ENbtEy8S3ccR-S1VLuJQ5j-Y17UrhkPjI6TteiBn1GjutxqEvUZ0zqSBL8Ja-hc-w/exec", "experience-section");
