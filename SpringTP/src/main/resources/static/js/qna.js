// qna.js
document.addEventListener("DOMContentLoaded", () => {
  const writeBtn = document.querySelector(".write-btn");
  if (writeBtn) {
    writeBtn.addEventListener("click", () => {
      window.location.href = "/board/qna/write";
    });
  }

  // 게시글 클릭 시 상세 페이지로 이동
  document.querySelectorAll(".post-item").forEach((item) => {
    item.addEventListener("click", () => {
      const postId = item.getAttribute("data-id");
      if (postId) {
        window.location.href = `/board/qna/view?id=${postId}`;
      }
    });
  });


  // 페이지네이션
  const pagination = document.querySelector(".pagination");
  if (pagination) {
    const pages = pagination.querySelectorAll("a");
    let currentPage = 1;

    function setActivePage(pageNum) {
      pages.forEach((page) => page.classList.remove("active"));
      pages[pageNum].classList.add("active");
      currentPage = pageNum;
    }

    pages.forEach((page, index) => {
      page.addEventListener("click", (e) => {
        e.preventDefault();
        const label = page.textContent.trim();

        if (label === "Prev" && currentPage > 1) {
          setActivePage(currentPage - 1);
        } else if (label === "Next" && currentPage < pages.length - 2) {
          setActivePage(currentPage + 1);
        } else if (!isNaN(Number(label))) {
          setActivePage(index);
        }
      });
    });
  }
});
