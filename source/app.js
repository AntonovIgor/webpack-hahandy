import data from './data';
import getTemplate from './post';
import _ from 'lodash';
import './app.css';


import { renderHtmlFromTemplate, addElementToNode } from './render';

const elementToInject = document.querySelector(`.content-cards`);
const filtredData = _.filter(data, { postDate: `15.01.2018` });

filtredData.forEach( (it) => {
    let newRenderTemplate = getTemplate(it);
    let postElement = renderHtmlFromTemplate(newRenderTemplate);
    addElementToNode(postElement, elementToInject);
});

