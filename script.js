
// Check if jsPDF is loaded
window.addEventListener('load', function() {
    if (window.jspdf && window.jspdf.jsPDF) {
        console.log("jsPDF successfully loaded!");
    } else {
        console.error("jsPDF is not loaded!");
        return;
    }

    // Form submission handler
    document.getElementById('cvForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const { jsPDF } = window.jspdf;
        if (!jsPDF) {
            console.error("jsPDF is not available!");
            return;
        }

        // Get user input
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;
        const summary = document.getElementById('summary').value;
        const skills = document.getElementById('skills').value;
        const experience = document.getElementById('experience').value;
        const education = document.getElementById('education').value;

        // Create a new PDF document
        const doc = new jsPDF();

        // Add text to the document
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(22);
        doc.text(fullName, 105, 20, { align: 'center' });

        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.text(`Email: ${email}`, 20, 40);
        doc.text(`Phone: ${phone}`, 20, 50);
        doc.text(`Address: ${address}`, 20, 60);

        doc.setFont('helvetica', 'bold');
        doc.text('Professional Summary', 20, 80);
        doc.setFont('helvetica', 'normal');
        doc.text(doc.splitTextToSize(summary, 170), 20, 90);

        doc.setFont('helvetica', 'bold');
        doc.text('Skills', 20, 110);
        doc.setFont('helvetica', 'normal');
        doc.text(doc.splitTextToSize(skills, 170), 20, 120);

        doc.setFont('helvetica', 'bold');
        doc.text('Work Experience', 20, 140);
        doc.setFont('helvetica', 'normal');
        doc.text(doc.splitTextToSize(experience, 170), 20, 150);

        doc.setFont('helvetica', 'bold');
        doc.text('Education', 20, 170);
        doc.setFont('helvetica', 'normal');
        doc.text(doc.splitTextToSize(education, 170), 20, 180);

        // Save the PDF
        doc.save(`${fullName}_CV.pdf`);

        // Clear the form
        document.getElementById('cvForm').reset();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Retrieve form data from sessionStorage
    const name = sessionStorage.getItem('name');
    const email = sessionStorage.getItem('email');
    const phone = sessionStorage.getItem('phone');
    const address = sessionStorage.getItem('address');
    const summary = sessionStorage.getItem('summary');
    const education = sessionStorage.getItem('education');
    const experience = sessionStorage.getItem('experience');
    const skills = sessionStorage.getItem('skills');

    // Display the data in the preview section
    document.getElementById('preview-name').innerText = name;
    document.getElementById('preview-email').innerText = email;
    document.getElementById('preview-phone').innerText = phone;
    document.getElementById('preview-address').innerText = address;
    document.getElementById('preview-summary').innerText = summary;
    document.getElementById('preview-education').innerText = education;
    document.getElementById('preview-experience').innerText = experience;
    document.getElementById('preview-skills').innerText = skills;

    // Download the CV as PDF when button is clicked
    document.getElementById('download-pdf').addEventListener('click', function() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Add content to the PDF
        doc.setFontSize(22);
        doc.text(name, 20, 20);
        
        doc.setFontSize(12);
        doc.text(`Email: ${email}`, 20, 30);
        doc.text(`Phone: ${phone}`, 20, 35);
        doc.text(`Address: ${address}`, 20, 40);

        doc.setFontSize(16);
        doc.text('Summary', 20, 50);
        doc.setFontSize(12);
        doc.text(doc.splitTextToSize(summary, 180), 20, 60);

        doc.setFontSize(16);
        doc.text('Education', 20, 80);
        doc.setFontSize(12);
        doc.text(doc.splitTextToSize(education, 180), 20, 90);

        doc.setFontSize(16);
        doc.text('Experience', 20, 110);
        doc.setFontSize(12);
        doc.text(doc.splitTextToSize(experience, 180), 20, 120);

        doc.setFontSize(16);
        doc.text('Skills', 20, 140);
        doc.setFontSize(12);
        doc.text(doc.splitTextToSize(skills, 180), 20, 150);

        // Save the PDF
        doc.save(`${name}_CV.pdf`);
    });
});



document.getElementById('cv-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Retrieve form data
    const formData = new FormData(this);

    // Store data in sessionStorage
    sessionStorage.setItem('name', formData.get('fullName'));
    sessionStorage.setItem('email', formData.get('email'));
    sessionStorage.setItem('phone', formData.get('phone'));
    sessionStorage.setItem('address', formData.get('address'));
    sessionStorage.setItem('summary', formData.get('summary'));
    sessionStorage.setItem('education', formData.get('education'));
    sessionStorage.setItem('experience', formData.get('experience'));
    sessionStorage.setItem('skills', formData.get('skills'));

    // Redirect to preview page
    window.location.href = 'preview-cv.html';
});

