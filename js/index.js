"use strict";

/*js実装(ここから下にコードを追加して下さい)*/

//アコーディオンメニュー
const accordionItem = document.querySelectorAll(".accordion-item");
const accordionBtn = document.querySelectorAll(".title");
console.log(accordionBtn);
console.log(accordionItem);

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener("click", function () {
    const content = accordionItem[i];
    if (content.classList.contains("active")) {
      // 閉じたい　高さを0にしたい
      content.style.height = "0px";
      content.classList.remove("active");
    } else {
      //開きたい　高さをコンテンツの高さにしたい
      content.style.height = content.scrollHeight + "px";
      content.classList.add("active");
    }
    console.log(content.style.height);
  });
}

//moreボタン

const moreBtn = document.querySelector(".more");
const moreItem = document.querySelector(".more-item");
const content = accordionItem[2];

console.log(moreBtn);
console.log(moreItem);

moreBtn.addEventListener("click", function () {
  console.log(moreItem.style.height);
  console.log(content.scrollHeight);
  if (moreItem.classList.contains("open")) {
    //閉じたとき、親からmoreitem分引く
    //content.scrollHeight→親(上で作成）
    //moreItem.scrollHeight→子
    content.style.height = content.scrollHeight - moreItem.scrollHeight + "px";
    moreItem.style.height = "0px";

    moreItem.classList.remove("open");
  } else {
    //開くとき、親にmoreitem分を足す
    content.style.height = content.scrollHeight + moreItem.scrollHeight + "px";
    moreItem.style.height = moreItem.scrollHeight + "px";
    moreItem.classList.add("open");
  }
});

// for (let i = 0; i < moreBtn.length; i++) {
// moreBtn[i].addEventListener("click", function () {
//   const morecontent = moreItem[i];
//   console.log(morecontent.style.height);
//   if (morecontent.classList.contains("open")) {
//     morecontent.style.height = "0px";
//     morecontent.classList.remove("open");
//   } else {
//     morecontent.style.height = morecontent.scrollHeight + "px";
//     morecontent.classList.add("open");
//   }
// });
// }

// function adjustHeight() {
//   const favBox = document.querySelectorAll(".favoritebox");
//   favBox.style.height = "auto";
//   const newHeight = element.scrollHeight;
//   element.scrollHeight = newHeight + "px";
//   console.log(favBox);
// }
