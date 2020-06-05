const projData = [{"project":"The virus’s tale","url":"https://apps.bostonglobe.com/metro/graphics/2020/05/coronavirus-tale/","org":"The Boston Globe","img":"coronavirus-tale-og.jpg"},
{"project":"Coronavirus deaths in Mass. are likely far higher than what’s been reported. Here’s why","url":"https://www.bostonglobe.com/2020/04/22/nation/official-toll-massachusetts-coronavirus-deaths-likely-undercounted-review-shows/","org":"The Boston Globe","img":"https://bostonglobe-prod.cdn.arcpublishing.com/resizer/6vUM1pxTNJi5-uV8OpZrqlUckYI=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/TFUVTTODH6XSVP6AVDGY5X5AMU.jpg"},
{"project":"How overwhelmed could New England hospitals become? Explore maps of different scenarios","url":"https://www.bostonglobe.com/2020/03/26/nation/how-overwhelmed-could-new-england-hospitals-become-explore-maps-different-scenarios/","org":"The Boston Globe","img":"https://bostonglobe-prod.cdn.arcpublishing.com/resizer/It_ElsukaYmpbH312-Anx_cHbhg=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/CBSAPTBWBBHLRHUHNFINSKFRFY.jpg"},
{"project":"Seeing Red: A Spotlight report on traffic and congestion in metro Boston ","url":"https://apps.bostonglobe.com/metro/investigations/spotlight/2019/11/19/seeing-red/","org":"The Boston Globe","img":"https://apps.bostonglobe.com/metro/investigations/spotlight/2019/11/19/seeing-red/assets/images/optimized/ryantrafficrush3spotlight_1280.jpg"},
{"project":"At the edge of a warming world","url":"https://apps.bostonglobe.com/metro/2019/09/26/cape-cod-climate-change/story/","org":"The Boston Globe","img":"https://apps.bostonglobe.com/metro/2019/09/26/cape-cod-climate-change/assets/images/landing_1280.jpg"},
{"project":"The Valedictorians Project: What became of Boston's brightest?","url":"https://apps.bostonglobe.com/magazine/graphics/2019/01/17/valedictorians/","org":"The Boston Globe","img":"landingcover_1200.jpg"},
{"project":"Who’s running for president in 2020?","url":"https://apps.bostonglobe.com/news/politics/graphics/2019/03/president-2020-candidates/","org":"The Boston Globe","img":"og-2020.jpg"},
{"project":"What the Mueller report says about Trump and more","url":"https://apps.bostonglobe.com/news/politics/graphics/2019/03/mueller-report/","org":"The Boston Globe","img":"report_topper.jpg"},
{"project":"Here’s how the Patriots Super Bowl roster evolved around Tom Brady","url":"https://apps.bostonglobe.com/sports/graphics/2019/02/03/superbowl-2019-patriots-roster-brady/","org":"The Boston Globe","img":"og.jpg"},
{"project":"Inside the secret courts of Massachusetts","url":"https://apps.bostonglobe.com/metro/investigations/spotlight/secret-courts-in-massachusetts/","org":"The Boston Globe","img":"secret_og_1200.jpg"},
{"project":"Gladiator: The story of Aaron Hernandez and Football Inc.","url":"https://apps.bostonglobe.com/spotlight/gladiator/","org":"The Boston Globe","img":"gladiator_og.jpg"},
{"project":"Elections 2018","url":"https://www3.bostonglobe.com/elections/2018/?arc404=true","org":"The Boston Globe","img":"https://apps.bostonglobe.com/elections/2018/assets/images/election_us_og.jpg"},
{"project":"What happened when Boston Public Schools tried for equity with an algorithm","url":"https://apps.bostonglobe.com/ideas/graphics/2018/09/equity-machine/","org":"The Boston Globe","img":"https://apps.bostonglobe.com/ideas/graphics/2018/09/equity-machine/assets/og.jpg"},
{"project":"Journalists are not the enemy","url":"https://apps.bostonglobe.com/opinion/graphics/2018/08/freepress/","org":"The Boston Globe","img":"https://apps.bostonglobe.com/opinion/graphics/2018/08/freepress/assets/freepress_og.jpg"},
{"project":"Traffic, crowding, cancellations: This MBTA route shows all the T’s bus problems","url":"https://apps.bostonglobe.com/metro/graphics/2018/08/111-bus/","org":"The Boston Globe","img":"https://apps.bostonglobe.com/metro/graphics/2018/08/111-bus/assets/img/bus_og_1200.jpg"},
{"project":"The case for ending Google’s Internet domination","url":"https://apps.bostonglobe.com/opinion/graphics/2018/06/break-google/","org":"The Boston Globe","img":"break.gif"},
{"project":"Doctors and sex abuse: How well does your state protect patients?","url":"https://doctors.ajc.com/states/","org":"Atlanta Journal-Constitution","img":"http://s3.amazonaws.com/ajc-doctors-images/Doc-stethoscope-intro_social.jpg"},
{"project":"Families, not job seekers, gain the most from legal immigration","url":"https://www.ajc.com/news/gen-politics/families-not-job-seekers-gain-the-most-from-legal-immigration/mMeYq4d9MuXy4d5TwCvOPJ/","org":"Atlanta Journal-Constitution","img":"https://www.ajc.com/rf/image_lowres/Pub/p8/MyAJC/2017/08/07/Images/green-cards_by-categ-460-460.png"},
{"project":"Which are Georgia's winning industries?","url":"https://www.ajc.com/business/which-are-georgia-winning-and-losing-job-industries-since-2000/8eIZ0Q6X1NfMjk3KEYSsZJ/","org":"Atlanta Journal-Constitution","img":"https://s3.amazonaws.com/ajc-staging-sites/georgia-industries/img/trade-all.jpg"},
{"project":"How Georgia’s Sixth Congressional District voted","url":"https://www.ajc.com/news/gen-politics/how-each-neighborhood-voted-the-6th-district-runoff/72ZamHK2RQLoVsvFhcfWjM/","org":"Atlanta Journal-Constitution","img":"map-precinct.jpg"},
{"project":"After Virginia, Georgia has the most Confederate symbols in the country","url":"https://www.ajc.com/news/state--regional-govt--politics/after-virginia-georgia-has-the-most-confederate-symbols-the-country/vZPnQ2kGSd9xgURzS5kJiJ/","org":"Atlanta Journal-Constitution","img":"https://www.ajc.com/rf/image_lowres/Pub/p8/AJC/2017/08/18/Images/newsEngin.19603242_030616_IN_stone1.jpg"},
{"project":"The Ultimate Atlanta School Guide","url":"https://schools.ajc.com/#/schools","org":"Atlanta Journal-Constitution","img":"https://schools.ajc.com/images/school.jpg"}];

const projects = d3.select('#code-projects')
  .selectAll('.portfolio-item')
  .data(projData)
  .join('div')
  .attr('class', 'portfolio-item');

const links = projects
  .append('a')
  .attr('href', d => d.url);

const divs = links
  .append('div')
  .attr('class', 'portfolio-item__img');

divs.append('img')
  .attr('src', d => d.img.indexOf('http') > -1 ? d.img : 
    d.project.indexOf('Sixth Congressional') > -1 
    ? 'assets/map-precinct.jpg' :
    `${d.url}assets/images/${d.img}`);

divs.append('h3')
  .attr('class', 'portfolio-item__title')
  .text(d => d.project);

divs.append('p')
  .attr('class', 'portfolio-item__org')
  .append('span')
  .text(d => d.org);