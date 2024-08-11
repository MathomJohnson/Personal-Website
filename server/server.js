const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();
const app = express();
const corsOptions = {
    origin: "https://personal-website-client-tau.vercel.app"
};

app.use(cors(corsOptions));

// Filter classes based on current semester
function parseCourses(courses) {
    const now = new Date();
    const current_month = now.getMonth()
    const current_year = now.getFullYear();

    const course_list = []

    for (let i = 0; i < courses.length; i ++) {
        const course = courses[i];

        // Cleanup course name
        const course_name = course.name;
        if (typeof course_name !== 'string') {
            continue;
        }
        course.name = course_name.replace(/\s*\(\d+\)[^\)]*$/, '').trim();
        
        const start_date = new Date(course.start_at);
        const month = start_date.getMonth();
        const year = start_date.getFullYear();

        if (year < current_year) {
            continue;
        }
        else if (current_month > 6 && month > 6) {
            course_list.push(course);
        } 
        else if (current_month <= 6 && month <= 6) {
            course_list.push(course);
        }
    }
    return course_list;
}

app.get("/course-data", (req, res) => {
    canvas_token = process.env.CANVAS_TOKEN;
    url = "https://canvas.instructure.com/api/v1/courses?access_token=" + canvas_token + "&include[]=total_scores"
    axios.get(url)
    .then((response) => {
        console.log("From server: " + JSON.stringify(response.data, null, 2));
        const courses = parseCourses(response.data);
        res.json(courses);
    })
    .catch(function(error) {
        console.log(error);
    }).finally(function() {
        console.log("This always runs!!" + canvas_token);
    })
});

app.listen(8080, () => {
    console.log("Server listening on port 8080")
});