"use strict";

(function() {

    const elementToInject = document.querySelector(`.content-cards`);

    window.data.forEach( (it) => {
        let newRenderTemplate = window.getTemplate(it);
        let postElement = window.render.renderHtmlFromTemplate(newRenderTemplate);
        window.render.addElementToNode(postElement, elementToInject);
    });

})();