// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Search Functionality
function searchContent() {
    let query = document.getElementById('searchBox').value.toLowerCase();
    let sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        let text = section.textContent.toLowerCase();
        if (text.includes(query)) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
}

// Download Resume
function downloadResume() {
    let resumeUrl = "Final Resume-R.pdf";  // Make sure the PDF is in the same folder
    let link = document.createElement('a');
    link.href = resumeUrl;
    link.download = "Rachana_Prabhu_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
