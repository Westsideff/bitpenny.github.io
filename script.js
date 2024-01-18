document.addEventListener("DOMContentLoaded", function () {
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth < 600) {
        document.body.style.fontSize = "14px";
    }

    const names = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Isabella", "Jack", "Liam", "Olivia", "Sophia", "William", "Mia", "James", "Benjamin", "Lucas", "Elijah", "Aiden"];
    const countries = ["USA", "UK", "Canada", "Australia", "Germany", "France", "Japan", "Brazil", "China", "India", "Mexico", "Nigeria", "Russia", "South Korea", "South Africa", "Turkey", "Argentina", "Italy", "Spain", "Egypt"];

    setInterval(() => {
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomCountry = countries[Math.floor(Math.random() * countries.length)];
        const randomInvestment = Math.floor(Math.random() * (100000 - 200) + 200);
        const randomWithdrawal = Math.floor(Math.random() * (300000 - 400) + 400);

        displayUserActivity(randomName, randomCountry, randomInvestment, randomWithdrawal);

        const userLocation = getUserLocation();
        console.log("User Location:", userLocation);
    }, 30000);
});

function displayUserActivity(name, country, investment, withdrawal) {
    const activityContainer = document.getElementById("user-activity");
    const activityMessage = `${name} from ${country} invested $${investment} and withdrew $${withdrawal}.`;

    const newActivity = document.createElement("p");
    newActivity.textContent = activityMessage;
    activityContainer.appendChild(newActivity);
}

function getUserLocation() {
    // Simulated user location
    return {
        country: "United States",
        region: "California",
        city: "San Francisco",
        ipAddress: "192.168.0.1"
    };
}
