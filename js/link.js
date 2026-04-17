document.addEventListener("DOMContentLoaded", () => {
    const trigger1 = document.querySelector(".trigger1");
    const trigger2 = document.querySelector(".trigger2");
    if (
        document
            .querySelector('a[href="/?page=login"]')
            .hasAttribute("style", "display:none")
    ) {
        console.log("Login link is hidden");
        trigger1.parentElement.setAttribute(
            "style",
            "display:block; position:relative;"
        );
        trigger2.parentElement.setAttribute(
            "style",
            "display:block; position:relative;"
        );
    }
});