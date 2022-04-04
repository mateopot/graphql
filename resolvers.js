const db = require('./db');
const { Router } = require('express');

const Query = {
    themes: () => db.themes.list(),
    languages: () => db.languages.list(),
    countries: () => db.countries.list()
}

const Language = {
    themesByLanguage: (root) => {
        return db.themes.list().filter(function (item) {
            return root.token === item.code_langue;
        });
    }, 
    sourcesByLanguage: (root) => {
        return db.sources.list().filter(function (item) {
            return root.token === item.token_langue;
        });
    }
}

const Country = {
    sourcesByCountry: (root) => {
        return db.sources.list().filter(function (item) {
            return root.token === item.token_pays;
        });
    }
}

const Source = {
    scrapingBySource: (root) => {
        return db.scrapings.list().filter(function (item) {
            return root.token === item.token_source;
        });
    }
}

const SourceScraping = {
    articlesByScraping: (root) => {
        return db.articles.list().filter(function (item) {
            return root.token === item.token_source_scrap;
        });
    }
}

module.exports = { Query, Language, Country, Source, SourceScraping }