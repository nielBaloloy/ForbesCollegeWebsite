const newsItems = [
    {
        title: "Coming Soon",
        date: "TBA",
        image: "./assets/img/ccje/Screenshot 2023-12-14 101258.png",
        caption: "Sample"
    },
    {
        title: "Forbes College lauds the pioneer batch of B.S. in Criminology for passing the Criminologist Board Examination held on Feb. 2-4, 2024",
        date: "July 9, 2024",
        image: "./assets/img/ccje/tarpCRIM.jpg",
        caption: "Forbes College lauds the pioneer batch of B.S. in Criminology for passing the Criminologist Board Examination held on Feb. 2-4, 2024. These Registered Criminologists are the first products of Forbes College’s B.S. in Criminology which had its “birth” in 2019."
    },
    {
        title: "PROJECT: A.B.K.D (Awareness of Bombs that Kill lives and Destroy properties)",
        date: "March 26, 2024",
        image: "./assets/img/ccje/newscrim.jpg",
        caption: "As part of Forbes College’s commitment to equip BS in Criminology students with technical skills needed for their future career, the College of Criminal Justice Education sponsor a forum termed as “PROJECT: A.B.K.D (Awareness of Bombs that Kill lives and Destroy properties).” This one-day undertaking, to be held on March 26, 2024, is in coordination with the PNP Explosive Ordinance (EOD) and Canine Group."
    },
    {
        title: "Forbesians underwent a three-day mind sharpening session",
        date: "September 7, 2023",
        image: "./assets/img/Screenshot 2023-12-31 004150.png",
        caption: "On September 2,4,6, 2023, Forbesians underwent a three-day mind sharpening session with Mr. Roberto “Memory Man” M. Racasa who is a five-time representative of the Philippines to the World Memory Championships. The CCJE pioneer graduates, third and fourth year students who attended the Memory Program at the Forbes College Main Library had doses of mind mapping, super memory, rapid reading, excellent focus and memorization, and other activities that boost one’s brain functions."
    },
    {
        title: "The Opening Ceremonies of the 21st Regional Inter-CCJE Skills Olympics 2023",
        date: "May 3, 2023",
        image: "./assets/img/ccje/Screenshot 2023-12-14 101258.png",
        caption: "The Opening Ceremonies of the 21st Regional Inter-CCJE Skills Olympics 2023 was made colorful by the CCJE delegates and was graced by Dr. Michael M. Millare - CHED Education Supervisor, Dr. Wilmor T. Plopino - CODCJE President, Atty. Joan Elizabeth L. Aquende - Forbes College President, and Dr. Valiente G. Tebia - Dean, FC CCJE."
    }

];

const itemsPerPage = 1; // Items per page
let currentPage = 1;

function displayItems(pageNumber) {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageItems = newsItems.slice(startIndex, endIndex);

    const contentDiv = document.getElementById('page-content');
    contentDiv.innerHTML = '';

    pageItems.forEach(item => {
        const newsItemHTML = `
            <div class="row mb-3">
                <div class="col-md-12">
                    <figure>
                        <img src="${item.image}" alt="News Image" class="img-fluid">
                        <h4 class="mt-5">${item.title}</h4>
                        <p class="news-caption mt-3">${item.caption}</p>
                    </figure>
                </div>
                <div class="pt-1">
                    <p2>Forbes College</p2><br>
                    <p2>Published on ${item.date}</p2>
                </div>
            </div>
        `;
        contentDiv.innerHTML += newsItemHTML;
    });
}

function setupPagination() {
    const totalPages = Math.ceil(newsItems.length / itemsPerPage);
    const paginationUl = document.getElementById('pagination');
    paginationUl.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        li.classList.add('page-item');

        const link = document.createElement('a');
        link.classList.add('page-link');
        link.href = '#';
        link.textContent = i;

        if (i === currentPage) {
            li.classList.add('active');
        }

        link.addEventListener('click', function(event) {
            event.preventDefault();
            currentPage = i;
            displayItems(currentPage);

            const currentActive = paginationUl.querySelector('.active');
            if (currentActive) {
                currentActive.classList.remove('active');
            }
            li.classList.add('active');
        });

        li.appendChild(link);
        paginationUl.appendChild(li);
    }
}

displayItems(currentPage);
setupPagination();