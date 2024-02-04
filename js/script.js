/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

(function ($) {
  "use strict";

  // testimonial-wrap
  if ($(".testimonial-wrap").length !== 0) {
    $(".testimonial-wrap").slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 6000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  // navbarDropdown
  if ($(window).width() < 992) {
    $("#navbar .dropdown-toggle").on("click", function () {
      $(this).siblings(".dropdown-menu").animate(
        {
          height: "toggle",
        },
        300
      );
    });
  }

  $(window).on("scroll", function () {
    //.Scroll to top show/hide
    if ($("#scroll-to-top").length) {
      var scrollToTop = $("#scroll-to-top"),
        scroll = $(window).scrollTop();
      if (scroll >= 200) {
        scrollToTop.fadeIn(200);
      } else {
        scrollToTop.fadeOut(100);
      }
    }
  });
  // scroll-to-top
  if ($("#scroll-to-top").length) {
    $("#scroll-to-top").on("click", function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        600
      );
      return false;
    });
  }

  // portfolio-gallery
  if ($(".portfolio-gallery").length !== 0) {
    $(".portfolio-gallery").each(function () {
      $(this)
        .find(".popup-gallery")
        .magnificPopup({
          type: "image",
          gallery: {
            enabled: true,
          },
        });
    });
  }

  // Counter
  if ($(".counter-stat").length !== 0) {
    $(".counter-stat").counterUp({
      delay: 10,
      time: 1000,
    });
  }
})(jQuery);

const todoUl = document.getElementById("todoUl");
const inputTodo = document.getElementById("inputTodo");

function listTodo() {
  const todo = document.createElement("li");
  todo.className = "border list-group-item";

  const todoCheck = document.createElement("input");
  todoCheck.className = "strikethrough";
  todoCheck.type = "checkbox";

  const todoSpan = document.createElement("span");
  todoSpan.className = "spanTodo";
  todoSpan.textContent = inputTodo.value;

  const todoDelete = document.createElement("button");
  todoDelete.className = "btn btn-danger float-right py-1 px-2";
  todoDelete.textContent = "DELETE";

  todoDelete.addEventListener("click", deleteTodo);

  todoUl.appendChild(todo);
  todo.appendChild(todoCheck);
  todo.appendChild(todoSpan);
  todo.appendChild(todoDelete);

  addLocalStorage();
}

function deleteTodo(event) {
  event.target.parentElement.remove();

  addLocalStorage();
}

function addLocalStorage() {
  const spanTodo = document.getElementsByClassName("spanTodo");
  const arraySpan = [];

  let i = 0;
  while (i < spanTodo.length) {
    arraySpan.push(spanTodo[i].textContent);
    i++;
  }
  localStorage.setItem("todos", JSON.stringify(arraySpan));
}

const localStorageData = JSON.parse(localStorage.getItem("todos"));
let i = 0;

while (i < localStorageData.length) {
  const todo = document.createElement("li");
  todo.className = "border list-group-item";

  const todoCheck = document.createElement("input");
  todoCheck.className = "strikethrough";
  todoCheck.type = "checkbox";

  const todoSpan = document.createElement("span");
  todoSpan.className = "spanTodo";
  todoSpan.textContent = localStorageData[i];

  const todoDelete = document.createElement("button");
  todoDelete.className = "btn btn-danger float-right py-1 px-2";
  todoDelete.textContent = "DELETE";

  todoDelete.addEventListener("click", deleteTodo);

  todoUl.appendChild(todo);
  todo.appendChild(todoCheck);
  todo.appendChild(todoSpan);
  todo.appendChild(todoDelete);
  i++;
}
