// story slider
var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  slidesPerView: 6,
  mousewheel: true,
  keyboard: true,
});
// window scroll
window.addEventListener("scroll", function () {
  document.querySelector(".profile-popup").style.display = "none";
  document.querySelector(".add-post-popup").style.display = "none";
  document.querySelector(".theme-customize").style.display = "none";
});

// display profile popup
document.querySelectorAll("#my-profile-picture").forEach((profile) => {
  profile.addEventListener("click", function () {
    document.querySelector(".profile-popup").style.display = "flex";
  });
});

// close profile popup
document.querySelectorAll(".close").forEach((close) => {
  close.addEventListener("click", function () {
    document.querySelector(".profile-popup").style.display = "none";
    document.querySelector(".add-post-popup").style.display = "none";
    document.querySelector(".theme-customize").style.display = "none";
  });
});

// profile picture change
document
  .querySelector("#profile-upload")
  .addEventListener("change", function () {
    document
      .querySelectorAll("#my-profile-picture img")
      .forEach((profileImg) => {
        profileImg.src = URL.createObjectURL(
          document.querySelector("#profile-upload").files[0]
        );
      });
  });

// post popup
document.querySelector("#create-post").addEventListener("click", function () {
  document.querySelector(".add-post-popup").style.display = "flex";
});

document
  .querySelector("#feed-pic-upload")
  .addEventListener("change", function () {
    document.querySelector("#posted-img").src = URL.createObjectURL(
      document.querySelector("#feed-pic-upload").files[0]
    );
  });

// story upload
document.querySelector("#add-story").addEventListener("change", function () {
  document.querySelector("#storyImg").src = URL.createObjectURL(
    document.querySelector("#add-story").files[0]
  );
  document.querySelector(".add-story").style.display = "none";
});

// post input highlight
document.querySelector(".mini-button").addEventListener("click", function () {
  document.querySelector(".input-post").classList.add("boxshadow");
  setTimeout(() => {
    document.querySelector(".input-post").classList.remove("boxshadow");
  }, 699);
});

// double click to open post dialog
document
  .querySelector(".mini-button")
  .addEventListener("dblclick", function () {
    document.querySelector(".add-post-popup").style.display = "flex";
  });

// aside menu-item
let menuItem = document.querySelectorAll(".menu-item");

// remove active class
const removeActive = () => {
  menuItem.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItem.forEach((menu) => {
  menu.addEventListener("click", function () {
    removeActive();
    menu.classList.add("active");
    document.querySelector(".notification-box").style.display = "none";
    document.querySelector("#noti-counter").style.display = "inline-block";
  });
});

// notification-menu
document
  .querySelector("#notification-menu")
  .addEventListener("click", function () {
    document.querySelector(".notification-box").style.display = "block";
    document.querySelector("#noti-counter").style.display = "none";
  });

// message-menu
document.querySelector("#message-menu").addEventListener("click", function () {
  document.querySelector("#msg-counter").style.display = "none";
  document.querySelector(".messages").classList.toggle("boxshadow");
  setTimeout(() => {
    document.querySelector(".messages").classList.remove("boxshadow");
  }, 699);
});

// friend request
let accept = document.querySelectorAll("#accept");
let del = document.querySelectorAll("#delete");
let action = document.querySelectorAll(".action");
let request = document.querySelectorAll(".request");

accept.forEach((accept) => {
  accept.addEventListener("click", function () {
    accept.parentElement.style.display = "none";
    accept.parentElement.parentElement.querySelector(".alert").style.display =
      "inline-block";
  });
});

del.forEach((del) => {
  del.addEventListener("click", function () {
    del.parentElement.parentElement.style.display = "none";
  });
});

// liked button

document
  .querySelectorAll(".interaction-button span:first-child i")
  .forEach((like) => {
    like.addEventListener("click", function () {
      like.classList.toggle("liked");
    });
  });

// theme customization
document.querySelector("#theme").addEventListener("click", function () {
  document.querySelector(".theme-customize").style.display = "flex";
});

// font
let fontSize = document.querySelectorAll(".choose-size span");

let removeActiveSelector = () => {
  fontSize.forEach((size) => {
    size.classList.remove("active");
  });
};
fontSize.forEach((size) => {
  size.addEventListener("click", () => {
    let fontSize;
    removeActiveSelector();
    size.classList.toggle("active");
    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
    }

    // html root font-size change
    document.querySelector("html").style.fontSize = fontSize;
  });
});

// primary color

let colorPallet = document.querySelectorAll(".choose-color span");
let root = document.querySelector(":root");

// remove active color
let removeActiveColor = () => {
  colorPallet.forEach((color) => {
    color.classList.remove("active");
  });
};

colorPallet.forEach((color) => {
  color.addEventListener("click", function () {
    let primaryHue;
    removeActiveColor();
    color.classList.add("active");

    if (color.classList.contains("color-1")) {
      hue = 252;
    } else if (color.classList.contains("color-2")) {
      hue = 52;
    } else if (color.classList.contains("color-3")) {
      hue = 352;
    } else if (color.classList.contains("color-4")) {
      hue = 152;
    } else if (color.classList.contains("color-5")) {
      hue = 202;
    }
    root.style.setProperty("--primary-color-hue", hue);
  });
});

// background color

let bg1 = document.querySelector(".bg-1");
let bg2 = document.querySelector(".bg-2");

// theme background value
let lightColorLightTheme;
let whiteColorLightTheme;
let darkColorLightTheme;

const changeBg = () => {
  root.style.setProperty("--color-dark-light-theme", darkColorLightTheme);
  root.style.setProperty("--color-light-light-theme", lightColorLightTheme);
  root.style.setProperty("--color-white-light-theme", whiteColorLightTheme);
};

bg2.addEventListener("click", function () {
  darkColorLightTheme = "95%";
  lightColorLightTheme = "5%";
  whiteColorLightTheme = "10%";

  // add active class
  bg2.classList.add("active");
  bg1.classList.remove("active");

  changeBg();
});

bg1.addEventListener("click", function () {
  // add active class
  bg1.classList.add("active");
  bg2.classList.remove("active");

  window.location.reload();
});

// a dialog
function alertBox() {
  alert(
    "You can change profile picture, theme, font, and some interactivity in temporarily"
  );
}
setTimeout(alertBox, 10000);
