// Source - https://stackoverflow.com/a/15318321
// Posted by Ozan, Modified by Ignaz Kevenaar
// Retrieved 2026-06-22, License - CC BY-SA 3.0

// This example assumes execution from the parent of the the iframe

export default (iframe) => {
  const bubble = (type, e) => {
    var boundingClientRect = iframe.getBoundingClientRect();
    var evt = new PointerEvent(type, {
      bubbles: true,
      cancelable: false,
      view: window,
      detail: e.detail,
      screenX: e.screenX,
      screenY: e.screenY,
      clientX: e.clientX + boundingClientRect.left,
      clientY: e.clientY + boundingClientRect.top,
      ctrlKey: e.ctrlKey,
      altKey: e.altKey,
      shiftKey: e.shiftKey,
      metaKey: e.metaKey,
      button: e.button,
      pointerId: e.pointerId,
      pointerType: e.pointerType,
      pressure: e.pressure,
      isPrimary: e.isPrimary,
    });
    iframe.dispatchEvent(evt);
  };

  var existingOnPointerDown = iframe.contentWindow.onpointerdown;
  var existingOnPointerMove = iframe.contentWindow.onpointermove;
  var existingOnPointerUp = iframe.contentWindow.onpointerup;

  iframe.contentWindow.onpointerdown = (e) => {
    if (existingOnPointerDown) existingOnPointerDown(e);
    bubble("pointerdown", e);
  };

  iframe.contentWindow.onpointermove = (e) => {
    if (existingOnPointerMove) existingOnPointerMove(e);
    bubble("pointermove", e);
  };

  iframe.contentWindow.onpointerup = (e) => {
    if (existingOnPointerUp) existingOnPointerUp(e);
    bubble("pointerup", e);
  };
};
