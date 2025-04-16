document.addEventListener("DOMContentLoaded", function () {
  // ハンバーガーメニューの実装
  const hamburger = document.getElementById("hamburger");
  const nav = document.querySelector(".header__nav");

  if (hamburger) {
    hamburger.addEventListener("click", function () {
      this.classList.toggle("active");
      nav.classList.toggle("active");
    });
  }

  // メニューリンククリック時にメニューを閉じる
  const navLinks = document.querySelectorAll(".header__nav-list a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      nav.classList.remove("active");
    });
  });

  // FAQアコーディオンの実装
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-item__question");

    question.addEventListener("click", function () {
      // アクティブクラスの切り替え
      item.classList.toggle("active");

      // 他のアコーディオンを閉じる
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });
    });
  });

  // スクロール時のヘッダー背景色変更
  const header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    } else {
      header.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    }
  });

  // スムーススクロール
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const offsetTop =
          targetElement.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // フォーム送信処理
  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // 簡易的なバリデーション
      const name = this.querySelector("#name").value;
      const email = this.querySelector("#email").value;

      if (!name || !email) {
        alert("必須項目を入力してください");
        return;
      }

      // 実際のプロジェクトではここにフォーム送信処理を追加
      alert("送信が完了しました。ありがとうございます！");
      this.reset();
    });
  }

  // 初期表示時に最初のFAQを開く
  if (faqItems.length > 0) {
    faqItems[0].classList.add("active");
  }
});
