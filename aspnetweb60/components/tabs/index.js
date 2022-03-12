import './tabs.scss';

const tabs = () => {


    console.log("tabs");
    const afficherOnglet = (a, animations) => {

        if (animations === undefined) {
            animations = true
        }

        const li = a.parentNode;
        const div = a.parentNode.parentNode.parentNode;
        const activeTab = div.querySelector(".tab-content.active"); // contenu actif
        const aAfficher = div.querySelector(a.getAttribute("href")); // contenu à afficher
        
        if(li.classList.contains("active")) {
           return false;
        }
        
        // Gestion des onglets
        div.querySelector(".tabs .active").classList.remove("active");
        li.classList.add("active");

        // Gestion des contenus
        if (animations) {
            activeTab.classList.add("fade");
            activeTab.classList.remove("in");
            
            function transitionEnd() {
                this.classList.remove("fade");
                this.classList.remove("active");
                aAfficher.classList.add("active");
                aAfficher.classList.add("fade");
                aAfficher.offsetWidth
                aAfficher.classList.add("in");
                activeTab.removeEventListener("transitionend", transitionEnd);
            }

            activeTab.addEventListener("transitionend", transitionEnd);
        } else {
            aAfficher.classList.add("active");
            activeTab.classList.remove("active");
        }
        
    }

    const tabs = document.querySelectorAll(".tabs a");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", function(e) {
            afficherOnglet(this);
        });
    }

    const hashChange = () => {
        const hash = window.location.hash;
        const a = document.querySelector(".tabs a[href='" + hash + "']");
        if (a !== null && !a.classList.contains("active")) {
            afficherOnglet(a, false);
        }
    }

    window.addEventListener("hashchange", hashChange); 
    hashChange();

};

export default tabs;