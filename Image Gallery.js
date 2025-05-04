const scrollContainer = document.querySelector(".gallery");
    const backBtn = document.getElementById("backBtn");
    const nextBtn = document.getElementById("nextBtn");
    const imageWidth = 210; // 200px + 10px gap

    nextBtn.addEventListener("click", () => {
      scrollContainer.scrollBy({
        left: imageWidth,
        behavior: "smooth"
      });
    });

    backBtn.addEventListener("click", () => {
      scrollContainer.scrollBy({
        left: -imageWidth,
        behavior: "smooth"
      });
    });

    scrollContainer.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
    });