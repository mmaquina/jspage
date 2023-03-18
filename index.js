const projects = [
    {
      title: "Project name",
      description:
        "A cool description",
      details: [
        "First detail",
        "Second point",
        "Third item"
      ],
      image: "image_url"
    },
    {
      title: "Project name 2",
      description:
        "A cool description",
      details: [
        "First detail",
        "Second point",
        "Third item"
      ],
      image: "image_url"
    }
];

container = document.getElementById("container");

projects.forEach(project => {
    container.innerHTML +=  `<h2>${project.title}</h2>`;
    container.innerHTML += `<ul>`;
    project.details.forEach(detail => {
        container.innerHTML +=  `<li>${detail}</li>`;
    });
    container.innerHTML += `</ul>`;
});