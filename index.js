var typed = new Typed('.text', {
  strings: ['designer', 'Web Developer', 'coder'],
  typeSpeed: 55, // Speed of typing
  backSpeed: 55, // Speed of deleting
  loop: true // Enable continuous loop
});
var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-content");

function openTab(tabName) {
    // Remove "active" class from all tabs and hide all content
    for (let tablink of tablinks) {
        tablink.classList.remove("active");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    // Add "active" class to the clicked tab and its corresponding content
    document.querySelector(`.tab-link[onclick="openTab('${tabName}')"]`).classList.add("active");
    document.getElementById(tabName).classList.add("active-tab");
}
document.getElementById('see-more-btn').addEventListener('click', () => {
    const projectGrid = document.getElementById('project-grid');
  
    // Add new projects dynamically
    const newProjects = [
      { src: 'project4.jpg', alt: 'Project 4' },
      { src: 'project5.jpg', alt: 'Project 5' },
      { src: 'project6.jpg', alt: 'Project 6' }
    ];
  
    newProjects.forEach(project => {
      const projectItem = document.createElement('div');
      projectItem.classList.add('project-item');
      projectItem.innerHTML = `<img src="${project.src}" alt="${project.alt}">`;
      projectGrid.appendChild(projectItem);
    });
  
    // Optional: Disable button after loading more projects
    document.getElementById('see-more-btn').disabled = true;
    document.getElementById('see-more-btn').innerText = "No more projects";
  });
  