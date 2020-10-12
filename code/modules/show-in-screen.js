/**
 * Show in screen functions
 */

function showData (data, element) {
    let el = element
        ? document.querySelector(element)
        : document.querySelector(".show-data")

    el.innerHTML = JSON.stringify(data, null, 2)
}

export { showData }