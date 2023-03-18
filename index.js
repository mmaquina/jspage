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
      image: "https://picsum.photos/id/235/300/150"
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
      image: "https://picsum.photos/id/237/300/150"
    },
    {
      title: "Project name 3",
      description:
        "A cool description",
      details: [
        "First detail",
        "Second point",
        "Third item"
      ],
      image: "https://picsum.photos/id/227/300/150"
    },
    {
      title: "Project name 4",
      description:
        "A cool description",
      details: [
        "First detail",
        "Second point",
        "Third item"
      ],
      image: "https://picsum.photos/id/273/300/150"
    },
    {
      title: "Project name 5",
      description:
        "A cool description",
      details: [
        "First detail",
        "Second point",
        "Third item"
      ],
      image: "https://picsum.photos/id/271/300/150"
    },
    {
      title: "Project name 6",
      description:
        "A cool description",
      details: [
        "First detail",
        "Second point",
        "Third item"
      ],
      image: "https://picsum.photos/id/247/300/150"
    },
    {
      title: "Project name 7",
      description:
        "A cool description",
      details: [
        "First detail",
        "Second point",
        "Third item"
      ],
      image: "https://picsum.photos/id/277/300/150"
    },
    {
      title: "Project name 8",
      description:
        "A cool description",
      details: [
        "First detail",
        "Second point",
        "Third item"
      ],
      image: "https://picsum.photos/id/242/300/150"
    },
    {
      title: "Project name 9",
      description:
        "A cool description",
      details: [
        "First detail",
        "Second point",
        "Third item"
      ],
      image: "https://picsum.photos/id/241/300/150"
    },
    {
      title: "Project name 10",
      description:
        "A cool description",
      details: [
        "First detail",
        "Second point",
        "Third item"
      ],
      image: "https://picsum.photos/id/240/300/150"
    }
];

container = document.getElementById("container");

projects.forEach(project => {
    let card =  `<div id="card">
                <h2>${project.title}</h2>
                <ul>`;

    project.details.forEach(detail => {
        card +=  `<li>${detail}</li>`;
    });

    card += `</ul>
            <img src="${project.image}" alt="pic">
            <p>${project.description}</p>
            </div>`;

    container.innerHTML += card;
});