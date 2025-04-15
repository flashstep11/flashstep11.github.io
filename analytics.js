
function getElementType(element) {
    if (element.tagName === "IMG") return "image";
    if (element.tagName === "A" && element.href.endsWith(".pdf")) return "CV (PDF Link)";
    if (element.classList.contains("sub-nav")) return "drop-down";
    if (element.tagName === "P") return "text";
    if (element.tagName === "H1" || element.tagName === "H2" || element.tagName === "H3") return "heading";
    return element.tagName.toLowerCase(); 
  }
  
  function logEvent(eventType, element) {
    const timestamp = new Date().toLocaleString();
    const objectType = getElementType(element);
    console.log(`${timestamp} , ${eventType} , ${objectType}`);
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    const viewedElements = document.querySelectorAll("section, .my-image img, a[href$='.pdf']");
    viewedElements.forEach(el => logEvent("view", el));
  });
  
  document.addEventListener("click", (e) => {
    logEvent("click", e.target);
  });
  