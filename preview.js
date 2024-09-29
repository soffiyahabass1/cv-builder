document.addEventListener("DOMContentLoaded", function() {
    // Retrieve data from sessionStorage
    const fullName = sessionStorage.getItem('fullName');
    const email = sessionStorage.getItem('email');
    const phone = sessionStorage.getItem('phone');
    const address = sessionStorage.getItem('address');
    const professionalSummary = sessionStorage.getItem('professionalSummary');
    const skills = sessionStorage.getItem('skills');
    const certifications = sessionStorage.getItem('certifications');
    const workExperience = sessionStorage.getItem('workExperience');
    const education = sessionStorage.getItem('education');
    const linkedin = sessionStorage.getItem('linkedin');
    const portfolio = sessionStorage.getItem('portfolio');

    // Populate the preview page with the data
    document.getElementById('preview-name').innerText = fullName || '';
    document.getElementById('preview-email').innerText = email || '';
    document.getElementById('preview-phone').innerText = phone || '';
    document.getElementById('preview-address').innerText = address || '';
    document.getElementById('preview-professionalSummary').innerText = professionalSummary || '';
    document.getElementById('preview-skills').innerText = skills || '';
    document.getElementById('preview-certifications').innerText = certifications || '';
    document.getElementById('preview-workExperience').innerText = workExperience || '';
    document.getElementById('preview-education').innerText = education || '';
    document.getElementById('preview-linkedin').innerText = linkedin || 'Not provided';
    document.getElementById('preview-portfolio').innerText = portfolio || 'Not provided';

    // Download CV as PDF on button click
    document.getElementById('download-pdf').addEventListener('click', function() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Add content to the PDF
        doc.setFontSize(22);
        doc.text(fullName || 'Your Name', 20, 20);
        
        doc.setFontSize(12);
        doc.text(`Email: ${email}`, 20, 30);
        doc.text(`Phone: ${phone}`, 20, 35);
        doc.text(`Address: ${address}`, 20, 40);

        doc.setFontSize(16);
        doc.text('Professional Summary', 20, 50);
        doc.setFontSize(12);
        doc.text(doc.splitTextToSize(professionalSummary || 'Summary text goes here...', 180), 20, 60);

        doc.setFontSize(16);
        doc.text('Skills', 20, 80);
        doc.setFontSize(12);
        doc.text(doc.splitTextToSize(skills || 'Skills go here...', 180), 20, 90);

        doc.setFontSize(16);
        doc.text('Certifications', 20, 110);
        doc.setFontSize(12);
        doc.text(doc.splitTextToSize(certifications || 'Certifications go here...', 180), 20, 120);

        doc.setFontSize(16);
        doc.text('Work Experience', 20, 140);
        doc.setFontSize(12);
        doc.text(doc.splitTextToSize(workExperience || 'Work experience goes here...', 180), 20, 150);

        doc.setFontSize(16);
        doc.text('Education', 20, 170);
        doc.setFontSize(12);
        doc.text(doc.splitTextToSize(education || 'Education goes here...', 180), 20, 180);

        doc.setFontSize(16);
        doc.text('LinkedIn Profile', 20, 200);
        doc.setFontSize(12);
        doc.text(linkedin || 'Not provided', 20, 210);

        doc.setFontSize(16);
        doc.text('Portfolio URL', 20, 230);
        doc.setFontSize(12);
        doc.text(portfolio || 'Not provided', 20, 240);

        // Save the PDF
        doc.save(`${fullName}_CV.pdf`);
    });
});
