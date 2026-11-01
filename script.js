const careers = [
    {
        name: "AI / ML Engineer",
        interest: "AI",
        skills: ["Python", "AI", "Problem Solving"],
        description: "Develop intelligent systems and machine learning models.",
        roadmap: "Python → Mathematics → Machine Learning → Deep Learning"
    },
    {
        name: "Data Scientist",
        interest: "Data",
        skills: ["Python", "SQL", "Problem Solving"],
        description: "Analyze data and discover useful business insights.",
        roadmap: "Python → SQL → Statistics → Data Visualization"
    },
    {
        name: "Web Developer",
        interest: "Web",
        skills: ["HTML", "Java", "Design"],
        description: "Build attractive and interactive websites.",
        roadmap: "HTML → CSS → JavaScript → React"
    },
    {
        name: "Cybersecurity Analyst",
        interest: "Security",
        skills: ["Python", "Problem Solving", "Java"],
        description: "Protect computer systems and networks from threats.",
        roadmap: "Networking → Linux → Security Basics → Ethical Hacking"
    },
    {
        name: "UI/UX Designer",
        interest: "Design",
        skills: ["Design", "Communication", "HTML"],
        description: "Design user-friendly digital experiences.",
        roadmap: "Design Principles → Figma → Prototyping → UX Research"
    },
    {
        name: "Business Analyst",
        interest: "Business",
        skills: ["SQL", "Communication", "Problem Solving"],
        description: "Use data to improve business decisions.",
        roadmap: "Excel → SQL → Data Analysis → Business Intelligence"
    }
];

document.getElementById("careerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const interest = document.getElementById("interest").value;

    const selectedSkills = Array.from(
        document.querySelectorAll(".options input:checked")
    ).map(item => item.value);

    if (selectedSkills.length === 0) {
        alert("Please select at least one skill!");
        return;
    }

    const recommendations = careers.map(career => {
        let score = career.interest === interest ? 40 : 0;

        career.skills.forEach(skill => {
            if (selectedSkills.includes(skill)) {
                score += 20;
            }
        });

        return {
            ...career,
            score: Math.min(score, 100)
        };
    });

    recommendations.sort((a, b) => b.score - a.score);

    const resultContent = document.getElementById("resultContent");

    resultContent.innerHTML = `
        <h3>Hello ${name}! 👋</h3>
        <p>Here are your recommended career paths:</p>
        <br>
    `;

    recommendations.slice(0, 3).forEach(career => {
        resultContent.innerHTML += `
            <div class="career-card">
                <h3>${career.name}</h3>
                <p><b>Match Score:</b> ${career.score}%</p>
                <p>${career.description}</p>
                <p><b>Learning Roadmap:</b> ${career.roadmap}</p>
            </div>
        `;
    });

    const results = document.getElementById("results");
    results.style.display = "block";

    results.scrollIntoView({ behavior: "smooth" });
});