"use strict";

(function() {

    const getTemplate = (dataObject) => {
        return `
        <li class="content-cards-item  page-content__cards-item">
        <img class="content-cards-item__cover" src="${dataObject.imagePath}" width="338" height="177" alt="">
        <time class="content-cards-item__date" datetime="${dataObject.postDate}">
            <div class="content-publish-date">
                <span class="content-publish-date__day"></span>
                <span class="content-publish-date__month"></span>
            </div>
        </time>
        <div class="content-cards-item__title">${dataObject.title}с</div>
        <div class="content-cards-item__description">${dataObject.description}</div>
    </li><!-- /content-cards__item -->  
        `;
    };

    window.getTemplate = getTemplate;

})();