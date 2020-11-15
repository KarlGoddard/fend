# Karl Goddard project 4 - evaluate a news article with Natural Language Processing

The goal of this project was to give practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls


## Setting up webpack, sass styles and loaders/plugins

I became stuck on an WEBPACK issue - lost many hours!  Error messages that I couldn't resolve.  Discovered the solution on a stackoverflow blog, where someone advised that there was a conflict with the 'terser' version and webpack version.  This was a Nov 20 conversation too, so pretty recent.  I rolled back 'terser' to the version recommended in the blog and it worked!  Errors gone and I was away ... such a relief, but not factored in issues like this at all.

Logged on to Student Help pages, to check no-one else had encountered the issue - where I envisaged a rare opportunity for me to post a solution - but not needed.

## Layout and Page design

Very basic html, confirming to the user, their input was OK/not OK and analysis was being fetched.  The page lacks responsive settings and perhaps needed a better layout, but the emphasis was on validating input and portraying the returned analysis so it was readable.

## Layout and Page design

Worked fine - page displays without starting the server, but won't fetch an API call.

### Step 5: Using the API

Got the API running really quickly initially (could see results in the console), but stuck on the 'POST' call syntax, nothing would work. The API was successfully making a call, but it was losing the 'url' that had been passed, so kept returning empty/blank analysis.  It took me a long time to identify the issue - in index.js on the server, I'd defined body-parser as .JSON ... I needed to change to .TEXT.  Didn't realise the impact or the oversight when I'd initially defined it.  I too readily, just populated with the 'boilerplate' entries that I thought were uniform throughout all set-ups.  I learned a valuable lesson here.
