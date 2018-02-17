import data from './data';
import { getTemplate, renderHtmlFromTemplate } from './render';

const elementToInject = document.querySelector(`.content-cards`);

data.forEach( (it) => {
    let newRenderTemplate = getTemplate(it);
    let postElement = renderHtmlFromTemplate(newRenderTemplate);
    addElementToNode(postElement, elementToInject);
});

