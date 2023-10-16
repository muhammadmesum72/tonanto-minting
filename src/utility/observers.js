export const createObserver = (setOpenTab, navLinks) => {

    //Select components
    const about = document.querySelector("#about");
    const mintNft = document.querySelector("#mintNft");
    const roadmap = document.querySelector("#roadmap");
    const awards = document.querySelector("#awards");
    const links = document.querySelector("#links");

    //configure options
    let options = {
        root: document.querySelector("#scrollArea"),
        rootMargin: "10px",
        threshold: 0.75,
    };


    //create observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            navLinks.forEach(({ href, id }) => {
                if (href === entry.target.id && entry.isIntersecting)
                    setOpenTab(id)
            })
        });

    }, options);


    //observe scroll
    observer.observe(links);
    observer.observe(awards);
    observer.observe(roadmap);
    observer.observe(mintNft);
    observer.observe(about);



};