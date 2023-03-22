$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/OakieRay.jpg',
            link: 'https://raw.githubusercontent.com/kendallnodorft/kendallnodorft.github.io/main/assets/images/OakieRay.jpg',
            title: 'Oakley Ray',
            demo: false, 
            technologies: ['Photoshop'],
            description: "A vector art graphic I created in Photoshop of my dog, Oakley Ray.",
            categories: ['featured', 'security']
        },
        {
            image: 'assets/images/carter2.jpg',
            link: 'https://raw.githubusercontent.com/kendallnodorft/kendallnodorft.github.io/main/assets/images/carter2.jpg',
            title: 'Carter in His Red Truck',
            demo: false, 
            technologies: ['DSLR Camera', 'Photography'],
            description: "I photographed my friend's child when we visited the farmers market together.",
            categories: ['featured', 'security']
        },
        {
            image: 'assets/images/kendallpodcast.png',
            link: 'https://www.youtube.com/watch?v=MwRUKHRySHk&t=23s',
            title: 'Bridal Buzz Podcast',
            demo: false, 
            technologies: ['Podcast', 'Interview'],
            description: "Here is a podcast I produced and edited while at Bridal Buzz.",
            categories: ['featured', 'webdev']
        },
        {
            image: 'assets/images/tylerchilders-ladymay.png',
            link: 'https://raw.githubusercontent.com/kendallnodorft/kendallnodorft.github.io/main/assets/images/tylerchilders-ladymay.png',
            title: 'Tyler Childers',
            demo: false,
            technologies: ['Canva', 'Graphic Design'],
            description: "I created a poster of one of my favorite country singers, Tyler Childer. The words depict lyrics from his song 'Lady May.' ",
            categories: ['featured', 'security']
        },
        {
            image: 'assets/images/clairo.png',
            link: 'https://raw.githubusercontent.com/kendallnodorft/kendallnodorft.github.io/main/assets/images/clairo.png',
            title: 'Clairo',
            demo: false,
            technologies: ['Magazine', 'InDesign'],
            description: "A sample magazine layout I designed of Clairo and her work.",
            categories: ['native']
        },
        {
            image: 'assets/images/data-destroyer.png',
            link: 'https://github.com/abhn/data-destroyer-gui',
            title: 'Data Destroyer',
            demo: false,
            technologies: ['C++', 'Qt'],
            description: "Native GUI wrapper for GNU coreutils tool 'dd'",
            categories: ['native']
        },
        {
            image: 'assets/images/raspberry-pi-monitor.png',
            link: 'https://github.com/abhn/RPi-Status-Monitor',
            title: 'Raspberry Pi Monitor',
            demo: false,
            technologies: ['python', 'flask'],
            description: "Web based status monitor/smart mirror, displays system stats, weather and more.",
            categories: ['webdev', 'diy']
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
            image: 'assets/images/elementary.png',
            link: 'https://github.com/abhn/Elementary',
            title: 'Elementary',
            demo: 'https://elementary-jekyll.github.io/',
            technologies: ['Jekyll', 'CSS3'],
            description: "Elementary is a zero Javascript and minimal CSS ultra lightweight Jekyll theme for those of you who love simplicity.",
            categories: ['webdev']
        },
        {
            image: 'assets/images/soot-spirits.png',
            link: 'https://github.com/abhn/Soot-Spirits',
            title: 'Soot Spirits',
            demo: 'https://sootspirits.github.io',
            technologies: ['Jekyll', 'CSS3'],
            description: "A simple responsive two column Jekyll theme. Great for personal blog and basic portfolio website.",
            categories: ['webdev']
        },
        {
            image: 'assets/images/python-chat.png',
            link: 'https://www.nagekar.com/2014/12/lan-group-messenger-in-python.html',
            title: 'Terminal Group Chat',
            demo: false,
            technologies: ['Python', 'Sockets'],
            description: "Simple terminal group chat based on native sockets using Python.",
            categories: ['native']
        },
        {
            image: 'assets/images/old-lcd.jpg',
            link: 'https://www.nagekar.com/2018/05/reusing-old-laptop-lcd-panel.html',
            title: 'Reusing Old LCD Panel',
            demo: false,
            technologies: ['DIY'],
            description: "Reusing a dead laptop's LCD panel as a secondary monitor.",
            categories: ['diy']
        },
        {
            image: 'assets/images/nextcloud-enc.png',
            link: 'https://www.nagekar.com/2017/08/private-cloud-part-2.html',
            title: 'Encrypted Self-Hosted Cloud',
            demo: false,
            technologies: ['NextCloud', 'GnuPG'],
            description: "Self hosted encrypted cloud setup with Nextcloud and GnuPG.",
            categories: ['diy', 'security']
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
