document.addEventListener("DOMContentLoaded", function () {
  const countDisplay = document.getElementById("count");
  const clickButton = document.getElementById("clickMe");

  chrome.storage.local.get(["count"], function (result) {
    let count = result.count || 0;
    countDisplay.textContent = count;
  });

  clickButton.addEventListener("click", function () {
    chrome.storage.local.get(["count"], function (result) {
      let count = result.count || 0;
      count++;
      chrome.storage.local.set({ count: count }, function () {
        countDisplay.textContent = count;
      });
    });
  });
});
