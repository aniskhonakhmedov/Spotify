let switch_button_checkbox = document.querySelector('.switch-button-checkbox2')

switch_button_checkbox.onclick = () => {
    if (switch_button_checkbox.checked) {
        localStorage.status = 'Premium User'
        document.querySelector('.header-user-status').innerHTML = localStorage.status
        document.querySelector('.wrapper').classList.add('active')
        document.querySelector('.aside').classList.add('active')
        // document.querySelector('.aside')
    } else {
        localStorage.status = 'Free User'
        document.querySelector('.wrapper').classList.remove('active')
        document.querySelector('.aside').classList.remove('active')
        document.querySelector('.header-user-status').innerHTML = localStorage.status
    }
}

if (switch_button_checkbox.checked) {
    localStorage.status = 'Premium User'
    document.querySelector('.header-user-status').innerHTML = localStorage.status
    document.querySelector('.wrapper').classList.add('active')
    document.querySelector('.aside').classList.add('active')
    // document.querySelector('.aside'
    switch_button_checkbox.checked = true
} else {
    switch_button_checkbox.checked = false
    localStorage.status = 'Free User'
    document.querySelector('.wrapper').classList.remove('active')
    document.querySelector('.aside').classList.remove('active')
    document.querySelector('.header-user-status').innerHTML = localStorage.status
}