
$(document).ready(function() {
    $('#nav-icon3').click(function(){
        // Växla 'open'-klass på ikonen
        $(this).toggleClass('open');

        // Växla synlighet av navigationsmenyn och mediaikoner
        $('.nav-link-container, .media-icons').toggleClass('visible');
    });
});

// Ladda JSON-data
fetch('information.json')
    .then(response => response.json())
    .then(data => {
        // Visa "About Me"
        document.getElementById('about').textContent = data.about.description;

        // Visa arbetslivserfarenhet
        const workExperienceContainer = document.getElementById('workExperience');
        data.workExperience.forEach(job => {
            const jobDiv = document.createElement('div');
            jobDiv.innerHTML = `
                <h3>${job.title}</h3>
                <p>Plats: ${job.location.address}, ${job.location.city}</p>
                <p>Anställningstyp: ${job.employmentType}</p>
                <p>Period: ${job.dates.start} - ${job.dates.end}</p>
            `;
            workExperienceContainer.appendChild(jobDiv);
        });

        // Visa utbildning
        const educationContainer = document.getElementById('education');
        data.education.forEach(edu => {
            const eduDiv = document.createElement('div');
            eduDiv.innerHTML = `
                <h3>${edu.program}</h3>
                <p>Plats: ${edu.location.address}, ${edu.location.city}</p>
            `;
            educationContainer.appendChild(eduDiv);
        });
    })

  
    