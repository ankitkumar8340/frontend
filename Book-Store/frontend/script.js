const books = document.querySelectorAll('.book');

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.body.className = entry.target.dataset.theme;
        }
    });

},{threshold: 0.10}
);

books.forEach(book => observer.observe(book));




