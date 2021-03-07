(async function(){
    const originalUrl = 'https://cdn.curator.io/published/f0315c14-303c-4829-af46-45dfb8b1f1d8.js';
    const feedUrl = 'https://api.curator.io/restricted/feeds/f0315c14-303c-4829-af46-45dfb8b1f1d8/posts?limit=12&hasPoweredBy=false&version=4.0';
    const feedElement = document.getElementById('feed');

    // Fetch from supplied url to refresh feed
    await fetch(originalUrl);

    const { posts } = await (await fetch(feedUrl)).json();
    // const { posts } = { posts: [] };

    posts.forEach(post => {

        const { image, url, text } = post;
        
        if (/curator\.io/.test(url)) return;

        const template = document.querySelector('#t_feed_item');
        const postElement = template.content.cloneNode(true);
        const imageElement = postElement.querySelector('.feed-image');
        const linkElement = postElement.querySelector('.feed-link');
        const overlayTitleElement = postElement.querySelector('.feed-overlay-title');

        imageElement.setAttribute('src', image);
        imageElement.setAttribute('alt', '');
        linkElement.setAttribute('href', url);
        overlayTitleElement.appendChild(document.createTextNode(text));

        feedElement.appendChild(postElement);
    }); 

    new Colcade( '.feed', {
        columns: '.feed-col',
        items: '.feed-item'
    });

})();