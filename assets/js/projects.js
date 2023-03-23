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
            image: 'assets/images/carter2.jpg',
            link: 'https://raw.githubusercontent.com/kendallnodorft/kendallnodorft.github.io/main/assets/images/carter2.jpg',
            title: 'Carter in His Red Truck',
            demo: false, 
            technologies: ['DSLR Camera', 'Photography'],
            description: "I photographed my friend's child when we visited the farmers market together.",
            categories: ['featured', 'diy']
        },
         {
            image: 'assets/images/OakieRay.jpg',
            link: 'https://raw.githubusercontent.com/kendallnodorft/kendallnodorft.github.io/main/assets/images/OakieRay.jpg',
            title: 'Oakley Ray',
            demo: false, 
            technologies: ['Photoshop', 'Graphic Design'],
            description: "A vector art graphic I created in Photoshop of my dog, Oakley Ray.",
            categories: ['featured', 'diy']
        },
        {
            image: 'assets/images/tylerchilders-ladymay.png',
            link: 'https://raw.githubusercontent.com/kendallnodorft/kendallnodorft.github.io/main/assets/images/tylerchilders-ladymay.png',
            title: 'Tyler Childers',
            demo: false,
            technologies: ['Canva', 'Graphic Design'],
            description: "I created a poster of one of my favorite country singers, Tyler Childer. The words depict lyrics from his song 'Lady May.' ",
            categories: ['featured', 'diy']
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
            title: 'Bridal Buzz Podcast',
            demo: false,
            technologies: ['Podcast', 'Interview'],
            description: "This is another podcast I produced and edited while at Bridal Buzz.",
            categories: ['webdev']
        },      
        {
            image: 'assets/images/dallasfarmersmarket.jpg',
            link: 'https://raw.githubusercontent.com/kendallnodorft/kendallnodorft.github.io/main/assets/images/dallasfarmersmarket.jpg',
            title: 'Dallas Farmers Market',
            demo: false,
            technologies: ['DSLR Camera', 'Photography'],
            description: "A vintage truck I spotted at the farmers market.",
            categories: ['security']
        },
        {
            image: 'assets/images/christmas.png',
            link: 'https://raw.githubusercontent.com/kendallnodorft/kendallnodorft.github.io/main/assets/images/christmas.png',
            title: 'Khrungbin',
            demo: false,
            technologies: ['Indesign', 'Magazine'],
            description: "A sample magazine layout I designed for my favorite Khrungbin song.",
            categories: ['security']
        },
        {
            image: 'assets/images/kendallpodcast.png',
            link: 'https://www.youtube.com/watch?v=MwRUKHRySHk&t=23s',
            title: 'Bridal Buzz Podcast',
            demo: false, 
            technologies: ['Podcast', 'Interview'],
            description: "This is a podcast I produced and edited while at Bridal Buzz.",
            categories: ['featured', 'webdev']
        },
        {
            image: 'assets/images/iestwitter.png',
            link: 'https://twitter.com/IESHealthcare',
            title: 'Integrative Emergency Services Twitter',
            demo: false,
            technologies: ['Social Media', 'Twitter', 'Graphic Design'],
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
            categories: ['native']
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
            image: 'assets/images/google-cloud-backup.png',
            link: 'https://www.nagekar.com/2018/05/encrypted-backup-with-duplicity.html',
            title: 'Encrypted Backups - Google Cloud',
            demo: false,
            technologies: ['NextCloud', 'Duplicity'],
            description: "Create automated encrypted incremental backups of data. Sync everything securely to Google Cloud.",
            categories: ['diy', 'security']
        },
        {
            image: 'assets/images/pi-cloud.jpg',
            link: 'https://www.nagekar.com/2016/01/how-to-private-local-cloud-using-raspberrypi.html',
            title: 'Local Cloud - Raspberry Pi',
            demo: false,
            technologies: ['FTP', 'DIY'],
            description: "Host a local cloud server with a Raspberry Pi and a spare hard disk. Access data instantaneously on any device on the network.",
            categories: ['diy']
        },
        {
            image: 'assets/images/koalamate.png',
            link: 'https://github.com/abhn/koalamate',
            title: 'Koalamate',
            demo: false,
            technologies: ['Electron', 'Javascript'],
            description: "A cross-platform desktop application that serves as a Wolfram Alpha query place and notes taker.",
            categories: ['native']
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
