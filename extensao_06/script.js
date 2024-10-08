document.addEventListener("DOMContentLoaded", function () {
  const noteArea = document.getElementById("note");
  const saveButton = document.getElementById("saveNote");

  chrome.storage.local.get(["note"], function (result) {
    noteArea.value = result.note || "";
  });

  saveButton.addEventListener("click", function () {
    const note = noteArea.value;
    chrome.storage.local.set({ note: note }, function () {
      alert("Nota salva!");
    });
  });
});
s;
