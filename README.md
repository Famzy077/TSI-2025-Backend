#Article: My Experience Working on a NoSQL Social Media App Schema Assignment
-In this project, I was tasked with analyzing the requirements for a social media app, designing a NoSQL schema to support key features, and pushing my work to GitHub. This process provided valuable insights into both NoSQL databases and how they compare to SQL databases.

-Understanding SQL vs NoSQL Databases
-The first step was to grasp the difference between SQL and NoSQL databases. SQL databases are relational, structured around tables and predefined schemas, while NoSQL databases offer flexibility in storing unstructured or semi-structured data. Given the dynamic nature of a social media app, NoSQL’s flexibility made it ideal for managing unpredictable data structures like media posts, comments, and likes.

-Requirement Analysis and Identifying Key Entities <hr>
-The user story provided gave me a clear idea of the main features required for the app: users creating profiles, posting content, following others, interacting with posts (liking, commenting, and sharing), and viewing a feed of posts. I identified key entities such as:

-Users: Representing individuals with profiles.
-Posts: Representing text, images, or videos created by users.
-Followers: Representing relationships between users.
-Likes and Comments: Representing interactions with posts.
-Designing the NoSQL Schema
-The schema was designed to model these entities using collections in a NoSQL database like MongoDB. The key challenge was ensuring the relationships (e.g., followers, likes, comments) could be efficiently managed without the rigid structure of SQL. I made use of document-based structures, embedding some data (like post likes) within other documents (posts) and referencing others (like user profiles) to maintain flexibility.

-For instance, a User document contained details like username, email, and followers, while a Post document included content, media links, and arrays of comments and likes. By organizing the schema this way, I could ensure that the app would scale and handle high levels of traffic.

-Repository Creation and API Endpoints
-After finalizing the schema, I created a GitHub repository to store the designs. I also added potential API endpoints to the README.md file, covering essential actions like creating posts, following users, liking posts, and commenting. These API endpoints would drive the app’s main functionality and allow users to interact with the system.

-Reflecting on the Experience
-This project taught me a lot about designing flexible and scalable data structures, especially in a NoSQL environment. Unlike SQL, NoSQL offered me more freedom to adapt the schema as requirements changed, which is essential for a dynamic platform like social media. However, this also meant I had to think more deeply about how to manage relationships between data.

-In conclusion, 
-working on this assignment was both educational and rewarding. It solidified my understanding of NoSQL databases and equipped me with the skills to design scalable, efficient schemas for real-world applications.

Conclusion <hr>
-You can view my work on GitHub here: [GitHub repo](https://github.com/Famzy077/TSI-2025-Backend/tree/main/Task-Two). The repository contains the schema designs and API endpoints, reflecting the architecture of the social media app.

