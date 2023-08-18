$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
          {
            image: 'assets/images/kendalltiktok.png',
            link: 'https://www.tiktok.com/@bridal.buzz/video/7032289751189343534?_r=1&_t=8as79cxMBvn',
            title: 'Bridal Buzz Tiktok',
            demo: false,
            technologies: ['Social Media', 'TikTok'],
            description: "I helped brainstorm, design, and create the most viral TikTok for Bridal Buzz where we discuss wedding traditions.",
            categories: ['featured', 'webdev']
        },
        {
            image: 'assets/images/osubbimage.jpg',
            link: 'https://youtube.com/shorts/m6HroCnfnSQ?feature=share',
            title: 'OSU Basketball',
            demo: false, 
            technologies: ['TikTok', 'Photography'],
            description: "I edited an OSU basketball clip in After Effects.",
            categories: ['featured', 'diy']
        },
        {
            image: 'assets/images/overlayvideo.png',
            link: 'https://youtube.com/shorts/smFnn9zVNGQ?feature=share',
            title: 'OSU Football Hype Video',
            demo: false, 
            technologies: ['TikTok', 'Photography'],
            description: "I edited multiple OSU clips in After Effects.",
            categories: ['featured', 'diy']
        },
        {
            image: 'assets/images/juniorday.png',
            link: 'https://raw.githubusercontent.com/kendallnodorft/kendallnodorft.github.io/main/assets/images/juniorday.png',
            title: 'Instagram Story Graphic',
            demo: false, 
            technologies: ['Social Media'],
            description: "An Instagram Story Graphic for OSU.",
            categories: ['featured', 'diy']
        },
        {
            image: 'assets/images/carter2.jpg',
            link: 'https://raw.githubusercontent.com/kendallnodorft/kendallnodorft.github.io/main/assets/images/carter2.jpg',
            title: 'Carter in His Red Truck',
            demo: false, 
            technologies: ['DSLR Camera', 'Photography'],
            description: "I photographed my friend's child when we visited the farmers market together.",
            categories: ['featured', 'diy']
        },
        {
            image: 'assets/images/oak1.png',
            link: 'https://raw.githubusercontent.com/kendallnodorft/kendallnodorft.github.io/main/assets/images/oak1.png',
            title: 'Oakley Ray',
            demo: false, 
            technologies: ['DSLR Camera', 'After Effects'],
            description: "I photographed my dog, Oakley.",
            categories: ['featured', 'diy']
        },
        {
            image: 'assets/images/willow2.png',
            link: 'https://raw.githubusercontent.com/kendallnodorft/kendallnodorft.github.io/main/assets/images/willow2.png',
            title: 'Willow',
            demo: false, 
            technologies: ['DSLR Camera', 'Photography'],
            description: "I photographed my dog, Willow.",
            categories: ['diy']
        },
         {
            image: 'assets/images/kendalldrink.JPG',
            link: 'https://raw.githubusercontent.com/kendallnodorft/kendallnodorft.github.io/main/assets/images/kendalldrink.JPG',
            title: 'Wynwood - Miami',
            demo: false, 
            technologies: ['DSLR Camera', 'Photoshop'],
            description: "I photographed and edited my friend.",
            categories: ['diy']
        },
          {
            image: 'assets/images/willow1.png',
            link: 'https://raw.githubusercontent.com/kendallnodorft/kendallnodorft.github.io/main/assets/images/willow1.png',
            title: 'Willow',
            demo: false, 
            technologies: ['DSLR Camera', 'Photography'],
            description: "I photographed my dog, Willow.",
            categories: ['featured', 'diy']
        },
         {
            image: 'assets/images/OakieRay.jpg',
            link: 'https://raw.githubusercontent.com/kendallnodorft/kendallnodorft.github.io/main/assets/images/OakieRay.jpg',
            title: 'Oakley Ray',
            demo: false, 
            technologies: ['Photoshop', 'Graphic Design'],
            description: "A vector art graphic I created in Photoshop of my dog, Oakley Ray.",
            categories: ['featured', 'diy', 'security']
        },
        {
            image: 'assets/images/butler poster.png',
            link: 'https://raw.githubusercontent.com/kendallnodorft/kendallnodorft.github.io/main/assets/images/butler%20poster.png',
            title: 'Jimmy Butler Poster',
            demo: false,
            technologies: ['Poster', 'Photoshop'],
            description: "A Miami Heat - Jimmy Butler Poster.",
            categories: ['featured', 'security']
        },
        {
            image: 'assets/images/shaibasketballposter.png',
            link: 'https://raw.githubusercontent.com/kendallnodorft/kendallnodorft.github.io/main/assets/images/shaibasketballposter.png',
            title: 'Shai Gilgeous-Alexander Poster',
            demo: false,
            technologies: ['Poster', 'Photoshop'],
            description: "Oklahoma City Thunder - Shai Poster.",
            categories: ['featured', 'security']
        },
        {
            image: 'assets/images/field%20chicago%20bears.png',
            link: 'https://raw.githubusercontent.com/kendallnodorft/kendallnodorft.github.io/main/assets/images/field%20chicago%20bears.png',
            title: 'Social post graphic featuring the Chicago Bears Quater Back - Justin Fields.',
            demo: false,
            technologies: ['Poster', 'Photoshop'],
            description: "Chicago Bears - Graphic.",
            categories: ['featured']
        },
     {
            image: 'assets/images/UFC WATCH PARTY.png',
            link: 'https://raw.githubusercontent.com/kendallnodorft/kendallnodorft.github.io/main/assets/images/UFC WATCH PARTY.png',
            title: 'Freelance Work',
            demo: false,
            technologies: ['Poster', 'Photoshop'],
            description: "A UFC social media graphic I did as freelance work.",
            categories: ['diy']
        },
        {
            image: 'assets/images/draft%20pickhiggins.png',
            link: 'https://raw.githubusercontent.com/kendallnodorft/kendallnodorft.github.io/main/assets/images/draft%20pickhiggins.png',
            title: 'Miami Doplphins Draft Pick Graphic',
            demo: false,
            technologies: ['Poster', 'Photoshop'],
            description: "Elijah Higgins 2023 NFL Draft Pick graphic for the Miami Dolphins.",
            categories: ['security']
        },
        {
            image: 'assets/images/finphoto.jpg',
            link: 'https://raw.githubusercontent.com/kendallnodorft/kendallnodorft.github.io/main/assets/images/finphoto.jpg',
            title: 'Finn',
            demo: false, 
            technologies: ['Photoshop', 'Graphic Design'],
            description: "A vector art graphic I created in Photoshop of my friends dog, Finn.",
            categories: ['featured', 'diy']
        },
        {
            image: 'assets/images/siroaksalot.png',
            link: 'https://raw.githubusercontent.com/kendallnodorft/kendallnodorft.github.io/main/assets/images/siroaksalot.jpg',
            title: 'Renaissance Dog Portrait',
            demo: false,
            technologies: ['Graphic Design', 'Photoshop'],
            description: "A oil painting of my dog, Oakley created in Photoshop.",
            categories: ['featured', 'diy', 'security']
        },
         {
            image: 'assets/images/cat2.png',
            link: 'https://raw.githubusercontent.com/kendallnodorft/kendallnodorft.github.io/main/assets/images/cat2.png',
            title: 'Farmers Market Cat',
            demo: false,
            technologies: ['DSLR Camera', 'Photography'],
            description: "I photographed a cat at the farmers market.",
            categories: ['featured', 'diy', 'security']
        },
        
         {
            image: 'assets/images/brandoncrawfordposter.png',
            link: 'https://raw.githubusercontent.com/kendallnodorft/kendallnodorft.github.io/6cf58fcd0a3f7803bba3011042bb59bca317ba6b/assets/images/brandoncrawfordposter.png',
            title: 'Brandon Crawford Poster',
            demo: false,
            technologies: ['Poster', 'Photoshop'],
            description: "A San Francisco Giants - Brandon Crawford Poster.",
            categories: ['featured', 'security']
        }, 
        {
            image: 'assets/images/black magic woman poster (1)-01.png',
            link: 'https://raw.githubusercontent.com/kendallnodorft/kendallnodorft.github.io/a1e9992f6ff5c5744b1d234cda899dfb25dca8c8/assets/images/black%20magic%20woman%20poster%20(1)-01.png',
            title: 'Santana - Black Magic Woman Poster',
            demo: false,
            technologies: ['Poster', 'Photoshop'],
            description: "A Poster based off Santana's song 'Black Magic Woman'.",
            categories: ['security']
        },
        {
            image: 'assets/images/midjourney.jpeg',
            link: 'https://raw.githubusercontent.com/kendallnodorft/kendallnodorft.github.io/main/assets/images/midjourney.jpeg',
            title: 'Midjourney',
            demo: false,
            technologies: ['AI', 'Photoshop'],
            description: "AI generated art with Midjourney.",
            categories: ['diy', 'security']
        },
        {
            image: 'assets/images/tylerchilders-ladymay.png',
            link: 'https://raw.githubusercontent.com/kendallnodorft/kendallnodorft.github.io/main/assets/images/tylerchilders-ladymay.png',
            title: 'Tyler Childers',
            demo: false,
            technologies: ['Canva', 'Graphic Design'],
            description: "I created a poster of one of my favorite country singers, Tyler Childers. The words depict lyrics from his song 'Lady May.' ",
            categories: ['diy', 'security']
        },
            {
            image: 'assets/images/rangersbaseball.png',
            link: 'https://raw.githubusercontent.com/kendallnodorft/kendallnodorft.github.io/main/assets/images/rangersbaseball.png',
            title: 'Rangers Poster',
            demo: false,
            technologies: ['Poster', 'Photoshop'],
            description: "A Rangers Poster using a watercolor effect.",
            categories: ['security']
        },
        {
            image: 'assets/images/clairo.png',
            link: 'https://raw.githubusercontent.com/kendallnodorft/kendallnodorft.github.io/main/assets/images/clairo.png',
            title: 'Clairo',
            demo: false,
            technologies: ['Magazine', 'InDesign'],
            description: "A sample magazine layout I designed of Clairo and her work.",
            categories: ['security']
        },
        {
            image: 'assets/images/kendallpodcast2.png',
            link: 'https://www.youtube.com/watch?v=XLxqasSqulY',
            title: 'Engaged in SA: Kat and Jackson',
            demo: false,
            technologies: ['Podcast', 'Interview'],
            description: "In this episode I interview my boss and her fiance about their engagement story. I also helped produced this content.",
            categories: ['webdev']
        },      
        {
            image: 'assets/images/dallasfarmersmarket.jpg',
            link: 'https://raw.githubusercontent.com/kendallnodorft/kendallnodorft.github.io/main/assets/images/dallasfarmersmarket.jpg',
            title: 'Dallas Farmers Market',
            demo: false,
            technologies: ['DSLR Camera', 'Photography'],
            description: "A vintage truck I spotted at the farmers market.",
            categories: ['diy', 'security']
        },
        {
            image: 'assets/images/christmas.png',
            link: 'https://raw.githubusercontent.com/kendallnodorft/kendallnodorft.github.io/main/assets/images/christmas.png',
            title: 'Khruangbin',
            demo: false,
            technologies: ['Indesign', 'Magazine'],
            description: "A sample magazine layout I designed for my favorite Khruangbin song.",
            categories: ['security']
        },
        {
            image: 'assets/images/kendallpodcast.png',
            link: 'https://www.youtube.com/watch?v=MwRUKHRySHk&t=23s',
            title: 'Bridal Buzz Takeover',
            demo: false, 
            technologies: ['Podcast', 'Interview'],
            description: "In this episode I interview my bosses, Kat Gualy and Erika Perez, about women in media. I also produced and edited this content. ",
            categories: ['webdev']
        },
        {
            image: 'assets/images/iestwitter.png',
            link: 'https://twitter.com/IESHealthcare',
            title: 'Integrative Emergency Services Twitter',
            demo: false,
            technologies: ['Social Media', 'Twitter', 'Canva'],
            description: "I am primarily responsible for designing and creating all Twitter posts for Integrative Emergency Services (@IESHealthcare).",
            categories: ['native']
        },
        {
            image: 'assets/images/iespamphlet2.png',
            link: 'https://raw.githubusercontent.com/kendallnodorft/kendallnodorft.github.io/main/assets/images/iespamphlet2.png',
            title:'Integrative Emergency Services Pamphlet',
            demo: false,
            technologies: ['Canva', 'Print Design'],
            description: "A pamphlet I designed to showcase fellowship opportunities within Integrative Emergency Services.",
            categories: ['native', 'security']
        },
        {
            image: 'assets/images/iesyoutube.png',
            link: 'https://www.youtube.com/@integrativeemergencyservic6576',
            title: 'Integrative Emergency Services YouTube',
            demo: false,
            technologies: ['DIY'],
            description: "I designed and created this video among others featured on the YouTube channel of Integrative Emergency Services.",
            categories: ['native']
        },
        {
            image: 'assets/images/bbdog.png',
            link: 'https://raw.githubusercontent.com/kendallnodorft/kendallnodorft.github.io/main/assets/images/bbdog.png',
            title: 'Bridal Buzz Social Post',
            demo: false,
            technologies: ['Social Media', 'Instagram'],
            description: "I designed and created this social post among others for Bridal Buzz.",
            categories: ['webdev']
        },
        {
            image: 'assets/images/pride.png',
            link: 'https://raw.githubusercontent.com/kendallnodorft/kendallnodorft.github.io/main/assets/images/pride.png',
            title: 'KTSW Pride Songs Poster',
            demo: false,
            technologies: ['Print', 'Design'],
            description: "I located with the music department at KTSW radio station to create a LGBTQ+ playlist." ,
            categories: ['security']
        },
        {
            image: 'assets/images/bbtiktok2.png',
            link: 'https://www.tiktok.com/@bridal.buzz/video/7026011250190585135?_r=1&_t=8at66YjRxvy',
            title: 'Bridal Buzz - Freesia Designs',
            demo: false,
            technologies: ['Social Media', 'TikTok'],
            description: "I designed and created this TikTok for Bridal Buzz.",
            categories: ['webdev']
        },
        {
            image: 'assets/images/cuco.png',
            link: 'https://raw.githubusercontent.com/kendallnodorft/kendallnodorft.github.io/main/assets/images/cuco.png',
            title: 'Cuco Magazine Cover',
            demo: false,
            technologies: ['InDesign', 'Magazine'],
            description: "A sample magazine layout I designed for Cuco.",
            categories: ['security']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}
