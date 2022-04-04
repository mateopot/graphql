const { DataStore } = require('notarealdb');

const store = new DataStore('./data');

module.exports = {
   themes:store.collection('list_themes'),
   languages:store.collection('list_langues'),
   countries:store.collection('list_pays'),
   sources:store.collection('list_sources'),
   scrapings:store.collection('list_sources_scrap'),
   articles:store.collection('newsArticles')
};