# No Nonsense SF6

#### Video Demo: https://www.youtube.com/watch?v=tvVigyU_H2Y

#### Descripton: No Nonsense SF6 is a static site that uses my knowledge of fighting games to create a guide. It's designed so that other players could easily view and digest said information, a way that that's designed to build them up from a very low level of experience, into a much more well rounded player. The information was created all from me, but leverages my almost 10 years of experience playing the genre, on top of dozens of coaching sessions with other players, to create a guide that targets the root casue of most issues people encounter when trying to learn the games.

#### The primary technology used here is react. React is a tool I'm familar with and since this site was strictly front-end work, it ended up being a nice fit. I leveraged react's component based design to create a lot reusable code that made the site pretty pleasant to work with. I also imported a library called "react-router", to route between different pages as this is an SPA that doesn't operate as a traditional site would.

#### Design was a huge consideration of mine throughout the process. Going through with the theme of "No Nonsense", I was trying to make sure that I created a design that was both simple, and in the spirit of the phrase. While I wouldn't call myself a gifted desiger, I believe the UI is very intuitive and readable. I focused my writing on getting points out very quickly without much filler, so that the reader can get value as fast as possible and we can achieve our design goal of being no nonsense.

#### As for the technical side of the styling, I opted to go with vanilla css, as just like react, I'm quite familar with it. My fundamental understanding of css allowed me to get the pages up faster than any framework would, and so each page was styled completely from scratch. The implementation of my css is from a series of different files that all have different goals based on their naming. For example "style" just has a lot of general style rules for the entire app, while header very intuitively styles the header component specifically.

#### Like I mentioned earlier, the project was created in react, and thus is component based in nature. App.jsx is used to house all of the different routes for the application that are served from the "react-router" package. Early on in the project I realized that I was reusing a lot of code for the lessons. To fix this issue I decided to refactor the code and used nested routes that all used the "LessonsLayout" file. This proved extremely useful as I could use "Outlet" inside of lesson layout to display all my content inside of a one "lessons-page" main element. While it took me a little to setup, this really cut down on all of the repetitive main tags that I would have to write, making the code much more maintable in the long run I'd wager.

#### Outside of this, I decided to organize all of my specific components inside of different files related to each of the 3 webpages. Each webpage has a folder that usually contains a page component, along with a series of helper components that I could use to slot content wherever I wanted easily. This idea is seen really easily in the home folder. Home.jsx is the page file, while the other 4 files all exist to be dynamically slotted around the page. While I could just hard code each component in the file itself, the component nature of react makes it easier for me refactor if the need were to ever arise.

### Unique Challenges

#### This section highlights a few quirks that I had to fix because I wanted to use react to host on netlify. I mentioned it earlier but react is a single page appilication, and thus has a few quirks. The first one being that react applications will simply just break on refresh when hosted using netlify. Luckily this was easily fixed by using the \_redirects file in the public directory, which tells netlify that it needs to redirect the file back to index.html on refresh, as it's the only html file that exists in a react app.

#### The other issue that I ran into was my website wouldn't go back to the top of the page whenever we clicked on a different page. It would simply stay where it was at creating a jarring user experience. After some research I realized this could be fixed using the logic in the "ScrollToTop" file. I then import this file into app and have it fire whenever a new a page is loaded by using an empty dependency array on a useEffect.

### Final Thoughts:

#### Thank you for the course, I had a lot of fun doing and I learned a lot. I've decided to take up a computer science degree partly because of this course!
