Array.prototype.forEach.call(document.querySelectorAll('input[type="checkbox"]'), function(itm) {
    itm.checked = true;
});
