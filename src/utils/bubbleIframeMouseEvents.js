// Source - https://stackoverflow.com/a/15318321
// Posted by Ozan, Modified by Ignaz Kevenaar
// Retrieved 2026-06-22, License - CC BY-SA 3.0

// This example assumes execution from the parent of the the iframe

const bubbleIframeMouseEvents = (iframe) => {
  const bubble = (type, e) => {
    var boundingClientRect = iframe.getBoundingClientRect();
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent(
      type,
      true, // bubbles
      false, // not cancelable
      window,
      e.detail,
      e.screenX,
      e.screenY,
      e.clientX + boundingClientRect.left,
      e.clientY + boundingClientRect.top,
      e.ctrlKey,
      e.altKey,
      e.shiftKey,
      e.metaKey,
      e.button,
      null, // no related element
    );
    iframe.dispatchEvent(evt);
  };

  var existingOnMouseMove = iframe.contentWindow.onmousemove;
  var existingOnMouseDown = iframe.contentWindow.onmousedown;

  iframe.contentWindow.onmousemove = (e) => {
    if (existingOnMouseMove) existingOnMouseMove(e);
    bubble("mousemove", e);
  };

  iframe.contentWindow.onmousedown = (e) => {
    if (existingOnMouseDown) existingOnMouseDown(e);
    bubble("mousedown", e);
  };
};

export default bubbleIframeMouseEvents;
