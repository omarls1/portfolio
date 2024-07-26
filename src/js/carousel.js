export const carousel = () => {
  const prev = document.querySelector(".prev-btn");
  const next = document.querySelector(".next-btn");
  const center = document.querySelector(".center-btn");
  const list = document.querySelector(".list");
  const width = list.scrollWidth / list.childElementCount; // عرض كل عنصر

  prev.addEventListener("click", () => {
    list.scrollLeft -= width + 200; // التمرير للخلف بمقدار عرض عنصر واحد
  });

  center.addEventListener("click", () => {
    list.scrollLeft = (list.scrollWidth - list.clientWidth) / 2; // التمرير إلى المركز
  });

  next.addEventListener("click", () => {
    list.scrollLeft += width + 200; // التمرير للأمام بمقدار عرض عنصر واحد
  });
};
