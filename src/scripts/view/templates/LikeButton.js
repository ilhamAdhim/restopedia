const renderLikeButtonTemplate = () => `
    <button class="btn-fav" id="likeButton" aria-label="Unlike this restaurant"> 
        <i class="fa fa-heart-o icon" aria-hidden="true"></i>
    </button>`;

const renderLikedButtonTemplate = () => `
    <button class="btn-fav" id="likeButton" aria-label="Like this restaurant"> 
        <i class="fa fa-heart icon" aria-hidden="true"></i>
    </button>`;

export { renderLikeButtonTemplate, renderLikedButtonTemplate };
