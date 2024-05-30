let exp_years = new Date()
document.getElementById('years').innerHTML = exp_years.getFullYear() - 1999

document.getElementById('currentyear').innerHTML = exp_years.getFullYear()

document.querySelector('h2').style.color = 'Black'
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light-theme';

    document.body.className = currentTheme;

    toggleButton.addEventListener('click', () => {
        document.querySelector('h2').style.color = 'Black'
        const newTheme = document.body.classList.toggle('dark-theme') ? 'dark-theme' : 'light-theme';
        document.body.className = newTheme;
        localStorage.setItem('theme', newTheme);
    });
        
});
