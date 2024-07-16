function selectUserType(userType) {
    document.getElementById('user-type').value = userType;
    document.getElementById('user-type-label').innerText = userType === 'customer' ? 'Customer' : 'Service Provider';
    document.getElementById('registration-form-container').classList.remove('hidden');
    document.getElementById('user-type-selection').classList.add('hidden');
    if (userType === 'provider') {
        document.querySelector('.provider-only').classList.remove('hidden');
    }
}

function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.add('hidden');
    });
    document.getElementById(tabName).classList.remove('hidden');

    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(tabName + '-tab').classList.add('active');
}

function registerUser() {
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const userType = document.getElementById('user-type').value;
    const category = document.getElementById('category').value;

    document.getElementById('profile-name').innerText = name;
    document.getElementById('profile-mobile').innerText = mobile;
    if (userType === 'provider') {
        document.getElementById('profile-category').innerText = category;
    }

    document.getElementById('registration-form-container').classList.add('hidden');
    document.getElementById('login-container').classList.remove('hidden');
    showTab('profile');
}