const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

async function generateSitemap() {
    const links = [
        { url: '/', changefreq: 'daily', priority: 1.0 },
        { url: '/home', changefreq: 'daily', priority: 1.0 },
        { url: '/about', changefreq: 'weekly', priority: 0.8 },
        { url: '/contact', changefreq: 'weekly', priority: 0.8 },
        { url: '/inverter', changefreq: 'weekly', priority: 0.8 },
        { url: '/commercialups', changefreq: 'weekly', priority: 0.8 },
        { url: '/isolationtransformer', changefreq: 'weekly', priority: 0.8 },
        { url: '/liftinverter', changefreq: 'weekly', priority: 0.8 },
        { url: '/singlephaseups', changefreq: 'weekly', priority: 0.8 },
        { url: '/smfbattery', changefreq: 'weekly', priority: 0.8 },
        { url: '/threephaseups', changefreq: 'weekly', priority: 0.8 },
        { url: '/tubularinverterbattery', changefreq: 'weekly', priority: 0.8 },
        { url: '/upsinverterbattery', changefreq: 'weekly', priority: 0.8 },
        { url: '/voltagestablizer', changefreq: 'weekly', priority: 0.8 },
    ];

    const stream = new SitemapStream({ hostname: 'https://sundarelectricservice.onrender.com' });
    links.forEach(link => stream.write(link));
    stream.end();

    const sitemap = await streamToPromise(stream);
    fs.writeFileSync('./public/sitemap.xml', sitemap.toString());
}

generateSitemap();
