function searchPage() {

    const term = document.getElementById("searchInput")
        .value.toLowerCase();

    const pages = {
        internet: "pages/internet.html",
        cpu: "pages/cpu.html",
        ram: "pages/ram.html",
        gpu: "pages/gpu.html",
        ssd: "pages/ssd.html"
    };

    if (pages[term]) {
        window.location.href = pages[term];
    } else {
        alert("Pojem nebyl nalezen.");
    }
}